import dbClient from "./utils/db";

const data = {
    'name': 'John Doe',
    'email': 'john@gmail.com',
    'telephone': '+1234567890',
    'password': 'password123'
}

dbClient.newUser(data)