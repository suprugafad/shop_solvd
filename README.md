### Description
This project is a clothing shop. There are two roles of users: admin and customers. Customers can choose clothes by size. This application has the ability to add, update, delete and get information about the user, product, cart and order.
_____
### Technical requirements
- Task will be implemented on Javascript
- Database - MongoDB
- Docker
_____
### Implementation details
- #### Endpoint api/v1/users:
  - GET api/v1/users - get all users
      - Server should answer with status code 200 and all users records.

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/users’ \
> ```

> Response body
> ```
> [{
>   "id": 1,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> },
> {
>   "id": 2,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }]
> ```
  - GET api/v1/users/{userId} - get one user by ID
    - Server should answer with status code 200 and record with id === userId if it exists
    - Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/users/1’ \
> ```

> Response body
> ```
> {
>   "id": 1,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }
> ```

  - GET api/v1/users/{name} - get one user by username
    - Server should answer with status code 200 and record with name === username if it exists
    - Server should answer with status code 400 and corresponding message if username is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with name === username doesn't exist

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/users/username’ \
> ```

> Response body
> ```
> {
>   "id": 0,
>   "name": "username",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }
> ```

  - POST api/v1/users - create record about new user and put it in database. The request body should contain the required information for creating a new product, such as name, price, description and image.
    - Server should answer with status code 201 and newly created record
    - Server should answer with status code 400 and corresponding message if request body does not contain required fields

> Request
> ```
> curl -X 'POST' \
> ‘api/v1/users/0’  \
> -d '{
>   "id": 0,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }'
> ```

> Response body
> ```
> {
>   "id": 0,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }
> ```

  - PUT api/v1/users/{userId} - update existing user. The request body should contain the updated information for the product.
    - Server should answer with status code 200 and updated record
    - Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

> Request
> ```
> curl -X 'PUT' \
> ‘api/v1/users/3’  \
> -d '{
>   "id": 3,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }'
> ```

> Response body
> ```
> {
>   "id": 3,
>   "name": "string",
>   "password": "string",
>   "email": "string",
>   "isAdmin": false,
> }
> ```

  - DELETE api/v1/users/{userId} is used to delete existing user from database
    - Server should answer with status code 204 if the record is found and deleted
    - Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

> Request
> ```
> curl -X 'DELETE' \
> ‘api/v1/users/1’ \
> ```

> Response body
> ```
> No Content
> ```

- #### Endpoint api/v1/products:
  - GET api/v1/products - get all products
    - Server should answer with status code 200 and all products records

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/products’ \
> ```

> Response body
> ```
> [{
>   "id": 1,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 1,
>   "image": "string",
>   "modelId": 1,
> },
> {
>   "id": 2,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 2,
>   "image": "string",
>   "modelId": 2,
> }]

  - GET api/v1/products/{productId} - get one product
    - Server should answer with status code 200 and record with id === productId if it exists
    - Server should answer with status code 400 and corresponding message if productId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === productId doesn't exist

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/products/1’ \
> ```

> Response body
> ```
> {
>   "id": 1,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 1,
>   "image": "string",
>   "modelId": 1,
> }
> ```

  - POST api/v1/products - create record about new product and put it in database. The request body should contain the required information for creating a new product, such as name, price, description and image.
    - Server should answer with status code 201 and newly created record
    - Server should answer with status code 400 and corresponding message if request body does not contain required fields

> Request
> ```
> curl -X 'POST' \
> ‘api/v1/products/1’  \
> -d '{
>   "id": 1,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 1,
>   "image": "string",
>   "modelId": 1,
> }'
> ```

> Response body
> ```
> {
>   "id": 1,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 1,
>   "image": "string",
>   "modelId": 1,
> }
> ```

  - PUT api/v1/products/{productId} - update existing product. The request body should contain the updated information for the product.
    - Server should answer with status code 200 and updated record
    - Server should answer with status code 400 and corresponding message if productId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === productId doesn't exist

> Request
> ```
> curl -X 'PUT' \
> ‘api/v1/products/3’  \
> -d '{
>   "id": 3,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 3,
>   "image": "string",
>   "modelId": 3,
> }'
> ```

> Response body
> ```
> {
>   "id": 3,
>   "title": "string",
>   "discription": "string",
>   "category": "string",
>   "brand": "string",
>   "price": 3,
>   "image": "string",
>   "modelId": 3,
> }
> ```

  - DELETE api/v1/products/{productId} is used to delete existing product from database
    - Server should answer with status code 204 if the record is found and deleted
    - Server should answer with status code 400 and corresponding message if productId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === productId doesn't exist

> Request
> ```
> curl -X 'DELETE' \
> ‘api/v1/products/1’ \
> ```

> Response body
> ```
> No Content
> ```    

- #### Endpoint api/orders:
  - GET api/v1/orders - get all orders
    - Server should answer with status code 200 and all orders records

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/orders’ \
> ```

> Response body
> ```
> [{
>   "id": 1,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-15T00:00:00+0400",
> },
> {
>   "id": 2,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-16T00:00:00+0400",
> }]
> ```

  - GET api/v1/orders/{orderId} - get one order
    - Server should answer with status code 200 and record with id === orderId if it exists
    - Server should answer with status code 400 and corresponding message if orderId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === orderId doesn't exist

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/orders/1’ \
> ```

> Response body
> ```
> {
>   "id": 1,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-15T00:00:00+0400",
> }
> ```

  - POST api/v1/orders - create record about new order and put it in database. The request body should contain the required information for creating a new order.
    - Server should answer with status code 201 and newly created record
    - Server should answer with status code 400 and corresponding message if request body does not contain required fields

> Request
> ```
> curl -X 'POST' \
> ‘api/v1/orders/1’  \
> -d '{
>   "id": 1,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-15T00:00:00+0400",
> }'
> ```

> Response body
> ```
> {
>   "id": 1,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-15T00:00:00+0400",
> }
> ```

  - PUT api/v1/orders/{orderId} - update existing order. The request body should contain the updated information for the order.
    - Server should answer with status code 200 and updated record
    - Server should answer with status code 400 and corresponding message if orderId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === orderId doesn't exist

> Request
> ```
> curl -X 'PUT' \
> ‘api/v1/orders/1’  \
> -d '{
>   "id": 1,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-15T00:00:00+0400",
> }'
> ```

> Response body
> ```
> {
>   "id": 1,
>   "userId": "string",
>   "products": "string",
>   "date": "2023-02-15T00:00:00+0400",
> }
> ```

  - DELETE api/v1/orders/{orderId} is used to delete existing order from database
    - Server should answer with status code 204 if the record is found and deleted
    - Server should answer with status code 400 and corresponding message if orderId is invalid (not uuid)
    - Server should answer with status code 404 and corresponding message if record with id === orderId doesn't exist

> Request
> ```
> curl -X 'DELETE' \
> ‘api/v1/orders/1’ \
> ```

> Response body
> ```
> No Content
> ```   

- #### Endpoint api/carts:
  - GET api/v1/carts - get all carts
    - Server should answer with status code 200 and all carts records

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/carts’ \
> ```

> Response body
> ```
> [{
>   "id": 1,
>   "userId": "string",
>   "products": "string",
> },
> {
>   "id": 2,
>   "userId": "string",
>   "products": "string",
> }]
> ```

- GET api/v1/carts/{cartId} - get one cart
  - Server should answer with status code 200 and record with id === cartId if it exists
  - Server should answer with status code 400 and corresponding message if cartId is invalid (not uuid)
  - Server should answer with status code 404 and corresponding message if record with id === cartId doesn't exist

> Request
> ```
> curl -X 'GET' \
> ‘api/v1/carts/1’ \
> ```

> Response body
> ```
> {
>   "id": 1,
>   "userId": "string",
>   "products": "string",
> }
> ```

- POST api/v1/carts - create record about new cart and put it in database. The request body should contain the required information for creating a new cart.
  - Server should answer with status code 201 and newly created record
  - Server should answer with status code 400 and corresponding message if request body does not contain required fields

> Request
> ```
> curl -X 'POST' \
> ‘api/v1/carts/1’  \
> -d '{
>   "id": 1,
>   "userId": "string",
>   "products": "string",
> }'
> ```

> Response body
> ```
> {
>   "id": 1,
>   "userId": "string",
>   "products": "string",
> }
> ```

- PUT api/v1/carts/{cartsId} - update existing cart. The request body should contain the updated information for the cart.
  - Server should answer with status code 200 and updated record
  - Server should answer with status code 400 and corresponding message if cartId is invalid (not uuid)
  - Server should answer with status code 404 and corresponding message if record with id === cartId doesn't exist

> Request
> ```
> curl -X 'PUT' \
> ‘api/v1/carts/1’  \
> -d '{
>   "id": 1,
>   "userId": "string",
>   "products": "string",
> }'
> ```

> Response body
> ```
> {
>   "id": 1,
>   "userId": "string",
>   "products": "string",
> }
> ```

- DELETE api/v1/carts/{cartId} is used to delete existing cart from database
  - Server should answer with status code 204 if the record is found and deleted
  - Server should answer with status code 400 and corresponding message if cartId is invalid (not uuid)
  - Server should answer with status code 404 and corresponding message if record with id === cartId doesn't exist

> Request
> ```
> curl -X 'DELETE' \
> ‘api/v1/carts/1’ \
> ```

> Response body
> ```
> No Content
> ```   

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
  - description — product's description (string, required)
  - category — product's category (string, required)
  - brand — brand of product (string, required)
  - price — price of product (number, required)
  - image — image of product (string, required)
  - modelId — product’s model (string, uuid)

Models are stored as objects that have the following properties:
  - id — unique identifier (string, uuid) generated on server side
  - size — model's size (string, required)
  - count — count of items of this model (number, required)

Orders are stored as objects that have the following properties:
  - id — unique identifier (string, uuid) generated on server side
  - userId — id of the user (string, uuid)
  - products — products that are in cart (array of strings or empty array, required)
  - date — date when order was created (date, required)

Carts are stored as objects that have the following properties:
- id — unique identifier (string, uuid) generated on server side
- userId — id of the user (string, uuid)
- products — products that are in cart (array of strings or empty array, required)
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