class Songs{
    private _songName: string;
    private _singerName: string;
    private _songLength : number;

    constructor(songName : string, singerName : string, songLength : number){
        this._songName = songName;
        this._singerName = singerName;
        this._songLength = songLength;
    }


    get songName(): string {
        return this._songName;
    }

    set songName(value: string) {
        this._songName = value;
    }

    get singerName(): string {
        return this._singerName;
    }

    set singerName(value: string) {
        this._singerName = value;
    }

    get songLength(): number {
        return this._songLength;
    }

    set songLength(value: number) {
        this._songLength = value;
    }
}


class Playlists{
    private _listOfSongs : Array<Songs> = [];

    public add(param : Songs): void {
        this._listOfSongs.push(param);
    }


    get listOfSongs(): Array<Songs> {
        return this._listOfSongs;
    }

    set listOfSongs(value: Array<Songs>) {
        this._listOfSongs = value;
    }



}

const numb = new Songs("Numb", "Marshmello", 180)
const antiHero = new Songs("Anti-Hero", "Taylor Swift", 210);


const runningPlaylist = new Playlists();
runningPlaylist.add(numb);
runningPlaylist.add(antiHero);

