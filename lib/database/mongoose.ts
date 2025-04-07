import mongoose, { Mongoose } from 'mongoose';

const MONGOOSE_URL = process.env.MONGOOSE_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

 