# Express.js Task Manager API - Learning Exercise

## Project Overview

Create an Express.js API to manage tasks with the following structure:

```json
{
  "id": 1,
  "title": "Learn Express.js",
  "completed": false
}
```

## 1. Routing

4. Create a **router file** (`routes/tasks.js`) and connect it to the main server.
5. Add a **GET** route to fetch all tasks.
6. Add a **POST** route to create a new task.
7. Add a **GET** route to fetch a single task by `id`.
8. Add a **PUT** route to update a task by `id`.
9. Add a **DELETE** route to remove a task by `id`.

## 3. Middleware

10. Add a **middleware function** that logs the request method and URL.
11. Add **validation middleware** to ensure task data is valid before adding or updating.
12. Add an **error-handling middleware** to catch unexpected errors.

## 4. Data Storage (JSON File)

13. Store tasks in a `tasks.json` file instead of memory.
14. Write functions to **read and write** tasks from the JSON file.
