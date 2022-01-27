import { comparePosition } from "../../constante";
import { caseOccuper, caseVideOuOccuperParEnnemy } from "../RegleGeneral";

export const deplacementDame = (positionInitial, positionSouhaiter, couleur, allPieces) => {
  for (let i = 1; i < 8; i++) {
    let multiplierX;
    let multiplierY;

    if (positionSouhaiter.x < positionInitial.x) {
      multiplierX = -1;
    } else if (positionSouhaiter.x > positionInitial.x) {
      multiplierX = 1;
    } else {
      multiplierX = 0;
    }

    if (positionSouhaiter.y < positionInitial.y) {
      multiplierY = -1;
    } else if (positionSouhaiter.y > positionInitial.y) {
      multiplierY = 1;
    } else {
      multiplierY = 0;
    }

    let passedPosition = { x: positionInitial.x + i * multiplierX, y: positionInitial.y + i * multiplierY };

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
  return false;
};
