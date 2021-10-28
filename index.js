function calculator(num1, num2, operation){
    if(!num1 || !num2 || !operation){
        console.log('Please provide all required fields..')
    }
    if(operation==='+'){
        console.log(num1+num2)
    }
    if(operation==='-'){
        if(num1>num2){
            console.log(num1-num2)
        }else{
            console.log(num2-num1)
        }
    }
    if(operation==='*'){
        console.log(num1*num2)
    }
    if(operation==='/'){
        console.log(num1/num2)
    }
    if(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){
        console.log('Please provide valid arithmetical operation..')
    }
    
}

module.exports.calculator = calculator