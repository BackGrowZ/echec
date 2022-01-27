import { comparePosition } from "../../constante";
import { caseOccuper, caseVideOuOccuperParEnnemy } from "../RegleGeneral";

export const deplacementTour = (positionInitial, positionSouhaiter, couleur, allPieces) => {
  if (positionInitial.x === positionSouhaiter.x) {
    for (let i = 1; i < 8; i++) {
      let positifOrNegatif = positionSouhaiter.y < positionInitial.y ? -1 : 1;
      let passedPosition = { x: positionInitial.x, y: positionInitial.y + i * positifOrNegatif };
      if (comparePosition(passedPosition, positionSouhaiter)) {
        if (caseVideOuOccuperParEnnemy(passedPosition, allPieces, couleur)) {
          return true;
        }
      } else {
        if (caseOccuper(passedPosition, allPieces)) {
          break;
        }
      }
    }
  }
  if (positionInitial.y === positionSouhaiter.y) {
    for (let i = 1; i < 8; i++) {
      let positifOrNegatif = positionSouhaiter.x < positionInitial.x ? -1 : 1;
      let passedPosition = { x: positionInitial.x + i * positifOrNegatif, y: positionInitial.y };
      if (comparePosition(passedPosition, positionSouhaiter)) {
        if (caseVideOuOccuperParEnnemy(passedPosition, allPieces, couleur)) {
          return true;
        }
      } else {
        if (caseOccuper(passedPosition, allPieces)) {
          break;
        }
      }
    }
  }
};
