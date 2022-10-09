const btnEle = document.createElement('button');
btnEle.innerText = 'Click to New Fact';

btnEle.setAttribute('class', 'bg-primary text-white');

const divEle = document.createElement('div');
divEle.setAttribute('class', 'bg-success text-white m-2 p-2');

document.body.append(btnEle, divEle);
const newFact = () => {
  const factReq = new XMLHttpRequest();
  factReq.open('GET', 'https://api.api-ninjas.com/v1/facts?limit=1');
  factReq.setRequestHeader("X-Api-Key", 'R2WhTjqMjo/iigNB3RKamA==pWCZPT44QQ0Lqfmo');
  factReq.send(null);
  factReq.onload = () => {
    const factRes = JSON.parse(factReq.responseText);
    divEle.innerText = factRes[0].fact;
  }
};

newFact();

btnEle.addEventListener('click', newFact);


const btnEleTwo = document.createElement('button');
btnEleTwo.innerText = 'Click to Alert';

const alertFunc = () => {
  alert('Alerting the User');
}

btnEleTwo.addEventListener('click', alertFunc);

const removeAlertBtn = document.createElement('button');
removeAlertBtn.innerText = 'End Game';

const endGame = () => {
  console.log('Removing listener from The Button');
  btnEleTwo.removeEventListener('click', alertFunc);
}

removeAlertBtn.addEventListener('click', endGame);

document.body.append(btnEleTwo, removeAlertBtn);
