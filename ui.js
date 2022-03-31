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
