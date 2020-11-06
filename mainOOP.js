class Gallery {
    constructor(type) {

        this.main = document.querySelector('.main');
        this.blackout = document.querySelector('.blackout');
        this.blackoutX = document.querySelector('.blackout > .x-div');
        this.images = document.querySelectorAll(`[data-type="${type}"]`);
        this.rest = document.querySelector('.rest');
        this.img = document.querySelector('.imgDiv>img');

        this.right = document.querySelector('.right')
        this.left = document.querySelector('.left')

        this.blackoutX.addEventListener('click', this.off.bind(this))
        this.images.forEach(element => {element.addEventListener('click', this.display.bind(this))});
        this.right.addEventListener('click', this.toTheRight.bind(this))
        this.left.addEventListener('click', this.toTheLeft.bind(this))
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
        this.mini = document.querySelectorAll('.rest>*');
        this.mini.forEach(element => {element.addEventListener('click', this.change.bind(this))});
    }
    change(event) {
        this.img.src = event.target.src;
        this.img.dataset.id = event.target.dataset.id;
    }
    toTheRight() {
        this.img.dataset.id == this.mini.length ? this.img.dataset.id = 0 : null;
        this.img.src = this.blackout.querySelector(`[data-id="${(Number(this.img.dataset.id)+1).toString()}"]`).src;
        this.img.dataset.id = (Number(this.img.dataset.id)+1).toString();
    }
    toTheLeft() {
        this.img.dataset.id == 1 ? this.img.dataset.id = this.mini.length+1 : null;
        this.img.src = this.blackout.querySelector(`[data-id="${(Number(this.img.dataset.id)-1).toString()}"]`).src;
        this.img.dataset.id = (Number(this.img.dataset.id)-1).toString();
    }
}

const galMeme = new Gallery('meme');
const galCity = new Gallery('city');