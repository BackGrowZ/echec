import React, { useContext } from "react";
import PieceContext from "../context/PieceContext";

const Createcase = ({ id, color, children }) => {
  const {
    pieceSelected,
    updateSelectedPiece,
    allPieces,
    option,
    attack,
    updateOption,
    updateAllPieces,
    updateAttack,
  } = useContext(PieceContext);

  return (
    <div
      key={id}
      onClick={() =>
        movePiece(
          pieceSelected,
          id,
          option,
          attack,
          updateOption,
          updateSelectedPiece,
          updateAttack,
          updateAllPieces,
          allPieces
        )
      }
      className={`caseEchec ${color}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Createcase;
