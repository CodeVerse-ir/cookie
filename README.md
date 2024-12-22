
# Cookie

## Introduction
This project is a web application built with **Next.js** that utilizes **Tailwind CSS** for UI design. The application employs the **crypto-js** library for encrypting data with the **AES** algorithm and for hashing data. It allows users to perform three main operations on cookies: **SET**, **GET**, and **DELETE**.

## How to Modify Custom Data
To input custom data, you can navigate to the `actions/auth.js` file and make the necessary changes within the `login` function. This section provides developers the flexibility to modify the login and user registration behaviors according to their specific needs.

## Installation and Setup
To install and set up this project, follow these steps:

1. **Download the Files**: First, download the project from the GitHub repository.

2. **Create the .env.local File**: In the root of the project, create a file named `.env.local` and define the following variable within it:
   ```
   SECRET_KEY=your_secret_key
   ```
   Replace `your_secret_key` with your desired secret key for the encryption algorithm.

3. **Install Required Packages**: Navigate to the root of the project in your terminal and run the following command to install the required packages from the `package.json` file:
   ```
   npm install
   ```

4. **Run the Application**: After installing the packages, execute the following command to run the application:
   ```
   npm run dev
   ```

After completing the above steps, your application will be available at:
```
http://localhost:3000
```
