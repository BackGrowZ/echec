import RemovePiece from "./RemovePiece";

const initPiece = (id, oldId, allPieces, handleClick, update) => {
  // console.log({ test });
  const createPiece = () => {
    const piece = document.createElement("div");
    piece.id = id;
    const fullid = piece.id;
    piece.className = id.slice(2);
    piece.onclick = () => handleClick(fullid);
    return piece;
  };

  const placementPiece = (piece) => {
    const idCase = id.slice(0, 2);
    const myCase = document.getElementById(idCase);
    if (piece && myCase && myCase.childElementCount < 1) {
      myCase.appendChild(piece);
    }
  };

  if (oldId === undefined) {
    placementPiece(createPiece());
  } else if (id !== oldId) {
    RemovePiece(oldId);
    placementPiece(createPiece());
  }

  if (update) update();
};

export default initPiece;
