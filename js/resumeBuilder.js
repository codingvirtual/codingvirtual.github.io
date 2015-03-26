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
    "contacts": {   "twitter": "@GPalen",
                    "github": "codingvirtual",
                    "location": "St Louis, MO",
                    "email": "codingvirtual@gmail.com"
    },
    "picUrl": "images/avatar-xhdpi.jpg",
    "welcomeMessage": "Hi and thank you for reviewing my interactive resume",
    "skills": ["Java", "Android Applications", "AngularJS", "mySQL", "JavaScript", "Google App Engine", "Google Cloud Endpoints", "PHP", "Git"]
};

var projects = {
    "projects": [
        {
            "title": "Project 0 - Hello World",
            "dates": "March 2015",
            "description": "Class Hello World in HTML & CSS",
            "images": ["url_goes_here"]
        }
    ]
};

var work = {
    "jobs" : [
        {   "employer": "AT&T",
            "title": "Application Sales Executive",
            "datesWorked": "1998 - present",
            "location": "St Louis",
            "description": "Product Specialist supporting Unified Communications"
        }
    ]
};

var education = {
    "schools": [
        {   "name": "Univ. of Illinois - Springfield",
            "years": 2015,
            "location": "Springfield, IL",
            "majors": ["Computer Science"]
        },
        {   "name": "Univ. of Missouri - St Louis",
            "years": "2011 - 2013",
            "location": "St Louis, MO",
            "majors": ["Worked towards Computer Science"]
        }
    ],
    "onlineCourses": [
        {   "title": "Intro to JavaScript",
            "school": "Udacity.com",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud804"
        }
    ]
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
    for (workEntry in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var workEmployerTitle = HTMLworkEmployer.replace(token, work.jobs[workEntry].employer);
        workEmployerTitle += HTMLworkTitle.replace(token, work.jobs[workEntry].title);
        $('.work-entry:last').append(workEmployerTitle);
        $('.work-entry:last').append(HTMLworkDates.replace(token, work.jobs[workEntry].datesWorked));
        $('.work-entry:last').append(HTMLworkLocation.replace(token, work.jobs[workEntry].location));
        $('.work-entry:last').append(HTMLworkDescription.replace(token, work.jobs[workEntry].description));
    }
}
function inName(name) {
    var nameTokens = name.trim().split(" ");
    nameTokens[1] = nameTokens[1].toUpperCase();
    return nameTokens[0] + ' ' + nameTokens[1];
}
$('#main').append(internationalizeButton);

projects.display = function () {
    for (projectEntry in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace(token, projects.projects[projectEntry].title))
        .append(HTMLprojectDates.replace(token, projects.projects[projectEntry].dates))
        .append(HTMLprojectDescription.replace(token, projects.projects[projectEntry].description));
        for (imageEntry in projects.projects[projectEntry].images) {
            $('.project-entry:last').append(HTMLprojectImage.replace(token, projects.projects[projectEntry].images[imageEntry]));
        }
    }
}


showContactInfo();
showSkills();
displayWork();
projects.display();
$('#mapDiv').append(googleMap);