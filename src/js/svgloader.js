const ref = {
  objectContainer: document.getElementById('svg-object'),
};

document
  .getElementById('load-svg-button')
  .addEventListener('click', () => loadSvg(ref.objectContainer));

const svgFile = require('../images/ub10.svg');

function loadSvg(container) {
  console.log(container.src);
  container.data = svgFile;
}
