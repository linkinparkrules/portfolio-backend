const { db } = require("./");

const insertContact = async (info) => {
  return await db.contact.insertOne(info);
  // return info;
}

module.exports = {insertContact};