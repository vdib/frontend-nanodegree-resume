
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedName + formattedRole);

var work = {
	"jobs" : [{
		"employer" : "Lufthansa Technik",
		"title" : "Werkstudent",
		"location" : "Hamburg",
		"dates" : "Sept - Dec 2016",
		"description" : "Inventory with SAP"
	}]
};

var projects = {
	"projects" : [{
		"title" : "Closed-loop control of locations of users and autonomics vehicles",
		"dates" : "Winter Semester 16/17",
		"description" : "Developing autonomous flying system of a drone",
		"images" : ["images/Arduino.jpg", "images/IMAG2185.jpg", "images/IMAG2186.jpg", "images/IMAG2188.jpg"]
	}]
}

var bio = {
	"name" : "Muhammad Adib Ali",
	"role" : "Student",
	"welcomeMessage" : "Konnichiwa bitches",
	"biopic" : "Another speck of dust in the vast universe",
	"contacts" : {
		"mobile" : "017631496009",
		"email" : "md.adib.ali@gmail.com",
		"twitter" : "twitter.com/adib__ali",
		"github" : "vdib",
		"location" : "Hamburg"
	},
	"skills" : ["Cooking", "Sleeping", "Procrastinating"]
}

var education = {
	"schools" : [{
		"name" : "HAW Hamburg",
		"location" : "Hamburg",
		"degree dates" : "2018",
		"url" : "haw-hamburg.de",
		"majors" : ["Electronics", "Software Programming", "Electrical Engineering", "Signal Processing"]	
	},
	{
		"name" : "GMI",
		"years" : "2011-2013",
		"city" : "Kajang, Selangor",
		"url" : "http://www.gmi.edu.my/",
		"majors" : ["GCSE A-Level", "German language"]
	}],
	"onlineCourses" : [{
		"title" : "Programming in Java",
		"school" : "University of Helsinki",
		"dates" : "WS 15/16",
		"url" : "http://mooc.fi/courses/2013/programming-part-1/"
	},
	{
		"title" : "JavaScript basics",
		"school" : "Udacity",
		"dates" : "SS 17",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]

};

// var mobile = HTMLmobile.replace("%data%", bio.mobile);
// var email = HTMLemail.replace("%data%", bio.email);
// var twitter = HTMLtwitter.replace("%data%", bio.twitter);
// var bioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
// var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
// var skills = HTMLskills.replace("%data%", bio.skills);



// $("#header").append(mobile + email + twitter + bioPic + welcomeMsg + skills);
// $("#header").append(work["position"] + '\xa0' + education.schools[0].name);