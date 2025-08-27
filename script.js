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


document.getElementById('call1').addEventListener("click", function(){
    let coin = document.getElementById("coins").innerText;
    if(coin >= 20){
        alert("📞 Calling National Emergency Service 999...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
    }
    else{
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})


document.getElementById('call2').addEventListener("click", function(){
    let coin = document.getElementById("coins").innerText;
    if(coin >= 20){
        alert("📞 Calling Police Helpline Service 999...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
    }
    else{
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})


