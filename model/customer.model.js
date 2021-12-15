const mssql = require("mssql"); 
const dbConfig = require("../config/db.config.js"); 
const customers = {}; 

  
// FETCHING ALL FROM CUSTOMER TABLE 
customers.findAllFromCustomer = () => { 
  return new Promise((resolve, reject) => { 
    mssql.connect(dbConfig, function (err, result) { 
      var request = new mssql.Request(); 
      request.query(`SELECT * FROM CUSTOMER;`, (err, res) => { 
        if (err) reject(err); 
        console.log(res.recordset); 
        resolve(res.recordset); // FETCHING ALL DATA 
      }); 
    }); 
  }); 
}; 
  
// ADD NEW CUSTOMER 
customers.insertCustomers = (custObject) => { 
  return new Promise((resolve, reject) => { 
    mssql.connect(dbConfig, function (err, result) { 
      // PARAMETERIZING QUERIES 
      var request = new mssql.Request() 
        .input("name", custObject.name) 
        .input("address", custObject.address) 
        .input("age", custObject.age) 
        .input("gender", custObject.gender); 
  
      request.query( 
        `INSERT INTO CUSTOMER (name, address, age, gender) VALUES (@name, @address, @age, @gender);`, 
        (err, res) => { 
          if (err) reject(err); 
          console.log(res.recordset); 
          resolve(res.recordset); // ADDING NEW CUSTOMER 
        } 
      ); 
    }); 
  }); 
}; 
  
  
// UPDATE CUSTOMER 
customers.updateCustomers = (param_id, custObject) => { 
  return new Promise((resolve, reject) => { 
    mssql.connect(dbConfig, function (err, result) { 
      // PARAMETERIZING QUERIES 
      var request = new mssql.Request() 
        .input("cust_id", param_id) 
        .input("name", custObject.name) 
        .input("address", custObject.address) 
        .input("age", custObject.age) 
        .input("gender", custObject.gender); 
  
      request.query( 
        `UPDATE CUSTOMER SET name = @name, address = @address, age = @age, gender = @gender WHERE id = @cust_id;`, 
        (err, res) => { 
          if (err) reject(err); 
          console.log(res.recordset); 
          resolve(res.recordset); // UPDATING CUSTOMER DATA 
        } 
      ); 
    }); 
  }); 
}; 
  
  
// DELETING BY ID FROM CUSTOMER TABLE 
customers.deleteCustomerById = (param_id) => { 
  return new Promise((resolve, reject) => { 
    mssql.connect(dbConfig, function (err, result) { 
      var request = new mssql.Request()
      .input("cust_id", param_id);

      request.query(`DELETE FROM CUSTOMER WHERE id = @cust_id`, (err, res) => { 
        if (err) reject(err); 
        console.log(res.recordset); 
        resolve(res.recordset); // DELETING CUSTOMER DATA 
      }); 
    }); 
  }); 
}; 
  
module.exports = customers; 