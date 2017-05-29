
//array/list of users
var zodiac = [
	{
		image: "img/aquarius.png",
		sign: "aquarius",
	},
	{
		image: "img/pisces.png",
		sign:"pisces",
	},
	{	
		image: "img/aries.png",
		sign:"aries",	
	},
	{
		image: "img/taurus.png",
		sign:"taurus",
	},
	{
		image: "img/gemini.png",
		sign:"gemini",
	},
	{
		image: "img/cancer.png",
		sign:"cancer",
	},
	{
		image: "img/leo.png",
		sign:"leo",
	},
	{
		image: "img/virgo.png",
		sign:"virgo",
	},
	{
		image: "img/libra.png",
		sign:"libra",
	},
	{
		image: "img/scorpio.png",
		sign:"scorpio",
	},
	{
		image: "img/sagittarius.png",
		sign:"sagittarius",
	},
	{
		image: "img/capricorn.png",
		sign:"capricorn",
	}
]



function horoscope () {

	var userdata = document.getElementById("userdata")
	console.log(userdata)
	console.log("users value is: " + userdata.value)




	for(i = 0; i < zodiac.length; i++) {



		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			document.getElementById("yourSign").textContent = userdata.value
			document.getElementById("icon").src = zodiac[i].image
			return
		}
		document.getElementById("yourSign").textContent = "Invalid horoscope sign"
		document.getElementById("yourHoroscope").textContent = ""
		document.getElementById("icon").src = ""
	}
}


