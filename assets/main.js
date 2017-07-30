$(function() {
// The above call is short of the expanded form of the call such as $(document).ready(function(){
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/ilanuk.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
	var courses = response.courses.completed;
	var $badges = $('#badges');
	var i;
	courses.forEach(function(course) {
 		$div = $('<div />',{
			'class': 'course'
		}).appendTo($badges);
		$('<h3 />', {
			text: course.title
		}).appendTo($div);
		$('<img />', {
			src: course.badge
		}).appendTo($div);
		$('<a />', {
			'class': 'btn btn-primary',
			target : '_blank',
			href: course.url,
			text : 'See Course'
		}).appendTo($div);
	});	
    },
    error: function() {
	alert('Error: '+errorType + ' with Message: '+ errorMessage);	
    },
    timeout: 3000
  });

});
