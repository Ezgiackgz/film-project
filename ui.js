function UI() {}
UI.prototype.addFilmTOUI = function (newFilm) {
  // console.log(newFilm);
  const filmList = document.getElementById("films");
  // console.log(filmList);
  filmList.innerHTML += `
 <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
 </tr>
 `;
};
//İnput Alanını boşalt
UI.prototype.clearInputs = function (e1, e2, e3) {
  e1.value = "";
  e2.value = "";
  e3.value = "";
};

UI.prototype.displayMessages = function (message, type) {
  const cardBody = document.querySelector(".card-body");
  //Alert Divi

  const div = document.createElement("div");

  div.className = `alert alert-${type}`;
  div.textContent = message;

  cardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000);
};
UI.prototype.loadAllFilms = function (films) {
  const filmList = document.getElementById("films");

  films.forEach(function (film) {
    filmList.innerHTML += `<tr>
      <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
  });
};
//Silme İşlemi
UI.prototype.deleteFilmFromUI = function (element) {
  element.parentElement.parentElement.remove();
};
