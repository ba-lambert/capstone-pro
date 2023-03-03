const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')
const client = require('../config/db')
const Email = require('../models/emailModel.js')
dotenv.config()

const sendEmail = async (req,res) =>{
   try {
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY)
    const user = await  client.query(`Select * from users`)
    const rows = user.rows
    const newEmail = rows.map((user) => user.email)
    const message = {
        to:newEmail,
        from:'japhetrwamugema123@gmail.com',
        subject:'email sens and save',
        text:'sendgrid email',
        html:'email from kyles'
    }
    const msg = await sgMail.sendMultiple(message)
    const email =  await Email.create({
        to:newEmail,
        from:message.from,
        subject:message.subject,
        text:message.text,
        html:message.html
    })
if (email && msg) {
    res.send('successfully sent email and stored ')
}

   } catch (error) {
    res.send({error: error});
   }
    

}
module.exports= sendEmail
