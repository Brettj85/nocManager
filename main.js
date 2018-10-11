function divSelector(selection){
    var calendarSelection = document.getElementById("calendar");
    var bookmarksSelection = document.getElementById("bookmarks");
    var noticesSelection = document.getElementById("notices");
    var toolsSelection = document.getElementById("tools");
    var careerSelection = document.getElementById("career");
    var currentSelection = document.getElementById(selection);
    calendarSelection.style.display = "none";
    bookmarksSelection.style.display = "none";
    noticesSelection.style.display = "none";
    toolsSelection.style.display = "none";
    careerSelection.style.display = "none";
    currentSelection.style.display = "flex";
}

