$(function() {
    var copypastas = [
        "What did you say about me?",
        "Hi!!!",
        "euphoric"
    ];

    function getRandom() {
        return copypastas[Math.floor(Math.random()*4)];
    }

    $("#random").click(function() {
        alert(copypastas[1]);
    });
});
