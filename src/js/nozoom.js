(function () {

    var userInputState = {
        ctrlKey: false
    };

    setBodyStyle();
    setViewport();

    bindToUserEvents();

    function bindToUserEvents() {
        document.addEventListener("keydown", function (e) {
            userInputState.ctrlKey = e.ctrlKey === true;
        }, true);

        document.addEventListener("keyup", function (e) {
            userInputState.ctrlKey = e.ctrlKey === true;
        }, true);

        document.addEventListener("wheel", function (e) {
            if (userInputState.ctrlKey === true) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }, true);
    }

    function setViewport() {
        var viewport = document.head.querySelector("meta[name='viewport']");

        if (!viewport) {
            viewport = document.createElement("META");
            viewport.setAttribute("name", "viewport");
            viewport.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");

            document.head.appendChild(viewport);
        }
    }

    function setBodyStyle() {
        var cssStyle = document.body.getAttribute("style") + ";zoom:reset !important";

        document.body.setAttribute("style", cssStyle);
    }
})();