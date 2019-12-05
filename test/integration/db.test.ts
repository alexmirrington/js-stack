import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;
const opts = { useNewUrlParser: true, useUnifiedTopology: true };

const Song = mongoose.model('Song', new mongoose.Schema({
    name: String,
    artist: String
}));

beforeEach(async (done) => {
    // Set up memory database and connect mongoose
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    await mongoose.connect(mongoUri, opts, (err) => {
        if (err) console.error(err);
    });
    done();
});

afterEach(async (done) => {
    // Set up Mongo memory database and connect mongoose
    await mongoose.disconnect();
    await mongoServer.stop();
    done();
});

describe('Database Song Collection, Single Document', () => {
    it('should contain a song after creatnig one with Mongoose', async () => {
        const song = new Song({name: 'Self Destruct', artist: 'Pegboard Nerds'});
        await song.save();
        const count = await Song.countDocuments({});
        expect(count).toEqual(1);
    });
});

describe('Database Song Collection, Empty', () => {
    it('should not contain any songs upon initialisation', async () => {
        const count = await Song.countDocuments({});
        expect(count).toEqual(0);
    });
});
