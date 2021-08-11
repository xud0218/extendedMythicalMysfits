// a Lambda function that get the input values and pass into dynamoDB
var AWS = require('aws-sdk'),
    mydocumentClient = new AWS.DynamoDB.DocumentClient();
    
exports.handler = function(event, context, callback){
    var params = {
        Item :{
            "MysfitId": Math.floor(Math.random() * Math.floor(10000000)).toString(),
            "GoodEvil": event.goodevil,
            "LawChaos": event.lawchaos,
            "Adopted": event.adopted,
            "Age": event.age,
            "Description": event.description,
            "Dislikes": event.dislikes,
            "Likes": event.likes,
            "Name": event.name,
            "ProfileImageUri": event.profileImageUri,
            "Species": event.species,
            "ThumbImageUri": event.thumbImageUri
        },
        TableName : process.env.TABLE_NAME
    };
    mydocumentClient.put(params, function(err, data){
        callback(err, data);
    });
}