/*
FORM VALIDATION

HTML5 adds some attributes that allow form validation. For example, the requires attribute can be added to an input
field to make it mandatory to fill in.

More complex form validation can be done using JavaScript.

The form element has an onsubmit event that can be handled to perform validation. For example, lets create a form with
two inputs and one button. The text in both fields should be the same and not blank to pass validation.

 We need to define the validate function

 */

function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if (n1.value != '' && n2.value != ''){
        if(n1.value == n2.value){
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}


/*
We return true only when the values are not blank and are equal

The form will not get submitted if its onsubmit event returns false
 */