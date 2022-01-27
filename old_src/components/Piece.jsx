const myPiece = (props) => {
  const { ligne, colone, couleur, piece, cb } = props;
  const pieceCreate = (
    <div
      id={`${ligne}${colone}${piece}${couleur}`}
      className={`${piece}${couleur}`}
      onClick={cb}
    ></div>
  );
  return pieceCreate;
};

export default myPiece;
