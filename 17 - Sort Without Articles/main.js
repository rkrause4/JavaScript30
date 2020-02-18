const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Sort the band without 'The's, A's or An's

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// const sortedBands = bands.sort(function(a, b) {
//     return strip(a) > strip(b) ? 1 : -1;
//     //   if (strip(a) > strip(b)) {
//     //     return 1;
//     //   } else {
//     //     return -1;
//     //   }
//   });

// Map() needs .join('') to remove the comma that the DOM's procedure to use toString() to join the individual strings together. .join() will group all individual strings into one large string
document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');

console.log(sortedBands);
