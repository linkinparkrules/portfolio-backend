const { insertContact } = require("../database/contact");

const submitContact = async (name, email, message) => {
  const submit = await insertContact({
    name: name,
    email: email,
    message: message
  });
  return submit;
};

module.exports = {submitContact};