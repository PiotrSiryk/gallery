const displayWindow1 = document.querySelector('.blackout1');
const displayWindow2 = document.querySelector('.blackout2');

class Gallery {
    constructor(blackout, type, elements) {
        this.blackout = blackout;
        this.blackoutX = blackout.querySelector('.x-div');
        this.rest = blackout.querySelector('.rest');
        this.right = blackout.querySelector('.right');
        this.left = blackout.querySelector('.left');
        this.img = blackout.querySelector('.imgDiv>img');
        
        this.elements = document.querySelector(elements)
        this.images = document.querySelectorAll(`[data-type="${type}"]`);

        this.blackoutX.addEventListener('click', this.off.bind(this));
        this.images.forEach(element => {element.addEventListener('click', this.display.bind(this))});
        this.right.addEventListener('click', this.toTheRight.bind(this));
        this.left.addEventListener('click', this.toTheLeft.bind(this));
    }
    off() {
        this.blackout.style.display ="none";
    }
    display(event) {
        this.blackout.style.display ="flex";
        this.img.src = event.target.src;
        this.rest.innerHTML = "";
        this.images.forEach(element => {this.rest.insertAdjacentHTML('beforeend', `<img src="${element.src}" data-type="${element.dataset.type}" data-id="${element.dataset.id}" alt="">`)})

        this.img.dataset.id = event.target.dataset.id;

        /* bottom bar */
        this.mini = this.blackout.querySelectorAll('.rest>*');
        this.mini.forEach(element => {element.addEventListener('click', this.swap.bind(this))});
    }
    swap(event) {
        this.img.src = event.target.src;
        this.img.dataset.id = event.target.dataset.id;
    }
    toTheRight() {
        this.img.dataset.id >= this.mini.length ? this.img.dataset.id = 0 : null;
        this.img.src = this.elements.querySelector(`[data-id="${(Number(this.img.dataset.id)+1).toString()}"]`).src;
        this.img.dataset.id = (Number(this.img.dataset.id)+1).toString();
    }
    toTheLeft() {
        this.img.dataset.id <= 1 ? this.img.dataset.id = this.mini.length+1 : null;
        this.img.src = this.elements.querySelector(`[data-id="${(Number(this.img.dataset.id)-1).toString()}"]`).src;
        this.img.dataset.id = (Number(this.img.dataset.id)-1).toString();
    }
}

const galCity = new Gallery(displayWindow2, 'city', '.city');
const galMeme = new Gallery(displayWindow1, 'meme', '.memes');
console.log(galCity);