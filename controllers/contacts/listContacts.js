const path = require("path");
const fs = require("fs");

const contactsPath = path.resolve("");

function listContacts() {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }
    const contact = JSON.parse(data);
    console.table(contact);
  });
}

module.exports = listContacts;
