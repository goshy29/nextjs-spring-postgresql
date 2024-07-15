# Next.js Project + Spring Boot + PostgreSQL
## Project Description:
This Full-Stack Project which i called IronMuscle with Next.js, Spring Boot and PostgreSQL is a modern web application that combines a dynamic, server-rendered frontend built with Next.js, a backend using Spring Boot and PostgreSQL database. Тhe purpose of this application is to share your experience at Cross Fit or Fitness, which experience will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and experience. The application allows you to delete someones blog. Also you will find News from the menu where you can read some interesting articles about fitness world which are in-memory loaded.

## Features:
1. Server-Side Rendering (SSR): Utilizes Next.js for server-side rendering.
2. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.      
3. Full-Stack Architecture: Combines a Next.js frontend with a Spring Boot backend and PostgreSQL database.

## Technologies Used:
1. Frontend: Next.js, React.js, CSS.
2. Backend: Node.js, Express.js (for API routes).
3. Database: PostgreSQL, Spring Data JPA.
4. State Management: React Hooks.
5. Routing: Next.js Pages Router.
6. Version Control: Git, GitHub.

## Project Structure:
Frontend: Contains all Next.js components and frontend logic
 1. Components: Components(some of them reusable) for different sections of the project, including Menu.
 2. Pages: Separate pages for Home, News, Blog and Share Experience.

Backend: Contains all Spring Boot server-side code and database logic.
 1. Controllers: Handle the HTTP requests and responses.
 2. Services: Contain the business logic of the application.
 3. Repositories: Interface with the PostgreSQL database using Spring Data JPA.
 4. Models: Define the entity classes mapped to the database tables.
 5. Config: Configuration files, including database connection settings.

## To run this project locally, follow these steps:
1. Clone the repository: git clone https://github.com/goshy29/nextjs-spring-postgresql.git 
2. Open the project with your code editor(IntelliJ IDEA) and open New Terminal
3. To install frontend dependencies, at the Terminal navigate to "cd src/main/frontend" and run: npm install
4. Ensure PostgreSQL is installed and running
5. Create a database and update file "application.properties" with your database credentials
6. Start the Spring Boot application 
7. Start the frontend development server: npm start
8. Open the application in your browser: http://localhost:3000
