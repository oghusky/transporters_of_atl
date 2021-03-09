const nodemailer = require("nodemailer"),
  email_psd = String(process.env.EMAIL_PWD),
  email_name = String(process.env.EMAIL_NAME);

exports.getLanding = (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    if (err) console.log(err.code);
  }
}

// exports.postLanding = (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;
//   const output = `
//     <p>Email Details</p>
//     <p>Name: ${lastName}, ${firstName}</p>
//     <p>Email: ${email}</p>
//     <p>Phone: ${phone}</p>
//     <p>Message: ${message}</p>
//     `;
//   // create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     // host: "smtp.gmail.com",
//     secure: false,
//     service: 'gmail',
//     auth: {
//       type: "login",
//       user: "dumdummyemail0511@gmail.com",
//       pass: "password$1234"
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });
//   // setup email data with unicode symbols
//   const mailOptions = {
//     from: 'randomemail@email.com',
//     to: 'atlcourierandtrans@gmail.com', // list of receivers
//     subject: `${firstName} ${lastName} wants to be contacted`, // Subject line
//     html: output // html body
//   };
//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//       res.redirect("/");
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.redirect("/")
//     }
//   });

// }