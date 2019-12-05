import mongoose, { Schema, Document } from 'mongoose';

const SongSchema: Schema = new Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String }
});

export interface SongDocument extends Document {
    name: string;
    artist: string;
    genre: string;
}

const Song = mongoose.model<SongDocument>('Song', SongSchema);
export default Song;