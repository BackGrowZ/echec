const unSelectAttack = (data, updateAttack) => {
  data.forEach((e) => {
    const myCase = document.getElementById(e);
    const actuelClass = myCase.className;
    const newClass = actuelClass.split(" ");
    myCase.className = newClass.slice(0, 2).join(" ");
  });
  updateAttack([]);
};

export default unSelectAttack;
