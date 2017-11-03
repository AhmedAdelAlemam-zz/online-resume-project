/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio object

var bio = {
	"name": "Ahmed Alemam",
	"role": "Front end web developer",
	"contacts":{
		"mobile":"+201159399913",
		"email":"ahmedemam755@gmail.com",
		"github":"github.com/AhmedAdelAlemam",
		"twitter":"twitter.com/AhmedAdelEmam",
		"location":"Cairo , Egypt"
	},
	"welcomeMessage":"Welcome to my awesome resume, here you will get more information about me. ",
	"skills":["HTML ","CSS ","JavaScript ","jQuery"],
	"biopic":"images/me.JPG"
};

//education object

var education = {
	"schools":[
		{
			"name":"Ain shams university",
			"location":"Cairo , Egypt",
			"degree":"Bachelor",
			"majors":["Faculty of law", "General law"],		
			"dates":"2007 -- 2012",
			"url": "www.asu.edu.eg"
		},
		{
			"name":"Ain shams secondary school",
			"location":"Cairo , Egypt",
			"degree":"secondary school",
			"majors":"secondary school",
			"dates":"2005 -- 2007",
			"url":"example.com"
		}
	],
	"onlineCourses":[
		{
			"title":"HTML essintial training , Learning CSS , CSS pages layout, CSS styling navigation, JavaScript essintial traning",
			"school":"lynda",
			"dates":"2016",
			"url":"lynda.com"
		},
		{
			"title":"intro to HTML and CSS , intro JavaScript ,intro to jQuery ",
			"school":"Udacity",
			"dates":"2017",
			"url":"udacity.com"
		}
	]
};

// work object

var work = {
	"jobs":[
		{
		"employer":"Udacity",
			"title":"Student",
			"dates":"2017",
			"location":"Cairo , Egypt",
			"description":"I am a student with the udacity front end web developer nano degree program and I'm excited to finish this course as soon as fast to start working in this exciting field."
	},
		{
			"employer":"Philips Egypt",
			"title":"Sales promoter",
			"dates":"oct 2013 -- jul 2017",
			"location":"Cairo ,Egypt",
			"description":"I worked with philips Egypt in sales promoting personal care products  like (male shaving machines, body shavers, hair removal, hair strightner and hair draiers)."
		}
	]
};

// projects object

var projects = {
	"projects":[
		{
			"title":"Article to Mockup",
			"dates":"2017",
			"description":"It was a project with the udacity front end web developer nano degree program , I developed it using only HTML to create a simple web page. ",
			"images" :["https://raw.githubusercontent.com/AhmedAdelAlemam/Udacity-mockup-to-article/master/mockup%20to%20article%20preview%20img.PNG",]
			
		},
		{
			"title":"Animal Trading Cards",
			"dates":"2017",
			"description":"It was a project with the udacity front end web developer nano degree program , I developed it using only (HTML & Css) to create a simple web page. ",
			"images":["https://raw.githubusercontent.com/AhmedAdelAlemam/Animal-Trading-Cards/master/Animal%20trading%20cards%20preview%20img.PNG"]
		},
		{
			"title":"Build a Portfolio Site",
			"dates":"2017",
			"description":"It was a project with the udacity front end web developer nano degree program , I developed it using some advanced teghniques like (HTML & CSS & BootStrab. ",
			"images":["https://raw.githubusercontent.com/AhmedAdelAlemam/Build-a-Portfolio-Site/master/Build%20a%20portfolio%20site%20preview%20img.PNG"]
		}
	]
};

//displaying my bio info to the page

bio.display = function(){
	
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", "contacts");
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

// displayin my name and role
	
$("#header").append(formattedName,formattedRole);

//dislpaying my contact info 
	
$("#topContacts, #footerContacts").append(formattedContact ,formattedMobile, formattedEmail , formattedTwitter,formattedGithub , formattedLocation);
	
// dislpaying my picture and welcome message
	
$("#header").prepend(formattedPicture,formattedMsg);
	
	//dislpaying my skills 
	
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		
	var formattedSkill = HTMLskills.replace("%data%", skill);
		
	$("#skills-h3").append(formattedSkill);
		
	});
	
};
//calling my bio function
bio.display();

//displaying my school info to the page

education.display = function(){
education.schools.forEach(function(school){
	$("#education").append(HTMLschoolStart);
		
	var formattedName = HTMLschoolName.replace("%data%",school.name);		
	var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
	var formattedDates = HTMLschoolDates.replace("%data%",school.dates);		
	var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);		
	var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
	
	$(".education-entry:last").append(formattedName,formattedDegree,formattedDates,formattedLocation,formattedMajor);

});

	//displayin my online courses info to the page
	
education.onlineCourses.forEach(function(onlineCourse){
	$("#education").append(HTMLonlineClasses);
	
	var formattedTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);	
	var formattedDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);	
	var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
	
	$(".online-courses:last").append(formattedTitle,formattedSchool,formattedDates,formattedUrl);

});
};

//calling my education function 
education.display();

//displaying my work info to the page

work.display = function(){
work.jobs.forEach(function(job){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
	
	var formattedTitle = HTMLworkTitle.replace("%data%",job.title);	
	var formattedDates = HTMLworkDates.replace("%data%",job.dates);	
	var formattedLocation = HTMLworkLocation.replace("%data%",job.location);	
	var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
	
	$(".work-entry:last").append(formattedEmployer,formattedTitle,formattedDates,formattedLocation,formattedDescription);

});
};
//calling my work function

work.display();

// displaying my projects to the page

projects.display = function(){
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);		
		var formattedDates = HTMLprojectDates.replace("%data%",project.dates);		
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);		
		var formattedImage = HTMLprojectImage.replace("%data%", project.images);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);

	});
};
//calling projects function 
projects.display();

//displaying google map
$("#mapDiv").append(googleMap);
//internationalize my name
$("#main").prepend(internationalizeButton);