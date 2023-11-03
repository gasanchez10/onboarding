const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
var AWS = require("aws-sdk");

if (process.env.RUNNINGLOCALLY === 'true') {
    var credentials = new AWS.SharedIniFileCredentials({ profile: 'past-post-dev' });
    AWS.config.credentials = credentials;
}
AWS.config.update({
    region: process.env.REGINON
});
exports.handler = async (event) => {
    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: 'empty'
        }),
    };
    try {
        const notifications = await prisma.pushNotifications.findMany()
        response.body = JSON.stringify(notifications)
    }
    catch (error) {
        console.log('Paspost Error-> Generating signed URL error log');
        console.log(error)
        response.body = "Paspost Error-> Request not found"
        response.statusCode = 404
    }
    await prisma.$disconnect();
    console.log((response))
    return response;
};


