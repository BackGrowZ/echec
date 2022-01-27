const selectAttack = (data, updateAttack) => {
  data.forEach((e) => {
    const myCase = document.getElementById(e);
    const actuelClass = myCase.className;
    myCase.className = `${actuelClass} Attack`;
  });
  updateAttack(data);
};

export default selectAttack;
