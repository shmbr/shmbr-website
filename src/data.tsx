import { type IPhotoSeriesYear } from "./components/PhotoSeriesYearSection";

//
// --- DATA CONFIGURED FROM OLDEST TO NEWEST --- //
//

const BLOB_STORAGE_BASE = "https://shmbr-photos.s3.us-east-1.amazonaws.com";

const BLOB_FOLDERS = {
  warsaw_05_Zamek: "2026-05-warszawa/palace",
  warsaw_05_highline: "2026-05-warszawa/highline",
  paris: "2026-03-paris",
  krakow: "2026-03-krakow",
  "20's-random": "20's-random",
  "20's-ternopil": "20's-ternopil",
  "2018-karpaty": "2018-karpaty",
  "2018-sofiyivka": "2018-sofiyivka",
  "2018-tukey": "2018-tukey",
  "2019-faine": "2019-faine",
  "2019-greece": "2019-greece",
  "2019-kyiv": "2019-kyiv",
  "2021-football": "2021-football",
  "2024-sirka": "2024-sirka",
  "2025-lviv": "2025-lviv",
  "2025-snowboarding": "2025-snowboarding",
  "2026-warszawa": "2026-warszawa",
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
  {
    year: "2025",
    city: [
      {
        name: "Warszawa",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0024.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0017.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5379.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0158.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0249.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0316.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5094.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0431.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5179.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_7977.jpeg"),
              blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0019.jpeg"),
              // blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5090.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Lviv",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_3745.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_2731.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_3265.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_4509.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_4514.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_1786.jpeg"),
              // blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_3660.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Snowboarding",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2025-snowboarding"], "IMG_4582.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-snowboarding"], "IMG_3710.jpeg"),
              blobUrl(BLOB_FOLDERS["2025-snowboarding"], "IMG_3727.HEIC"),
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2024",
    city: [
      {
        name: "Sirka",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3156.jpeg"),
              blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3163.jpeg"),
              blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3165.HEIC"),
              blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3169.jpeg"),
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2021",
    city: [
      {
        name: "Football",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2021-football"], "IMG_0685.jpeg"),
              blobUrl(BLOB_FOLDERS["2021-football"], "IMG_0673.jpeg"),
              blobUrl(BLOB_FOLDERS["2021-football"], "IMG_5329.jpeg"),
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2019",
    city: [
      {
        name: "Faine",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_0452.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_0432.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_0654.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_6197.jpeg"),
              // blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_6193.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Kyiv",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_0612.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_0618.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_5062.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_1107.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_5115.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_1098.jpeg"),
              // blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_5080.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Greece",
        coordinates: "",
        places: [
          {
            month: "Sea",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6399.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6438.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6375.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6400.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6387.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6397.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6405.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_0015.jpg"),
              // blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6374.jpeg"),
            ],
          },
          {
            month: "Sunsets",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2019-greece"], "sunsets/IMG_6352.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sunsets/IMG_6508.JPG"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "sunsets/IMG_6354.jpeg"),
            ],
          },
          {
            month: "Town",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6490.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6475.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6483.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6488.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6300.jpeg"),
              blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6477.jpeg"),
              // blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6305.jpeg"),
              // blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6302.jpeg"),
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2018",
    city: [
      {
        name: "Karpaty",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0056.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0081.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0092.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0132.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3984.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3989.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3995.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3999.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5767.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5807.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5851.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5885.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5899.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Turkey",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_0502.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_3589.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_3515.jpeg"),
              // blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_3564.jpeg"),
              // blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_3571.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Sofiyivka",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3319.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3345.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3346.jpeg"),
              blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3356.jpeg"),
            ],
          },
        ],
      },
    ],
  },
  {
    year: "20's",
    city: [
      {
        name: "Ternopil",
        coordinates: "",
        places: [
          {
            month: "Grafity",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "grafity/IMG_4847.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "grafity/IMG_5464.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "grafity/IMG_9254.jpeg"),
            ],
          },
          {
            month: "Random",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_3330.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_3799.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_3805.JPG"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_7123.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_8188.jpeg"),
            ],
          },
          {
            month: "Stadium",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "stadium/IMG_3062.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "stadium/IMG_3537.jpeg"),
            ],
          },
          {
            month: "Sunsets",
            imageUrls: [
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "sunsets/IMG_0642.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "sunsets/IMG_2195.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-ternopil"], "sunsets/IMG_5131.jpeg"),
            ],
          },
        ],
      },
      {
        name: "Random",
        coordinates: "",
        places: [
          {
            imageUrls: [
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_1306.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_3041.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_3392.HEIC"),
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_3940.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_4010.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_5777.jpeg"),
              blobUrl(BLOB_FOLDERS["20's-random"], "IMG_5985.jpeg"),
            ],
          },
        ],
      },
    ],
  },
];
