

document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');
    let likes = document.getElementsByClassName('.likes');
    let list = document.getElementById('list');

        // likes.addEventListener('click', () => console.log(".likes clicked"))
        plus.addEventListener('click', () => counter.innerText +=1)
        minus.addEventListener('click',()=> counter.innerText -=1)
        const counter;
        counter.addEventListener('click', ()=>{

        })
        
        

        

});
// setInterval(function(){
//     for(count=0;count < 10;count++){
//         ("").html(count);
//     }
// },1000);
function counter(){
    setInterval (function () { var a=document.getElementById("counter"),b=parseInt(a.innerText)
    a.innerText=b+1;
    },1000);
}
function decrement(minus) {
    if(minus.innerHTML > 0) {
            minus.innerHTML--;
            reduce=parseInt(sub)+1;
    }
    }


function increment(plus) {
    plus.innerHTML++;
    plus.addEventListener("click",);
}





