import favSongsSource from "./assets/fav-songs.txt?raw";

export interface ISong {
  artist: string;
  title: string;
}

const TITLE_COLUMN = 0;
const ARTIST_COLUMN = 2;

function parseFavouriteSongs(source: string): ISong[] {
  return source
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const columns = line.split("\t");

      return {
        title: columns[TITLE_COLUMN].trim(),
        artist: columns[ARTIST_COLUMN].trim(),
      };
    });
}

export const SONGS: ISong[] = parseFavouriteSongs(favSongsSource);
