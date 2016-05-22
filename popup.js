$(function() {

    var CHAR_LIMIT = 200;

    setup(data);

    $("#search").change(function() {
        reset();
        setup(filter($(this).val()));
    });

    function reset() {
        $("#all").html("");
    }

    function setup(dataObj) {
        for(var key in dataObj) {
            var sectionArray = dataObj[key];
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
