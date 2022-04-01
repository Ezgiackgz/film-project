function Storage() {}
Storage.prototype.addFilmToStorage = function (newFilm) {
  // console.log(newFilm);

  let films = this.getFilmsFormStorage();
  films.push(newFilm);
  //film objeyi diziye ataık örneğin
  /*
  [
      {title:"asdsads",director:"sdfsdf",url:"sdfsdf"},
      {title:"asdsads",director:"sdfsdf",url:"sdfsdf"}

  ]
  */
  localStorage.setItem("films", JSON.stringify(films));
};
Storage.prototype.getFilmsFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    //eğer films adında bir key yoksa boş bir dizi oluştur
    films = [];
  } else {
    //var ise json formatında dizi haline çevirerek al
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};
