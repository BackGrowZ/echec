import React, { useContext, useEffect } from "react";
import PieceContext from "../context/PieceContext";
import Piece from "../components/Piece";
import InitPiece from "../components/InitPiece";
import SelectCase from "../components/SelectCase";

const Pieces = () => {
  const { pieceSelected, updateSelectedPiece, allPieces } =
    useContext(PieceContext);

  useEffect(() => {
    allPieces.map((e) => InitPiece(`${e[0]}${e[1]}${e[2]}${e[3]}`));
  }, [allPieces]);

  const testPiece = allPieces.map((e) => (
    <Piece
      key={`${e[0]}${e[1]}${e[2]}${e[3]}`}
      ligne={e[0]}
      colone={e[1]}
      couleur={e[3]}
      piece={e[2]}
      cb={() =>
        SelectCase(`${e[0]}${e[1]}`, pieceSelected, updateSelectedPiece)
      }
    />
  ));

  return testPiece;
};

export default Pieces;
