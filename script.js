const secHand = document.querySelector('.sec-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    // console.log(seconds);
    const secDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();
    // console.log(minutes);
    const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    // console.log(hours);
    const hourDegrees = ((hours / 12) * 360 + (minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setTime, 1000);
setTime();