//ParentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='red';
console.log(itemList.parentNode.parentNode.parentNode);
*/
//parent Element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='red';
console.log(itemList.parentElement.parentElement.parentElement);

//childNode
console.log(itemList.childNode);

console.assertlog(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//1st Child
console.log(itemList.firstChild);

//1st Element Child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello';

//last element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello';

//next sibling
console.log(itemList.nextSibling);

//next element sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);

//previousElement sibling
console.log(itemList.previousElementSibling);


//create element
//creste a div
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv id='hello';  //add id
//add attribute
newDiv.setAttribute('title','hello div');

//creste text
var newDivText=document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';