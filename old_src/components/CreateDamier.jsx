import { useContext } from "react";
import Pieces from "../container/Pieces";
import PieceContext from "../context/PieceContext";
import { ligneName, coloneName } from "../utils";
import movePiece from "./MovePiece";

const CreateDamier = () => {
  const {
    pieceSelected,
    updateSelectedPiece,
    oldAllPieces,
    allPieces,
    option,
    attack,
    updateOption,
    updateAllPieces,
    updateAttack,
  } = useContext(PieceContext);

  const pieces = [];

  // let i = 0;
  // const newLigne = [7, 16, 25, 34, 43, 52, 61];
  // const caseEchec = (id, color) => (
  //   <div
  //     key={id}
  //     onClick={() =>
  //       movePiece(
  //         pieceSelected,
  //         id,
  //         option,
  //         attack,
  //         updateOption,
  //         updateSelectedPiece,
  //         updateAttack,
  //         updateAllPieces,
  //         allPieces
  //       )
  //     }
  //     className={`caseEchec ${color}`}
  //     id={id}
  //   ></div>
  // );

  // return coloneName.map((c) =>
  //   ligneName.map((l) => {
  //     const id = l + c;
  //     const color = i % 2 ? "black" : "white";
  //     if (newLigne.indexOf(i) > -1) {
  //       i = i + 2;
  //     } else {
  //       i++;
  //     }
  //     return caseEchec(id, color);
  //   })
  // );
  for (let j = coloneName.length - 1; j >= 0; j--) {
    for (let i = 0; i < ligneName.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });
    }
  }
};

export default CreateDamier;
