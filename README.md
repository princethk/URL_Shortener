# URL Shortener API

A scalable and secure URL Shortener API built with **Node.js**, **Express**, and **MongoDB**. This project includes advanced analytics, Google Sign-In authentication, and rate limiting for abuse prevention.

## Features

### User Authentication
- **Google Sign-In** for user registration and login.
- Secure JWT-based session management.

### Short URL Management
- Create short URLs with custom topics.
- Redirect to original URLs using the generated short URL.
- View detailed analytics for individual URLs, topic-based summaries, and overall user activity.

### Analytics
- Track each redirect event with:
  - IP address
  - User agent
  - Operating system
  - Device type
  - Geolocation data

### Performance Optimization
- **Rate Limiting**: Prevent abuse by limiting API requests per user.

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Google OAuth 2.0

---

## Folder Structure

```
project/
├── controllers/
│   ├── authController.js       # Handles user authentication
│   ├── urlController.js        # Manages URL creation and redirection
├── models/
│   ├── User.js                 # User schema
│   ├── Url.js                  # URL schema
│   ├── Analytics.js            # Analytics schema
├── routes/
│   ├── authRoutes.js           # Authentication routes
│   ├── urlRoutes.js            # URL routes
├── middleware/
│   ├── authMiddleware.js       # JWT authentication middleware
│   ├── rateLimiter.js          # Rate limiting middleware
├── utils/
│   ├── geoLocation.js          # Fetch geolocation data
│   ├── googleAuth.js           # Google token verification
├── app.js                      # Main application setup
├── server.js                   # Server entry point
├── .env                        # Environment variables
├── package.json                # Node.js dependencies
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16+)
- **MongoDB**
- **Redis**
- **Google OAuth Credentials**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```
   PORT=5000
   MONGO_URI=your-mongodb-uri
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## API Endpoints

### Authentication
#### Google Sign-In
- **POST** `/auth/google-signin`
- **Request Body:**
  ```json
  {
    "token": "google-id-token"
  }
  ```

### Short URL Management
#### Create Short URL
- **POST** `/url/create`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT>"
  }
  ```
- **Request Body:**
  ```json
  {
    "originalUrl": "https://example.com",
    "topic": "example-topic"
  }
  ```

#### Redirect to Original URL
- **GET** `/url/:shortId`

#### View URL Analytics
- **GET** `/url/analytics/:shortId`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT>"
  }
  ```

---

## Testing

1. Use [Postman](https://www.postman.com/) to test the API endpoints.
2. Generate a Google ID token via the [Google OAuth Playground](https://developers.google.com/oauthplayground).
3. Follow the [Postman Guide](#how-to-test-this-application-on-postman) for step-by-step instructions.

---


## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

