var workScheduleCurrent = 0;
var trainingCurrent = 0;
var timeOffCurrent = 0;

function calendarElements(current){
    if (current === "workSchedule"){
        var ele_list = document.querySelectorAll(".workSchedule");
        var buttonChange = document.getElementById("scheduleOrigin");
        if (workScheduleCurrent === 0){
            for (var i = 0; i < ele_list.length; i++) {
	            ele_list[i].style.display = "none";
                buttonChange.className = "scheduleStartDisable";
            }
            workScheduleCurrent = 1;
        }
        else{
            for (var i = 0; i < ele_list.length; i++) {
	            ele_list[i].style.display = "block";
                buttonChange.className = "scheduleStart";
            }
            workScheduleCurrent = 0;
        }

    }
    else if (current === "training"){
        var ele_list = document.querySelectorAll(".training");
        var buttonChange = document.getElementById("trainingOrigin");
        if (trainingCurrent === 0){
            for (var i = 0; i < ele_list.length; i++) {
	            ele_list[i].style.display = "none";
                buttonChange.className = "trainingStartDisable";
            }
            trainingCurrent = 1;
        }
        else{
            for (var i = 0; i < ele_list.length; i++) {
	            ele_list[i].style.display = "block";
                buttonChange.className = "trainingStart";
            }
            trainingCurrent = 0;
        }
    }
    else{
        var ele_list = document.querySelectorAll(".timeOff");
        var buttonChange = document.getElementById("timeOffOrigin");
        if (timeOffCurrent === 0){
            for (var i = 0; i < ele_list.length; i++) {
	            ele_list[i].style.display = "none";
                buttonChange.className = "timeOffStartDisable";
            }
            timeOffCurrent = 1;
        }
        else{
            for (var i = 0; i < ele_list.length; i++) {
	            ele_list[i].style.display = "block";
                buttonChange.className = "timeOffStart";
            }
            timeOffCurrent = 0;
        }
    }
}