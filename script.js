let order = []
let clickedOrder = []
let score = 0;

// 0 = verder
//  1 = vermelho
//  2 amarelo 
//  3 = azul

// return Math.random() * (max - min) + min;

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
// const button = document.querySelector('.again').addEventListener('click', () => {

const pontuaçao =document.querySelector(".score")


// })
alert("Bem vindo ao game")
alert("Iniciando um novo Jogo")
shuflerOrder();

let colorList = [red,blue,yellow,green];
adicionaClicks();

function shuflerOrder() {
    let init = 0
    console.log('executei dnv')
    clickedOrder = []
    let colorOrder = Math.floor(Math.random() * 4)
    // console.log(colorOrder)
    order.push(colorOrder);
    for(var cor of order){
        init +=1000
        addColor(cor,init);
        // removeColor();
        
    }
}

function adicionaClicks(){
    for(var c in colorList){
       colorList[c].addEventListener('click',(e)=>{
            if(e.target.className =='red'){
                clickedOrder.push(0)
                compare()
                

            }
            if(e.target.className =='blue'){
                clickedOrder.push(1)
                compare()

            }
            if(e.target.className =='yellow'){
                clickedOrder.push(2)
                compare()

            }
            if(e.target.className =='green'){
                clickedOrder.push(3)
                compare()

            }
        

       })
    }

}

function compare(){
    console.log(clickedOrder.length)
    console.log(order.length)
    if(clickedOrder.length >= order.length){
        // console.log(clickedOrder.toString() )
        if(clickedOrder.toString() === order.toString()){
            console.log('e igual')
            shuflerOrder();
            score +=1
            
        }else{
            console.log('e diferente')
            order = []
            score = 0 
            shuflerOrder();
            alert('voce Perdeu')

        }

    }
    pontuaçao.innerHTML = score
    
}


function addColor(cor,interval){
    function Color(){
        colorList[cor].classList.toggle('selected')
    }
    setTimeout(Color,2000+interval)
    setTimeout(Color,3000+interval)
    
}

// function removeColor(cor){
//     function Color(){
//         colorList[cor].classList.toggle('selected')
//     }
//     setTimeout(Color,2000)
    
// }