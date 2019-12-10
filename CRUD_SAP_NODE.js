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
//   client.invoke("ZSD_CP_PRICE_CREATE_MULTIPLE", 
//   {T_PRICE_CREATE:[
//   {PLANT: "1000", 
//   MATERIAL: "APPLE_RED", 
//   CUSTOMER: "100001",
//   RATE: "200",
//   CURRENCY: "INR",
//   PRICE_UNIT: "1",
//   COND_UNIT: "KG",
//   PORTAL_USER: "DURAI_V"
//   }, 
//   {PLANT: "2000", 
//   MATERIAL: "APPLE_RED", 
//   CUSTOMER: "100001",
//   RATE: "10",
//   CURRENCY: "USD",
//   PRICE_UNIT: "3",
//   COND_UNIT: "KG",
//   PORTAL_USER: "DURAI_V"
//   }, 
//   {PLANT: "3000", 
//   MATERIAL: "APPLE_RED", 
//   CUSTOMER: "100001",
//   RATE: "9",
//   CURRENCY: "EUR",
//   PRICE_UNIT: "1",
//   COND_UNIT: "KG",
//   PORTAL_USER: "DURAI_V"
//   }
//   ]}, function(err, res){
//     if (err) {
//       return console.log("Error ", err);
//     }
//     console.log("ZSD_CP_PRICE_CREATE_MULTIPLE_RESULT ", res);
//   });

// ZSD_CP_PRICE_GET_PLANT
  // client.invoke("ZSD_CP_PRICE_GET_PLANT", 
  // {P_PLANT: "3000"
  // }, function(err, res) {
  //   if (err) {
  //     console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_GET_RESULT ", res);
  // });

// ZSD_CP_PRICE_CHANGE_MULTIPLE
  // client.invoke("ZSD_CP_PRICE_CHANGE_MULTIPLE", 
  // {T_PRICE_CHANGE:[
  // {PLANT: "1000", 
  // MATERIAL: "APPLE_S", 
  // CUSTOMER: "100001",
  // RATE: "250",
  // CURRENCY: "INR",
  // PRICE_UNIT: "1",
  // COND_UNIT: "KG",
  // PORTAL_USER: "DURAI_V"
  // },
  // {PLANT: "2000", 
  // MATERIAL: "APPLE_A", 
  // CUSTOMER: "100001",
  // RATE: "12",
  // CURRENCY: "USD",
  // PRICE_UNIT: "3",
  // COND_UNIT: "KG",
  // PORTAL_USER: "DURAI_V"
  // },
  // {PLANT: "4000", 
  // MATERIAL: "APPLE_RED", 
  // CUSTOMER: "100001",
  // RATE: "9",
  // CURRENCY: "EUR",
  // PRICE_UNIT: "1",
  // COND_UNIT: "KG",
  // PORTAL_USER: "DURAI_V"
  // }
  // ]}, function(err, res) {
  //   if (err) {
  //     return console.log("Error ", err);
  //   }
  //   console.log("ZSD_CP_PRICE_CHANGE_MULTIPLE_RESULT ", res);
  // });

// ZSD_CP_PRICE_GET_ALL
  client.invoke("ZSD_CP_PRICE_GET_ALL", 
  {}, function(err, res) {
    if (err) {
      console.log("Error ", err);
    }
    console.log("ZSD_CP_PRICE_GET_ALL_RESULT ", res);
  });
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