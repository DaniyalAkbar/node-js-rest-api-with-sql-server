const Customer = require("../model/customer.model");


// NODEJS CALL REST API TO INSSERT NEW CUSTOMER
exports.insertNewCustomer = async (req, res) => {
  const obj = await Customer.insertCustomers(req.body);
  res.send(obj);
};

// NODEJS CALL REST API TO FETCH ALL DATA
exports.getAllCustomer = async (req, res) => {
  const obj = await Customer.findAllFromCustomer();
  res.send(obj);
};

// NODEJS CALL REST API FOR UPDATE
exports.updateCustomer = async (req, res) => {
  const obj = await Customer.updateCustomers(req.params.cust_id, req.body);
  res.send(obj);
};

// NODEJS CALL REST API FOR DELETE
exports.deleteCustomer = async (req, res) => {
  const obj = await Customer.deleteCustomerById(req.params.cust_id);
  res.send(obj);
};
