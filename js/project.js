const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatır
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();

// Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
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
