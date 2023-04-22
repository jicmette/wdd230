const year = new Date().getFullYear();
document.querySelector(".currentYear").innerText = year;

function lastedit() {
    var latestDate = document.lastModified;
    document.getElementById("lastupdated").innerHTML = latestDate;
}