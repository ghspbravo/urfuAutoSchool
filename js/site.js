'use strict';
var prevs = document.getElementsByClassName('pic-mini');
var gallery = document.getElementsByClassName('gallery-content')[0];
var currentPic = 0, i, j;

var changeImage = function (picId) {
    let imageHref = `images/gallery/${prevs[picId].firstElementChild.id}.jpg`;
    let newImg = document.createElement('img');
    newImg.src = imageHref;
    newImg.onload = () => {gallery.querySelector('img').replaceWith(newImg)}

	prevs[currentPic].classList.toggle("gallery-current");
	prevs[picId].classList.toggle("gallery-current");

	currentPic = picId;
};

for (i = 0; i < prevs.length; i++) {
	prevs[i].onclick = function (e) {
        j = this.firstElementChild.id - 1;
        changeImage(j);
	};
};

gallery.onclick = function () {
    (currentPic === prevs.length - 1) ? j = 0 : j = currentPic + 1;
	changeImage(j);
};

document.getElementsByClassName('right-arrow')[0].onclick = function () {
    (currentPic === prevs.length - 1) ? j = 0 : j = currentPic + 1;
	changeImage(j);
};

document.getElementsByClassName('left-arrow')[0].onclick = function () {
    (currentPic === 0) ? j = prevs.length - 1 : j = currentPic - 1;
	changeImage(j);
};

var map = document.getElementsByClassName('map-content')[0];
var mapAddresses = document.getElementsByClassName('map-address');
var mapPointer = document.getElementsByClassName('map-icon');
var adresses = ["images/map/С.КОВАЛЕВСКОЙ.5.jpg", "images/map/ПР.ЛЕНИНА.51.jpg"];
var markers = { white: "images/marker-black.png", black: "images/marker-white.png" };
var currentAdr = 0;


for (i = 0; i < mapAddresses.length; i++) {
	mapAddresses[i].onclick = function () {
		var addressSelect = document.getElementsByClassName('address-select')[0];

        if (addressSelect.children[currentAdr] === this) return;

        mapAddresses[currentAdr].classList.remove("current-address");
        mapPointer[currentAdr].firstElementChild.src = markers.black;

        currentAdr = Math.abs(currentAdr - 1);

		this.classList.add("current-address");
        mapPointer[currentAdr].firstElementChild.src = markers.white;
		map.firstElementChild.src = adresses[currentAdr];
	};
};

var mNav = document.getElementsByClassName('mobile-nav')[0];

document.getElementsByClassName('mobile-nav-toggle')[0].onclick = function () {
	(mNav.style.display === "none") ? mNav.style.display = "block" : mNav.style.display = "none";
};

var mNavLinks = document.querySelectorAll('.mobile-nav a');

for (i = 0; i < mNavLinks.length; i++) {
    mNavLinks[i].onclick = function () {
        mNav.style.display = "none";
    };
}

window.onresize = function () {
	if (window.innerWidth > 768) {
		mNav.style.display = "none";
	};
};

var scroller = document.getElementsByClassName('up-wrapper')[0];

window.onscroll = function () {
    if (window.innerWidth < 1600) {
        scroller.style.display = "none";
        return;
    };
    (window.pageYOffset > document.documentElement.clientHeight / 2) ? scroller.style.display = "block" : scroller.style.display = "none";
};

document.getElementsByClassName('up-wrapper')[0].onclick = function () {
    window.scrollTo(0, 0);
};

submitForm.onclick = function(e) {
    e.preventDefault();
    enrollForm.submit();
};

enrollForm.onsubmit = function(e) {
    alert('submitted');
};