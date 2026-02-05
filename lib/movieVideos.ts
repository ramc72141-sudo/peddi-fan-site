// lib/movieVideos.ts

export type VideoLanguage = {
  name: "Telugu" | "Hindi" | "Tamil" | "Kannada" | "Malayalam";
  url: string;
};

export type MovieVideo = {
  slug: string;
  title: string;
  description?: string;
  languages: VideoLanguage[];
};

export const movieVideos: MovieVideo[] = [
  {
    slug: "glimpse",
    title: "Glimpse",
    description: "PEDDI Glimpse",
    languages: [
      {
        name: "Telugu",
        url: "https://youtu.be/2y_DH5gIrCU?si=B6-5tKGGOe7C79_i",
      },
      {
        name: "Hindi",
        url: "https://youtu.be/77KAnoqpoFw?si=vrOkF_dRuaH6jXez",
      },
      {
        name: "Tamil",
        url: "https://youtu.be/mGrFXawfrd4?si=VG7tc6-FQ0bd1ZK4",
      },
      {
        name: "Kannada",
        url: "https://youtu.be/lvodg_AjQpY?si=D7iHQJegez5Xogtr",
      },
      {
        name: "Malayalam",
        url: "https://youtu.be/_DnvGloHnFs?si=RQuhnUGgiKJ2jqXe",
      },
    ],
  },

  {
    slug: "teaser",
    title: "Teaser",
    languages: [], // ⏳ add later
  },

  {
    slug: "trailer",
    title: "Trailer",
    languages: [], // ⏳ add later
  },
];
