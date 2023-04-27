// old version
// fetch('https://example.com'')
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// new version
// const response = await fetch('https://example.com');
// const data = await response.text();
// console.log(data);

// function fetchHtml() {
//   fetch('https://memegen-link-examples-upleveled.netlify.app/')
//     .then((response) => {
//       return response.text();
//     })
//     .then((html) => {
//       document.body.innerHTML = html;
//     });
// }

// import path from 'path';

// const x = path.join('Users', 'Refsnes', 'demo_path.js');

// console.log(x);
