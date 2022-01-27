const selectOption = (option, updateOption) => {
  option.forEach((e) => {
    const myCase = document.getElementById(e);
    const actuelClass = myCase.className;
    myCase.className = `${actuelClass} Option`;
  });
  updateOption(option);
};

export default selectOption;
