const ligneName = ["a", "b", "c", "d", "e", "f", "g", "h"];
const coloneName = [1, 2, 3, 4, 5, 6, 7, 8];
const allPiece = [
  ["a", 1, "tour", "Blanc"],
  ["b", 1, "cavalier", "Blanc"],
  ["c", 1, "fou", "Blanc"],
  ["d", 1, "dame", "Blanc"],
  ["e", 1, "roi", "Blanc"],
  ["f", 1, "fou", "Blanc"],
  ["g", 1, "cavalier", "Blanc"],
  ["h", 1, "tour", "Blanc"],
  ["a", 2, "pion", "Blanc"],
  ["b", 2, "pion", "Blanc"],
  ["c", 2, "pion", "Blanc"],
  ["d", 2, "pion", "Blanc"],
  ["e", 2, "pion", "Blanc"],
  ["f", 2, "pion", "Blanc"],
  ["g", 2, "pion", "Blanc"],
  ["h", 2, "pion", "Blanc"],
  ["a", 8, "tour", "Noir"],
  ["b", 8, "cavalier", "Noir"],
  ["c", 8, "fou", "Noir"],
  ["d", 8, "dame", "Noir"],
  ["e", 8, "roi", "Noir"],
  ["f", 8, "fou", "Noir"],
  ["g", 8, "cavalier", "Noir"],
  ["h", 8, "tour", "Noir"],
  ["a", 7, "pion", "Noir"],
  ["b", 7, "pion", "Noir"],
  ["c", 7, "pion", "Noir"],
  ["d", 7, "pion", "Noir"],
  ["e", 7, "pion", "Noir"],
  ["f", 7, "pion", "Noir"],
  ["g", 7, "pion", "Noir"],
  ["h", 7, "pion", "Noir"],
];
const lettreToNumber = (lettre) => {
  if (lettre === "a") return 0;
  if (lettre === "b") return 1;
  if (lettre === "c") return 2;
  if (lettre === "d") return 3;
  if (lettre === "e") return 4;
  if (lettre === "f") return 5;
  if (lettre === "g") return 6;
  if (lettre === "h") return 7;
};
const deplacementLigne = (lig, nb) => {
  const ligneIndex = ligneName.indexOf(ligneName[lettreToNumber(lig) + nb]);
  return ligneName[ligneIndex];
};
const decodeurID = (id) => {
  const getPiece = (id) => {
    const firstChar = id.charAt(2);
    if (firstChar === "p") return "pion";
    if (firstChar === "t") return "tour";
    if (firstChar === "c") return "cavalier";
    if (firstChar === "f") return "fou";
    if (firstChar === "d") return "dame";
    if (firstChar === "r") return "roi";
  };

  const caseActuelle = id.slice(0, 2);
  const piece = getPiece(id);
  const couleur = id.charAt(id.length - 1) === "c" ? "Blanc" : "Noir";

  return [caseActuelle, piece, couleur];
};

export {
  ligneName,
  coloneName,
  allPiece,
  decodeurID,
  lettreToNumber,
  deplacementLigne,
};
