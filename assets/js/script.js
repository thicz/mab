let carroselNumber = 0;
let modalKey;

tourismJson.map((item, index) =>{
    let itemMab = document.querySelector('.modal--guide').cloneNode(true);

    itemMab.setAttribute('data-key', index);
    itemMab.querySelector('.text h3').innerHTML = item.name;
    itemMab.querySelector('.modal--guide img').src = item.img;
    itemMab.addEventListener('click', (e)=>{
        let key = e.target.closest('.modal--guide').getAttribute('data-key');
        
        document.querySelector('.open--title h1').innerHTML = tourismJson[key].name;
        document.querySelector('.tourism--text h1').innerHTML = `Sobre ${tourismJson[key].name}`;
        document.querySelector('.tourism--p p').innerHTML = tourismJson[key].description;
        document.querySelector('.second h1').innerHTML = `O que fazer em ${tourismJson[key].name}`;
        document.querySelector('.secondp p').innerHTML = tourismJson[key].description2;
        document.querySelector('.video').innerHTML = tourismJson[key].youtube;

        let quantImg = tourismJson[key].images.length;
        modalKey = quantImg - 1;
        /* Preenchimento Carrosel de Imagens */
        document.querySelectorAll('.img img').forEach((item, sizeIndex)=>{
            item.src = tourismJson[key].images[sizeIndex];
        });

        document.querySelector('.windowArea').style.opacity = '0';
        document.querySelector('.windowArea').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('.windowArea').style.opacity = '1';
        }, 100)

        

    });

    document.querySelector('.guide').append(itemMab);
});

document.querySelector('.closer img').addEventListener('click', ()=>{

    carroselNumber = 0;
    console.log(carroselNumber)
    document.querySelector('.windowArea').style.opacity = '0';
    setTimeout(()=>{
        document.querySelector('.windowArea').style.display = 'none';
    }, 500)
});

/* Click no carrosel das images */

function prevSlider() {
    if(carroselNumber == 0) {
        carroselNumber = modalKey;
        document.querySelector('.img').style.marginLeft = `calc(${carroselNumber} * -400px)`;
    } else {
        carroselNumber--;
        document.querySelector('.img').style.marginLeft = `calc(${carroselNumber} * -400px)`; 
    }
    
}

function nextSlider() {
    if(carroselNumber == modalKey) {
        carroselNumber = 0;
        document.querySelector('.img').style.marginLeft = `calc(${carroselNumber} * -400px)`;
    } else {
        carroselNumber++;
        document.querySelector('.img').style.marginLeft = `calc(${carroselNumber} * -400px)`;  
    }
    
};

document.querySelector('.slider--return').addEventListener('click', prevSlider);
document.querySelector('.slider--next').addEventListener('click', nextSlider);


document.querySelector('.contact').addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('.windowContact').style.opacity = '0';
        document.querySelector('.windowContact').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('.windowContact').style.opacity = '1';
        }, 100)
});

document.querySelector('.secondCloser img').addEventListener('click', ()=>{
    document.querySelector('.windowContact').style.opacity = '0';
    setTimeout(()=>{
        document.querySelector('.windowContact').style.display = 'none';
    }, 500)
});

document.querySelector('.sobrelink').addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('.windowSobre').style.opacity = '0';
        document.querySelector('.windowSobre').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('.windowSobre').style.opacity = '1';
        }, 100)
});

document.querySelector('.closerSobre img').addEventListener('click', ()=>{
    document.querySelector('.windowSobre').style.opacity = '0';
    setTimeout(()=>{
        document.querySelector('.windowSobre').style.display = 'none';
    }, 500)
});

document.querySelector('.menu--icon').addEventListener('click', ()=> {
    let headerMenu = document.querySelector('header .menu')
    headerMenu.style.display = 'flex';

    setTimeout(()=>{
        headerMenu.style.right = '0';
    }, 100)

    

});

document.querySelector('.menu--closer').addEventListener('click', ()=>{
        
        let headerMenu = document.querySelector('header .menu');

        headerMenu.style.right = '-50%';
        setTimeout(()=>{
            document.querySelector('header .menu').style.display = 'none';
        }, 300)
        
        
});