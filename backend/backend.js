const nodemailer = require('nodemailer');

function extractorHandler(formData) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.APP_PASS,
        },
    });

    for(let i=0; i<formData.length; i++) {
        const mailOptions = {
            from: 'cubeclaus@gmail.com',
            to: formData[i].email.toString(),
            subject: 'Secret Santa extraction',
            text: 'Send the gift to '+ formData[i].name.toString()
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    return 0;
}

module.exports = { extractorHandler };