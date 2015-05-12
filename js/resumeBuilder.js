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
    "display": function () {
        $('#header')
            .prepend(HTMLheaderRole.replace(token, this.role))
            .prepend(HTMLheaderName.replace(token, this.name))
            .append(HTMLbioPic.replace(token, this.picUrl));
        this.contacts.display('#topContacts');
        this.contacts.display('#footerContacts');
        this.skills.display();
    },
    "role": "Web Developer",
    "contacts": {
        "twitter": "@GPalen",
        "github": "codingvirtual",
        "location": "St Louis, MO",
        "email": "codingvirtual@gmail.com",
        "display": function (id) {
            $(id)
                .append(HTMLtwitter.replace(token, this.twitter))
                .append(HTMLemail.replace(token, this.email))
                .append(HTMLgithub.replace(token, this.github));
        }
    },
    "picUrl": "images/avatar-xhdpi-400_small.jpg",
    "welcomeMessage": "Hi and thank you for reviewing my interactive resume",
    "skills": {
        "skills": ["Java", "Android Applications", "AngularJS", "mySQL",
            "JavaScript", "Google App Engine", "Google Cloud Endpoints", "PHP", "Git"],
        "display": function () {
            if (bio.skills.skills.length > 0) {
                $('#header').append(HTMLskillsStart);
                for (var skill in bio.skills.skills) {
                    $('#skills').append(HTMLskills.replace(token, bio.skills.skills[skill]));
                }
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Portfolio Mockup with HTML & CSS",
            "url": "http://codingvirtual.github.io/Udacity-Project-1",
            "dates": "March 2015",
            "description": "Udacity Front-End Developer Nanodegree - Project 1 " +
            "A relatively basic project designed to teach the user the basics of HTML " +
            "layout, basic CSS, and the beginnings of responsive web design. Image placeholders " +
            "were used for the project.",
            "images": ["images/Project1_thumb-400_small.png"]
        },
        {
            "title": "Interactive Resume",
            "url": "#",
            "dates": "March 2015",
            "description": "Front-End Developer Nanodegree - Project 2. An interactive resume built using JavaScript " +
            " and CSS (the page you are viewing now is the product of that project).",
            "images": []
        }
    ],
    "display": function () {
        if (this.projects.length > 0) {
            for (var projectEntry in this.projects) {
                $('#project-list:last').append(HTMLprojectStart);
                if (this.projects[projectEntry].url.length > 0) {
                    HTMLprojectTitle = HTMLprojectTitle.replace('#', this.projects[projectEntry].url);
                }
                $('.project-entry:last')
                    .append(HTMLprojectTitle.replace(token, this.projects[projectEntry].title))
                    .append(HTMLprojectDates.replace(token, this.projects[projectEntry].dates))
                    .append(HTMLprojectDescription.replace(token, this.projects[projectEntry].description));
                if (this.projects[projectEntry].images.length > 0) {
                    for (var imageEntry in this.projects[projectEntry].images) {
                        $('.project-images:last').append(HTMLprojectImage.replace(token, this.projects[projectEntry].images[imageEntry]));
                    }
                }
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Application Sales Executive - Unified Communications",
            "datesWorked": "2013 - present",
            "location": "St Louis",
            "description": "Product Specialist supporting Unified Communications solutions including hosted Cisco HCS " +
            "and Microsoft Lync (hosted and prem-based)."
        },
        {
            "employer": "AT&T",
            "title": "Application Sales Manager - Fixed/Mobile Convergence",
            "datesWorked": "2012 - 2013",
            "location": "St Louis",
            "description": "Managed a team of Application Sales Executives responsible for solution sales of " +
            "AT&T's suite of fixed/mobile convergence solutions."
        }
    ],
    "display": function () {
        if (this.jobs.length > 0) {
            for (var workEntry in this.jobs) {
                $('#workExperience').append(HTMLworkStart);
                var workEmployerTitle = HTMLworkEmployer.replace(token, this.jobs[workEntry].employer);
                workEmployerTitle += HTMLworkTitle.replace(token, this.jobs[workEntry].title);
                $('.work-entry:last')
                    .append(workEmployerTitle)
                    .append(HTMLworkDates.replace(token, this.jobs[workEntry].datesWorked))
                    .append(HTMLworkLocation.replace(token, this.jobs[workEntry].location))
                    .append(HTMLworkDescription.replace(token, this.jobs[workEntry].description));
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "Univ. of Illinois - Springfield",
            "dates": "2015",
            "location": "Springfield, IL",
            "majors": ["Computer Science"],
            "degree": "Bachelor's Degree"
        },
        {
            "name": "Univ. of Missouri - St Louis",
            "dates": "2011 - 2013",
            "location": "St Louis, MO",
            "majors": ["Computer Science"],
            "degree": "Progress towards Bachelor's Degree"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to JavaScript",
            "provider": "Udacity.com",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud804"
        }
    ],
    "display" : function () {
        if (this.schools.length > 0) {
            for (var school in this.schools) {
                $('#education').append(HTMLschoolStart);
                $('.education-entry:last')
                    .append(HTMLschoolName.replace(token, this.schools[school].name))
                    .append(HTMLschoolDegree.replace(token, this.schools[school].degree))
                    .append(HTMLschoolDates.replace(token, this.schools[school].dates))
                    .append(HTMLschoolLocation.replace(token, this.schools[school].location));
                if (this.schools[school].majors.length > 0) {
                    for (var major in this.schools[school].majors) {
                        $('.education-entry:last').append(HTMLschoolMajor.replace(token, this.schools[school].majors[major]));
                    }
                }
            }
        }
        if (this.onlineCourses.length > 0) {
            $('#education')
                .append(HTMLonlineClasses)
                .append(HTMLonlineStart);
            for (var onlineEntry in this.onlineCourses) {
                $('.education-entry:last')
                    .append(HTMLonlineTitle.replace(token, this.onlineCourses[onlineEntry].title))
                    .append(HTMLonlineSchool.replace(token, this.onlineCourses[onlineEntry].provider))
                    .append(HTMLonlineDates.replace(token, this.onlineCourses[onlineEntry].dates))
                    .append(HTMLonlineURL.replace(token, this.onlineCourses[onlineEntry].url));
            }
        }
    }
};

var token = "%data%";


function inName(name) {
    var nameTokens = name.trim().split(" ");
    nameTokens[1] = nameTokens[1].toUpperCase();
    return nameTokens[0] + ' ' + nameTokens[1];
}

$('#main').append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);