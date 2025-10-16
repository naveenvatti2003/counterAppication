let counterValue = document.getElementById("counterValue")

function onIncrese() {
    let previousValue=counterValue.textContent
    let updatedValue=parseInt(previousValue)+1
    counterValue.textContent=updatedValue
    if (updatedValue>0) {
        counterValue.style.color="green"
    }
    else if(updatedValue<0){
        counterValue.style.color="red"
    }
    else{
        counterValue.style.color="black"
    }
}

function onDecrese() {
    let previousValue=counterValue.textContent
    let updatedValue=parseInt(previousValue)-1
    counterValue.textContent=updatedValue
    if (updatedValue>0) {
        counterValue.style.color="green"
    }
    else if(updatedValue<0) {
        counterValue.style.color="red"
    }
    else {
        counterValue.style.color="black"
    }
}
function Reset(){
       let count=0
       counterValue.style.color="black"
       counterValue.textContent=count 
}

    
