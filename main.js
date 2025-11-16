let countDate = new Date("Dec 31, 2025 23:59:59").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let diff = countDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days + " يوم";
    document.querySelector(".hours").innerHTML = hours + " ساعة";
    document.querySelector(".minutes").innerHTML = minutes + " دقيقة";
    document.querySelector(".seconds").innerHTML = seconds + " ثانية";
}, 1000);
