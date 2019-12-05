import { Request, Response } from 'express';

import Song from '../../models/song';


export const getAll = (req: Request, res: Response): void => {
    Song.find({}).lean().then(songs => {
        res.json({ songs });
    }).catch(err => {
        res.json({ error: err.message });
    });
};

export const getByID = (req: Request, res: Response): void => {
    Song.find({_id: req.params.id}).lean().then(songs => {
        res.json({ songs });
    }).catch(err => {
        res.json({ error: err.message });
    });
};

export function create(req: Request, res: Response) {
    const body = req.body;
    const song = new Song(body);

    song.validate().then(() => {
        song.save().then(() => {
            res.status(201).json({status: 'Created'});
        }).catch(err => {
            res.status(400).json({
                status: 'Bad Request',
                error: err.message
            });
        })
    }).catch(err => {
        res.status(400).json({
            status: 'Bad Request',
            error: err.message
        });
    })
};