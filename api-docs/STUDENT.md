# Student API Specification

## Base URL

`{{server}}/api/students`

## Routes

### Get All Students

```http
GET /
```

**Description:** Fetches all students.

**Response Example `200` `OK`:**

```json
{
  "message": "Students fetched successfully",
  "data": [
    {
        "id": 2,
        "name": "Hafizul",
        "createdAt": "2024-05-31T08:44:33.000Z",
        "updatedAt": "2024-05-31T08:45:52.000Z",
        "deletedAt": null
    },
    ...
  ]
}
```

---

### Create a New Student

```http
POST /
```

**Description:** Creates a new student.

**Request Body Example:**

```json
{
  "name": "Hafizul Furqan"
}
```

**Success Response Example `201` `Created`:**

```json
{
  "message": "Student created successfully",
  "data": {
    "id": 1,
    "name": "Hafizul Furqan",
    "updatedAt": "2024-06-01T15:34:44.555Z",
    "createdAt": "2024-06-01T15:34:44.555Z"
  }
}
```

**Error Response Example `400` `Bad Request`:**

```json
{
  "message": "Validation error",
  "errors": {
    "name": [
      "Name is required",
      "Name must be a string"
    ]
  }
}
```

---

### Get Student by ID

```http
GET /:id
```

**Description:** Fetches a student by their ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Student fetched successfully",
  "data": {
    "id": 7,
    "name": "Hafizul Furqan",
    "createdAt": "2024-06-01T15:34:44.000Z",
    "updatedAt": "2024-06-01T15:34:44.000Z",
    "deletedAt": null
  }
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Student not found!"
}
```

---

### Update Student by ID

```http
PUT /:id
```

**Description:** Updates a student's information by their ID.

**Request Body Example:**

```json
{
  "name": "Hafiz"
}
```

**Success Response Example `200` `OK`:**

```json
{
  "message": "Student updated successfully",
  "data": {
    "id": 7,
    "name": "Hafiz",
    "createdAt": "2024-06-01T15:34:44.000Z",
    "updatedAt": "2024-06-01T15:39:03.888Z",
    "deletedAt": null
  }
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Student not found!"
}
```

---

### Delete Student by ID

```http
DELETE /:id
```

**Description:** Deletes a student by their ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Student deleted successfully."
}

```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Student not found!"
}
```
