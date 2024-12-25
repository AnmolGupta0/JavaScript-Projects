const form=document.querySelector('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    const BMI=((weight*10000)/(height*height));
    if(height=='' || height<0 || height==NaN){
        result.innerHTML='Please give a valid height';
    }
    if(weight=='' || weight<0 || weight==NaN){
        result.innerHTML='Please give a valid weight';
    }
    if(BMI<18.6){
        result.innerHTML=`BMI=${BMI.toFixed(2)} <p>Under Weight</p>`;
    }
    if(BMI>18.6 && BMI < 24.9){
        result.innerHTML=`BMI=${BMI.toFixed(2)} <p>Normal Range</p>`;
    }
    if(BMI> 24.9){
        result.innerHTML=`BMI=${BMI.toFixed(2)} <p>Over Weight</p>`;
    }
   
})

