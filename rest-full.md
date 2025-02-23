### **RESTful API: Basic Structure & Rules**

A **RESTful API (Representational State Transfer API)** follows architectural principles to enable communication between a client and a server using **HTTP methods**.

---

## **1. Basic Structure of a RESTful API**

A REST API is organized around **resources** (e.g., users, products) and uses **HTTP methods** for operations.

### **🔹 Common HTTP Methods**

| HTTP Method | Purpose           | Example Endpoint              |
| ----------- | ----------------- | ----------------------------- |
| **GET**     | Retrieve data     | `/users` (Get all users)      |
| **POST**    | Create a resource | `/users` (Create a user)      |
| **PUT**     | Update a resource | `/users/1` (Update user 1)    |
| **PATCH**   | Partial update    | `/users/1` (Update name only) |
| **DELETE**  | Remove a resource | `/users/1` (Delete user 1)    |

---

## **2. RESTful API Rules & Best Practices**

### **🔹 1. Use Proper URL Structure (Resources & Nouns)**

✅ Use **nouns** for resources, **not verbs**.  
✅ Use **plural** for collections.  
❌ **Bad:** `/getUser`, `/deleteUser`  
✅ **Good:** `/users`, `/users/{id}`

---

### **🔹 2. Use HTTP Methods Correctly**

✅ **GET** should **not modify data** (use for fetching).  
✅ **POST** is used for **creating new resources**.  
✅ **PUT/PATCH** updates existing data.  
✅ **DELETE** removes a resource.

---

### **🔹 3. Use Proper Status Codes**

| Status Code                   | Meaning                   | When to Use        |
| ----------------------------- | ------------------------- | ------------------ |
| **200 OK**                    | Successful request        | GET, PUT           |
| **201 Created**               | New resource created      | POST               |
| **204 No Content**            | Success, no response body | DELETE             |
| **400 Bad Request**           | Invalid input             | Wrong data format  |
| **401 Unauthorized**          | Authentication failed     | Invalid token      |
| **403 Forbidden**             | Not enough permissions    | Restricted access  |
| **404 Not Found**             | Resource doesn’t exist    | Wrong ID           |
| **500 Internal Server Error** | Server crash/issue        | Unexpected failure |

---

### **🔹 4. Use Query Parameters for Filtering, Sorting & Pagination**

✅ **Filtering:** `/users?role=admin`  
✅ **Sorting:** `/users?sort=name&order=asc`  
✅ **Pagination:** `/users?page=2&limit=10`

---

### **🔹 5. Use JSON for Responses**

✅ Return **consistent JSON structure**.

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### **🔹 6. Secure Your API**

✅ Use **authentication** (JWT, OAuth).  
✅ **Validate input** to prevent security issues.  
✅ **Rate-limit API requests** to avoid abuse.

---

### **Example REST API Endpoint**

#### **Get All Users (GET)**

```
GET /users
Response:
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```

#### **Create User (POST)**

```
POST /users
Request Body:
{ "name": "Charlie", "email": "charlie@example.com" }
Response:
{ "id": 3, "name": "Charlie", "email": "charlie@example.com" }
```

---

### **Conclusion**

✅ **REST APIs use structured URLs and HTTP methods.**  
✅ **Follow status codes and return proper JSON responses.**  
✅ **Secure the API with authentication and validation.**

Would you like an example implementation in Node.js/Express? 🚀
