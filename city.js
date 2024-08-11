// 'Chennai': population=46545
//            literacyrate=90.20
//            language='Tamil'
// 'Banglore': population=34324
//            literacyrate=80.20
//            language='kannada'
// 'Mumabi': population=4345
//            literacyrate=70.20
//            language='marathi'
// 'Delhi': population=24324
//            literacyrate=60.20
//            language='Hindi'
const button= document.querySelector('button')
let resultdiv=document.createElement('div')
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
   
button.addEventListener('click',displaystats)

function displaystats() {
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population=0, literacyrate=0,language=0;
    switch(city){
         case 'Banglore':
         population=34324
         literacyrate=80.20
         language='kannada'
         break

         case'Chennai':
            population=46545
            literacyrate=90.20
            language='Tamil'
            break

         case'Mumabi': 
            population=4345
            literacyrate=70.20
            language='marathi'
            break

         case'Delhi':
           population=24324
           literacyrate=60.20
           language='Hindi'
           break
    }
    let text=`The Indian city of ${city} has a population ${population} Language spoken is ${language} and litearcy rate is ${literacyrate}`
    console.log(text) 
    
    document.getElementById('result').innerHTML=text
    }
