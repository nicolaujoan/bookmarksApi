import nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'joannicolau23@gmail.com', // gmail user
      pass: 'atmisbeklpswvaoyz', // gmail application password
    },
  });

// chivatillo -> método verify (una promesa)

transporter.verify().then( () => {
    console.log('Ready to send emails');
})
