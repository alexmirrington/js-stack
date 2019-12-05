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

    it('should be valid without a genre', function(done) {
        const song: SongDocument = new Song({
            name: 'Self Destruct',
            artist: 'Pegboard Nerds'
        });
 
        song.validate(err => {
            expect(err).toBeNull();
            done();
        });
    });

    it('should be valid if all fields are well defined', function(done) {
        const song: SongDocument = new Song({
            name: 'Around the World',
            artist: 'Daft Punk',
            genre: 'French House'
        });

        song.validate(err => {
            expect(err).toBeNull();
            done();
        });
    });

});
