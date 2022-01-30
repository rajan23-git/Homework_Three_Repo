//Author: Pranav Rajan
//event handler stores function to be used when button clicked
orderEventHandler= 
function()
{


//orderText stores the details the user entered into the Notes TextArea
var orderText=$("textarea").val();
//if notes contains the word vegan then alert pops up                
                if((orderText.toLowerCase()).includes("vegan"))
                {
                window.alert("Warning: This Cheesecake contains dairy.");

                }
//if notes doesn't contain the word vegan order is outputted to webpage along with
//notes from TextArea                
                else
                {
//these booleans check which of the radio buttons for topping have been selected                    
                    var orderDetails="Thank You. Your Order has been placed. Here is your order: "+$("#Quantity").val()+" ";
                    var plainBool=document.getElementById("plain").checked;
                    var cherryBool=document.getElementById("cherry").checked;
                    var chocolateBool=document.getElementById("chocolate").checked;
//if booleans are true, corresponding topping is added to orderDetails           
                    if(plainBool==true)
                    {
                        orderDetails+="plain";
                    }
                    else if(cherryBool==true)
                    {
                        orderDetails+="cherry";
                    }
                    else if(chocolateBool==true)
                    {       
                        orderDetails+="chocolate";
                    }
//TextArea notes appended to the end of order details                    
                    orderDetails+=" Additional Notes: "+orderText;
//radio buttons, drop down, text area, and order buttons are all removed from webpage
                    $("table").remove();
                    $("#notesLabel").remove();
                    $("textarea").remove();
                    $("#orderButton").remove();
//orderDetails are outputted to paragraph element located near top of page
//just below the jpeg image of the cheesecake                    
                    $("#toppingLabel").text(orderDetails);

                }
}     

$(document).ready(function()
{
//links button with Event Handler and executes method whenever clicked    
$("#orderButton").click(orderEventHandler);

});
