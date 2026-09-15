import { type IPhotoSeriesYear } from "./components/PhotoSeriesYearSection";
import { type IPhotoImage } from "./components/PhotoPlaceBlock";

//
// --- DATA CONFIGURED FROM OLDEST TO NEWEST --- //
//

const BLOB_STORAGE_BASE = "https://shmbr-photos.s3.us-east-1.amazonaws.com";

const BLOB_FOLDERS = {
  warsaw_10: "2026-10-warszawa",
  morskie_oko_07: "2026-07-morskie-oko",
  krakow_07: "2026-07-krakow",
  warsaw_05_Zamek: "2026-05-warszawa/palace",
  warsaw_05_highline: "2026-05-warszawa/highline",
  paris_03: "2026-03-paris",
  krakow_03: "2026-03-krakow",
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

function photo(url: string, best = false): IPhotoImage {
  return { url, best };
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
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8566.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8581.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8583.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8593.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8595.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8603.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8615.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8628.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8643.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8652.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8660.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8663.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8679.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_10, "DSCF8682.jpeg")),
            ],
          },
        ],
      },
      {
        name: "Morskie Oko",
        coordinates: "49.19722, 20.07083",
        places: [
          {
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8309.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8311.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8313.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8318.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8319.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8335.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8338.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8354.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8376.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8381.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8383.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8401.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8416.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8419.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8425.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8438.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8439.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8450.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS.morskie_oko_07, "DSCF8449.jpeg")),
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
              photo(blobUrl(BLOB_FOLDERS.krakow_07, "DSCF8197.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_07, "DSCF8221.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_07, "DSCF8271.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_07, "DSCF8272.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_07, "DSCF8297.jpeg"), true),
            ],
          },
        ],
      },
      {
        name: "Warsaw",
        coordinates: "52.24779, 21.01413",
        places: [
          {
            month: "MAY",
            info: "Zamek Królewski",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8001.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8004.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8005.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8011.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8015.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8017.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8019.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8025.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8036.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8002.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8008.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS.warsaw_05_Zamek, "DSCF8038.jpeg")),
            ],
          },
          {
            month: "MAY",
            info: "Highline Warsaw",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7953.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7954.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7955.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7958.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7960.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7963.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7990.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7994.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.warsaw_05_highline, "DSCF7996.jpeg"), true),
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
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7194.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7200.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7210.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7212.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7213.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7218.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7222.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7239.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7240.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7252.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7254.JPG")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7259.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7270.JPG"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7384.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7387.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7517.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7521.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7524.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7536.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7542.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7547.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7557.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7558.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7559.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7618.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7624.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7627.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7704.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7749.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7758.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7782.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7796.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7798.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7801.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7808.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7810.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7824.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7828.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7830.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7833.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7843.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7844.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7897.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7906.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7913.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7920.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.paris_03, "DSCF7921.jpeg")),
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
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7049.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7051.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7086.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7087.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7097.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7101.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7102.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7104.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7115.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7118.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7136.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7140.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7141.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7147.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7152.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7157.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7158.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7163.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7167.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7173.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7174.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS.krakow_03, "DSCF7183.jpeg")),
            ],
            dividerAfter: "fujifilm xe 3 / iphone 17",
          },
        ],
      },
    ],
  },
  // {
  //   year: "2025",
  //   city: [
  //     {
  //       name: "Warszawa",
  //       coordinates: "",
  //       places: [
  //         {
  //           imageUrls: [
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0024.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0017.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5379.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0158.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0249.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0316.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5094.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0431.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5179.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_7977.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_0019.jpeg")),
  //             // blobUrl(BLOB_FOLDERS["2026-warszawa"], "IMG_5090.jpeg"),
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Lviv",
  //       coordinates: "",
  //       places: [
  //         {
  //           imageUrls: [
  //             photo(blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_3745.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_2731.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_3265.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_4509.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_4514.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_1786.jpeg")),
  //             // blobUrl(BLOB_FOLDERS["2025-lviv"], "IMG_3660.jpeg"),
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Snowboarding",
  //       coordinates: "",
  //       places: [
  //         {
  //           imageUrls: [
  //             photo(blobUrl(BLOB_FOLDERS["2025-snowboarding"], "IMG_4582.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-snowboarding"], "IMG_3710.jpeg")),
  //             photo(blobUrl(BLOB_FOLDERS["2025-snowboarding"], "IMG_3727.HEIC")),
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    year: "20's",
    city: [
      {
        name: "Archives",
        places: [
          // {
          //   info: "Sirka",
          //   month: "2024",
          //   imageUrls: [
          //     photo(blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3156.jpeg")),
          //     photo(blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3163.jpeg")),
          //     photo(blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3165.HEIC")),
          //     photo(blobUrl(BLOB_FOLDERS["2024-sirka"], "IMG_3169.jpeg")),
          //   ],
          // },
          {
            info: "Football",
            month: "2021",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2021-football"], "IMG_0685.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2021-football"], "IMG_0673.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2021-football"], "IMG_5329.jpeg"), true),
            ],
          },
          {
            info: "Faine",
            month: "2019",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_0452.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_6197.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_0432.jpeg"), true),
              // photo(blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_6193.jpeg")),
            ],
          },
          {
            info: "Kyiv",
            month: "2019",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_0612.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_0618.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_5062.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_1107.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_5115.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_1098.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS["2019-kyiv"], "IMG_5080.jpeg")),
            ],
          },
          {
            info: "Greece | Sea",
            month: "2019",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6399.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6405.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6387.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6375.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6438.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_0015.jpg"), true),
              // photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6400.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6397.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sea/IMG_6374.jpeg")),
            ],
          },
          {
            info: "Greece | Sunsets",
            month: "2019",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sunsets/IMG_6352.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sunsets/IMG_6508.JPG"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "sunsets/IMG_6354.jpeg"), true),
            ],
          },
          {
            info: "Greece | Town",
            month: "2019",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6490.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6475.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6483.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6488.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6300.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6477.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6305.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS["2019-greece"], "town/IMG_6302.jpeg")),
            ],
          },
          {
            month: "2018",
            info: "Karpaty",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0056.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0132.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0081.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3989.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3984.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3995.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_3999.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5767.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5807.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5885.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5899.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_5851.jpeg")),
              // photo(blobUrl(BLOB_FOLDERS["2018-karpaty"], "IMG_0092.jpeg")),
            ],
          },
          {
            month: "2018",
            info: "Sofiivka",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3345.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3319.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3346.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-sofiyivka"], "IMG_3356.jpeg")),
            ],
          },
          // {
          //   month: "Ternopil",
          //   info: "Grafity",
          //   imageUrls: [
          //     photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "grafity/IMG_4847.jpeg")),
          //     photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "grafity/IMG_5464.jpeg")),
          //     photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "grafity/IMG_9254.jpeg")),
          //   ],
          // },
          {
            month: "Ternopil",
            info: "Random",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_3799.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_3330.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_3805.JPG"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_7123.jpeg"), true),
              // photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "random/IMG_8188.jpeg")),
            ],
          },
          // {
          //   month: "Ternopil",
          //   info: "Stadium",
          //   imageUrls: [
          //     photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "stadium/IMG_3062.jpeg")),
          //     photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "stadium/IMG_3537.jpeg")),
          //   ],
          // },
          {
            month: "Ternopil",
            info: "Sunsets",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "sunsets/IMG_0642.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "sunsets/IMG_5131.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-ternopil"], "sunsets/IMG_2195.jpeg"), true),
            ],
          },
          {
            month: "Random",
            imageUrls: [
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_3041.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_1306.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_3392.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_3940.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_4010.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_5777.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2019-faine"], "IMG_0654.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["20's-random"], "IMG_5985.jpeg")),
              photo(blobUrl(BLOB_FOLDERS.krakow_07, "IMG_5294.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_3515.jpeg"), true),
              photo(blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_3589.jpeg")),
              photo(blobUrl(BLOB_FOLDERS["2018-tukey"], "IMG_0502.jpeg")),
            ],
            dividerAfter: "iphone 6s / 12 mini",
          },
        ],
      },
    ],
  },
];
