import { decodeurID } from "../utils";
import unSelectAttack from "./attack/unSelectAttack";
import unSelectOption from "./option/optionUnselect";
import removePiece from "./RemovePiece";
import unselectPiece from "./selectPiece/unSelectPiece";

const movePiece = (
  idPiece,
  idCase,
  option,
  attack,
  updateOption,
  updateSelectedPiece,
  updateAttack,
  updateAllPieces,
  allPieces
) => {
  /*
  1) on regarde si la case a la classe option ou attaque
  2) Si elle a la classe option on deplace la piece
  2bis) Si elle a la classe attack on deplace/supprime la piece ennemie puis on deplace notre piece
  3) on vide les array des deplacement et attack possible 
  */

  const isAttack = () => attack.indexOf(idCase) > -1;
  const isDeplacement = () => option.indexOf(idCase) > -1;

  const move = () => {
    const myCase = document.getElementById(idCase);
    const piece = idPiece ? document.getElementById(idPiece).firstChild : null;
    const pieceFilter = piece
      ? allPieces.filter((e) => e.join("") !== piece.id)
      : null;
    piece.id = `${idCase}${piece.id.slice(2)}`;
    if (piece && myCase && myCase.childElementCount < 1) {
      myCase.appendChild(piece);
    }
    const pieceUpdate = decodeurID(piece.id);
    pieceFilter.push([
      pieceUpdate[0].charAt(0),
      parseInt(pieceUpdate[0].charAt(1), 10),
      pieceUpdate[1],
      pieceUpdate[2],
    ]);
    const allPieceUpdate = [...allPieces];

    updateAllPieces(allPieceUpdate);
  };

  if (isDeplacement()) {
    move();
    unSelectAttack(attack, updateAttack);
    unSelectOption(option, updateOption);
    unselectPiece(idPiece, updateSelectedPiece);
    // changer l'id de la piece pour mettre la bonne case
  } else if (isAttack()) {
    // retirer la piece adverse
    move();
    unSelectAttack(attack, updateAttack);
    unSelectOption(option, updateOption);
    // changer l'id de la piece pour mettre la bonne case
  }
};

export default movePiece;
