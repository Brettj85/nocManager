function divSelector(selection){
    var homeSelection = document.getElementById("home");
    var calendarSelection = document.getElementById("calendar");
    var noticesSelection = document.getElementById("notices");
    var toolsSelection = document.getElementById("tools");
    var diviceLookupSelection = document.getElementById("diviceLookup");
    var currentSelection = document.getElementById(selection);
    calendarSelection.style.display = "none";
    noticesSelection.style.display = "none";
    toolsSelection.style.display = "none";
    diviceLookupSelection.style.display = "none";
    homeSelection.style.display = "none";
    currentSelection.style.display = "flex";
}

