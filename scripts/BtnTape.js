// Détecte si l'appareil est tactile
const estTactile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

/**
 * Configure le comportement d'un bouton pour les appareils tactiles.
 * @param {string} buttonSelector Le sélecteur CSS du bouton (par ex., ".bouton-57").
 * @param {string} tapeClass La classe CSS de l'effet de tap (par ex., "tape57").
 * @param {number} duration La durée en millisecondes avant de retirer la classe.
 */
function setupButtonInteraction(buttonSelector, tapeClass, duration) {
  const bouton = document.querySelector(buttonSelector);

  // S'il n'y a pas de bouton, on arrête la fonction.
  if (!bouton) {
    console.error(`Bouton non trouvé avec le sélecteur : ${buttonSelector}`);
    return;
  }

  if (estTactile) {
    // Si l'appareil est tactile, on ajoute une classe au corps de la page
    // pour désactiver les effets de survol CSS.
    document.body.classList.add("is-touch-device");

    // Événement pour le début du toucher
    bouton.addEventListener("touchstart", (e) => {
      // Empêche le comportement par défaut du navigateur
      e.preventDefault();
      // Ajoute la classe pour déclencher l'animation
      bouton.classList.add(tapeClass);
    });

    // Événement pour la fin du toucher
    bouton.addEventListener("touchend", () => {
      // Retire la classe après un court délai
      setTimeout(() => {
        bouton.classList.remove(tapeClass);
        // Retire le focus pour éviter le comportement de survol
        bouton.blur();
      }, duration);
    });
  }
}

// ----------------------------------------------------
// Appels de la fonction pour chaque bouton
// ----------------------------------------------------

// Bouton 57 : c'est notre premier bouton de test
setupButtonInteraction(".Button01", "tape01", 300);

// Bouton 58 : exemple avec une durée différente
setupButtonInteraction(".buttonX", "tapeX", 300);

// Bouton 59 : exemple avec une autre durée
setupButtonInteraction(".button-27", "tape27", 300);

// Ajoutez d'autres boutons ici si nécessaire en suivant le même format.
// Par exemple :
// setupButtonInteraction(".button-60", "tape60", 750);
