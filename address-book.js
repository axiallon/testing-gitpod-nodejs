
class AddressBook {

    findContactsInCity(cityToMatch) {
        return this.getContacts()
            .filter(contact => contact.city.toLowerCase() === cityToMatch.toLowerCase());
    }

    getContacts() {
        return [
            { firstName: "John", lastName: "Doe", streetName: "Main St.", city: "London" },
            { firstName: "Billy", lastName: "Bob", streetName: "Fourth Ave.", country: "United States" },
            { firstName: "Sam", lastName: "Smith", streetName: "Baker Blvd.", city: "Sacramento" },
        ];
    }

}

module.exports = AddressBook;
