import {
  decodeurID,
  ligneName,
  coloneName,
  lettreToNumber,
  deplacementLigne,
} from "../../utils";
import ShowAttack from "../ShowAttack";
import ShowOption from "./ShowOption";

const CaseOption = (fullname, option, updateOption, attack, updateAttack) => {
  const array = decodeurID(fullname);
  const color = array[2];
  const lig = array[0].charAt(0); // lettre
  const col = parseInt(array[0].charAt(1), 10); // chiffre
  const casePossible = [];
  const attackPossible = [];

  const addAttack = (lig, col) => {
    const caseCheck = document.getElementById(`${lig}${col}`).firstChild;
    const colorOfPiece =
      caseCheck.className.charAt(caseCheck.className.length - 1) === "c"
        ? "Blanc"
        : "Noir";
    if (color !== colorOfPiece) {
      attackPossible.push(`${lig}${col}`);
    }
  };

  const isOccuped = (lig, col) => {
    const caseCheck = document.getElementById(`${lig}${col}`).firstChild;
    if (caseCheck === null) {
      casePossible.push(`${lig}${col}`);
    } else {
      addAttack(lig, col);
    }
  };

  const addPossibilityCavalier = (x, y) => {
    if (coloneName.indexOf(x) > -1 && ligneName.indexOf(y) > -1)
      isOccuped(y, x);
  };

  const addPossibilityRoi = (x, y) => {
    if (x && y) {
      if (ligneName.indexOf(x) > -1 && coloneName.indexOf(y) > -1) {
        isOccuped(x, y);
      }
    } else if (x && y === undefined) {
      if (ligneName.indexOf(x) > -1) {
        isOccuped(x, col);
      }
    } else if (y && x === undefined) {
      if (coloneName.indexOf(y) > -1) {
        isOccuped(lig, y);
      }
    }
  };
  // Pion
  if (array[1] === "pion") {
    if (color === "Blanc") {
      isOccuped(lig, col + 1);
      if (color === "Blanc" && col === 2) {
        isOccuped(lig, col + 2);
      }
    }
    if (color === "Noir") {
      isOccuped(lig, col - 1);
      if (color === "Noir" && col === 7) {
        isOccuped(lig, col - 2);
      }
    }
  }
  // Tour
  if (array[1] === "tour" || array[1] === "dame") {
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig)]);
      const ligne = ligneName[ligneIndex];
      const colone = col + i;
      if (ligne && colone < 9) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig)]);
      const ligne = ligneName[ligneIndex];
      const colone = col - i;
      if (ligne && colone > 0) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) + i]);
      const ligne = ligneName[ligneIndex];
      const colone = col;
      if (ligne && colone < 9) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) - i]);
      const ligne = ligneName[ligneIndex];
      const colone = col;
      if (ligne && colone < 9) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    // coloneName.map((e) => casePossible.push(`${lig}${e}`));
    // ligneName.map((e) => casePossible.push(`${e}${col}`));
  }
  // Cavalier
  if (array[1] === "cavalier") {
    addPossibilityCavalier(col - 1, ligneName[lettreToNumber(lig) - 2]);
    addPossibilityCavalier(col + 1, ligneName[lettreToNumber(lig) - 2]);
    addPossibilityCavalier(col - 2, ligneName[lettreToNumber(lig) - 1]);
    addPossibilityCavalier(col + 2, ligneName[lettreToNumber(lig) - 1]);
    addPossibilityCavalier(col - 2, ligneName[lettreToNumber(lig) + 1]);
    addPossibilityCavalier(col + 2, ligneName[lettreToNumber(lig) + 1]);
    addPossibilityCavalier(col - 1, ligneName[lettreToNumber(lig) + 2]);
    addPossibilityCavalier(col + 1, ligneName[lettreToNumber(lig) + 2]);
  }
  // diagonale
  if (array[1] === "fou" || array[1] === "dame") {
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) + i]);
      const ligne = ligneName[ligneIndex];
      const colone = col + i;
      if (ligne && colone < 9) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) - i]);
      const ligne = ligneName[ligneIndex];
      const colone = col - i;
      if (ligne && colone > 0) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) + i]);
      const ligne = ligneName[ligneIndex];
      const colone = col - i;
      if (ligne && colone > 0) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) - i]);
      const ligne = ligneName[ligneIndex];
      const colone = col + i;
      if (ligne && colone < 9) {
        const isOccuped = document.getElementById(
          `${ligne}${colone}`
        ).firstChild;
        if (isOccuped === null) {
          casePossible.push(`${ligne}${colone}`);
        } else {
          addAttack(ligne, colone);
          i = 10;
        }
      }
    }
  }
  if (array[1] === "roi") {
    addPossibilityRoi(undefined, col + 1);
    addPossibilityRoi(undefined, col - 1);
    addPossibilityRoi(deplacementLigne(lig, -1), undefined);
    addPossibilityRoi(deplacementLigne(lig, 1), undefined);
    addPossibilityRoi(deplacementLigne(lig, 1), col + 1);
    addPossibilityRoi(deplacementLigne(lig, -1), col - 1);
    addPossibilityRoi(deplacementLigne(lig, 1), col - 1);
    addPossibilityRoi(deplacementLigne(lig, -1), col + 1);
  }

  // afficher les possibiliter
  ShowOption(casePossible, option, updateOption);
  ShowAttack(attackPossible, attack, updateAttack);
  // casePossible.forEach((e) => {
  //   const myCase = document.getElementById(e);
  //   const actuelClass = myCase.className;
  //   myCase.className = `${actuelClass} Option`;
  // });
};

export default CaseOption;
