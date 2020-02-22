const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);

    arrow.style.transform = `rotate(${data.coords.heading}deg`;
    console.log(data.coords.heading);
  },
  err => {
    console.log(err);
    alert('Must allow this application to use your location');
  }
);
