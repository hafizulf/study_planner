# Student Study Plans

## Description

The Student Study Plans project is a system designed to help students organize and manage their study schedules efficiently. It allows students to create, update, and manage their study plans, ensuring they stay on top of their academic responsibilities.

## Tech Stack

- **Node.js v18.16.0**
  - A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [Download Node.js v18.16.0](https://nodejs.org/en/blog/release/v18.16.0)

- **Express.js**
  - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - [Learn more about Express.js](https://expressjs.com/)

- **MySQL**
  - An open-source relational database management system.
  - [Learn more about MySQL](https://www.mysql.com/)

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/hafizulf/study_planner
   ```

2. **Install dependencies**
   ```bash
   cd study_planner
   npm install
   ```

3. **Setup database**
   - Create a new database in MySQL.

4. **Setup environment variables**
   - Rename `.env.example` to `.env` and fill it with the following:
     ```
     PORT=

     DB_HOST=yourdbhost
     DB_USER=username
     DB_PASS=password
     DB_NAME=dbname
     DB_DIALECT=mysql
     ```

5. **Run migrations**
   ```bash
   npm run migrate
   ```

6. **Run the server**
   ```bash
   npm run dev
   ```
   - The server will run on your localhost at the specified `PORT` in the `.env` file.

## API Documentation

Check out the [API Documentation](api-docs/README.md) for more details.
