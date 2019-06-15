const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatır
const ui = new UI();

// Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        // HATA
    }
    else{
        const newFilm = new Film(title, director, url);
    
        ui.addFilmToUI(newFilm);
    }

    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}
