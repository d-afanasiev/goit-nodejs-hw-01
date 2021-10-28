const path = require("path");
const fs = require("fs");

const contactsPath = path.resolve("");

function listContacts() {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }
    const contact = JSON.parse(data);
    console.log("listContacts: ", contact);
  });
}

function getContactById(contactId) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find(
      (contact) => contact.id === parseInt(contactId)
    );
    console.log("getContactById: ", contact);
  });
}

function removeContact(contactId) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.filter(
      (contact) => contact.id !== parseInt(contactId)
    );
    console.log("removeContact: ", contact);
  });
}

function addContact(name, email, phone) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const currentContact = { id: contacts.length + 1, name, email, phone };

    const contact = [...contacts, currentContact];
    console.log("addContact: ", contact);
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

console.log(contactsPath);
