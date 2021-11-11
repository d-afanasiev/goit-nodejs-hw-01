const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve("");

function addContact(name, email, phone) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const currentContact = { id: uuidv4(), name, email, phone };

    const contact = [...contacts, currentContact];
    fs.writeFile(
      `${contactsPath}/db/contacts.json`,
      JSON.stringify(contact),
      (err) => {
        if (err) throw err;
      }
    );
    console.table(contact);
  });
}

module.exports = addContact;
