let menuOpen = false;

//On load call the resize function to fit the html page loaded to the iframe in the primary html.
window.addEventListener('load',() => {
    let iframe = document.querySelector("iframe");

    resizeIFrameToFitContent(iframe);
})

//Function resizes the existing iframe to fit the html page loaded.
function resizeIFrameToFitContent( iframe ) {
    iframe.width = iframe.contentWindow.document.body.offsetWidth + 50;
    iframe.height = iframe.contentWindow.document.body.offsetHeight + 20;
}

document.querySelector('button[name=menu]').addEventListener('click',function () {
    //let getResponse = document.querySelector('button[class=Get-Response]');
    if (menuOpen) {
        document.getElementsByTagName("nav")[0].style.display = "none";
        menuOpen = false;
    }
    else {
        document.getElementsByTagName("nav")[0].style.display = "block";
        menuOpen = true;
    }
})