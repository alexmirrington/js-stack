import mongoose, { Schema, Document } from 'mongoose';

const SongSchema: Schema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true }
});

export interface SongDocument extends Document {
    name: string;
    artist: string;
}

export default mongoose.model<SongDocument>('Song', SongSchema);