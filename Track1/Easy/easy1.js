function mySubmitFunction(e) {
    e.preventDefault();
    a= document.getElementById("Number").value;
    a=parseInt(a);
    if(a < 582)
        console.log("higher");
    else if(a > 582)
        console.log("lOWER");
    else
        console.log("shorturl.at/kCDP3");
}