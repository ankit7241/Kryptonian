var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
document.querySelector(".change").addEventListener("click", theme);
function theme() {

        if(document.querySelector(".change").innerHTML=="OFF") {
            $(".change").text("ON");
        } else {
            $(".change").text("OFF");
        }

    console.log(document.querySelector(".change").innerHTML);
    document.querySelector(".themeChanger").classList.toggle("dark");
    document.querySelector(".subHeading").classList.toggle("darkSubHeading");
    document.querySelector(".subsubHeading").classList.toggle("darkSubHeading");
    document.querySelector(".headingContent").classList.toggle("darkHeading");
    document.querySelector(".subHeadingContent").classList.toggle("darkHeading");
    document.querySelector(".container").classList.toggle("dark");
    let coin=document.querySelectorAll(".container .coin-price div h1");
    for(let i=0;i<8;i++)
    {
        coin[i].classList.toggle("dark");
    }
    var box=document.querySelectorAll(".coin-price");
    for(let i=0;i<4;i++)
    {
        box[i].classList.toggle("darkHeadingBox");
    }
    document.querySelector("body").classList.toggle("dark");
    document.querySelector(".mode").classList.toggle("modeColor");
    document.querySelector(".lastFont").classList.toggle("darkLastHeading");

}

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});
