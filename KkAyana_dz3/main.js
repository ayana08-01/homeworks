let number1 = prompt("Введите первое число")
let num1 = number1

let number2 = prompt("Введите второе число")
let num2 = number2

const func = ( num1, num2 ) => {
    if (num1 > num2){
        console.log("Первое число больше второго")
    } else if (num1 < num2){
        console.log("Второе число больше первого")
    } else {
        console.log("Числа равны")
    }
}

func(num1, num2)