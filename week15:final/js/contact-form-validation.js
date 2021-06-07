// CHECK VALID INPUT
var errorInput = document.getElementsByClassName('invalid-input'); 


// when user inputs numbers instead of letters
function alphaOnly() {
    var name = document.getElementById('name');

    var numbers = "^[0-9*#+@]+$";
    if (name.value.match(numbers) && document.activeElement == name) {
        errorInput[0].style.display = "block";
    } else {
        errorInput[0].style.display = "none";
    }
}


// checks for @ format
function emailOnly() {
    var email = document.getElementById('email');

    var emails = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
    if (email.value.match(emails)) {
        errorInput[1].style.display = "none";
    } else {
        errorInput[1].style.display = "block";
    }
}


// when user inputs letters instead of numbers
function numbersOnly() {
    var phone = document.getElementById('phone');
    
    var phones = "^[A-Za-z]+$";
    if (phone.value.match(phones)) {
        errorInput[2].style.display = "block";
    } else {
        errorInput[2].style.display = "none";
    }
}


(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();