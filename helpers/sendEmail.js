const brevo = require("@getbrevo/brevo");

const { EMAIL, BREVO_KEY } = process.env;

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.authentications.apiKey.apiKey = BREVO_KEY;

const sendEmail = async (data) => {
  const email = { ...data, sender: { email: EMAIL } };
  await apiInstance.sendTransacEmail(email);
  return true;
};

module.exports = sendEmail;
