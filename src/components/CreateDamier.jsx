import { ligneName, coloneName } from "../utils";

const CreateDamier = () => {
  let i = 0;
  const newLigne = [7, 16, 25, 34, 43, 52, 61];
  const caseEchec = (id, color) => (
    <div key={id} className={`caseEchec ${color}`} id={id}></div>
  );

  return coloneName.map((c) =>
    ligneName.map((l) => {
      const id = l + c;
      const color = i % 2 ? "black" : "white";
      if (newLigne.indexOf(i) > -1) {
        i = i + 2;
      } else {
        i++;
      }
      return caseEchec(id, color);
    })
  );
};

export default CreateDamier;
