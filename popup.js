$(function() {

    setup();

    function setup() {
        for(var key in data) {
            var sectionArray = data[key];
            var sectionHTML = "<div><h2>" + key + "</h2>";
            for(var i = 0; i < sectionArray.length; i++) {
                sectionHTML += "<div>" + getSample(sectionArray[i]) + "</div>";
            }
            sectionHTML += "</div>";
            $("#all").append(sectionHTML);
        }
    }

    function getSample(longText) {
        return longText.substr(0, 200);
    }

    function getRandom() {
        return copypastas[Math.floor(Math.random()*copypastas.length)];
    }
});
