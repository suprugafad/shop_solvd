### Description
This project is a clothing shop. There are two roles of users: admin and customers. Customers can choose clothes by size. This application has the ability to add, update, delete and get information about the user, product and order.
_____
### Technical requirements
- Task will be implemented on Javascript
- Database - MongoDB
_____
### Implementation details
- Endpoint api/v1/users:
  - GET api/v1/users - get all users
      - Server should answer with status code 200 and all users records
  - GET api/v1/users/{userId} - get one user 
    - Server should answer with status code 200 and record with id === userId if it exists
    - Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
  - POST api/v1/users - create record about new user and put it in database. The request body should contain the required information for creating a new product, such as name, price, description and image.
    - Server should answer with status code 201 and newly created record
    - Server should answer with status code 400 and corresponding message if request body does not contain required fields
  - PUT api/v1/users/{userId} - update existing user. The request body should contain the updated information for the product.
    - Server should answer with status code 200 and updated record
    - Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
  - DELETE api/v1/users/{userId} is used to delete existing user from database
    - Server should answer with status code 204 if the record is found and deleted
    - Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
- Endpoint api/v1/products:
  - GET api/v1/products - get all products
- Server should answer with status code 200 and all products records
  - GET api/v1/products/{productId} - get one product
    - Server should answer with status code 200 and record with id === productId if it exists
    - Server should answer with status code 400 and corresponding message if productId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === productId doesn't exist
  - POST api/v1/products - create record about new product and put it in database. The request body should contain the required information for creating a new product, such as name, price, description and image.
    - Server should answer with status code 201 and newly created record
    - Server should answer with status code 400 and corresponding message if request body does not contain required fields
  - PUT api/v1/products/{productId} - update existing product. The request body should contain the updated information for the product.
    - Server should answer with status code 200 and updated record
    - Server should answer with status code 400 and corresponding message if productId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === productId doesn't exist
  - DELETE api/v1/products/{productId} is used to delete existing product from database
    - Server should answer with status code 204 if the record is found and deleted
    - Server should answer with status code 400 and corresponding message if productId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === productId doesn't exist
- Endpoint api/orders:
  - GET api/v1/orders - get all orders
    - Server should answer with status code 200 and all orders records
  - GET api/v1/orders/{orderId} - get one order
    - Server should answer with status code 200 and record with id === orderId if it exists
    - Server should answer with status code 400 and corresponding message if orderId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === orderId doesn't exist
  - POST api/v1/orders - create record about new product and put it in database. The request body should contain the required information for creating a new product, such as name, price, description and image.
    - Server should answer with status code 201 and newly created record
    - Server should answer with status code 400 and corresponding message if request body does not contain required fields
  - PUT api/v1/orders/{orderId} - update existing order. The request body should contain the updated information for the product.
    - Server should answer with status code 200 and updated record
    - Server should answer with status code 400 and corresponding message if orderId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === orderId doesn't exist
  - DELETE api/v1/orders/{orderId} is used to delete existing order from database
    - Server should answer with status code 204 if the record is found and deleted
    - Server should answer with status code 400 and corresponding message if orderId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === orderId doesn't exist
- Requests to non-existing endpoints are handled (server answer with status code 404 and message with error)
______
Users are stored as objects that have the following properties:
  - id — unique identifier (string, uuid) generated on server side
  - name — user's name (string, required)
  - password — user's age (number, required)
  - email — user’s email address (string, unique, required)
  - isAdmin — shows user is admin or not (boolean, required)

Products are stored as objects that have the following properties:
  - id — unique identifier (string, uuid) generated on server side
  - title — product's title (string, required)
  - description — product's age (string, required)
  - category — product's category (string, required)
  - brand — brand of product (string, required)
  - price — price of product (number, required)
  - image — image of product (string, required)
  - modelId — product’s model (string, uuid)

Models are stored as objects that have the following properties:
  - id — unique identifier (string, uuid) generated on server side
  - size — model's size (string, required)
  - count — count of items of this model

Orders are stored as objects that have the following properties:
  - id — unique identifier (string, uuid) generated on server side
  - userId — product's name (string, required)
  - products — products that are in cart (array of strings or empty array, required)
  - date — date when order was created (date, required)
______

### Install
Clone this repo with command
```sh
git clone https://github.com/suprugafad/shop_solvd.git
```

Go to project folder
```sh
cd shop-solvd
```

Install dependencies
```sh
npm install
```

### Run in docker container
For running application in Docker container you should have docker installed on your system

Run app
```sh
docker compose up
```

Stop app
```sh
docker compose down
```

### Run as is
Run command
```sh
node index.js
```