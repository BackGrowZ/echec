const RemovePiece = (id) => {
  const piece = document.getElementById(id);
  console.log(piece);
  piece.remove();
};

export default RemovePiece;
