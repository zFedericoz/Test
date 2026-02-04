  const cells = document.querySelectorAll(".cell");
  let turnoX = true;
  let mosse = 0;

  const combinazioniVittoria = [
    [0,1,2], [3,4,5], [6,7,8], // righe
    [0,3,6], [1,4,7], [2,5,8], // colonne
    [0,4,8], [2,4,6]           // diagonali
  ];

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {

      if (cell.textContent !== "") return;

      cell.textContent = turnoX ? "X" : "O";
      mosse++;

      if (controllaVittoria()) {
        alert(`Ha vinto ${turnoX ? "X" : "O"}!`);
        reset();
        return;
      }

      if (mosse === 9) {
        alert("Parità!");
        reset();
        return;
      }

      turnoX = !turnoX;
    });
  });

  function controllaVittoria() {
    return combinazioniVittoria.some(combo => {
      return combo.every(i => cells[i].textContent === (turnoX ? "X" : "O"));
    });
  }

  function reset() {
    cells.forEach(cell => cell.textContent = "");
    turnoX = true;
    mosse = 0;
  }


