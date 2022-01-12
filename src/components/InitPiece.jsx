const InitPiece = (id) => {
  const idCase = id.slice(0, 2);
  const myCase = document.getElementById(idCase);
  const piece = document.getElementById(id);
  if (piece && myCase && myCase.childElementCount < 1)
    myCase.appendChild(piece);
};

export default InitPiece;
