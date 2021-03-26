##ABC College React JS Project##

What is the use of this Repo
This Project is a Simple ReactJS Project which demonstrates the following

Creating a Component in React
Making HTTP calls
Communicating between parent and child component
Using CSS along with React
Using Basic Hooks and Redux in React
The project Template can be used to build bigger projects

Prerequisites
Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

npm install -g create-react-app

Cloning and Running the Application in local
Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install
In order to run the application Type the following command

npm start
The Application Runs on localhost:3000

Application design
Widgets - Resusable dynamic and responsive widget
Widget Component : This Component displays a list of attributes. This Component gets the data from an API as specified in the widget definition.

Canvas Component : This Component Displays the details of the dataSet returned by the API. This Component is the Child Component of Widget Component

NOTE: Have not used socket.io connection for sorting widget data.

HTTP client
fetch library is used to make HTTP Calls

URL
The application has just one url localhost:3000/ which ties to Dashboard

Resources
create-react-app : The following link has all the commands that can be used with create-react-app https://github.com/facebook/create-react-app

ReactJS : Refer to https://reactjs.org/ to understand the concepts of ReactJS

Redux : Refer to https://redux.js.org/ to understand how to use Redux
