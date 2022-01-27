import { comparePosition } from "../constante";

export const caseOccuper = (positionSouhaiter, allPieces) => {
  const piece = allPieces.find((p) => comparePosition(p.position, positionSouhaiter));
  return piece ? true : false;
};

export const caseOccuperbyEnnemy = (positionSouhaiter, allPieces, couleur) => {
  const piece = allPieces.find((p) => comparePosition(p.position, positionSouhaiter) && p.couleur !== couleur);
  return piece ? true : false;
};

export const caseVideOuOccuperParEnnemy = (position, allPieces, couleur) => {
  return !caseOccuper(position, allPieces) || caseOccuperbyEnnemy(position, allPieces, couleur);
};
