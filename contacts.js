const path = require("path");
const fs = require("fs");

const contactsPath = path.resolve("");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }
    console.log(data);
  });
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

listContacts();

console.log(contactsPath);
