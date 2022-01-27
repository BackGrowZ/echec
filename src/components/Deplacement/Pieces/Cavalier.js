import { caseVideOuOccuperParEnnemy } from "../RegleGeneral";

export const deplacementCavalier = (positionInitial, positionSouhaiter, couleur, allPieces) => {
  for (let i = -1; i < 2; i += 2) {
    for (let j = -1; j < 2; j += 2) {
      if (positionSouhaiter.y - positionInitial.y === 2 * i) {
        if (positionSouhaiter.x - positionInitial.x === j) {
          if (caseVideOuOccuperParEnnemy(positionSouhaiter, allPieces, couleur)) {
            return true;
          }
        }
      }
      if (positionSouhaiter.x - positionInitial.x === 2 * i) {
        if (positionSouhaiter.y - positionInitial.y === j) {
          if (caseVideOuOccuperParEnnemy(positionSouhaiter, allPieces, couleur)) {
            return true;
          }
        }
      }
    }
  }
};
