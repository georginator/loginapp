
//array/list of users
var objPeople = [
	{
		username: "george",
		password: "franco"
	},
	{
		username:"isaac",
		password:"hartwick"
	},
	{
		username:"matt",
		password:"childs"
	}
]



function getInfo (){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value


	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			document.write("Welcome " + username + " ! You are logged in!")
			return
		}
	}
	document.write("incorrect username or password")
}


