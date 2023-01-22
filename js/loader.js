var myVar;
        
function loader() {
    myVar = setTimeout(showPage, 600);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}