//document.getElementById("count-el").innerText = 5

// let count = 0;

// let myAge = 33
// console.log(myAge)

// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint);
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint);

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// // Setting up the the race 🏎 🏎 🏎
// countdown()
// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎
// countdown()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sumLaps(x,y,z) {
//     let sum = x + y + z;
//     console.log(sum)
// } 

// sumLaps(lap1,lap2, lap3)


// let lapsCompleted = 0

// function lap(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// lap()
// lap()
// lap()

let count = 0
function increment(){
    count = count + 1
    document.getElementById('count-el').innerText = count
}

function save() {
    console.log(count)
}

save()