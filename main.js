const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElemnt = document.getElementById("director");
const urlElement = document.getElementById("url");

//UI objesini başlatma

const ui = new UI();

//local storage objesi başlatma
const storage = new Storage();

//Tüm event yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  //local storageden filmleri çekme
  document.addEventListener("DOMContentLoaaded", function () {
    //local storageden dizi şeklinde alma
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElemnt.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm Alanları Doldurun", "danger");

    //hata
  } else {
    //Yeni Film
    const newFilm = new Film(title, director, url);
    ui.displayMessages("Filmler Başarılı bir şekilde yüklendi", "success");
    //Arayüze Film Ekleme
    ui.addFilmTOUI(newFilm);
    //storage film ekleme
    storage.addFilmToStorage(newFilm);
  }
  //İnput alanını boşalt
  ui.clearInputs(titleElement, urlElement, directorElemnt);
  e.preventDefault();
}
