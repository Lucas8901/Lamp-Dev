const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOf');
const lamp = document.getElementById('lamp');

function islampBrokem(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!islampBrokem ()){
        lamp.src = './img/ligada.jpg';
    }
    
}

function lampOf(){
    if(!islampBrokem ()){
        lamp.src = './img/desligada.jpg';
    }
    
}

function lampBrokem(){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOf.addEventListener('click', lampOf);
lamp.addEventListener('dblclick', lampBrokem)