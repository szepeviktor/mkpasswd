/*jslint
    browser, for
*/
/*global
    alert, CryptoJS, zxcvbn
*/

function createSalt(len) {
    "use strict";

    var saltAlpha = "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var salt = "$1$";
    var i;

    for (i = 0; i < len; i += 1) {
        salt += saltAlpha.charAt(Math.floor(Math.random() * saltAlpha.length));
    }

    return salt;
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
        var pwMeter;

        event.preventDefault();

        password.type = "password";

        pwMeter = zxcvbn(password.value, ["szepe"]);
        if (pwMeter.score < 3) {
            alert("Kérem erős jelszavakat használjon.");
            return false;
        }

        output.value = CryptoJS.PHP_CRYPT_MD5(password.value, createSalt(8));
        output.select();
    });
}());
