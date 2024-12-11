import express from "express";
import { Request, Response } from "express";
import formidable from "formidable";

const PORT = 8080;
const tracksData = [
  {
    trackId: "2S0xQFTOafzeErzgTaQavg",
    artistName: "COLLAR",
    name: "The Bright Side",
    artworkUrl100:
      "https://i.scdn.co/image/ab67616d0000b27352cb8b6193f2ceb19d52c173",
    releaseDate: "2023-01-13T00:00:00Z",
    url: "https://open.spotify.com/track/2S0xQFTOafzeErzgTaQavg",
  },
  {
    trackId: "2rbid0M6p0FaDplPh5ey6P",
    artistName: "COLLAR",
    name: "OFF/ON",
    artworkUrl100:
      "https://i.scdn.co/image/ab67616d0000b273fcce104b34bbe56419afd90f",
    releaseDate: "2022-07-15T00:00:00Z",
    url: "https://open.spotify.com/track/1k4epQqpbGkyIm3O6bRALu",
  },
];

const app = express();

app.use(express.static("public"));

app.post("/", (req, res) => {
  const form = formidable({});

  form.on("file", (formname, file) => {
    // same as fileBegin, except
    // it is too late to change file.filepath
    // file.hash is available if options.hash was used
    console.log(formname,file)
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err;
    }
    res.json({ fields, files });
  });
});

app.get("/tracks", (req: Request, res: Response) => {
  res.json(tracksData);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:8080`);
});
