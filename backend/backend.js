const nodemailer = require('nodemailer');

function extractorHandler(formData) {
    const n = formData.length;

    //sender email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.APP_PASS,
        },
    });

    let emails = [];
    let names = [];
    for(let i=0; i<n; i++) {
        emails.push(formData[i].email.toString());
        names.push(formData[i].name.toString());
    }

    //extraction logic
    for(let i=0; i<n; i++) {
        let r = Math.floor(Math.random() * names.length);
        while (r===i){
            r = Math.floor(Math.random() * names.length);
        }
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: emails[i],
            subject: 'Secret Santa extraction',
            text: 'Send the gift to '+ names[r]
        };
        emails.shift();
        names.splice(r, 1);


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