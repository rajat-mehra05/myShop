# myShop
- Personal Ecommerce Site built using ReactJS, Redux, styled-components, mongoDB
- [App Link](https://poetryofryanshop.herokuapp.com/)

## Features
- Fully featured shopping cart
- Paypal Integration
- User Profile with orders

## Usage

Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
### Install Dependencies (frontend & backend)
```
npm install
cd frontend
npm install
```
### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
## Build & Deploy
```
# Create frontend prod build
cd frontend
npm run build
```
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

