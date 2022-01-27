import selectAttack from "./attack/selectAttack";
import unSelectAttack from "./attack/unSelectAttack";

const ShowAttack = (data, attack, updateAttack) => {
  const isEgal = () => {
    if (data.length !== attack.length) {
      return false;
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i] !== attack[i]) return false;
      }
      return true;
    }
  };

  if (attack === null) {
    selectAttack(data, updateAttack);
  } else if (isEgal()) {
    unSelectAttack(attack, updateAttack);
  } else if (!isEgal() && attack !== null) {
    unSelectAttack(attack, updateAttack);
    selectAttack(data, updateAttack);
  }
};

export default ShowAttack;
