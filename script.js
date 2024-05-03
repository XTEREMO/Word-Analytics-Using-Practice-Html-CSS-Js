let textEL = document.querySelector('.wordField');
let wordEL = document.querySelector('.word');
let charEL = document.querySelector('.char');
let twitterEL = document.querySelector('.twitter');
let facebookEL = document.querySelector('.facebook');


let twitterLimit = 280;
let faceLimit = 22000;

twitterEL.textContent = 280;
facebookEL.textContent = 22000;

let calculate = () =>{
    let data = textEL.value;
    if(data.includes('  ')){
        alert('You can not use dubble space');
        textEL.value = data.replace('  ','');
    }else{
        if (data.length === 0){
            wordEL.textContent = 0;   
        }else{
            wordEL.textContent = data.trim().split(' ').length;
        }
    
        charEL.textContent = data.length;
    
        if(data.length<280) {
            twitterEL.textContent = twitterLimit-data.length;
            twitterEL.style.color="black";
        }else{
            twitterEL.textContent = 0;
            twitterEL.style.color="red";
        }
    
    
        if(data.length<22000) {
            facebookEL.textContent = faceLimit-data.length;
            facebookEL.style.color = "black";
        }else{
            facebookEL.textContent = 0;
            facebookEL.style.color = "red";
        }
    }
    

}




textEL.addEventListener("input",calculate);



