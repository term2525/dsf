/*
sudo code /directory-to-open --user-data-dir='.' --no-sandbox
Q1. Create Movie Database and Table (Using Array Simulation).
Steps to Create: 1. Create `createMovieTable.js`.
Steps to Execute: 1. Run `node createMovieTable.js`.
*/

// Q.1) Create a Node.js file that demonstrate create Movie database and table in MySQL
const movieDB = {
  films: []
};

function addFilm(id, title) {
  movieDB.films.push({ id, title });
}

addFilm(1, "Inception");
addFilm(2, "Interstellar");
addFilm(3, "Dunkirk");

console.log("Movie database created, films table populated:");
console.table(movieDB.films);

// Example query: select all films
console.log("All films:", movieDB.films);
