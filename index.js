const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());

// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: "",
//       pass: process.env.MAIL_PASSWORD,
//       clientId: process.env.OAUTH_CLIENTID,
//       clientSecret: process.env.OAUTH_CLIENT_SECRET,
//       refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     },
//   });

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "onlinehub79@gmail.com",
    pass: "ONLINEhub$#",
    clientId: "865260303706-d24vfu02tkup71bupf4kpfnjrhb8pv27.apps.googleusercontent.com",
    clientSecret: "n5Y0J4gLD8Tl_qeZQW4xt5Mf",
    refreshToken: "1//04Pd1ZzLpyXnWCgYIARAAGAQSNwF-L9IreVDIH6ym-SZDbAOCimqhD0Tehrqei4crhSmvDUMvD9G-bL1CxuPzDqUnhXm0lFBwRlM",
  },
});

const message = {
  from: "onlinehub79@gmail.com", // Sender address
  to: "yawahangkoyu@gmail.com", // List of recipients
  subject: "Test Node Mailer", // Subject line
  // text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
  html: "<h1>This is test Node Mailer mail from Yawahang!</h1>",
  //   attachments: [
  //     { // Use a URL as an attachment
  //       filename: 'your-testla.png',
  //       path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
  //   }
  // ]
};

transporter.sendMail(message, function (err, info) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
    console.log(info);
  }
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
