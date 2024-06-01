# Subject API Specification

## Base URL

`{{server}}/api/subjects`

## Routes

### Get All Subjects

```http
GET /
```

**Description:** Fetches all subjects.

**Response Example `200` `OK`:**

```json
[
  {
    "id": 1,
    "name": "Mathematics",
    "created_at": "2024-06-01T15:34:44.555Z",
    "updated_at": "2024-06-01T15:34:44.555Z",
    "deleted_at": null,
  },
  ...
]
```

---

### Create a New Subject

```http
POST /
```

**Description:** Creates a new subject.

**Request Body Example:**

```json
{
  "name": "Mathematics"
}
```

**Success Response Example `201` `Created`:**

```json
{
  "message": "Subject created successfully",
  "data": {
    "id": 1,
    "name": "Mathematics",
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

### Get Subject by ID

```http
GET /:id
```

**Description:** Fetches a subject by its ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Subject fetched successfully",
  "data": {
    "id": 7,
    "name": "Mathematics",
    "createdAt": "2024-06-01T15:34:44.000Z",
    "updatedAt": "2024-06-01T15:34:44.000Z",
    "deletedAt": null
  }
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Subject not found!"
}
```

---

### Update Subject by ID

```http
PUT /:id
```

**Description:** Updates a subject's information by its ID.

**Request Body Example:**

```json
{
  "name": "Physics"
}
```

**Success Response Example `200` `OK`:**

```json
{
  "message": "Subject updated successfully",
  "data": {
    "id": 7,
    "name": "Physics",
    "createdAt": "2024-06-01T15:34:44.000Z",
    "updatedAt": "2024-06-01T15:39:03.888Z",
    "deletedAt": null
  }
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Subject not found!"
}
```

---

### Delete Subject by ID

```http
DELETE /:id
```

**Description:** Deletes a subject by its ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Subject deleted successfully."
}

```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Subject not found!"
}
```
