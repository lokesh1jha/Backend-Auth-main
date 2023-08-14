import { MailDataRequired } from '@sendgrid/mail';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sendMessage = async (message: MailDataRequired) => {
  try {
    // TODO
    await sgMail.send(message);

    return Promise.resolve("Send message success");
  } catch (err) {
    // TODO
    console.error(err);
    return Promise.reject(err);
  }
};
