
//array/list of users
var zodiac = [
	{
		sign: "aquarius",
		info:"Progressive, original, independent, humanitarian"
	},
	{
		sign:"pisces",
		info:" Compassionate, artistic, intuitive, gentle, wise, musical"
	},
	{
		sign:"aries",	
		info:"Courageous, determined, confident, enthusiastic, optimistic, honest, passionate"
	},
	{
		sign:"taurus",
		info:"Reliable, patient, practical, devoted, responsible, stable"
	},
	{
		sign:"gemini",
		info:"Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas"
	},
	{
		sign:"cancer",
		info:"Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive"
	},
	{
		sign:"leo",
		info:"Creative, passionate, generous, warm-hearted, cheerful, humorous"
	},
	{
		sign:"virgo",
		info:"Loyal, analytical, kind, hardworking, practical"
	},
	{
		sign:"libra",
		info:"Cooperative,diplomatic, gracious, fair-minded, social"
	},
	{
		sign:"scorpio",
		info:"Resourceful, brave, passionate, stubborn, a true friend"
	},
	{
		sign:"sagittarius",
		info:"Generous, idealistic, great sense of humor"
	},
	{
		sign:"capricorn",
		info:"Responsible, disciplined, self-control, good managers"
	}
]



function getInfo () {

	var userdata = document.getElementById("userdata").value
	


	for(i = 0; i < zodiac.length; i++) {
		if(userdata == zodiac[i].sign) {
			document.write("You are " + zodiac[i].info)
			return
		}
	}
	document.write("incorrect zodiac entry")
}


