let count = 0;
function heartCounter(heartId) {
    const heart = document.getElementById(heartId);
    const heartCount = document.getElementById('heart-count');
    heart.addEventListener("click", function () {
        count++;
        heartCount.innerText = count;
    });
}
heartCounter("heart1");
heartCounter("heart2");
heartCounter("heart3");
heartCounter("heart4");
heartCounter("heart5");
heartCounter("heart6");
heartCounter("heart7");
heartCounter("heart8");
heartCounter("heart9");
