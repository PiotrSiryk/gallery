const main = document.querySelector('.main');
const blackout = document.querySelector('.blackout');
const blackoutX = document.querySelector('.blackout > .x-div');
const images = document.querySelectorAll('.main>div>img');
const rest = document.querySelector('.rest');
blackout.style.display ="none"

blackoutX.addEventListener('click', function() {
    blackout.style.display ="none"
})



main.addEventListener('click', function(event) {
    const img = document.querySelector('.imgDiv>img');
    if(event.target.tagName == 'IMG') {
        rest.innerHTML = ""
        images.forEach((element)=> {
            if(element.dataset.type == event.target.dataset.type) {
                rest.insertAdjacentHTML('beforeend', `<img src="${element.src}" data-type="${element.dataset.type}" data-id="${element.dataset.id}" alt="">`)
            }
        })
        blackout.style.display ="flex";
        img.src = event.target.src;
        img.dataset.type = event.target.dataset.type;
        img.dataset.id = event.target.dataset.id;
    }
});

blackout.addEventListener('click', function(event) {
    if(event.target.tagName == 'IMG') {
        const img = document.querySelector('.imgDiv>img');
        rest.innerHTML = ""
        images.forEach((element)=> {
            if(element.dataset.type == event.target.dataset.type) {
                rest.insertAdjacentHTML('beforeend', `<img src="${element.src}" data-type="${element.dataset.type}" data-id="${element.dataset.id}" alt="">`)
            }
        })
        blackout.style.display ="flex";
        img.src = event.target.src;
        img.dataset.type = event.target.dataset.type;
        img.dataset.id = event.target.dataset.id;
    }
    if(event.target.classList.contains('left')) {
        const img = document.querySelector('.imgDiv>img');
        if(img.dataset.id == 1) {
            img.dataset.id = 4;
        }
        const arg = (Number(img.dataset.id)-1).toString()
        console.log(arg);
        const targetImg = blackout.querySelector(`[data-id="${arg}"]`);
        img.src=targetImg.src
        img.dataset.id = arg;
        console.log(targetImg);

    }
    if(event.target.classList.contains('right')) {
        const img = document.querySelector('.imgDiv>img');
        if(img.dataset.id == 3) {
            img.dataset.id = 0;
        }
        const arg = (Number(img.dataset.id)+1).toString()
        console.log(arg);
        const targetImg = blackout.querySelector(`[data-id="${arg}"]`);
        img.src=targetImg.src
        img.dataset.id = arg;
        console.log(targetImg);
    }
});

