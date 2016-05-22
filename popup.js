$(function() {

    var WORD_LIMIT = 40;

    setup(data);

    $("#all div div").hover(function() {
        $(this).children("span").slideDown(400);
    }, function() {
        $(this).children("span").slideUp(500);
    });

    $("#search").change(function() {
        reset();
        setup(filter($(this).val()));
    });

    $("#add").click(function() {

    });

    function reset() {
        $("#all").html("");
    }

    function setup(dataObj) {
        for(var key in dataObj) {
            var sectionArray = dataObj[key];
            var sectionHTML = "<div><h2>" + key + "</h2>";
            for(var i = 0; i < sectionArray.length; i++) {
                sectionHTML += '<div data-clipboard-text="' + cleanText(sectionArray[i]) + '">' + getSample(sectionArray[i]) + "<span>" + getEnding(sectionArray[i]) + "</span></div>";
            }
            sectionHTML += "</div>";
            $("#all").append(sectionHTML);
        }

        var clipboard = new Clipboard("#all div div");
        clipboard.on("success", function(e) {
            $("#showCopy").fadeIn(300).fadeOut(500);

            e.clearSelection();
        });
    }

    function cleanText(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, " ");
    }

    function getSample(longText) {
        return cleanText(longText).split(" ").slice(0, WORD_LIMIT).join(" ");
    }

    function getEnding(longText) {
        return cleanText(longText).split(" ").slice(WORD_LIMIT).join(" ");
    }
});

function filter(filterKeyword) {
    filterKeyword = filterKeyword.toLowerCase();
    var filteredData = $.extend(true, {}, data);
    for(var key in filteredData) {
        var sectionArray = filteredData[key];
        var i = 0;
        while(i < sectionArray.length) {
            if(sectionArray[i].toLowerCase().indexOf(filterKeyword) === -1) {
                sectionArray.splice(i, 1);
            } else {
                i++;
            }
        }
    }
    return filteredData;
}
