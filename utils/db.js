import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';


dotenv.config();

const { MONGO_URI, MONGO_DB } = process.env;

class DBClient {
    constructor() {
        MongoClient.connect(MONGO_URI, { 
            useUnifiedTopology: true 
        }, 
        (err, client) => {
            if (err) {
                console.error(err);
                this.db = false;
            } else {
                this.db = client.db(MONGO_DB);
                this.usersCollection = this.db.collection('users');
               
            }
        });
    }
    
    async getUser(data) {
        
        const result = await this.usersCollection.findOne(data);
        if (result) {
            return result;
        }
        return false;
    }
    async findUsers(){
        const result = await this.usersCollection.find({}, {sort: {updateAt: -1}}).toArray()
        return result
    }

    async newUser(data) {
        try {
            const currentDate = new Date();
            data.createAt = currentDate;
            data.updateAt = currentDate;
            await this.usersCollection.createIndex({ email: 1 }, { unique: true });
            await this.usersCollection.createIndex({ telephone: 1 }, { unique: true });
            await this.usersCollection.insertOne(data);
        } catch (error) {
            throw error; 
        }
    }
}

const dbClient = new DBClient();
export default dbClient;