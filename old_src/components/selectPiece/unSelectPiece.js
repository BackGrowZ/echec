const unselectPiece = (id, cb) => {
  const myCase = document.getElementById(id); // selectionne la div de la case
  const actuelClass = myCase.className; // recupere les classe
  const array = actuelClass.split(" ");
  myCase.className = array.slice(0, 2).join(" ");
  cb(null);
};

export default unselectPiece;
