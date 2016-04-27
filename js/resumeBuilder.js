var name = 'Chris Edmonds';
var role = 'Web Developer';

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var bio = {
    "name": "Chris",
    "role": "developer",
    "contact_info": 6103221707,
    "welcome_message": "Hey, hey!"
}

$('#header').append(bio.welcome_message);

var work = {};
var education = {};

work["employer"] = "Booz";
var education = 
[{
    "name": "Williams",
    "year": 2011
},
{      
    "onlineCourses": ["Java", "Python", "JavaScript"]
}]

$('#main').append(work['employer']);
$('#main').append(education[0].name);