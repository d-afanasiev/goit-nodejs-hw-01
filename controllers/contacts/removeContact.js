const path = require("path");
const fs = require("fs");

const contactsPath = path.resolve("");

function removeContact(contactId) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.filter(
      (contact) => contact.id !== parseInt(contactId)
    );
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

module.exports = removeContact;
