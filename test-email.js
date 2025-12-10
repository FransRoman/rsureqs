const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, 
  auth: {
    // 1. USE THE LOGIN FROM YOUR IMAGE HERE
    user: "9d82a0001@smtp-brevo.com", 
    
    // 2. USE THE KEY YOU PROVIDED EARLIER HERE
    pass: "bskH60jZVU65uZm",         
  },
});

const mailOptions = {
  // 3. IMPORTANT: This must still be your VERIFIED email (your Gmail)
  // The 'auth.user' above logs you in, but this 'from' field says who sent it.
  from: '"My App" <YOUR_REAL_GMAIL_ADDRESS>', 
  
  to: "recipient@example.com", // Valid email to test with
  subject: "Test Email from Brevo",
  text: "If you receive this, the SMTP configuration is working!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error occurred:", error);
  }
  console.log("Message sent successfully!");
  console.log("Message ID:", info.messageId);
});