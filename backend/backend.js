const nodemailer = require('nodemailer');

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

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

    // move the data inside single arrays
    let emails = [];
    let toshuffleNames = [];

    for(let i=0; i<n; i++) {
        emails.push(formData[i].email.toString());
        toshuffleNames.push(formData[i].name.toString());
    }

    const originalNames = [...toshuffleNames];

    //extraction logic
    // eslint-disable-next-line no-loop-func
    while (originalNames.some((element, index) => toshuffleNames[index] === element)) {
        toshuffleNames = shuffle(toshuffleNames);
    }


    //send logic
    for(let i=0; i<n; i++) {
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: emails[i],
            subject: 'Secret Santa extraction',
            text: 'Send the gift to '+ toshuffleNames[i]
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