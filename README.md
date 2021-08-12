# extendedMythicalMysfits
https://wit-cc-a6-xud.s3.amazonaws.com/index.html
(PS: This website will be unaccessible on Augest 30th 2021 due to AWS educate account expiration.)

# Introduction
This project is about adding new features and using new AWS services to the Mythical Mysfits website to improve users’ experience. 

# Features
Existing Features
  1. Like Mysfits
  2. Adopt Mysfits
  3. Filter Mysfits
  4. View Mysfits
  5. Register Users
  6. Login/Logout
  7. Capture User's Clicks
  
New Features
  1. Dislike Mysfits
  2. Create custom Mysfits
  3. Recommend Mysfits
  4. Feed Mysfits
  
# System Architecture
Draw architecture diagrams of all services of your app and their relationships.

# Deployment
  1. Create the basic services
      - Follow the Mythical Mysfits application model and complete all the models from 1 to 5. (https://aws.amazon.com/getting-started/hands-on/build-modern-app-fargate-lambda-dynamodb-python/)
  2. Create Lambda function
      - Go to your AWS console and use the search bar at top to search for __Lambda__.
      - In Lambda/Functions console, click on the __Create function__ button at the upper right.
      - Enter a Function name as AddMysfits.
      - Copy the index.js in ```Project/app/service/addMysfits``` to your Lambda function.
      - In addMysfits, go to __Configuration__ and Edit the Environment variables.
      - Put TABLE_NAME as Key, MysfitsTable as Value and Save it.
  3. Create API Gateway
      - Go to your AWS console and use the search bar at top to search for __API Gateway__.
      - In API Gateway console, click on the __Create API__ button at the upper right.
      - Select the __REST API__ and build the API. (do not select the private REST API)
      - Enter the API name as CreateMysfitsAPI.
      - Go to CreateMysfitsAPI, click on the Action button at the upper left and choose Create Resource.
      - Enter the Resource Name as entries, select the Enable API Gateway CORS and Create Resource.
      - Click on the Action button again and choose Create Method.
      - In the Resources bar, choose POST as your new Method.
      - In the POST Method, choose Lambda function as Integration type, select Use Lambda Proxy integration, choose your region, choose AddMysfits in Lambda Function and Save it.
      - Click on the Action button, choose Enable CORS.
      - Click on the Enable CORS and replace existing CORS headers.
  4. Modify the variables
      - 
In the bottom panel of your new Cloud9 IDE, there will be a terminal command line terminal open and ready to use. If you close it or need a new one, use the Window > New Terminal menu.  
  5. Creating a Static Website in Amazon S3.
Choose a name for your S3 bucket and create it using the ```aws s3 mb```, replacing where indicated:
```
aws s3 mb s3://REPLACE_ME_BUCKET_NAME
```
  5. Copy the Mythcal Mysfits website (index.html) in the Project folder to your S3 bucket using the ```aws s3 cp``` command:


# Demo video
Upload your demo video to youtube and put a link here. Basically, the video content is very much like the quick live demo of your app with the followings:

  1. Introduction
  2. Quick walkthrough of all the features of your app one by one
Make it short and interesting (1-3 minutes)

Sample: https://www.youtube.com/watch?v=Pr-JMqTkdEM

How to record your screen: https://www.techradar.com/how-to/record-your-screen

# References
https://aws.amazon.com/getting-started/hands-on/build-modern-app-fargate-lambda-dynamodb-python/
https://thewebspark.com/2018/07/03/how-to-add-data-to-dynamodb-table-using-aws-lambdaserverless-function/
https://www.youtube.com/watch?v=mfAT38B_uhw

# Team members
* Duoduo Xu (xud@wit.edu), Team Lead, developed Dislike and Create Mysfits features.
* Sophia McGlew (mcglews@wit.edu), developed Recommend Mysfits feature.
* Zachary Johnson (johnsonz3@wit.edu), developed Feed Mysfits feature.
