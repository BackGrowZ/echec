export const VERTICAL = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const HORIZONTAL = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const PLATEAU_SIZE = 100;
export const pieceType = {
  pion: 0,
  fou: 1,
  cavalier: 2,
  tour: 3,
  dame: 4,
  roi: 5,
};

export function comparePosition(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

export const couleurType = {
  blanc: 0,
  noir: 1,
};

export const placementInitial = [];

for (let i = 0; i < 8; i++) {
  placementInitial.push({
    image: "assets/pion_b.png",
    position: {
      x: i,
      y: 1,
    },
    type: pieceType.pion,
    couleur: couleurType.blanc,
  });
}
for (let i = 0; i < 8; i++) {
  placementInitial.push({
    image: "assets/pion_n.png",
    position: {
      x: i,
      y: 6,
    },
    type: pieceType.pion,
    couleur: couleurType.noir,
  });
}

for (let p = 0; p < 2; p++) {
  const teamType = p === 0 ? couleurType.noir : couleurType.blanc;
  const couleur = teamType === couleurType.noir ? "n" : "b";
  const y = teamType === couleurType.noir ? 7 : 0;

  placementInitial.push({
    image: `assets/tour_${couleur}.png`,
    position: {
      x: 0,
      y,
    },
    type: pieceType.tour,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/tour_${couleur}.png`,
    position: {
      x: 7,
      y,
    },
    type: pieceType.tour,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/cavalier_${couleur}.png`,
    position: {
      x: 1,
      y,
    },
    type: pieceType.cavalier,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/cavalier_${couleur}.png`,
    position: {
      x: 6,
      y,
    },
    type: pieceType.cavalier,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/fou_${couleur}.png`,
    position: {
      x: 5,
      y,
    },
    type: pieceType.fou,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/fou_${couleur}.png`,
    position: {
      x: 2,
      y,
    },
    type: pieceType.fou,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/dame_${couleur}.png`,
    position: {
      x: 3,
      y,
    },
    type: pieceType.dame,
    couleur: teamType,
  });
  placementInitial.push({
    image: `assets/roi_${couleur}.png`,
    position: {
      x: 4,
      y,
    },
    type: pieceType.roi,
    couleur: teamType,
  });
}
