const  arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let a = arr1.length
let b = arr2.length

if (a > b) {
    console.log("Первый массив меньше второго")
}else if (b > a){
    console.log("Второй массив больше первого")
}else {
    console.log("Массивы равны")
}