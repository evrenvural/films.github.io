const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");

// Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    // Hata durumu
    if(title === "" || director === "" || url === ""){
        UI.displayMessages("Tüm alanları doldurun...", "danger");
    }
    // Yeni Film
    else{
        UI.displayMessages("Film eklendi.", "success");
        
        const newFilm = new Film(title, director, url);
        
        Storage.addFilmToStorage(newFilm);
        UI.addFilmToUI(newFilm);
    }

    UI.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.deleteFilmFromUI(e.target);
        UI.displayMessages("Silme İşlemi Başarılı", "success");
    }
}

function clearAllFilms(e){
    if(confirm("Emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
  
}
