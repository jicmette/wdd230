const year = new Date().getFullYear();
document.querySelector(".currentYear").innerText = year;

function lastedit() {
    let latestDate = document.lastModified;
    document.getElementById("lastupdated").innerHTML = "<p> Last Updated: " + latestDate;
}

const dayUntil = "There are ${daycount} days until ${targetEvent}!";