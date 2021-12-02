function calculator() {
    var num1=parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var operators = document.getElementById("operators").value
    switch (operators) {
        case "+":
            document.getElementById("result").value = num1+num2;
            break;
            case "-":
                document.getElementById("result").value = num1-num2;
                break;
            case "/":
                if(num1!=0&&num2!=0){
                    document.getElementById("result").value = num1/num2;
                    break;
                }
                else{
                    alert("please dont input zero")
                    break;
                }
            case "*":
                if(num1!=0&&num2!=0){
                    document.getElementById("result").value = num1*num2;
                    break;
                }
                else{
                    alert("please dont input zero")
                    break;
                }
                
        default:
            break;
    }

}