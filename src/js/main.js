
function changeViewListFullCalendar(){
    var viewCurrent;
    if($('.fullcalendar')){
          if (window.innerWidth > 1200) {
            if ($(".dayGridWeek").is(":checked")) {
              viewCurrent = ".fc-timeGridDay-button";
            }
            if ($(".dayGridDay").is(":checked")) {
              viewCurrent = ".dayGridDay";
            }
            $(viewCurrent).click();
          }
          if (window.innerWidth < 1200) {
            if ($(".dayGridWeek").is(":checked")) {
              viewCurrent = ".fc-listWeek-button";
            }
            if ($(".dayGridDay").is(":checked")) {
              viewCurrent = ".fc-listDay-button";
            }
            $(viewCurrent).click();
          }
          
    }

}

/* ***************** jQuery DOCUMENT READY ***************** */
$(document).ready(function(){ 
    // Start component: 
    $('.group-assignment__link-form').on('click',function(){
       $('.group-assignment__form').toggle("slow");
       $(this).toggleClass("open");
    });
    $('#datepicker').datepicker();
    $('#datepicker').on('changeDate', function() {
        $('#my_hidden_input').val(
            $('#datepicker').datepicker('getFormattedDate')
        );
    });
    // End component: 
 });



 /* ***************** jQuery RESIZE ***************** */

$(window).resize(function() {
    changeViewListFullCalendar();
});

/* ***************** jQuery ON SCROLL ***************** */

$(window).scroll(function() {
    // parallax();
    // sticky();
});

