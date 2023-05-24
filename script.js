let counter = document.getElementById('countEl')
const increament = document.getElementById('add')
const decreament = document.getElementById('sub')
const save = document.getElementById('save')
const clear = document.getElementById('clear')
const saveEntry = document.getElementById('prev-entry')
let count = 0

increament.addEventListener('click', ()=>{
    count += 1
counter.textContent = count;
})

decreament.addEventListener('click', ()=>{
   count -= 1
counter.textContent = count;
})

save.addEventListener('click', ()=>{
   let preEntry = count + " - "
 saveEntry.textContent += preEntry
 counter.textContent = 0
 })

 clear.addEventListener('click', ()=> {
    saveEntry.textContent = " Previous Entries: "
 })
// for(let counter = 0; counter <= counter.lenght; counter++){
//     counter.textContent = counter[i];
//  }