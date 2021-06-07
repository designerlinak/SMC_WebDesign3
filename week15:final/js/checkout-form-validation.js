// TOGGLE BILLING VISIBILITY
function toggleBilling() {
    if (document.getElementById('customSwitches').checked == true) {
        document.getElementById('billingGroup').style.display = "none";
        
    } else {
        document.getElementById('billingGroup').style.display = "block";
      
    }
}


// CHECK VALID INPUT
var errorInput = document.getElementsByClassName('invalid-input');


// when user inputs numbers instead of letters
function alphaOnly() {
    var fname = document.getElementById('txtfname');
    var lname = document.getElementById('txtlname');
    var state = document.getElementById('txtstate');
    var city = document.getElementById('txtcity');
    var Bfname = document.getElementById('txtfname_billing');
    var Blname = document.getElementById('txtlname_billing');
    var Bstate = document.getElementById('txtstate_billing');
    var Bcity = document.getElementById('txtcity_billing');

    var numbers = "^[0-9*#+@]+$";
    if (fname.value.match(numbers) && document.activeElement == fname) {
        errorInput[0].style.display = "block";
    } else if (lname.value.match(numbers) && document.activeElement == lname) {
        errorInput[1].style.display = "block";
    } else if (state.value.match(numbers) && document.activeElement == state) {
        errorInput[2].style.display = "block";
    } else if (city.value.match(numbers) && document.activeElement == city) {
        errorInput[3].style.display = "block";
    } else if (Bfname.value.match(numbers) && document.activeElement == Bfname) {
        errorInput[5].style.display = "block";
    } else if (Blname.value.match(numbers) && document.activeElement == Blname) {
        errorInput[6].style.display = "block";
    } else if (Bstate.value.match(numbers) && document.activeElement == Bstate) {
        errorInput[7].style.display = "block";
    } else if (Bcity.value.match(numbers) && document.activeElement == Bcity) {
        errorInput[8].style.display = "block";
    } else {
        errorInput[0].style.display = "none";
        errorInput[1].style.display = "none";
        errorInput[2].style.display = "none";
        errorInput[3].style.display = "none";
        errorInput[5].style.display = "none";
        errorInput[6].style.display = "none";
        errorInput[7].style.display = "none";
        errorInput[8].style.display = "none";
    }
}


// when user inputs letters instead of numbers
function numbersOnly() {
    var zip = document.getElementById('txtzip');
    var Bzip = document.getElementById('txtzip_billing');

    var zips = "^[A-Za-z]+$";
    if (zip.value.match(zips) && document.activeElement == zip) {
        errorInput[4].style.display = "block";
    } else if (Bzip.value.match(zips) && document.activeElement == Bzip) {
        errorInput[9].style.display = "block";
    } else {
        errorInput[4].style.display = "none";
        errorInput[9].style.display = "none";
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


// disabled button state

// (function() {
//     $('form > div > input').keyup(function() {
//         var empty = false;
//         $('form > div > input').each(function() {
//             if ($(this).val() =='') {
//                 empty = true;
//             }
        
//     });

//     if (empty) {
//         $('#order').attr ('disabled', 'disabled');
//     }
//     else {
//         $('#order').removeAttr ('disabled');
//     }
// });
// })()