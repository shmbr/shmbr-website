export const PLAYLISTS = [
  "https://music.apple.com/pl/playlist/favourite-songs/pl.u-GPUZKm091Z",
  "https://music.apple.com/pl/playlist/adrenaline/pl.u-EdAVvBrIaK6YAEa",
  "https://music.apple.com/pl/playlist/badass-rock/pl.u-zPyLAa9tZgq0LyZ",
  "https://music.apple.com/pl/playlist/cool-guys/pl.u-r2yBJrGTPGZXzLP",
  "https://music.apple.com/pl/playlist/deep-vocal/pl.u-pMylDjjh4LNJeD4",
  "https://music.apple.com/pl/playlist/female-rock/pl.u-r2yBJ3XuPGZXzLP",
  "https://music.apple.com/pl/playlist/france-non-eng/pl.u-pMylDDms4LNJeD4",
  "https://music.apple.com/pl/playlist/fuzzy-sound/pl.u-pMylANvi4LNJeD4",
  "https://music.apple.com/pl/playlist/party/pl.u-r2yBJPkCPGZXzLP",
  "https://music.apple.com/pl/playlist/rap/pl.u-55D6Ppyh8or5Lb8",
  "https://music.apple.com/pl/playlist/retro/pl.u-MDAWWK9tWKkMdaW",
  "https://music.apple.com/pl/playlist/soul-folk/pl.u-yZyVDNrIYr1KojY",
  "https://music.apple.com/pl/playlist/soundtracks/pl.u-pMylAdYt4LNJeD4",
  "https://embed.music.apple.com/pl/playlist/summer-party/pl.u-55D6Ppqt8or5Lb8",
  "https://music.apple.com/pl/playlist/ua-best/pl.u-pMylDJbf4LNJeD4",
  "https://music.apple.com/pl/playlist/ua-party/pl.u-qxylAaxF25DmMA2",
  "https://music.apple.com/pl/playlist/ua-rap/pl.u-55D6PP2f8or5Lb8",
  "https://music.apple.com/pl/playlist/ua-retro/pl.u-XkD00BpFDKyPJ3D",
];

export function toPlaylistEmbedUrl(playlistUrl: string) {
  const url = new URL(playlistUrl);
  url.hostname = "embed.music.apple.com";
  return url.toString();
}
