const dbName = "rafiansyahMusicDB";
const conn = new Mongo();
const db = conn.getDB(dbName);

db.createCollection("songs");
db.createCollection("artists");
db.createCollection("popularSongs");

db.songs.insertMany([
  { title: "Song 1", artist: ["Artist A1", "Artist B1"], album: "Album 1" },
  { title: "Song 2", artist: ["Artist A2"], album: "Album 2" },
  { title: "Song 3", artist: ["Artist A3"], album: "Album 3" },
  { title: "Song 4", artist: ["Artist A4", "Artist B4", "Artist C4"], album: "Album 4" },
  { title: "Song 5", artist: ["Artist A5"], album: "Album 5" },
  { title: "Song 6", artist: ["Artist A6"], album: "Album 6" },
  { title: "Song 7", artist: ["Artist A7"], album: "Album 7" },
  { title: "Song 8", artist: ["Artist A8"], album: "Album 8" },
  { title: "Song 9", artist: ["Artist A9"], album: "Album 9" },
  { title: "Song 10", artist: ["Artist A10"], album: "Album 10" },
]);

db.artists.insertMany([
    { name: "Artist A1", dob: new Date("2001-04-23"), genres: ["Pop"] },
    { name: "Artist A2", dob: new Date("2003-10-27"), genres: ["Rock"] },
    { name: "Artist A3", dob: new Date("2003-06-29"), genres: ["Metal"] },
    { name: "Artist B1", dob: new Date("2001-01-20"), genres: ["Rock"] },
    { name: "Artist B2", dob: new Date("1999-03-16"), genres: ["Blues"] },
    { name: "Artist B3", dob: new Date("2004-02-10"), genres: ["Country"] },
    { name: "Artist C1", dob: new Date("2001-04-21"), genres: ["Dangdut"] },
    { name: "Artist C2", dob: new Date("1997-04-23"), genres: ["Classic"] },
    { name: "Artist C3", dob: new Date("2000-08-04"), genres: ["Pop"] },
    { name: "Artist C4", dob: new Date("2002-04-30"), genres: ["EDM"] },
]);
  

db.popularSongs.insertMany([
  { title: "Song 1", plays: 100, period: "2020" },
  { title: "Song 2", plays: 200, period: "2018" },
  { title: "Song 3", plays: 100, period: "2017" },
  { title: "Song 4", plays: 200, period: "2020" },
  { title: "Song 5", plays: 100, period: "2021" },
  { title: "Song 6", plays: 200, period: "2019" },
  { title: "Song 7", plays: 100, period: "2019" },
  { title: "Song 8", plays: 200, period: "2022" },
  { title: "Song 9", plays: 100, period: "2021" },
  { title: "Song 10", plays: 200, period: "2023" },  
]);
