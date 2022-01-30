var fs = require('fs');
 test('test selectEvent', () => {
var html = fs.readFileSync('public/index.html', 'utf8');
 expect(html).toEqual(expect.anything()); //any non-null value is okay
//put the HTML into a testing DOM and do a sanity check
 document.body.innerHTML = html;
const $ = require('jquery');
expect($('h1').html()).toBe("Cheesecake Order Form");
expect($('#toppingLabel').html()).toBe("Quantity Topping");
expect($('#orderButton').html()).toBe("Order");

});


