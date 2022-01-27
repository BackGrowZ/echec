import { useContext, useEffect, useState } from "react";
import PieceContext from "../context/PieceContext";
import initPiece from "../components/InitPiece";
import SelectCase from "../components/SelectCase";
import CaseOption from "../components/option/CaseOption";

const Pieces = () => {
  const [test, setTest] = useState(0);
  const {
    pieceSelected,
    updateSelectedPiece,
    oldAllPieces,
    allPieces,
    option,
    attack,
    updateOption,
    updateOldAllPieces,
    updateAttack,
  } = useContext(PieceContext);

  useEffect(() => {
    console.log(allPieces);
    console.log({ pieceSelected }, "ici");
    const handleClick = (fullId) => {
      console.log({ pieceSelected, option, test });
      // console.log("in handleClick option", option);
      CaseOption(fullId, option, updateOption, attack, updateAttack);
      SelectCase(fullId, pieceSelected, updateSelectedPiece);
    };
    for (let i = 0; i < allPieces.length; i++) {
      const id = `${allPieces[i][0]}${allPieces[i][1]}${allPieces[i][2]}${allPieces[i][3]}`;
      const oldid = oldAllPieces[i]
        ? `${oldAllPieces[i][0]}${oldAllPieces[i][1]}${oldAllPieces[i][2]}${oldAllPieces[i][3]}`
        : undefined;
      initPiece(id, oldid, allPieces, handleClick);
      if (i === allPieces.length - 1) {
        initPiece(id, oldid, allPieces, handleClick, () =>
          updateOldAllPieces(allPieces)
        );
      }
    }
  }, [allPieces, pieceSelected, option, attack]);

  return null;
};

export default Pieces;
