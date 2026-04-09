import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const POST = process.env.PORT || 5000

app.listen(POST, () => {
    console.log(`Server is running on http://localhost:${POST}`)
})


// 1. What is CORS?

// CORS (Cross-Origin Resource Sharing) is a security feature in browsers.
// It controls whether one website can access resources from another domain.

// 2. What is Server?

// A server is a computer or software that provides data or services to clients.
// It receives requests and sends back responses over the internet.

// 3. What is json()?

// json() is a method used to convert data into JSON format or read JSON data.
// In APIs, it helps send or receive data in a structured (key-value) format.