const clock = document.querySelector('.clock');
console.log(clock)

setInterval((e) => {
 let date= new Date();
 clock.innerHTML= date.toLocaleTimeString()
}, 1000);
