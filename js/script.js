
const btn = document.querySelector(".submit");
const input =document.querySelector(".Entrance-number");
const ansewr =document.querySelector(".input-ansewr");
input.addEventListener("input" ,() => btn.classList.add("show"));
btn.addEventListener("click",() => ansewr.classList.add("show-ansewr"));
btn.addEventListener("click" ,() => fibo(input.value));
input.addEventListener("keypress" ,(e) => {
    if(e.keyCode === 13) {
        fibo(input.value);
        ansewr.classList.add("show-ansewr");
    }
});

function fibo(num) {
   var arr = []
    for (let i = 0; i < Number(num) + 1; i++) {
        if (i<2){
            arr.push(i);
        }else{
            let res= arr[i-1]+arr[i-2]
            arr.push(res)
            
        }
        
    }
    
    
    if(num ==0 || num <0){
        document.querySelector(".main").innerHTML="The entered number is not correct"
        document.querySelector(".next").innerHTML=" "
        document.querySelector(".sub").innerHTML="  "
        
    }else if (num==1){
    
        document.querySelector(".next").innerHTML="1"
        document.querySelector(".main").innerHTML="0"
        document.querySelector(".sub").innerHTML="  "
    
    }else{
        console.log(arr);
        let next= document.querySelector(".next").innerHTML= arr[num];
        let main= document.querySelector(".main").innerHTML= arr[num-1];
        let sub= document.querySelector(".sub").innerHTML= arr[num-2];
    }
    arr.slice(0,arr.length)
    };