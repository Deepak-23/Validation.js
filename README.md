# Validation.js

## Validation types support
✔️ `text` <br/>
✔️ `email` <br/>
✔️ `number` <br/>
✔️ `textarea`<br/>
✔️ `hidden` – can also have the ‘required’ attribute


### `pattern` attribute
It is possible to write your own unique Regex patterns directly in the attribute or reference to it by custom name, for example:

```html
<input type="text" required="required"/>
```

```js
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
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your name is not valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
    let regex = /^[0-9]{10}$/;
    let nums = number.value;
    console.log(regex, nums);
    if (regex.test(nums)) {
        console.log('Your name is valid');
        number.classList.remove('is-invalid');
        validNumber = true;
    }
    else {
        console.log('Your name is not valid');
        number.classList.add('is-invalid');
        validNumber = false;

    }
```


## Error messages
This is the object which holds all the texts used by the form validator:

```js
{
    invalid         : 'inupt is not as expected',
    short           : 'input is too short',
    long            : 'input is too long',
    checked         : 'must be checked',
    empty           : 'please put something here',
    select          : 'Please select an option',
    number_min      : 'too low',
    number_max      : 'too high',
    number          : 'not a number',
    email           : 'email address is invalid'
 

}
```

### HTML Attributes on form elements

| Attribute                             | Purpose                                                                                                                                                                                                                                                                                                                         |
|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <pre>required</pre>                   | Defines that this field should be validated (with JS by my implementation and not via native HTML5 browser defaults)                                                                                                                                                                                                            |
| <pre>placeholder</pre>                | Writes some placeholder text which usually describes the fields with some example input (not supported in IE8 and below)                                                                                                                                                                                                        |
| <pre>pattern</pre>                    | Defines a pattern which the field is evaluated with. Out-of-the-boxvailable values are:<br>**numeric** - Allow only numbers<br>**alphanumeric** - Allow only numbers or letters. No special language characters<br>**phone** - Allow only numbers, spaces or dashes.<br><br>Alternatively, you may write your own custom regex here as well | 
