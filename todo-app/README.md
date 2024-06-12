Retrieve all todos for a user
GET /users/{user_name}/todos

Delete a todo of a user
DELETE /users/{username}/todos/{id}

Edit/Update a todo
PUT /users/{username}/todos/{id}

Create a new todo
POST /users/{username}/todos/

Best Practices in Restful Design

Consumer First 
Documentation - Swagger
Make the best use of HTTP
Request methods: 
Response Status
200 - Success
404 - Resource Not Found
400 - Bad Request 
201 - Created
401 - Unauthorized
500 - Server Error

No Secure info in URI
Use Plurals
Prefer /users to /user
Prefer /users/1 to /user/1

Use Nouns for Resources
For Exceptions - Define a consistent approach
/search
PUT 	/gists/{id}/star
DELETE  /gists/{id}/star

1.Create branch in Remote
2.git fetch origin feature/06-todo-security
3.git checkout -b feature/06-todo-security origin/feature/06-todo-security
