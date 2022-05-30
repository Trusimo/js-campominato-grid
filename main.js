// Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const gridContainer = document.querySelector(".grid-container");

// come a lezione bisogna creare una griglia, stavolta di 10x10, usando un ciclo.
function createGrid(CelleX, CelleY) {

    // siccome deve essere 10x10, xcells * ycells
    const celletotali = CelleX * CelleY;
    console.log(celletotali);

    // creo il ciclo per fare ogni cella e collego le celle a html/css
    for (let i = 1; i <= celletotali; i++) {
    const celle = document.createElement("div");
    celle.classList.add("celle");
    celle.textContent = i;

    celle.addEventListener("click", function(){ 
        celle.style.backgroundColor = "lightblue";
    }
    );

    // appendo le celle al gridContainer
    gridContainer.append(celle);
    }


}
// funzione che crea la griglia di 10cellex10celle
createGrid(10, 10);