//Author: Pranav Rajan
//stores function that is triggered when button clicked
dropdownEventHandler= 

function()
{
//if clicked month changes to whatever option was clicked
    $(".monthButton").text($(this).text());


}    

$(document).ready(function(){
//links button to event handler
$(".dropdownOption").click(dropdownEventHandler);
});

