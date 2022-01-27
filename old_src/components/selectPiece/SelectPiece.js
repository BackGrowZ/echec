const selectPiece = (id, updateSelectedPiece) => {
  const myCase = document.getElementById(id); // selectionne la div de la case
  const actuelClass = myCase.className; // recupere les classe
  myCase.className = actuelClass + " Selectionner";
  updateSelectedPiece(id);
};

export default selectPiece;
