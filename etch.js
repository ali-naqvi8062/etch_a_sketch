const main = document.querySelector('.options');
const btn = document.querySelector('.trigger');
const boxes = document.createElement('div');
const nmb = document.querySelectorAll('.box').length;



btn.addEventListener('click', function (e) {

    const nmb = document.querySelectorAll('.box').length;
    console.log(nmb);

    if (nmb == 256){
        return;
    }

    for (let i=0; i < 16; i++){

        const boxes = document.createElement('div');
        main.appendChild(boxes);
        boxes.classList.add('row');
            
        for (let k=0; k < 16; k++){
    
            const miniboxes = document.createElement('div');
            boxes.appendChild(miniboxes);
            miniboxes.classList.add('box')

        }
    }

    



});