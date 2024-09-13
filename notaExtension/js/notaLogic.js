
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("closePopup").onclick = function() {
        window.close();
    };
    
    document.getElementById("minPopup").onclick = function() {
        window.blur();
    };

});