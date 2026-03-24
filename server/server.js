const express = require("express");
const path = require("path");
const app = express();

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, "files")));

// Configure a 'get' endpoint for data..
app.get("/movies", function (req, res) {
  // Part 1: Remove the next line and replace with your code
  let movies = [
    `{"Title":"Spider-Man","Released":"2014-09-26","Runtime":"121","Genres":["Action", "Adventure", "Sci-Fi"],"Directors":["Sam Raimi"],"Writers":["Stan Lee", "Steve Ditko", "David Koepp"],"Actors":["Tobey Maguire", "Kirsten Dunst", "Willem Dafoe"],"Plot":"After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.","Poster":"https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg","Metascore":73,"imdbRating":7.4}`,
    `{"Title":"Avengers: Endgame","Released":"2019-04-26","Runtime":"181","Genres":["Action", "Adventure", "Sci-Fi"],"Directors":["Anthony Russo", "Joe Russo"],"Writers":["Christopher Markus", "Stephen McFeely", "Stan Lee"],"Actors":["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],"Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg","Metascore":78,"imdbRating":8.4}`,
    `{"Title":"Iron Man","Released":"2008-05-02","Runtime":"126","Genres":["Action", "Adventure", "Sci-Fi"],"Directors":["Jon Favreau"],"Writers":["Mark Fergus", "Hawk Ostby", "Art Marcum"],"Actors":["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"],"Plot":"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.","Poster":"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg","Metascore":79,"imdbRating":7.9}`,
  ];
  //res.send("!dlrow olleH");
  res.send(JSON.parse(movies[0]));
});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");
