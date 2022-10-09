const inpEle = document.getElementById('inp');


// inpEle.addEventListener('change', (e) => {
//   console.log(e);
//   console.log(e.target.value);
// });

inpEle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('You have entered this:', e.target.value);
  }
});

console.log(inpEle);
