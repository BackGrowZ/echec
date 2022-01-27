import { comparePosition } from "../../constante";
import { caseOccuper, caseVideOuOccuperParEnnemy } from "../RegleGeneral";

export const deplacementFou = (positionInitial, positionSouhaiter, couleur, allPieces) => {
  for (let i = 1; i < 8; i++) {
    // deplacement haut droit
    if (positionSouhaiter.x > positionInitial.x && positionSouhaiter.y > positionInitial.y) {
      let passedPosition = { x: positionInitial.x + i, y: positionInitial.y + i };
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
    // deplacement bas droit
    if (positionSouhaiter.x > positionInitial.x && positionSouhaiter.y < positionInitial.y) {
      let passedPosition = { x: positionInitial.x + i, y: positionInitial.y - i };
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

    // deplacement bas gauche
    if (positionSouhaiter.x < positionInitial.x && positionSouhaiter.y < positionInitial.y) {
      let passedPosition = {
        x: positionInitial.x - i,
        y: positionInitial.y - i,
      };
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

    // deplacement haut gauche
    if (positionSouhaiter.x < positionInitial.x && positionSouhaiter.y > positionInitial.y) {
      let passedPosition = {
        x: positionInitial.x - i,
        y: positionInitial.y + i,
      };
      // Si il n'y a pas de piece sur la ligne qui empenche le deplacement
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
