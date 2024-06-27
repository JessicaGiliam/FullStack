# FullStack
SNHU CS465 Full Stack Development
Architecture -
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Express HTML and JavaScript is a great choice for a more simple application where search engine optimization is important and development needs to be straightforward. It offers the benefits of server-side rendering and can handle basic interactivity well. Single Page Applications (SPA), provide a richer, more dynamic user experience suitable for complex applications. They excel in interactivity and performance after the initial load, but they come with additional complexity and potential SEO challenges that need to be managed. Choosing between these approaches depends on the specific needs and goals of the project, including considerations for SEO, performance, user experience, and development resources.

Why did the backend use a NoSQL MongoDB database?
MongoDB is an integral part of the MEAN (MongoDB, Express.js, Angular, Node.js) stack, which is a popular choice for building modern web apps. Its integration with other components of the MEAN stack enhances the overall development experience and performance.
MongoDB’s document structure aligns well with JavaScript and Node.js, resulting in  data interchange between the database and the application being more simple. 

Functionality - 
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
In FullStack development and management, it is crucial to understand the difference between JSON and JavaScript and how the front and back end tie together. Syntactically, JSON is a subset of JavaScript, primarily used for structuring data. It consists of key-value pairs and arrays, making it ideal for representing structured data. JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JavaScript includes functions, control flow statements, and object-oriented programming features. Specifically for this project, I used a JSON file for data, refactored the backend code to pull that data out of Mongo, and used the database to improve functionality. This was done in order to provide an admin interface for manipulating trip data rather than having to edit a JSON file, making it more efficient. 

Testing - 
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
This project required only manual testing for expected behaviors. To build a robust and secure web application, understanding methods, endpoints and security in a FullStack app is imperative. Methods define the actions performed on the server and endpoints provide the access points for these actions. Security measures protect data and ensure safe communication.
Multi-factor authentication can be hard to automate and special handling is needed for processes like CAPTCHA. Different roles have different permissions so those all need to be taken in account with automation, but in my opinion still worth it in the end. 

Reflection - 
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I now have enough knowledge of the MEAN stack to work confidently on an app. I have learned about JSON, MongoDB, Express, Angular, and Node.js with enough extent to navigate through UI components with confidence and track down errors. This course has refined my skills in recognizing and correcting code issues and has helped me examine and understand the way code should be laid out for this type of application. This course helped show what the daily life of a FullStack engineer may look like. 
