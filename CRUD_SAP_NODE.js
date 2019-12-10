const rfcClient = require("node-rfc").Client;

// SAP logon credentials

const credentials = {
  user: "CT",
  passwd: "welcome123",
  ashost: "192.168.0.150",
  sysnr: "00",
  client: "800",
  lang: "EN"
};

// Create a new client using the credentials
const client = new rfcClient(credentials);

// Log the version of SAP NW RFC SDK & nodejs/RFC binding version
console.log("Client Version: ", client.version);

// Open the connection
client.connect(function(err) {
  if (err) {
    return console.log("Could not connect to server", err);
  }

// ZSD_CP_PRICE_CREATE
  // client.invoke("ZSD_CP_PRICE_CREATE", 
  // {P_PLANT: "2000", 
  // P_MATERIAL: "Strawberry_usd", 
  // P_CUSTOMER: "100001",
  // P_RATE: "1",
  // P_CURRENCY: "USD",
  // P_PRICE_UNIT: "1",
  // P_COND_UNIT: "KG",
  // P_PORTAL_USER: "DURAI_V"
  // }, function(err, res){
  //   if (err) {
  //     return console.log("Error in ZSD_CP_PRICE_CREATE ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_CREATE_RESULT ", res);
  // });

// ZSD_CP_PRICE_GET
  // client.invoke("ZSD_CP_PRICE_GET", 
  // {P_PLANT: "1000",
  // P_MATERIAL: "APPLE_WHITE",
  // P_CUSTOMER: "100001"
  // }, function(err, res) {
  //   if (err) {
  //     console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_GET_RESULT ", res);
  // })

// ZSD_CP_PRICE_CHANGE
  // client.invoke("ZSD_CP_PRICE_CHANGE", 
  // {P_PLANT: "3000", 
  // P_MATERIAL: "BLUEBERRIES", 
  // P_CUSTOMER: "0000100001",
  // P_RATE: "3.50",
  // P_CURRENCY: "USD",
  // P_PRICE_UNIT: "2",
  // P_COND_UNIT: "KG",
  // P_PORTAL_USER: "DURAI_V"
  // }, function(err, res) {
  //   if (err) {
  //     return console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_CHANGE_RESULT ", res);
  // });

// ZSD_CP_PRICE_DELETE
  // client.invoke("ZSD_CP_PRICE_DELETE", 
  // {P_PLANT: "1000",
  // P_MATERIAL: "APPLE_WHITE",
  // P_CUSTOMER: "100001"
  // }, function(err, res) {
  //   if (err) {
  //     console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_DELETE_RESULT", res);
  // });

// ZSD_CP_PRICE_CREATE_MULTIPLE
  client.invoke("ZSD_CP_PRICE_CREATE_MULTIPLE", 
[  {P_PLANT: "1000", 
  P_MATERIAL: "APPLE_RED", 
  P_CUSTOMER: "100001",
  P_RATE: "200",
  P_CURRENCY: "INR",
  P_PRICE_UNIT: "1",
  P_COND_UNIT: "KG",
  P_PORTAL_USER: "DURAI_V"
  }, 
  {P_PLANT: "2000", 
  P_MATERIAL: "APPLE_RED", 
  P_CUSTOMER: "100001",
  P_RATE: "10",
  P_CURRENCY: "USD",
  P_PRICE_UNIT: "3",
  P_COND_UNIT: "KG",
  P_PORTAL_USER: "DURAI_V"
  }, 
  {P_PLANT: "3000", 
  P_MATERIAL: "APPLE_RED", 
  P_CUSTOMER: "100001",
  P_RATE: "9",
  P_CURRENCY: "EUR",
  P_PRICE_UNIT: "1",
  P_COND_UNIT: "KG",
  P_PORTAL_USER: "DURAI_V"
  }], function(err, res){
    if (err) {
      return console.log("Error ", err);
    }
    console.log("ZSD_CP_PRICE_CREATE_MULTIPLE_RESULT ", res);
  });

// ZSD_CP_PRICE_GET_PLANT
  // client.invoke("ZSD_CP_PRICE_GET_PLANT", 
  // {P_PLANT: "3000"
  // }, function(err, res) {
  //   if (err) {
  //     console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_GET_RESULT ", res);
  // });

// ZSD_CP_PRICE_CREATE_MULTIPLE
  // client.invoke("ZSD_CP_PRICE_CREATE_MULTIPLE_T_PRICE_CREATE", 
  // [
  // {P_PLANT: "1000", 
  // P_MATERIAL: "APPLE_RED", 
  // P_CUSTOMER: "100001",
  // P_RATE: "200",
  // P_CURRENCY: "INR",
  // P_PRICE_UNIT: "1",
  // P_COND_UNIT: "KG",
  // P_PORTAL_USER: "DURAI_V"
  // },
  // {P_PLANT: "2000", 
  // P_MATERIAL: "APPLE_RED", 
  // P_CUSTOMER: "100001",
  // P_RATE: "10",
  // P_CURRENCY: "USD",
  // P_PRICE_UNIT: "3",
  // P_COND_UNIT: "KG",
  // P_PORTAL_USER: "DURAI_V"
  // },
  // {P_PLANT: "4000", 
  // P_MATERIAL: "APPLE_RED", 
  // P_CUSTOMER: "100001",
  // P_RATE: "9",
  // P_CURRENCY: "EUR",
  // P_PRICE_UNIT: "1",
  // P_COND_UNIT: "KG",
  // P_PORTAL_USER: "DURAI_V"
  // }
  // ], function(err, res) {
  //   if (err) {
  //     return console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_CREATE_MULTIPLE_RESULT ", res);
  // });

// ZSD_CP_PRICE_GET_ALL
  // client.invoke("ZSD_CP_PRICE_GET_ALL", 
  // {}, function(err, res) {
  //   if (err) {
  //     console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_GET_ALL_RESULT ", res);
  // });
});



/*
client.connect(function(err) {
  if (err) {
    return console.log("Could not connect to server", err);
  }

  client.invoke("BAPI_USER_GET_DETAIL", { USERNAME: "DURAIVE" }, function(
    err,
    res
  ) {
    if (err) {
      return console.log("Error ", err);
    }
    console.log("BAPI_USER_GET_DETAIL_RESPONSE ", res);
  });
});
*/