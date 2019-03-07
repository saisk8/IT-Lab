'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('contact', 'contact.html'),
            new Route('admissions', 'admissions.html'),
            new Route('programmes', 'programmes.html'),
            new Route('faculty', 'faculty.html')



        ]);
    }
    init();
}());
