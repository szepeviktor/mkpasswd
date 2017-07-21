function createSalt(len) {
    var saltAlpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz./-+_"

    var salt = '$1$';
    for(var i = 0; i < len; ++i) {
        salt += saltAlpha.charAt(
            Math.floor(Math.random() * saltAlpha.length));
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
        event.preventDefault();

        password.type = "password";
        output.value = CryptoJS.PHP_CRYPT_MD5(password.value, createSalt(8));
        output.select();
    });
}());
