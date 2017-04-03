/*
This is empty on purpose! Your code to build the resume will go here.
*/

var name = "Adib Ali";
var role = "Student";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName + formattedRole);

var skills = ["Cooking", "Sleeping", "Procrastinating"];

var bio = {
	"name" : name,
	"role" : role,
	"mobile" : "017631496009",
	"email" : "md.adib.ali@gmail.com",
	"twitter" : "twitter.com/adib__ali",
	"picture_URL" : "images/fry.jpg",
	"welcome_message" : "Konnichiwa bitches",
	"skills" : skills

}

var mobile = HTMLmobile.replace("%data%", bio.mobile);
var email = HTMLemail.replace("%data%", bio.email);
var twitter = HTMLtwitter.replace("%data%", bio.twitter);
var bioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var skills = HTMLskills.replace("%data%", bio.skills);
var work = {
	"position" : "Werkstudent",
	"employer" : "Lufthansa Technik",
	"years_worked" : 1,
	"city" : "Hamburg"
};

var education = {
	"schools" : [{
		"name" : "HAW Hamburg",
		"years" : "2013-now",
		"city" : "Hamburg"	
	},
	{
		"name" : "GMI",
		"years" : "2011-2013",
		"city" : "Kajang, Selangor"
	}]

};

$("#header").append(mobile + email + twitter + bioPic + welcomeMsg + skills);
$("#header").append(work["position"] + '\xa0' + education.schools[0].name);