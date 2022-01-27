import React, { useRef, useState } from "react";
import { HORIZONTAL, VERTICAL, PLATEAU_SIZE, placementInitial, comparePosition, couleurType, pieceType } from "../constante";
import Deplacement from "../Deplacement/Deplacement";
import CaseEchequier from "./Case/CaseEchequier";
import "./Echequier.css";

const Echequier = () => {
  const [pieceSelectionner, setPieceSelectionner] = useState(null);
  const [piecePromotion, setPiecePromotion] = useState(null);
  const [pieces, setPieces] = useState(placementInitial);
  const [piecePosition, setPiecePosition] = useState({ x: -1, y: -1 });
  const echequierRef = useRef(null);
  const deplacement = new Deplacement();

  const attraperPiece = (e) => {
    const element = e.target;
    const echecquier = echequierRef.current;
    if (element.classList.contains("piece-img")) {
      setPiecePosition({
        x: Math.floor((e.clientX - echecquier.offsetLeft) / PLATEAU_SIZE),
        y: Math.abs(Math.ceil((e.clientY - echecquier.offsetTop - 800) / PLATEAU_SIZE)),
      });
      const x = e.clientX - PLATEAU_SIZE / 2;
      const y = e.clientY - PLATEAU_SIZE / 2;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      setPieceSelectionner(element);
    }
  };

  const movePiece = (e) => {
    const echecquier = echequierRef.current;
    if (pieceSelectionner && echecquier) {
      const minX = echecquier.offsetLeft - 25;
      const minY = echecquier.offsetTop - 25;
      const maxX = echecquier.offsetLeft + echecquier.clientWidth - 75;
      const maxY = echecquier.offsetTop + echecquier.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      pieceSelectionner.style.position = "absolute";

      // permet que la piece ne sorte pas de l'echequier sur la droite et la gauche
      if (x < minX) {
        pieceSelectionner.style.left = `${minX}px`;
      } else if (x > maxX) {
        pieceSelectionner.style.left = `${maxX}px`;
      } else {
        pieceSelectionner.style.left = `${x}px`;
      }

      // permet que la piece ne sorte pas de l'echequier en haut et en bas
      if (y < minY) {
        pieceSelectionner.style.top = `${minY}px`;
      } else if (y > maxY) {
        pieceSelectionner.style.top = `${maxY}px`;
      } else {
        pieceSelectionner.style.top = `${y}px`;
      }
    }
  };

  const lacherPiece = (e) => {
    const echecquier = echequierRef.current;
    if (pieceSelectionner && echequierRef) {
      const x = Math.floor((e.clientX - echecquier.offsetLeft) / PLATEAU_SIZE);
      const y = Math.abs(Math.ceil((e.clientY - echecquier.offsetTop - 800) / PLATEAU_SIZE));

      const currentPiece = pieces.find((p) => comparePosition(p.position, piecePosition));

      if (currentPiece) {
        const deplacementAutoriser = deplacement.isValideDeplacement(piecePosition, { x, y }, currentPiece.type, currentPiece.couleur, pieces);

        if (deplacementAutoriser) {
          // Update Position de la piece
          const updatedPieces = pieces.reduce((results, piece) => {
            if (comparePosition(piece.position, piecePosition)) {
              piece.position.x = x;
              piece.position.y = y;
              results.push(piece);
              let promotionLigne = piece.couleur === couleurType.blanc ? 7 : 0;
              if (y === promotionLigne && piece.type === pieceType.pion) {
                setPiecePromotion(piece);
              }
            } else if (!comparePosition(piece.position, { x, y })) {
              results.push(piece);
            }
            return results;
          }, []);
          setPieces(updatedPieces);
        } else {
          // reset position  de la piece
          pieceSelectionner.style.position = "relative";
          pieceSelectionner.style.removeProperty("top");
          pieceSelectionner.style.removeProperty("left");
        }
      }

      setPieceSelectionner(null);
    }
  };

  let plateau = [];

  for (let j = VERTICAL.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL.length; i++) {
      const piece = pieces.find((p) => comparePosition(p.position, { x: i, y: j }));
      let image = piece ? piece.image : undefined;

      // Creation de l'echequier
      const num = j + i + 2;
      let className;
      if (num % 2 === 0) {
        className = "case case-noir";
      } else {
        className = "case case-blanche";
      }
      plateau.push(<CaseEchequier key={`${i},${j}`} className={className} image={image} />);
    }
  }

  const promotionPion = (type) => {
    const updatedPieces = pieces.reduce((results, piece) => {
      if (comparePosition(piece.position, piecePromotion.position)) {
        const couleur = piece.couleur === couleurType.blanc ? "b" : "n";
        let image;
        piece.type = type;
        switch (type) {
          case pieceType.tour: {
            image = "tour";
            break;
          }
          case pieceType.cavalier: {
            image = "cavalier";
            break;
          }
          case pieceType.fou: {
            image = "fou";
            break;
          }
          case pieceType.dame: {
            image = "dame";
            break;
          }

          default:
            break;
        }
        piece.image = `/assets/${image}_${couleur}.png`;
      }
      results.push(piece);
      return results;
    }, []);
    setPieces(updatedPieces);
    setPiecePromotion(null);
  };
  const couleurPromotion = () => {
    return piecePromotion.couleur ? "n" : "b";
  };
  return (
    <>
      {piecePromotion && (
        <div id="modal-promotion">
          <img onClick={() => promotionPion(pieceType.tour)} alt="tour" src={`/assets/tour_${couleurPromotion()}.png`} />
          <img onClick={() => promotionPion(pieceType.cavalier)} alt="cavalier" src={`/assets/cavalier_${couleurPromotion()}.png`} />
          <img onClick={() => promotionPion(pieceType.fou)} alt="fou" src={`/assets/fou_${couleurPromotion()}.png`} />
          <img onClick={() => promotionPion(pieceType.dame)} alt="dame" src={`/assets/dame_${couleurPromotion()}.png`} />
        </div>
      )}
      <div
        onMouseMove={(e) => movePiece(e)}
        onMouseDown={(e) => attraperPiece(e)}
        onMouseUp={(e) => lacherPiece(e)}
        id="echequier"
        ref={echequierRef}
      >
        {plateau}
      </div>
    </>
  );
};

export default Echequier;
