# photo-portfolio

Personal site for Yura Shambora

## Stack

- React 19 and TypeScript
- Vite
- MUI
- PostHog (optional)

## Routes

| Path                   | Page                  |
| ---------------------- | --------------------- |
| `/`                    | Photos                |
| `/index`               | List of routes        |
| `/favourite`           | Music section         |
| `/favourite/albums`    | Albums                |
| `/favourite/artists`   | Artists               |
| `/favourite/playlists` | Apple Music playlists |
| `/ui`                  | UI sandbox            |

`/?best=true` shows only photos marked as best.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

The dev server listens on all interfaces (`vite --host`).

PostHog is skipped when the env vars are empty. Analytics starts only when both are set:

```
VITE_POSTHOG_PROJECT_TOKEN=
VITE_POSTHOG_HOST=
```

## Scripts

| Command           | What it does                   |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the dev server           |
| `npm run build`   | Typecheck and build to `dist/` |
| `npm run preview` | Serve the production build     |
| `npm run lint`    | Run ESLint                     |

## Adding photos

**TODO:** Create an API and CMS for uploading photos. Until then, add series by hand.

Image files live in S3 (`https://shmbr-photos.s3.us-east-1.amazonaws.com`). The catalog is `src/data.tsx`.

1. Upload JPEGs into a folder on that bucket.
2. Add the folder name to `BLOB_FOLDERS`.
3. Paste a year, city, or place entry into `PHOTOS`.

Pass `true` as the second argument to `photo()` to mark a photo as best. `month`, `info`, `coordinates`, and `dividerAfter` are optional.

Copy into `src/data.tsx`:

```ts
// BLOB_FOLDERS
city_mm: "YYYY-MM-city",

// PHOTOS — add a city inside an existing year, or paste a new year block
{
  year: "YYYY",
  city: [
    {
      name: "City",
      coordinates: "00.00000, 00.00000",
      places: [
        {
          month: "MONTH",
          info: "Place name",
          imageUrls: [
            photo(blobUrl(BLOB_FOLDERS.city_mm, "DSCF0000.jpeg")),
            photo(blobUrl(BLOB_FOLDERS.city_mm, "DSCF0001.jpeg"), true),
          ],
          dividerAfter: "optional note",
        },
      ],
    },
  ],
},
```

## Adding music

| Content   | File                                           |
| --------- | ---------------------------------------------- |
| Albums    | `src/albums.ts`                                |
| Artists   | `src/artists.ts`                               |
| Playlists | `src/playlists.ts` (Apple Music playlist URLs) |

Album artwork URLs come from the iTunes Search API. Replace `100x100bb` with `600x600bb` in `artworkUrl100` for a larger cover.

## Deploy

`npm run build` writes a static site to `dist/`. `public/_redirects` sends every path to `index.html` so client-side routes work on hosts that honor that file (Netlify, Cloudflare Pages).
