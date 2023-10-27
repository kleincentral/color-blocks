console.log('🟥 🟦 🟩 🟨');

function buttonclick(color) {
    // let clickCreate = document.getElementById(id);
    let clickCreate = document.getElementById('blocks');
    console.log(clickCreate)
    clickCreate.innerHTML += `<p onclick="deleteClick(event, '${color}')" class="block ${color}-fill"></p>`
    let update = document.getElementById(`${color}-count`)
    let newText = Number(update.textContent);
    newText += 1
    update.textContent = newText
    // if (id === `red-btn`){
    //     clickCreate.innerHTML += `<p onclick="deleteClick(event, 'red')" class="block red-fill"></p>`
    //     let update = document.getElementById('red-count')
    //     let newText = Number(update.textContent);
    //     newText += 1
    //     update.textContent = newText
    // }
    // else if (id === "blue-btn") {
    //     clickCreate.innerHTML += `<p onclick="deleteClick(event, 'blue')" class="block blue-fill"></p>`
    //     let update = document.getElementById('blue-count')
    //     let newText = Number(update.textContent);
    //     newText += 1
    //     update.textContent = newText
    // }
    // else if (id === "green-btn") {
    //     clickCreate.innerHTML += `<p onclick="deleteClick(event, 'green')" class="block green-fill"></p>`
    //     let update = document.getElementById('green-count')
    //     let newText = Number(update.textContent);
    //     newText += 1
    //     update.textContent = newText    
    // }
    // else if (id === "yellow-btn") {
    //     clickCreate.innerHTML += `<p onclick="deleteClick(event, 'yellow')" class="block yellow-fill"></p>`
    //     let update = document.getElementById('yellow-count')
    //     let newText = Number(update.textContent);
    //     newText += 1
    //     update.textContent = newText    
    // }
}


function deleteClick(event, color){
    console.log('Deleting', event.target);
    event.target.remove();
    let update = '';
    update = document.getElementById(`${color}-count`)
    // if (color === 'blue') {
    //     update = document.getElementById('blue-count')
    // }
    // else if (color === 'red') {
    //     update = document.getElementById('red-count')
    // }
    // else if (color === 'yellow') {
    //     update = document.getElementById('yellow-count')
    // }
    // else if (color === 'green') {
    //     update = document.getElementById('green-count')
    // }
    // else {
    //     console.log("ERROR!")
    //     return
    // }
    let newText = Number(update.textContent);
    newText -= 1
    update.textContent = newText
}