import { comparePosition, couleurType } from "../../constante";
import { caseOccuper, caseOccuperbyEnnemy } from "../RegleGeneral";

export const deplacementPion = (positionInitial, positionSouhaiter, couleur, allPieces) => {
  const ligneSpecial = couleur === couleurType.blanc ? 1 : 6;
  const pionDirection = couleur === couleurType.blanc ? 1 : -1;

  // Deplacement
  if (
    comparePosition(positionInitial, {
      x: positionSouhaiter.x,
      y: ligneSpecial,
    }) &&
    positionSouhaiter.y - positionInitial.y === 2 * pionDirection
  ) {
    if (!caseOccuper(positionSouhaiter, allPieces) && !caseOccuper({ x: positionSouhaiter.x, y: positionSouhaiter.y - pionDirection }, allPieces)) {
      return true;
    }
  } else if (positionInitial.x === positionSouhaiter.x && positionSouhaiter.y - positionInitial.y === pionDirection) {
    if (!caseOccuper(positionSouhaiter, allPieces)) {
      return true;
    }
  }
  // Attaque
  // attaque sur la gauche
  else if (positionSouhaiter.x - positionInitial.x === -1 && positionSouhaiter.y - positionInitial.y === pionDirection) {
    if (caseOccuperbyEnnemy(positionSouhaiter, allPieces, couleur)) {
      return true;
    }
    // attaque sur la doite
  } else if (positionSouhaiter.x - positionInitial.x === 1 && positionSouhaiter.y - positionInitial.y === pionDirection) {
    if (caseOccuperbyEnnemy(positionSouhaiter, allPieces, couleur)) {
      return true;
    }
  }
};
