var name = 'Chris Edmonds';
var role = 'Web Developer';

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

