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






document.getElementById('call1').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling National Emergency Service 999...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">National Emergency</h1>
                    <p class="text-[#5C5C5C] text-xs">999</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})


document.getElementById('call2').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Police Helpline Service 999...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Police Helpline</h1>
                    <p class="text-[#5C5C5C] text-xs">999</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})

document.getElementById('call3').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Fire Service 999...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Fire Service</h1>
                    <p class="text-[#5C5C5C] text-xs">999</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})

document.getElementById('call4').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Ambulance 1994-999999...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Ambulance</h1>
                    <p class="text-[#5C5C5C] text-xs">1994-999999</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})

document.getElementById('call5').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Women & Child Helpline 109...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Women & Child Helpline</h1>
                    <p class="text-[#5C5C5C] text-xs">109</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})

document.getElementById('call6').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Anti-Corruption Helpline 106...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Anti-Corruption Helpline</h1>
                    <p class="text-[#5C5C5C] text-xs">106</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})

document.getElementById('call7').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Electricity Helpline 16216...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Electricity Helpline</h1>
                    <p class="text-[#5C5C5C] text-xs">16216</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})

document.getElementById('call8').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Brac Helpline 16445...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Brac Helpline</h1>
                    <p class="text-[#5C5C5C] text-xs">16445</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})



document.getElementById('call9').addEventListener("click", function () {
    let coin = document.getElementById("coins").innerText;
    if (coin >= 20) {
        alert("📞 Calling Bangladesh Railway Helpline 163...");
        coin -= 20;
        document.getElementById('coins').innerText = coin;
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const section = document.createElement("section");
        section.className = "p-5";
        section.innerHTML = 
            `<div class="bg-gray-300 rounded-xl p-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-sm">Bangladesh Railway Helpline</h1>
                    <p class="text-[#5C5C5C] text-xs">163</p>
                </div>
                <div class="text-xs">${timeString}</div>
            </div>`;
        document.getElementById("call-history").appendChild(section);
    }
    else {
        alert("❌ Insufficient Coin. You need atleast 20 coins to proceed!")
    }
})


