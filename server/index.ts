import express from "express";
import { createServer } from "http";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        service,
        message,
      } = (req.body || {}) as {
        name?: string;
        email?: string;
        phone?: string;
        service?: string;
        message?: string;
      };

      if (!name || !email || !message) {
        res.status(400).json({ success: false, error: "Missing required fields" });
        return;
      }

      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = Number(process.env.SMTP_PORT || 587);
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";

      if (!smtpHost || !smtpUser || !smtpPass) {
        res.status(500).json({ success: false, error: "Email service not configured" });
        return;
      }

      const to = process.env.CONTACT_TO || "kirafilm@outlook.com";
      const from = process.env.SMTP_FROM || smtpUser;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const subject = `[KiraFilm Enquiry] ${service || "General Enquiry"}`;
      const text =
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || ""}\n` +
        `Service: ${service || ""}\n\n` +
        `Message:\n${message}`;

      await transporter.sendMail({
        to,
        from,
        replyTo: email,
        subject,
        text,
      });

      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, error: "Failed to send" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
