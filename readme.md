# Chat AI API

Chat AI API is a RESTful backend service designed to facilitate user registration, real-time chat interactions, and message retrieval. Built with TypeScript for enhanced type safety and maintainability, this API serves as the foundation for AI-powered chat applications. Originally created by Brad Traversy, this version has been edited and personalized by Dioka Ejionueme.

## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
- [Building For Production](#building-for-production)
- [Credits](#credits)

## Installation

Follow these steps to set up the Chat AI API on your local machine:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd chat-AI
   ```

2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and configure the necessary environment variables (e.g., database connection strings, API keys). Refer to `.env.example` if available.

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   The server should now be running locally.

## Endpoints

### `POST /register-user`

Registers a new user in the system. Expects user details (such as username, email, and password) in the request body. Returns a success message and user information upon successful registration.

### `POST /chat`

Handles chat interactions. Accepts a message payload from the user and returns a response generated by the AI. Useful for real-time chat applications where users interact with an AI assistant.

### `POST /get-messages`

Retrieves the chat history for a specific user or session. Expects identifying information (such as user ID or session token) in the request body. Returns an array of previous messages.

## Building For Production

This project is written in TypeScript. Before deploying to production, you must build the project to generate JavaScript output.

**Production Build Steps:**

1. **Build the Project**

   ```bash
   npm run build
   ```

2. **Start the Production Server**
   ```bash
   npm start
   ```

This will compile the TypeScript source code into JavaScript and launch the server using the compiled files.

## Credits

- **Original Author:** Brad Traversy
- **Personalized & Edited By:** Dioka Ejionueme
- **Contact:** diokajr@gmail.com
