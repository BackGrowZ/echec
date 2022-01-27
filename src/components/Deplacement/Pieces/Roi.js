import { comparePosition, couleurType, pieceType } from "../../constante";
import { caseOccuper, caseOccuperbyEnnemy, caseVideOuOccuperParEnnemy } from "../RegleGeneral";
import Deplacement from "../Deplacement";

const roiEnDanger = (positionSouhaiter, couleur, allPieces) => {
  const deplacement = new Deplacement();

  // detect si la dame la tour le cavalier et le fou peuvent manger le roi
  const dameTourCavalierFou = allPieces.find(
    (p) =>
      p.type !== pieceType.roi &&
      p.type !== pieceType.pion &&
      deplacement.isValideDeplacement(p.position, positionSouhaiter, p.type, p.couleur, allPieces) &&
      p.couleur !== couleur
  );
  // detect si un pion peut manger le roi
  const testme = [allPieces.find((p) => p.couleur === couleur && p.type === pieceType.pion)];
  testme.push({ couleur: 1, image: "assets/pion_n.png", position: positionSouhaiter, type: 0 });
  const pion = allPieces.find((p) => {
    const pionDirection = couleur === couleurType.blanc ? -1 : 1;
    if (p.type === pieceType.pion && p.couleur !== couleur) {
      // attaque sur la gauche
      if (positionSouhaiter.x - p.position.x === -1 && positionSouhaiter.y - p.position.y === pionDirection) {
        if (caseOccuperbyEnnemy(positionSouhaiter, testme, couleur)) {
          return true;
        }
        // attaque sur la droite
      } else if (positionSouhaiter.x - p.position.x === 1 && positionSouhaiter.y - p.position.y === pionDirection) {
        if (caseOccuperbyEnnemy(positionSouhaiter, testme, couleur)) {
          return true;
        }
      }
    }
  });
  // TODO roi
  return pion || dameTourCavalierFou ? true : false;
};

export const deplacementRoi = (positionInitial, positionSouhaiter, couleur, allPieces) => {
  for (let i = 1; i < 2; i++) {
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
      if (caseVideOuOccuperParEnnemy(passedPosition, allPieces, couleur) && !roiEnDanger(passedPosition, couleur, allPieces)) {
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
