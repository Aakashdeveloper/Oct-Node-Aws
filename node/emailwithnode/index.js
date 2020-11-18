const sgMail = require('@sendgrid/mail')
sgMail.setApiKey()

const msg = {
  to: 'ahanda206@hotmail.com', // Change to your recipient
  from: 'ahanda206@hotmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
