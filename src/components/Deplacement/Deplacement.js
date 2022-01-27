import { pieceType } from "../constante";
import { deplacementCavalier } from "./Pieces/Cavalier";
import { deplacementDame } from "./Pieces/Dame";
import { deplacementPion } from "./Pieces/Pion";
import { deplacementFou } from "./Pieces/Fou";
import { deplacementRoi } from "./Pieces/Roi";
import { deplacementTour } from "./Pieces/Tour";

export default class Deplacement {
  isValideDeplacement(positionInitial, positionSouhaiter, type, couleur, allPieces) {
    let deplacementValide = false;
    switch (type) {
      case pieceType.pion:
        deplacementValide = deplacementPion(positionInitial, positionSouhaiter, couleur, allPieces);
        break;

      case pieceType.cavalier:
        deplacementValide = deplacementCavalier(positionInitial, positionSouhaiter, couleur, allPieces);
        break;

      case pieceType.fou:
        deplacementValide = deplacementFou(positionInitial, positionSouhaiter, couleur, allPieces);
        break;

      case pieceType.tour:
        deplacementValide = deplacementTour(positionInitial, positionSouhaiter, couleur, allPieces);
        break;

      case pieceType.dame:
        deplacementValide = deplacementDame(positionInitial, positionSouhaiter, couleur, allPieces);
        break;

      case pieceType.roi:
        deplacementValide = deplacementRoi(positionInitial, positionSouhaiter, couleur, allPieces);
        break;

      default:
        break;
    }
    return deplacementValide;
  }
}
