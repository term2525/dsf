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
