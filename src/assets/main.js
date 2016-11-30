$.ajax({
  url: 'https://www.codeschool.com/users/1685053.json',
  dataType: 'jsonp',
  success: function(response)
  {
    for (i = 0; i < response.courses.completed.length; i++)
    {
      var course = response.courses.completed[i];
      $("#badges").append(
        "<div class='course'>" +
        "<h3 class='title'>" + course.title + "</h3>" +
        "<img src='" + course.badge + "'/>" +
        "<a href='" + course.url + "' target='_blank' class='btn btn-primary'>See Course</a>" +
        "</div>");
    }

  }

});
