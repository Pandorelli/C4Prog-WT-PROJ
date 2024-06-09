//Monitor Request button for click in order to validate information and action.
document.querySelector('button[id=Request]').addEventListener('click',function () {
    let userFirstName = document.querySelector('input[id=FirstName]');
    let userLastName = document.querySelector('input[id=LastName]');
    let userDetail = document.querySelector('textarea[id=Details]');

    if (userFirstName == null || userLastName == null || userDetail == null) {
        alert("There is an error with the page. Not all elements are defined.");
        return;
    }

    if (userFirstName.value === "" || userLastName.value === "") {
        alert("Please enter both a first and last name so I know who I'm communicating with.");
        return;
    }

    if (userDetail.value === "") {
        alert("It would seem the details of your enquiry are empty. Please enter some information relating to why you are trying to contact me?");
        return;
    }

    window.open('mailto:J167511@tafe.wa.edu.au?subject=Dwayne Winter GitHub Enquiry from '+userFirstName.value+''+userLastName.value+'&body='+userDetail.value);
})