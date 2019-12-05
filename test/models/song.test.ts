import Song, { SongDocument } from '../../src/models/song';


describe('Song model', () => {

    it('should be invalid if name is empty', function(done) {
        const song = new Song();
 
        song.validate(err => {
            expect(err.errors.name).toBeDefined();
            done();
        });
    });

    it('should be invalid if artist is empty', function(done) {
        const song = new Song();
 
        song.validate(err => {
            expect(err.errors.artist).toBeDefined();
            done();
        });
    });

    it('should have a valid state', function(done) {
        const song: SongDocument = new Song({
            name: 'Self Destruct',
            artist: 'Pegboard Nerds'
        });

        song.validate(err => {
            expect(err).toBeNull();
            done();
        });
    });

});
