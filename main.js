var clickBtn = document.createElement('button');

clickBtn.innerHTML = 'Click Me';

// not the preferred way in JS
// clickBtn.setAttribute('onclick', 'console.log("Clicking the Button")');

document.body.appendChild(clickBtn);

// addEventListener
clickBtn.addEventListener('click', () => {
  console.log('Clicking the Button');
});

clickBtn.addEventListener('mouseover', () => {
  console.log('Hovering the Button');
});

clickBtn.addEventListener('mouseleave', () => {
  console.log('Leave the Button');
});

const inpEle = document.createElement('input');

inpEle.type = 'date';
document.body.appendChild(inpEle);

inpEle.addEventListener('change', () => {
  console.log('Changing the Date');
});



const divElement = document.createElement('div');

divElement.style.border = '1px solid';
divElement.style.height = '100px';
divElement.style.width = '100px';
divElement.style.overflow = 'auto';

divElement.innerHTML = `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
  < br > <br>
    'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.`



document.body.appendChild(divElement);
divElement.addEventListener('scroll', () => {
  console.log('Scroll the Page');
})

