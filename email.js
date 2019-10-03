const myEmail = 'oklein.website@gmail.com';
const nodemailer = require('nodemailer');
const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myEmail,
        pass: 'aviad555'
    }
});

const mailOptions = {
    from: myEmail,
    to: myEmail,
    subject: 'אישור רישום לאתר',
    html: `<h1> ברוכים הבאים לאתר ${myEmail}</h1><p>הרישום בוצע בהצלחה</p><p>קניה מהנה</p>`
    // text: 'תודה על רכישתך באתר בעלות  57,765ש"ח'
};

mail.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
