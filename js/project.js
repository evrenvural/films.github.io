const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");

// UI Objesini Başlatır
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();

// Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Tüm alanları doldurun...", "danger");
    }
    // Yeni Film
    else{
        ui.displayMessages("Film eklendi.", "success");
        
        const newFilm = new Film(title, director, url);
        
        storage.addFilmToStorage(newFilm);
        ui.addFilmToUI(newFilm);
    }

    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.deleteFilmFromUI(e.target);
        ui.displayMessages("Silme İşlemi Başarılı", "success");
    }
}

function clearAllFilms(e){
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
  
}
