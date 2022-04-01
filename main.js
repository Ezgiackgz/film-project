const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElemnt = document.getElementById("director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];

//UI objesini başlatma

const ui = new UI();

//local storage objesi başlatma
const storage = new Storage();

//Tüm event yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  //local storageden filmleri çekme
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
  secondCardBody.addEventListener("click", deleteFilm);
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
//Silme İşlemi

function deleteFilm(e) {
  //console.log(e.target);
  if (e.target.id == "delete-film") {
    ui.deleteFilmFromUI(e.target);
  }
}
