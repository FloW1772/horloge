function updateClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
  
    const hourAngle = hour * 360 / 12;
    const minuteAngle = minute * 360 / 60;
    const secondAngle = second * 360 / 60;
  
    const hourElement = document.getElementById('hour');
    hourElement.style.transform = `rotate(${hourAngle}deg)`;
  
    const minuteElement = document.getElementById('min');
    minuteElement.style.transform = `rotate(${minuteAngle}deg)`;
  
    const secondElement = document.getElementById('sec');
    secondElement.style.transform = `rotate(${secondAngle}deg)`;
  }
  
  setInterval(updateClock, 1000);
  