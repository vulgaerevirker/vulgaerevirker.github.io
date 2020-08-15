var counter = 0;
var end = imgArray.length - 1;
var i;

document.p1.src = imgArray[0].src;
document.p2.src = imgArray[1].src;
document.p3.src = imgArray[2].src;
document.p4.src = imgArray[3].src;
document.p5.src = imgArray[4].src;
document.p6.src = imgArray[5].src;
document.p7.src = imgArray[6].src;

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.p1;
var img1 = document.p2;
var img2 = document.p3;
var img3 = document.p4;
var img4 = document.p5;
var img5 = document.p6;
var img6 = document.p7;

reStyleimg(img);
reStyleimg(img1);
reStyleimg(img2);
reStyleimg(img3);
reStyleimg(img4);
reStyleimg(img5);
reStyleimg(img6);


function reStyleimg(inp)
{
	inp.style.width = '300px';
	inp.style.height = '300px';
	inp.style.opacity = 0.7;
}

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


dothemouse(img);
dothemouse(img1);
dothemouse(img2);
dothemouse(img3);
dothemouse(img4);
dothemouse(img5);
dothemouse(img6);

function dothemouse(inp)
{
	inp.style.borderRadius = "7px";
	inp.onmouseover = function(){
		inp.style.opacity = 1;
	}

	inp.onmouseout = function(){
		inp.style.opacity = 0.7;
	}
}

document.onkeydown = checkKey;
function checkKey(e) {
	e = e || window.event;
	if (e.keyCode == '37') {
		scroll_backward();
	}
	else if (e.keyCode == '39') {
		scroll_forward();
	}
}

function scroll_backward() {
	counter--;
	if (counter < 0)
	{
		counter = end;
	}
	modalImg.src = imgArray[counter].src;
}

function scroll_forward() {
	{
		counter++;
		if (counter > end)
		{
			counter = 0;
		}
	}
	modalImg.src = imgArray[counter].src;
}

img.onclick = function(){openModal(0);}
img1.onclick = function(){openModal(1);}
img2.onclick = function(){openModal(2);}
img3.onclick = function(){openModal(3);}
img4.onclick = function(){openModal(4);}
img5.onclick = function(){openModal(5);}
img6.onclick = function(){openModal(6);}

function openModal(nb)
{
	counter = nb;
	modal.style.display = "block";
	modalImg.src = imgArray[counter].src;
	captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modalpay = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalpay) {
    modalpay.style.display = "none";
  }
}

span.onclick = function() { 
	modal.style.display = "none";
}

function addrfct() {
  // Get the checkbox
  var checkBox = document.getElementById("addr");
  // Get the output text
  var text = document.getElementById("giveaddr");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
  //get availability and prices
var requestURL = 'https://vulgaerevirker.github.io/isavail.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var superHeroesText = request.response;
	var superHeroes = JSON.parse(superHeroesText);
	var heroes = jsonObj['members'];
	var para = document.createElement("p");
	var node = document.textContent = 'dkk' + heroes[0].price;
	para.appendChild(node);
	var element = document.getElementById("price1");
	element.appendChild(para);
  }