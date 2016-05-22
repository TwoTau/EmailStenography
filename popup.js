$(function() {

    var CHAR_LIMIT = 200;

    setup();

    function setup() {
        for(var key in data) {
            var sectionArray = data[key];
            var sectionHTML = "<div><h2>" + key + "</h2>";
            for(var i = 0; i < sectionArray.length; i++) {
                sectionHTML += '<div data-clipboard-text="' + sectionArray[i] + '">' + getSample(sectionArray[i]) + "<span>" + getEnding(sectionArray[i]) + "</span></div>";
            }
            sectionHTML += "</div>";
            $("#all").append(sectionHTML);
        }

        var clipboard = new Clipboard("#all div");

    }

    function cleanText(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
    }

    function getSample(longText) {
        return cleanText(longText).substr(0, CHAR_LIMIT);
    }

    function getEnding(longText) {
        return cleanText(longText).substr(CHAR_LIMIT);
    }

    function getRandom() {
        return copypastas[Math.floor(Math.random()*copypastas.length)];
    }
});
