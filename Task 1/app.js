// method 1 
document.querySelector('#para').innerHTML= '<p>Adding a paragraph to the empty div by using innerHTML method 1</p>';

// method 2
const pTag = document.createElement('p');
pTag.textContent = 'Adding a paragraph to the empty div by using create element, textcontent, and append child method 2'
document.querySelector('#para').appendChild(pTag);