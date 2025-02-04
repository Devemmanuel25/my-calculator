const bigscreen = document.getElementById('bigscreen')
    const smallscreen = document.getElementById('smallscreen')
    let operator=''
    let firstval=''
    let canclear= false 
    
    function displaynumber(num){
      if(canclear) {
        bigscreen.value=''
        canclear=false
      }  
        bigscreen.value += num
        
    }

    function deleteone(){
    bigscreen.value = bigscreen.value.slice(0,-1)
    }

    function clearscreen(){
        bigscreen.value=''
        smallscreen.value=''
        firstval = ''
        operator = ''
    }
    function display(sym){
        if(operator){
            solve()
        }

        if (sym ==='√' ){
            smallscreen.value= sym + bigscreen.value 
        }else{
            smallscreen.value=bigscreen.value+sym
        }

        if (sym ==='-' ){
            smallscreen.value= sym + bigscreen.value 
        }else{
            smallscreen.value=bigscreen.value+sym
        }

    
        firstval=bigscreen.value
        canclear=true
        operator=sym
        }
    
    function solve(){
        let result;
        let finalval=bigscreen.value
        if(operator === '+'){
            result=parseInt(firstval) + parseInt(finalval)
            smallscreen.value=firstval+operator+finalval+'='
        }
    

    
        else if(operator === '-'){
            result=parseInt(firstval)-parseInt(finalval)
            smallscreen.value=firstval+operator+finalval+'='
        }
    
        else if(operator ==='x' ){
            result=parseFloat(firstval)*parseFloat(finalval)
             smallscreen.value=firstval+operator+finalval+'='
        }
        
        else if(operator ==='/' ){
            result=parseFloat(firstval)/parseFloat(finalval)
            smallscreen.value=firstval+operator+finalval+'='
            bigscreen.value=result
        }

        else if(operator === '²'){
            result=parseFloat(firstval)**2
            smallscreen.value=firstval+operator+'='
        }

        else if(operator === '%'){
            result=parseFloat(firstval)/100
            smallscreen.value=firstval+operator+'='
        }

        else if (operator === '√'){
            result = parseFloat(firstval)** (1/2)
            smallscreen.value=operator+'('+ firstval +')'+'='
            
        }

        else if (operator ==='-'){
            result=parseFloat(firstval)* -1
            smallscreen.value=operator+'('+firstval +')'+'='
        }

    

        
        bigscreen.value=result
        canclear=true

    }

function maximise(){
    document.getElementById('calculator').style.display = 'block'
}
function closes(){
    document.getElementById('body').style.display = 'none'

}
function minimise(){
    document.getElementById('calculator').style.display = 'none'
}

    

    

