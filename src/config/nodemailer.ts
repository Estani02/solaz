import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testsolaz@gmail.com',
    pass: 'wvdtnhmvdacbfple',
  },
})

export const mailOptions = {
  from: 'testsolaz@gmail.com',
  to: 'testsolaz@gmail.com',
}
