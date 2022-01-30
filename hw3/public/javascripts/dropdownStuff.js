dropdownEventHandler= 

function()
{
    $(".monthButton").text($(this).text());


}    

$(document).ready(function(){
$(".dropdownOption").click(dropdownEventHandler);
});

