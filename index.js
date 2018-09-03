var DESCRIPTION_PARAM = "desc";
var ERROR_FIELD_ID = "error-field";


$(document).ready(function () {
    try{
        var urlParams = new URLSearchParams(window.location.search);
        var desc = JSON.parse(urlParams.get(DESCRIPTION_PARAM));
    }catch (e) {
        document.getElementById(ERROR_FIELD_ID).innerText = "There was an error while parsing the description, it should be a JSON valid object.";
    }

    console.log();

});