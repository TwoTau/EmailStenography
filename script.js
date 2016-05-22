$(function() {
    var copypastas = [
        "What did you say about me?",
        "Hi!!!",
        "euphoric"
    ];

    function getRandom() {
        return copypastas[Math.floor(Math.random()*copypastas.length)];
    }

    $("#random").click(function() {
        $("#thingy").html('what');
    });
});
