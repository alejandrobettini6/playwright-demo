import { faker } from '@faker-js/faker';

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomUserData(){
    let countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zeland', 'Singapore']
    let fullName = faker.person.fullName();
    let email = faker.internet.email();
    let password = faker.internet.password();
    let day = getRandomInt(1, 28).toString();
    let month = getRandomInt(1, 12).toString();
    let year = getRandomInt(1950, 2000).toString();
    let address = faker.location.streetAddress();
    let company = faker.company.name();
    let country = countries[getRandomInt(0, countries.length - 1)];
    let state = faker.location.state();
    let city = faker.location.city();
    let zipcode = faker.location.zipCode();
    let mobileNumber = faker.phone.number({style: 'national'});
    return {fullName, email, password, day, month, year, address, company, country, state, city, zipcode, mobileNumber}
}

module.exports = {
    getRandomInt,
    generateRandomUserData
}