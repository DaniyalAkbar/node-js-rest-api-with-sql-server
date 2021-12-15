module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
    
    // fetching ALL customers route
    app.get("/customer/fetchAll", customer.getAllCustomer);

    // adding new customer route
    app.post("/customer/insert", customer.insertNewCustomer);

    // update customer route
    app.put("/customer/update/:cust_id", customer.updateCustomer);

    // delete customer route
    app.delete("/customer/delete/:cust_id", customer.deleteCustomer);
  };