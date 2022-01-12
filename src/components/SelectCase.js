const SelectCase = (id, data, cb) => {
  console.log(data);
  const unselectPiece = (id) => {
    const myCase = document.getElementById(id); // selectionne la div de la case
    const actuelClass = myCase.className; // recupere les classe
    const array = actuelClass.split(" ");
    myCase.className = array.slice(0, 2).join(" ");
    cb(null);
  };

  const selectPiece = (id) => {
    const myCase = document.getElementById(id); // selectionne la div de la case
    const actuelClass = myCase.className; // recupere les classe
    myCase.className = actuelClass + " Selectionner";
    cb(id);
  };

  if (data === null) {
    console.log("v0");
    selectPiece(id);
  } else if (id === data) {
    console.log("v1");
    unselectPiece(id);
  } else if (data !== null && data !== id) {
    console.log("v2");
    unselectPiece(data);
    selectPiece(id);
  }
};

export default SelectCase;
