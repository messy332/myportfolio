require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: "*" }));
app.use(express.json());

// ── SQLite setup ────────────────────────────────────────────────────────────
const db = new Database(path.join(__dirname, "messages.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT NOT NULL,
    email     TEXT NOT NULL,
    subject   TEXT NOT NULL,
    message   TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

const insertMsg = db.prepare(
  "INSERT INTO messages (name, email, subject, message) VALUES (@name, @email, @subject, @message)"
);

// ── Nodemailer setup ─────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ── POST /api/contact ────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Save to DB
  try {
    insertMsg.run({ name, email, subject, message });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ error: "Failed to save message." });
  }

  // Send email
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    console.error("Email error:", err);
    // Message already saved to DB, just warn
    return res.status(207).json({ warning: "Saved but email failed to send." });
  }

  res.json({ success: true });
});

// ── GET /api/messages (view all stored messages) ─────────────────────────────
app.get("/api/messages", (req, res) => {
  const rows = db.prepare("SELECT * FROM messages ORDER BY created_at DESC").all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
