$(function() {

    setup();

    function setup() {
        for(var i = 0; i < data.copypastas.length; i++) {
            $("#all").append("<div>" + getSample(data.copypastas[i]) + "</div>")
        }
    }

    function getSample(longText) {
        return longText.substr(0, 200);
    }

    function getRandom() {
        return copypastas[Math.floor(Math.random()*copypastas.length)];
    }
});
