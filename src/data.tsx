import { type IPhotoSeriesYear } from "./components/PhotoSeriesYearSection";

//
// --- DATA CONFIGURED FROM OLDEST TO NEWEST --- //
//

const BLOB_STORAGE_BASE =
  "https://9ttkpiklpeguudoy.public.blob.vercel-storage.com";

const BLOB_FOLDERS = {
  warsaw_05_Zamek: "2026-05-warszawa/palace",
  warsaw_05_highline: "2026-05-warszawa/highline",
  paris: "2026-03-paris",
  krakow: "2026-03-krakow",
} as const;

function blobUrl(folder: string, filename: string): string {
  return `${BLOB_STORAGE_BASE}/${folder}/${filename}`;
}

export const PHOTOS: IPhotoSeriesYear[] = [
  {
    year: "2026",
    city: [
      {
        name: "Warsaw",
        coordinates: "52.24779, 21.01413",
        places: [
          {
            month: "MAY",
            info: "Zamek Królewski",
            imageUrls: [
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8002.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8001.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8004.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8008.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8005.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8011.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8015.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8017.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8019.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8025.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8036.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8038.jpeg"),
            ],
          },
          {
            month: "MAY",
            info: "Highline Warsaw",
            imageUrls: [
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7953.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7954.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7955.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7958.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7960.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7963.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7990.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7994.jpeg"),
              blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7996.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Paris",
        coordinates: "48.85661, 2.35222",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS.paris, "DSCF7194.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7200.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7210.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7212.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7213.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7218.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7222.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7239.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7240.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7252.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7254.JPG"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7259.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7270.JPG"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7384.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7387.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7517.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7521.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7524.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7536.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7542.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7547.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7557.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7558.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7559.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7618.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7624.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7627.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7704.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7749.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7758.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7782.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7796.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7798.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7801.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7808.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7810.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7824.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7828.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7830.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7833.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7843.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7844.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7897.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7906.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7913.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7920.jpeg"),
              blobUrl(BLOB_FOLDERS.paris, "DSCF7921.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Krakow",
        coordinates: "50.06465, 19.93658",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7049.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7051.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7086.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7087.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7097.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7101.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7102.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7104.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7115.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7118.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7136.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7140.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7141.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7147.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7152.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7157.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7158.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7163.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7167.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7173.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7174.jpeg"),
              blobUrl(BLOB_FOLDERS.krakow, "DSCF7183.jpeg"),
            ],
          },
        ],
      },
    ],
  },
];
