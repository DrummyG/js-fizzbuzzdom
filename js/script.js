const cont = document.querySelector('.riga')

for (let i = 1; i <= 100; i++){
    if(i % 15 == 0) {
        cont.innerHTML += `<div class="square big">FizzBuzz</div>`
    } else if(i % 5 == 0) {
        cont.innerHTML +=`<div class="square medium">Buzz</div>`
    } else if(i % 3 == 0) {
        cont.innerHTML +=`<div class="square smol">Fizz</div>`
    } else{
        cont.innerHTML +=`<div class="square numb">${i}</div>`
    }
}

