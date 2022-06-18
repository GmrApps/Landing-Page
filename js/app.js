const countDown = () => {
    const countDate = new Date("December 31, 2022 00:00:00").getTime();
    const prezentTime = new Date().getTime();
    const gap = countDate - prezentTime;



    //how time works
    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;
    //calculate the gap
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textminutes = Math.floor((gap % hour) / minutes);
    const textseconds = Math.floor((gap % minutes) / second);


    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textminutes;
    document.querySelector(".second").innerText = textseconds;



}
setInterval(countDown, 1000);