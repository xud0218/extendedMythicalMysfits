# extendedMythicalMysfits :cloud:
https://wit-cc-a6-xud.s3.amazonaws.com/index.html

(PS: This website will be unaccessible on August 30th 2021 due to AWS educate account expiration.)

# Introduction
This project is for our Cloud Computing class in which we chose to take the existing Mystical Mysfits application we had worked on in class and expand it. To do this we planned on adding new features and using new AWS services to expand the Mythical Mysfits website to improve users’ experience and functions of the application. 

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
  5. Cloudwatch Dashboard
  
# System Architecture
[Mysfits Architecture Diagram](./mysfits.png)

# Deployment
  1. Create the basic services
      - Follow the Mythical Mysfits application module and complete all the modules from 1 to 5. (https://aws.amazon.com/getting-started/hands-on/build-modern-app-fargate-lambda-dynamodb-python/)
  2. Create Lambda function
      - Go to your AWS console and use the search bar at top to search for __Lambda__.
      - In Lambda/Functions console, click on the __Create function__ button at the upper right.
      - Enter a Function name as __AddMysfits__.
      - Copy the index.js in ```Project/app/service/addMysfits``` to your Lambda function.
      - In addMysfits, go to __Configuration__ and Edit the Environment variables.
      - Put __TABLE_NAME__ as Key, __MysfitsTable__ as Value and Save it.
  3. Create API Gateway
      - Go to your AWS console and use the search bar at top to search for __API Gateway__.
      - In API Gateway console, click on the __Create API__ button at the upper right.
      - Select the __REST API__ and build the API. (do not select the private REST API)
      - Enter the API name as __CreateMysfitsAPI__.
      - Go to CreateMysfitsAPI, click on the Action button at the upper left and choose Create Resource.
      - Enter the Resource Name as __entries__, select the Enable API Gateway CORS and Create Resource.
      - Click on the Action button again and choose Create Method.
      - In the Resources bar, choose POST as your new Method.
      - In the POST Method, choose Lambda function as Integration type, select Use Lambda Proxy integration, choose your region, choose AddMysfits in Lambda Function and Save it.
      - Click on the Action button, choose Enable CORS.
      - Click on the Enable CORS and replace existing CORS headers.
  4. Update frontend
      - In ```Project/web``` folder, there will be three html files. You need replace string variables that have __REPLACE_ME__ inside in each html file.
      
      ![img](https://d1.awsstatic.com/acs/Modern%20Application%20workshop/before-replace2.116faa6540167bc007586acd50cc5b4ae41acc46.png)
      
      In the bottom panel of your new Cloud9 IDE, there will be a terminal command line terminal open and ready to use. If you close it or need a new one, use the Window > New Terminal menu.  
      - Creating a Static Website in Amazon S3.
        - Choose a name for your S3 bucket and create it using the ```aws s3 mb```, replacing where indicated:
      ```
      aws s3 mb s3://REPLACE_ME_BUCKET_NAME
      ```
      - Copy the whole Mythcal Mysfits website in the ```Project/web``` folder to your S3 bucket using the ```aws s3 cp --recursive``` command:
      ```
      aws s3 cp --recursive ~/environment/aws-modern-application-workshop/Project/web/ s3://YOUR-S3-BUCKET/
      ```
      - Copy the images of dislike into your S3 bucket using the  ```aws s3 cp --recursive``` command:
      ```
      aws s3 cp --recursive ~/environment/aws-modern-application-workshop/Project/images/ s3://YOUR-S3-BUCKET/
      ```
      - Update the S3 Bucket Policy to make the website visible to public
      ```
      aws s3api put-bucket-policy --bucket REPLACE_ME_BUCKET_NAME --policy file://~/environment/aws-modern-application-workshop/module-1/aws-cli/website-bucket-policy.json
      ```
   5. Update backend
      - Bulid a Docker image
      ```
      cd ~/environment/aws-modern-application-workshop/Project/app
      ```
      ```
      docker build . -t REPLACE_ME_AWS_ACCOUNT_ID.dkr.ecr.REPLACE_ME_REGION.amazonaws.com/mythicalmysfits/service:latest
      ```
      You will see a similar return. Copy the tag for next step.
      ```
      Successfully built 8bxxxxxxxxab
      Successfully tagged 111111111111.dkr.ecr.us-east-1.amazonaws.com/mythicalmysfits/service:latest
      ```
      - Test The Service Locally
      ```
      docker run -p 8080:8080 REPLACE_ME_WITH_DOCKER_IMAGE_TAG
      ```
      __Select Preview > Preview Running Application in the Cloud9 menu bar:__
      ![img](https://d1.awsstatic.com/acs/Modern%20Application%20workshop/preview-menu.70e01ea6ed372cc9e0486327062266faaf499faf.png)
      
      - Push the Docker image to Amazon ECR
      ```
      $(aws ecr get-login --no-include-email)
      ```
      ```
      docker push REPLACE_ME_WITH_DOCKER_IMAGE_TAG
      ```
      - Update Task
        - Go to your AWS console and use the search bar at top to search for __ECS__.
        - Click on the MythicalMysfits-Cluster.
        - Go to __Tasks__
        - Select the __mythicalmysfitsservice__ task
        - __Stop__ the task. In a few minutes the task will be updated.

Now, you Mythical Mysfits website should be good to go! Congratulation!:trophy: Please send me an email if anything went wrong.

# Demo video
https://www.youtube.com/watch?v=9Peax6BRCdI&ab_channel=Sophaloph07

# References
https://aws.amazon.com/getting-started/hands-on/build-modern-app-fargate-lambda-dynamodb-python/
https://thewebspark.com/2018/07/03/how-to-add-data-to-dynamodb-table-using-aws-lambdaserverless-function/
https://www.youtube.com/watch?v=mfAT38B_uhw

# Team members
* Duoduo Xu (xud@wit.edu), Team Lead, developed Dislike and Create Mysfits features.
* Sophia McGlew (mcglews@wit.edu), developed Recommend Mysfits feature.
* Zachary Johnson (johnsonz3@wit.edu), developed Feed Mysfits feature & Cloudwatch Dashboard.
