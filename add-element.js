var newsEl = document.createElement('li');
var newText = document.createTextNode('quiona');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newsEl);