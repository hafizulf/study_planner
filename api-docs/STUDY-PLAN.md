# Study Plan API Specification

## Base URL

`{{server}}/api/study-plans`

## Routes

### Get All Study Plans

```http
GET /
```

**Description:** Fetches all study plans.

**Response Example `200` `OK`:**

```json
{
    "message": "Study plans fetched successfully",
    "data": [
      {
        "studentId": 6,
        "name": "Hafiz",
        "subjects": [
          {
            "id": 12,
            "name": "Web Programming"
          },
          ...
        ]
      },
      {
        "studentId": 7,
        "name": "Furqan",
        "subjects": [
          {
            "id": 13,
            "name": "Mathematics"
          },
          ...
        ]
      }
      ...
    ]
}
```

### Create a New Study Plan

```http
POST /
```

**Description:** Creates a new study plan.

**Request Body Example:**

```json
{
  "studentId": 6,
  "subjectIds": [11, 12] // Array of subject id
}
```

**Success Response Example `201` `Created`:**

```json
{
  "message": "Study plan created successfully"
}
```

**Error Response Example `400` `Bad Request`:**

```json
{
  "message": "Validation error",
  "errors": {
    "studentId": [
      "Student id is required",
      "Student id must be an integer"
    ],
    "subjectIds": [
      "Subject id's is required",
      "Subject id's must be a non-empty array"
    ]
  }
}
```

```json
{
  "message": "Student cannot add more than 3 subjects in total"
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Student not found!"
}
```

```json
{
  "message": "One or more subjects not found!"
}
```

---

### Get Study Plan by ID

```http
GET /:id
```

**Description:** Fetches a study plan by its ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Study plan fetched successfully",
  "data": {
    "id": 12,
    "studentId": 6,
    "subjectId": 12
  }
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Study plan not found!"
}
```

---

### Get Study Plan by Student ID

```http
GET /students/:studentId
```

**Description:** Fetches a study plan by student's ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Study plan students fetched successfully",
  "data": {
    "studentId": 6,
    "name": "Hafiz",
    "subjects": [
      {
        "id": 12,
        "name": "Web Programming"
      },
      ...
    ]
  }
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Study plan not found!"
}
```

---

### Delete Study Plan by ID

```http
DELETE /:id
```

**Description:** Deletes a study plan by its ID.

**Success Response Example `200` `OK`:**

```json
{
  "message": "Study plan deleted successfully."
}

```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Study plan not found!"
}
```

### Update Student Study Plan

```http
PUT /:studentId
```

**Description:** Updates a student study plan.

**Request Body Example:**

```json
{
  "oldSubjectIds": [11, 12],
  "newSubjectIds": [12, 14]
}
```

**Success Response Example `200` `OK`:**

```json
{
  "message": "Study plan updated successfully"
}
```

**Error Response Example `400` `Bad Request`:**

```json
{
  "message": "Validation error",
  "errors": {
    "oldSubjectIds": [
      "Subject id's is required",
      "Subject id's must be a non-empty array"
    ],
    "newSubjectIds": [
      "Subject id's is required",
      "Subject id's must be a non-empty array"
    ]
  }
}
```

```json
{
  "message": "Student cannot add more than 3 subjects in total"
}
```

**Error Response Example `404` `Not Found`:**

```json
{
  "message": "Student not found!"
}
```

```json
{
  "message": "One or more subjects not found!"
}
```
