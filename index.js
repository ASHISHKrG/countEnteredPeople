// javascript

//let bonusPoints = 50
//console.log(bonusPoints)
//bonusPoints += 1
//console.log(bonusPoints)
// javascript
let previousEntriesEl = document.getElementById("previousentries-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
//console.log(countEl)


console.log(previousEntriesEl)
let count= 0
function increment(){
   // console.log("Clicked")
    count += 1
    countEl.innerText =count
    
}

function save(){
    let preEntry = count + " - "
    previousEntriesEl.innerText += preEntry
   countEl.textContent = 0
    
    console.log(count)
    count = 0
}


let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapTime() {
    let lapTime = lap1 + lap2 + lap3
    console.log(lapTime)
}

lapTime()

let lapsCompleted = 0

function incrementLap() {
    lapsCompleted += 1
}

incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)


let name =" Ashish Kr. Gupta "
let greeting ="Hi, my name is "

let myGreeting= greeting +","+ name +" ! "
console.log(myGreeting)
