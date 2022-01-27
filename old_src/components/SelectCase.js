import selectPiece from "./selectPiece/SelectPiece";
import unselectPiece from "./selectPiece/unSelectPiece";

const SelectCase = (fullId, pieceSelected, cb) => {
  const id = fullId.slice(0, 2);

  console.log({ pieceSelected, id });

  if (pieceSelected === null) {
    selectPiece(id, cb);
  } else if (id === pieceSelected) {
    unselectPiece(id, cb);
  } else if (pieceSelected !== null && pieceSelected !== id) {
    unselectPiece(pieceSelected);
    selectPiece(id, cb);
  }
};

export default SelectCase;
