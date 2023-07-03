const main = document.querySelector('.options');
const btn = document.querySelector('.trigger');

btn.addEventListener('click', function (e) {

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