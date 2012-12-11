/* Code by Andrew Mager
*
*  Spotify green: #74c043
*
**/
"use strict";
window.onload = function() {
    var sp = getSpotifyApi(1);
    var models = sp.require('sp://import/scripts/api/models');
    var views = sp.require('sp://import/scripts/api/views');

    // Handle tabs
    tabs();
    models.application.observe(models.EVENT.ARGUMENTSCHANGED, tabs);

    function tabs() {
        var args = models.application.arguments;
        var current = document.getElementById(args[0]);
        var sections = document.getElementsByClassName('section');
        for (var i=0; i<sections.length; i++){
            sections[i].style.display = 'none';
        }
        current.style.display = 'block';
    }
};
