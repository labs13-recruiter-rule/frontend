# Recruiter Rules

You can find the deployed project at [recruiterrules.com](http://www.recruiterrules.com/).

## Contributors



|                                   [Megan Jones](https://github.com/meginks)                                   |                                     [Omar Okla](https://github.com/ok1a)                                      |                              [Timothy Shores](https://github.com/timothyshores)                               |   [Ryan Matthews](https://github.com/Ryntak94)                                                                | 
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|      [<img src="https://github.com/meginks.png?size=200" width = "200" />](https://github.com/meginks/)       |          [<img src="https://github.com/ok1a.png?size=200" width = "200" />](https://github.com/ok1a)          | [<img src="https://github.com/timothyshores.png?size=200" width = "200" />](https://github.com/timothyshores) | [<img src="https://github.com/Ryntak94.png?size=200" width = "200" />](https://github.com/Ryntak94)           |
|             [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/meginks/)             |               [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ok1a)               |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/timothyshores)           | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Ryntak94)                         |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/megan-jones123/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/omarokla/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/timothyshores/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ryntak94/) |

<br>
<br>


## Project Overview

 [Trello Board](https://trello.com/b/Ecx8Pjeg/labs-13-recruiter-rule)

Recruiter Rules is a rule engine designed with recruiters in mind. A recruiter can log in, create specific rules for when a candidate should be sent to a certain person or people, then input a candidate's information and have the program automatically send it to the correct person or people per the rules created.

### Key Features

- Rule Engine Creator
- Send a Candidate Flow
- Contacts Dashboard
- Engines Dashboard

## Tech Stack

### Front end built using:

#### _React_

We chose to use React to build the frontend for the following reasons: 

- reusable components
- fast rendering
- interactive UI 
- simple state management


#### Front end deployed to [recruiterrules.com](http://www.recruiterrules.com/)

#### [Back end]() built using:

####  Node JS / Express

- Simplicity
- Scalability
- Flexibility

####  Knex 

- Prevents SQL injections 
- Ease of creating and editing tables

# APIs

##  Firebase Oauth

We used Firebase Oauth for our authentication on the frontend and the backend because of enhanced security and for consistency.

##  Stripe 

We used Stripe as our payment provider.

## [JSON Rules Engine](https://www.npmjs.com/package/json-rules-engine)

JSON Rules Engine is an NPM package that we customized to create our rule engine on the backend.


##  Nodemailer + Sendgrid

We used Nodemailer and Sendgrid to send the emails from our app. 

#  Installation Instructions

Yarn install and yarn start. For environment variables, please contact one of the contributors listed at the top of this readme.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs13-recruiter-rule/backend) for details on the backend of our project.
