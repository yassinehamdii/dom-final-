// Attendre que le contenu du DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments du DOM
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Fonction pour générer une couleur hexadécimale aléatoire
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Ajouter un écouteur d'événement au bouton
  changeColorBtn.addEventListener("click", () => {
    const newColor = getRandomColor(); // Générer une couleur
    colorBox.style.backgroundColor = newColor; // Appliquer la couleur
  });
});
