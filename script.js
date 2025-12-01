const form=document.querySelector('form')
//const weight=parseInt(document.querySelector('#weight')) this will give u empty value ad we want it at event not on page loading
let BMI;
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)   //get value and convert it into int
    const weight=parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results')
    if(height===''||height<0 || isNaN(height)){
        results.innerHTMl=`please enter a valid height ${height}`
    }
    else if(weight===''||weight<0 || isNaN(weight)){
        results.innerHTMl=`please enter a valid height ${weight}`
    }else{
        BMI= (weight/((height*height)/10000)).toFixed(2)   //round off to 2 decimal value
    }
    let msg=''
    if(BMI<18.6){
        msg='underWeight'
        document.body.style.backgroundColor='#7566c9'
        results.innerHTML=`Your BMI is ${BMI} and you are ${msg}`
    }
    else if(BMI>18.6 && BMI<24.9){
        msg='Normal'
        document.body.style.backgroundColor='#81C784'
        results.innerHTML=`Your BMI is ${BMI} and you are ${msg}`
    }
    else{
        msg='OverWeight'
        document.querySelector('body').style.backgroundColor='#E57373'
        results.innerHTML=`Your BMI is ${BMI} and you are ${msg}`
    }
    
})