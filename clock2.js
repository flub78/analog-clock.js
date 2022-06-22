// Javascript for an analog clock

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

/*
 * Every second, get the local time 
 * and rotate the needles accordingly
 */
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = (day.getSeconds() + (day.getMilliseconds() / 1000)) * deg;

    // Milliseconds are only useful to refresh more than once per second to
    // get a smoothlier move of the second needle.

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000)
