export interface IAlbum {
  artist: string;
  title: string;
  artworkUrl: string;
}

// Covers: iTunes Search API → artworkUrl100, then 100x100bb → 600x600bb.
// https://itunes.apple.com/search?term=Artist+Album&entity=album&limit=1

export const ALBUMS: IAlbum[] = [
  {
    artist: "Arctic Monkeys",
    title: "AM",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/9c/b5/699cb5d6-115c-ff73-9d26-e57ea4350d72/887828031795.png/600x600bb.jpg",
  },
  {
    artist: "Radiohead",
    title: "Amnesiac",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/43/d8/ec/43d8ec17-0e96-dba9-21d9-4cdf9d98f2bf/634904078362.png/600x600bb.jpg",
  },
  {
    artist: "Daisy Jones & The Six",
    title: "Aurora",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a9/4e/f5/a94ef52c-6d56-b754-5872-dfbd39d2e6f7/075679700476.jpg/600x600bb.jpg",
  },
  {
    artist: "Thirty Seconds to Mars",
    title: "A Beautiful Lie",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b3/59/d0/b359d085-aa84-aae8-d03c-5305d0bb0111/16UMGIM34076.rgb.jpg/600x600bb.jpg",
  },
  {
    artist: "Boombox",
    title: "Family бізнес",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/cd/12/4bcd12d2-5292-f4b5-b948-08ff7cacf5cd/cover.jpg/600x600bb.jpg",
  },
  {
    artist: "Harry Styles",
    title: "Fine Line",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
  },
  {
    artist: "Radiohead",
    title: "OK Computer",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg",
  },
  {
    artist: "The Police",
    title: "Outlandos d'Amour",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/47/de/29/47de29d9-5109-2020-d296-1021a7378574/16UMGIM60880.rgb.jpg/600x600bb.jpg",
  },
  {
    artist: "Coldplay",
    title: "Parachutes",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/600x600bb.jpg",
  },
  {
    artist: "Rammstein",
    title: "Rammstein",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/52/c0/4b/52c04bfb-7eb1-a158-1ac9-e1d4c82ce146/19UMGIM06727.rgb.jpg/600x600bb.jpg",
  },
  {
    artist: "Coldplay",
    title: "A Rush of Blood to the Head",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b9/b4/2a/b9b42ad1-1e25-5096-da43-497a247e69a3/190295978051.jpg/600x600bb.jpg",
  },
  {
    artist: "Milky Chance",
    title: "Sadnecessary",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/dd/bf/33/ddbf3362-6ee4-1e72-2839-41c883d46b5e/14UMGIM36148.rgb.jpg/600x600bb.jpg",
  },
  {
    artist: "Bring Me the Horizon",
    title: "That's the Spirit",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e1/c0/f7/e1c0f7ac-aca2-cb38-9c9e-e5b8e7576842/886445388244.jpg/600x600bb.jpg",
  },
  {
    artist: "The xx",
    title: "xx",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/28/44/8e/28448e14-19be-438b-bc9b-8c1d3f68f578/609008295069.png/600x600bb.jpg",
  },
  {
    artist: "Океан Ельзи",
    title: "Земля",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ac/69/a2/ac69a2ad-f756-5ae9-5e47-b1a98b51efaa/mzm.zaxhhvyc.jpg/600x600bb.jpg",
  },
  {
    artist: "Один в каное",
    title: "Один в каное",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music49/v4/54/91/92/54919214-b32a-c0ab-804d-e05c36b5e4c9/190394261214.jpg/600x600bb.jpg",
  },
  {
    artist: "Boombox",
    title: "Таємний код. Рубікон, Частина 1",
    artworkUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d7/7f/84/d77f8468-7a53-f738-8c9f-9923b2275869/cover.jpg/600x600bb.jpg",
  },
];
