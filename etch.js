const main = document.querySelector('.options');
const btn2 = document.querySelector('.two');


btn2.addEventListener('click', function (e) {


    for (let i=0; i<4096;i++){

        const box = document.createElement('div');
        main.appendChild(box);
        box.classList.add('box');
    
    }

    const canvas = document.querySelectorAll('.box');

    console.log(canvas);

    for (let k=0; k<4096;k++){
        canvas[k].addEventListener('mouseover', function (e){

            setInterval(() => {
                canvas[k].style.background = 'black';;
            }, 10);
            

        });
    }

});

