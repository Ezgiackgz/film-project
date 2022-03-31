const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElemnt = document.getElementById("director");
const urlElement = document.getElementById("url");

//UI objesini başlatma

const ui = new UI();

//Tüm event yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElemnt.value;
  const url = urlElement.value;

  if (title == "" || director == "" || url == "") {
    //hata
  } else {
      //Yeni Film
    const newFilm = new Film(title, director, url);

    ui.addFilmTOUI(newFilm); //Arayüze Film Ekleme
  }
  e.preventDefault();
}
