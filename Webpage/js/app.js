'use strict';

(function() {
  function init() {
    let router = new Router([
      new Route('home', 'home.html', true),
      new Route('about', 'about.html'),
      new Route('contact', 'contact.html'),
      new Route('admissions', 'admissions.html'),
      new Route('programmes', 'programmes.html'),
      new Route('faculty', 'faculty.html'),
      new Route('syllabus', 'syllabus.html'),
      new Route('visitors', 'visitors.html'),
      new Route('events', 'events.html'),
      new Route('latest-news', 'latest-news.html'),
      new Route('placements', 'placements.html'),
      new Route('login', 'login.html'),
      new Route('register', 'register.html')
    ]);
  }
  init();
})();
