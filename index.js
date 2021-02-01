let cron = require('node-cron');
let nodemailer = require('nodemailer');


let mailOptions = {
      from: 'pandey.priyanka3898@gmail.com',
      to: 'tiwari.shilpi0@gmail.com',
      subject: 'Email from Node-App: A Test Message!',
      text: 'Some content to send'
 };


let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pandey.priyanka3898@gmail.com',
        pass: 'Check@123'
      }
  });

  cron.schedule('*/10 * * * *', () => {
      console.log('running a task every ten minutes');
    

transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
});
