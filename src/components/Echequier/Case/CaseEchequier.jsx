import "./case.css";

const CaseEchequier = ({ className, image }) => {
  return (
    <div className={className}>
      {image && (
        <div
          className="piece-img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
    </div>
  );
};

export default CaseEchequier;
