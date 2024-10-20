let container =document.getElementById('root');


let card =[
    {
        img : "./Asset/img/code_icon.svg",
        heading:"TITLE 1",
        contant :"Lorem ipsum dolor sit ametr adipisicing elit. Laboriosam ",
        btn:"CODE 1"
    },
    {
        img : "./Asset/img/css3.svg",
        heading:"TITLE 2",
        contant :"Lorem ipsum dolor sit ametr adipisicing elit. Laboriosam ",
        btn:"CODE 2"
    },
    {
        img : "./Asset/img/html5.svg",
        heading:"TITLE 3",
        contant :"Lorem ipsum dolor sit ametr adipisicing elit. Laboriosam ",
        btn:"CODE 3"
    },
    {
        img : "./Asset/img/js.svg",
        heading:"TITLE 4",
        contant :"Lorem ipsum dolor sit ametr adipisicing elit. Laboriosam ",
        btn:"CODE 4"
    }   
]

card.forEach((value)=>{

    // creat a preant div 

    // let container = document.createElement('div');
    // container.className="container"  
    
    // console.log(container);

    let card_main_container=document.createElement('div');

card_main_container.className="card_main_container";
container.appendChild(card_main_container);



let card_main =document.createElement('div');
card_main.className="card_main";
card_main_container.appendChild(card_main);


let card_img = document.createElement('div');
card_img.className="card_img";
card_main.appendChild(card_img);

let img =document.createElement('img');
img.className='img';
img.src=value.img;

card_img.appendChild(img);


let contant_main = document.createElement('div');
contant_main.className="contant_main";
card_main.appendChild(contant_main);

let h2=document.createElement('h2');
h2.textContent=value.heading;

contant_main.appendChild(h2);


let p=document.createElement('p');
p.textContent=value.contant;

contant_main.appendChild(p);


let botton_main=document.createElement('div');
botton_main.className="botton_main";

contant_main.appendChild(botton_main);

 let btn=document.createElement('button');
 btn.className="btn";

 btn.textContent=value.btn;

 botton_main.appendChild(btn);
 



    // body.appendChild(container);
    container.appendChild(card_main_container);

});