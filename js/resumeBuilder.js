/*

 work contains an array of jobs. Each job object in jobs should contain an 
 employer, title, location, dates worked and description.

 projects contains an array of projects. Each project object in projects 
 should contain a title, dates worked, description, and an images array with 
 URL strings for project images.

 bio contains a name, role, welcomeMessage, contacts object and skills array. 
 The contacts object should contain (but doesn't have to) a mobile number, 
 email address, github username, twitter handle and location.

 education contains an array of schools. Each school object in schools contains 
 a name, location, degree, majors array, dates attended and a url for the 
 school's website. education also contains an onlineCourses array. Each 
 onlineCourse object in onlineCourses should contain a title, school, dates 
 attended and a url for the course.

 */


var bio = {
    "name": "Greg Palen",
    "role": "Web Developer",
    "contacts": {
        "twitter": "@GPalen",
        "github": "codingvirtual",
        "location": "St Louis, MO",
        "email": "codingvirtual@gmail.com"
    },
    "picUrl": "images/avatar-xhdpi.jpg",
    "welcomeMessage": "Hi and thank you for reviewing my interactive resume",
    "skills": ["Java", "Android Applications","AngularJS", "mySQL", "JavaScript", "Google App Engine", "Google Cloud Endpoints","PHP", "Git"]
};

var projects = [{
    "title": "Project 0 - Hello World",
    "dates worked": "March 2015",
    "description": "Class Hello World in HTML & CSS",
    "images": ["url_goes_here"]
}];

var work = [{
    "employer": "AT&T",
    "title": "Application Sales Executive",
    "datesWorked": "1998 - present",
    "location": "St Louis",
    "description": "Product Specialist supporting Unified Communications"
}];

var education = {
    "schools": [{
        "name": "Univ. of Illinois - Springfield",
        "years": 2015,
        "city": "Springfield, MO (via Online Program)",
        "majors": ["Computer Science"]
    },
        {
            "name": "Univ. of Missouri - St Louis",
            "years": "2011 - 2013",
            "city": "St Louis, MO",
            "majors": ["Worked towards Computer Science"]
        }
    ],
    "onlineCourses": [{
        "title": "Intro to JavaScript",
        "school": "Udacity.com",
        "dates": "2015",
        "url": "https://www.udacity.com/course/ud804"
    }]
};

var token = "%data%"
$('#header').prepend(HTMLheaderRole.replace(token, bio.role));
$('#header').prepend(HTMLheaderName.replace(token, bio.name));
$('#header').append(HTMLbioPic.replace(token, bio.picUrl));

function showContactInfo() {
        $('#topContacts')
            .append(HTMLtwitter.replace(token, bio.contacts.twitter))
            .append(HTMLemail.replace(token, bio.contacts.email))
            .append(HTMLgithub.replace(token, bio.contacts.github));
}

function showSkills() {
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var skill in bio.skills) {
            $('#skills').append(HTMLskills.replace(token, bio.skills[skill]));
        }
    }
}

function displayWork() {
    for (workEntry in work) {
        $('#workExperience').append(HTMLworkStart);
        var workEmployerTitle = HTMLworkEmployer.replace(token, work[workEntry].employer);
        workEmployerTitle += HTMLworkTitle.replace(token, work[workEntry].title);
        $('.work-entry:last').append(workEmployerTitle);
        $('.work-entry:last').append(HTMLworkDates.replace(token, work[workEntry].datesWorked));
        $('.work-entry:last').append(HTMLworkLocation.replace(token, work[workEntry].location));
        $('.work-entry:last').append(HTMLworkDescription.replace(token, work[workEntry].description));
    }
}

function inName(name) {
    console.log("name is " + name);
    var nameTokens = name.trim().split(" ");
    nameTokens[1] = nameTokens[1].toUpperCase();
    return nameTokens[0] + ' ' + nameTokens[1];
}
$('#main').append(internationalizeButton);

projects.display = function() {
    for (project in projects) {
        $()
    }
}


showContactInfo();
showSkills();
displayWork();
