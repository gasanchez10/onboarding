/*let event = {
    display_name: "German",
    lastName: "Sanchez",
    phone_number: 565613232132,
    email: "gersan1997@hotmail.com",
    bio: "Biografia",
    photo_url: "Url imagen",
    created_time: "Hoy",
    lifeState: true,
    isWelcome: true
}*/

let event ={
    "version": "2.0",
    "routeKey": "POST /createUser",
    "rawPath": "/createUser",
    "rawQueryString": "",
    "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "content-length": "276",
        "content-type": "application/json",
        "host": "blngt8d2t1.execute-api.us-east-1.amazonaws.com",
        "postman-token": "13e1006d-1c37-4260-bf1e-d11cda2ffb05",
        "user-agent": "PostmanRuntime/7.29.2",
        "x-amzn-trace-id": "Root=1-6317d5fd-339f1e113de6be734c148a42",
        "x-forwarded-for": "157.253.228.131",
        "x-forwarded-port": "443",
        "x-forwarded-proto": "https"
    },
    "requestContext": {
        "accountId": "868222247046",
        "apiId": "blngt8d2t1",
        "domainName": "blngt8d2t1.execute-api.us-east-1.amazonaws.com",
        "domainPrefix": "blngt8d2t1",
        "http": {
            "method": "POST",
            "path": "/createUser",
            "protocol": "HTTP/1.1",
            "sourceIp": "157.253.228.131",
            "userAgent": "PostmanRuntime/7.29.2"
        },
        "requestId": "YD5fsgEdIAMEP3Q=",
        "routeKey": "POST /createUser",
        "stage": "$default",
        "time": "06/Sep/2022:23:21:33 +0000",
        "timeEpoch": 1662506493806
    },
    "body": "{\r\n  \"email\":  \"mov3@pp.com\"\r\n}",
    "isBase64Encoded": false
}

//process.env.DATABASE_URL = "mysql://root:root@localhost:3306/sakila?schema=actor"
//process.env.DATABASE_URL =env("DATABASE_URL")
process.env.DATABASE_URL= "mysql://Administrator:pastpost2023@pastpostqa.cyhetsbci7c2.us-west-1.rds.amazonaws.com/pastpostndev?schema=User"

var lambda = require("./api-getPushNotifications/index.js")
arranca(event);
async function arranca(event) {
    let res = lambda.handler(event).then((data) => {
        console.log("Gotten user! ")
        console.log(data);
    });
}

