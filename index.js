const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

listContacts();
getContactById(1);
removeContact(2);
addContact("Cyrus Jackson", "nibh@semsempererat.com", "(501) 472-5218");
