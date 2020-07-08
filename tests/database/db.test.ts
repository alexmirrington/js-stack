import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import Song, { SongDocument } from '../../src/models/song';


let mongoServer: MongoMemoryServer;
const opts = { useNewUrlParser: true, useUnifiedTopology: true };

describe('Database Song Collection', () => {

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

    it('should contain a song after creating one with Mongoose', async () => {

        const data = {
            name: 'Self Destruct',
            artist: 'Pegboard Nerds'
        }
        const song: SongDocument = new Song(data);
        await song.save();
        const count = await Song.countDocuments(data);
        expect(count).toEqual(1);
    });

    it('should not contain any songs upon initialisation', async () => {
        const count = await Song.countDocuments({});
        expect(count).toEqual(0);
    });
});
