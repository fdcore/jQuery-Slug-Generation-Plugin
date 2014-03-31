jQuery Slug Generation Plugin by Atratus (http://github.com/Atratus/jQuery-Slug-Generation-Plugin)

Improved from jQuery Slug Generation Plugin by Perry Trinier (perrytrinier@gmail.com). Licensed under the GPL: http://www.gnu.org/copyleft/gpl.html
Improved from urlify.js from Django framework. BSD License: http://code.djangoproject.com/browser/django/trunk/LICENSE

## Support characters:

- latin
- greek
- turkish
- russian
- ukrainian
- czech
- polish
- latvian

## Usage:

    $(document).ready(function(){
        $("#url_title").slug({slug: '.title'});
        $("#url_title").slug({slug: '#title', separator: "_"});
    });