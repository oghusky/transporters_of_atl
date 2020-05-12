const { emailHelper } = require("../utils/helpers/emailHelper"),
  nodemailer = require("nodemailer");


exports.getLanding = (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    if (err) console.log(err.code);
  }
}

exports.postLanding = (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const output = `
    <p>Email Details</p>
    <p>Name: ${lastName}, ${firstName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>
    `;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    });
    let mailOptions = {
      from: `${email}`,
      to: "atlcourierandtrans@gmail.com",
      subject: `${firstName} ${lastName} wants to be contacted`,
      html: output
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      console.log(info);
      console.log(nodemailer.getTestMessageUrl(info));
      res.render("index")
    })
  } catch (err) {
    if (err) console.log(err.code);
  }
}