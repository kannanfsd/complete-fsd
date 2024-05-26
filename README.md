# Full Stack Training Model

Create Angular Application using ng new todo-ui command

# Create the RESTful Web Services
## Social-Media Application Resource Mapping
### User -> Posts
- Retrieve all users    -   GET     /users
- Create a user         -   POST    /users
- Retrieve one user     -   GET     /users/{id}  ->   /users/1
- Delete a user         -   DELETE  /users/{id}  ->   /users/1

- Retrieve all posts for a user - GET   /users/{id}/posts
- Create a post for a user      - POST  /users/{id}/posts
- Retrieve details of a post    - GET   /users/{id}/posts/{post-id}
