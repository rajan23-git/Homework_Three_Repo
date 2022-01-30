//Name: Pranav Rajan
var fs = require('fs');
test('test selectEvent', () => {
var html = fs.readFileSync('public/index.html', 'utf8');
expect(html).toEqual(expect.anything()); //any non-null value is okay
//put the HTML into a testing DOM and do a sanity check
document.body.innerHTML = html;
const $ = require('jquery');
//tests if h1 element is equal to CheeseCake Order Form
expect($('h1').html()).toBe("Cheesecake Order Form");
//tests if p element with id=toppingLabel is equal to Quantity Topping
expect($('#toppingLabel').html()).toBe("Quantity Topping");
//tests if orderButton has text Order in it
expect($('#orderButton').html()).toBe("Order");

});


