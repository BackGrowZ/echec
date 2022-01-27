import selectOption from "./optionSelect";
import unSelectOption from "./optionUnselect";

const ShowOption = (data, option, updateOption) => {
  const isEgal = () => {
    if (data.length !== option.length) {
      return false;
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i] !== option[i]) return false;
      }
      return true;
    }
  };

  if (option === null) {
    selectOption(data, updateOption);
  } else if (isEgal()) {
    unSelectOption(option, updateOption);
  } else if (!isEgal() && option !== null) {
    unSelectOption(option, updateOption);
    selectOption(data, updateOption);
  }
};

export default ShowOption;
