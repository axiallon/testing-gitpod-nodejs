const assert = require('assert');
const AddressBook = require('../address-book');

describe('AddressBook', function () {
    describe('findContactsInCity()', function () {
        it('should find contacts in a city', function () {
            let addressBook = new AddressBook();
            let contacts = addressBook.findContactsInCity("London");
            assert.strictEqual(contacts.length, 1);
            let contact = contacts[0];
            assert.strictEqual(contact.firstName, "John");
        });
    })
});
