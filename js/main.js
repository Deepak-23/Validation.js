const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');

let validName = false;
let validEmail = false;
let validNumber = false;



// console.log(name, email, number);

name.addEventListener('blur', () => {
    console.log("name is blured");
    let regex = /^[a-zA-Z]{0,10}/;
    //let regex = /^[A-Za-z]{2,10}$/;
    //let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validName = false;

    }
});
email.addEventListener('blur', () => {
    console.log("email is blured");
    //let regex = /^([_\-\.0-9a-zA-Z+])@([_\-\.0-9a-zA-Z+])\.([a-zA-Z])$(2,7)/;
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
});
number.addEventListener('blur', () => {
    console.log("number is blured");
    let regex = /^[0-9]{10}$/;
    let nums = number.value;
    console.log(regex, nums);
    if (regex.test(nums)) {
        console.log('Your number is valid');
        number.classList.remove('is-invalid');
        validNumber = true;
    }
    else {
        console.log('Your number is not valid');
        number.classList.add('is-invalid');
        validNumber = false;

    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(validEmail && validName && validNumber){
        let failure = document.getElementById('failure');

        console.log('Phone, email and name are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or name are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

});
