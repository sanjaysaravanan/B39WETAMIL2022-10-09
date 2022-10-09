const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Capturing
// document.addEventListener('click', e => {
//   console.log('document')
// }, { capture: true })

// gP.addEventListener('click', e => {
//   console.log("grandparent 1");
// }, { capture: true });

// parent.addEventListener('click', e => {
//   console.log("parent 1");
// }, { capture: true });

// child.addEventListener('click', e => {
//   console.log("child 1");
// }, { capture: true });


// Bubbling
// body
// document.body.addEventListener('click', () => {
//   console.log('Line 26 - Event From Body');
// });

// grand parent
// grandparent.addEventListener('click', (event) => {
//   console.log('Line 31 - Event From Grand Parent');
//   // event.stopPropagation();
// });

// parent
// parent.addEventListener('click', () => {
//   console.log('Line 37 - Event From Parent');
// });

// Child
// child.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Line 42 - Event From Child');
// });

// capturing
// body
// document.body.addEventListener('click', () => {
//   console.log('Line 26 - Event From Body');
// }, { capture: true });

// // grand parent
// grandparent.addEventListener('click', (event) => {
//   console.log('Line 31 - Event From Grand Parent');
//   // event.stopPropagation();
// }, { capture: true });

// // parent
// parent.addEventListener('click', () => {
//   console.log('Line 37 - Event From Parent');
// }, { capture: true });

// // Child
// child.addEventListener('click', (e) => {
//   console.log('Line 42 - Event From Child');
// }, { capture: true });


// body
document.body.addEventListener('mouseout', () => {
  console.log('Line 26 - Event From Body');
});

// grand parent
grandparent.addEventListener('mouseout', (event) => {
  console.log('Line 31 - Event From Grand Parent');
  // event.stopPropagation();
});

// parent
// parent.addEventListener('click', () => {
//   console.log('Line 37 - Event From Parent');
// });

// // Child
// child.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Line 42 - Event From Child');
// });