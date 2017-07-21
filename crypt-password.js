/*jslint
    browser, for
*/
/*global
    md5_crypt
*/

function random_base64(len) {
    "use strict";

    var charset = "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var chars;
    var base64 = [];
    var i = 0;

    chars = charset.split("");
    len = len || 8;

    for (i = 0; i < len; i += 1) {
        base64[i] = chars[Math.floor(Math.random() * 64)];
    }

    return base64.join("");
}

/* Main */

(function fuszer() {
    "use strict";

    var password = document.querySelector("#password");
    var button = document.querySelector("#generate");
    var output = document.querySelector("#output");

    // Input focus
    password.addEventListener("focus", function () {
        password.type = "text";
    });

    // Button click
    button.addEventListener("click", function (event) {
        event.preventDefault();

        password.type = "password";
        output.value = md5_crypt(password.value, random_base64());
        output.select();
    });
}());
