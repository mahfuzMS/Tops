function city(event, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className.replace("active", "");
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTarget.cityName += "active";
}