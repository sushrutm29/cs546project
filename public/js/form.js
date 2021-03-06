(function() {
    const loginForm = document.getElementById("loginForm");
    const userEmail = document.getElementById("userEmail");
    const userPassword = document.getElementById("userPass");
    $("#noEmail").hide();
    $("#noPassword").hide();
    $("#invalidEmailFormat").hide();

    if (loginForm) {
        loginForm.addEventListener("submit", event => {
            // event.preventDefault();
            let errors= false;;

            if (!userEmail.value || userEmail.value.length == 0) {
                $("#noEmail").show();
                errors= true;
                event.preventDefault();
            } else {
                $("#noEmail").hide();
                event.preventDefault();
            }

            if (!userPassword.value || userPassword.value.length == 0) {
                $("#noPassword").show();
                errors= true;
                event.preventDefault();
            } else {
                $("#noPassword").hide();
                event.preventDefault();
            }

            if (!errors) {
                $("#loginForm")[0].submit();
            }
        });
    }
})();