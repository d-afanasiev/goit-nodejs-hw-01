const path = require("path");
const fs = require("fs");

const contactsPath = path.resolve("");

function getContactById(contactId) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find(
      (contact) => contact.id === parseInt(contactId)
    );

    if (!contact) {
      console.log("Contact with such ID not found!");
    } else {
      console.table(contact);
    }
  });
}

module.exports = getContactById;
