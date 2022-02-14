const nodemailer = require("nodemailer");

let adminEmail = process.env.EMAIL_APP;
let adminPassword = process.env.EMAIL_APP_PASSWORD;
let mailHost = process.env.EMAIL_HOST;
let mailPort = process.env.EMAIL_PORT || 587;

let sendMail = (to, subject, htmlContent) => {
  let transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // use SSL - TLS
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent,
  };

  return transporter.sendMail(options); //this return default a promise
};

module.exports = { sendMail };
