# CRUD API — Node.js, Express & MongoDB

A beginner-friendly REST API built with **Node.js, Express.js, and MongoDB Atlas**. This project demonstrates backend fundamentals, CRUD operations, and API testing with Postman.

## 🚀 Features

- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update an existing product
- Delete a product
- Store product data in MongoDB Atlas
- Handle HTTP requests and API errors
- Organize code using routes, controllers, and models
- Test API endpoints using Postman

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Backend web framework
- **MongoDB Atlas** — Cloud database
- **Mongoose** — MongoDB object modeling
- **Postman** — API testing
- **Nodemon** — Automatic server restart during development

## 📁 Project Structure

```text
simpl-crud-app/
├── controllers/
│   └── productController.js
├── models/
│   └── product.model.js
├── routes/
│   └── productRoute.js
├── index.js
├── package.json
├── .env
└── .gitignore
```

*The structure may vary slightly depending on your implementation.*

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd simpl-crud-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure MongoDB Atlas

Create a MongoDB Atlas cluster, configure database access, and obtain your connection string.

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
```

Replace the placeholder with your own MongoDB connection string.

**Security:** Never commit your `.env` file or publish database credentials.

### 4. Start the server

Use the development command configured in your `package.json`. For example:

```bash
npm run serve
```

If your project uses a different script, replace the command accordingly.

The API runs locally at:

```text
http://localhost:3000
```

## 📡 API Endpoints

Base URL: `http://localhost:3000/api/products`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## 🧪 Testing with Postman

Test each endpoint by selecting the appropriate HTTP method and entering the request URL.

For POST and PUT requests, select **Body → raw → JSON** and provide the fields required by your product model.

Example request body (adjust the fields to match your schema):

```json
{
  "name": "Sample Product",
  "price": 99.99
}
```

Check the response status code and JSON response to verify that each operation works correctly.

## 📚 What I Learned

- Building REST APIs with Express.js
- Understanding HTTP methods and CRUD operations
- Connecting a Node.js application to MongoDB Atlas
- Creating Mongoose models
- Separating routes and controllers
- Handling requests, responses, and errors
- Testing APIs with Postman
- Organizing a backend project for maintainability

## 🎯 Purpose

This project was built as a hands-on learning exercise to strengthen my backend development skills and understand how REST APIs interact with databases.

## 👩‍💻 Author

**Douaa**

Learning backend development with JavaScript, Node.js, Express.js, and MongoDB.
