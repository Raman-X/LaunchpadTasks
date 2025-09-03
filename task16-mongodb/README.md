# MongoDB Assignment

## Find Queries

### 1. Find users older than 30, but only show their username and country.

```js
db.users.find({ age: { $gt: 30 } }, { username: 1, country: 1, _id: 0 });
```

![Alt Text](images/Screenshot1.png)

### 2. Find users whose follower count is less than or equal to 100.

```js
db.users.find({ followers: { $lte: 100 } });
```

![Alt Text](images/Screenshot2.png)

### 3. Find all users from 'USA' or 'Canada'.

```js
db.users.find({ country: { $in: ["USA", "Canada"] } });
```

![Alt Text](images/Screenshot3.png)

### 4. Find all users who are NOT from 'USA' or the 'UK'.

```js
db.users.find({ country: { $nin: ["USA", "UK"] } });
```

![Alt Text](images/Screenshot4.png)

### 5. Find users who are from the 'USA' AND have more than 1000 followers.

```js
db.users.find({
  country: "USA",
  followers: { $gt: 1000 },
});
```

![Alt Text](images/Screenshot5.png)

### 6. Find users who have more than 2000 followers OR are from 'Australia'.

```js
db.users.find({
  $or: [{ followers: { $gt: 2000 } }, { country: "Australia" }],
});
```

![Alt Text](images/Screenshot6.png)

### 7. Find all users who have a subscription field.

```js
db.users.find({ subscription: { $exists: true } });
```

![Alt Text](images/Screenshot7.png)

### 8. Find users whose profile field is a string, not an embedded document.

```js
db.users.find({ profile: { $type: "string" } });
```

![Alt Text](images/Screenshot8.png)

### 9. Find users who are interested in both 'travel' AND 'music'.

```js
db.users.find({
  interests: { $all: ["travel", "music"] },
});
```

![Alt Text](images/Screenshot9.png)

### 10. Find users who have used a 'mobile' device since October 1st, 2023.

```js
db.users.find({
  "devices.type": "mobile",
  "devices.last_seen": { $gte: ISODate("2023-10-01T00:00:00Z") },
});
```

![Alt Text](images/Screenshot10.png)

### 11. Find all users whose email address ends with 'workplace.com'.

```js
db.users.find({ email: /workplace\.com$/ });
```

![Alt Text](images/Screenshot11.png)

### 12. Find users from the 'USA' who are either younger than 25 OR have more than 1500 followers.

```js
db.users.find({
  country: "USA",
  $or: [{ age: { $lt: 25 } }, { followers: { $gt: 1500 } }],
});
```

![Alt Text](images/Screenshot12.png)

### 13. Find all users who have a 'desktop' device that runs 'Windows'.

```js
db.users.find({
  devices: {
    $elemMatch: {
      type: "desktop",
      os: "Windows",
    },
  },
});
```

![Alt Text](images/Screenshot13.png)

## Update Queries

### 14. For user sam_g, add 50 followers and add a new interest 'coding'.

```js
db.users.updateOne(
  { username: "sam_g" },
  {
    $inc: { followers: 50 },
    $addToSet: { interests: "coding" },
  }
);
```

![Alt Text](images/Screenshot14.png)

### 15. For all users from the 'USA', rename the followers field to follower_count.

```js db.users.updateMany(
  { country: "USA" },
  { $rename: { "followers": "follower_count" } }
)
```

![Alt Text](images/Screenshot15.png)

### 16. Attempt to update user new_user; if they don't exist, insert them with default data.

```js
db.users.updateOne(
  { username: "new_user" },
  {
    $setOnInsert: {
      username: "new_user",
      email: "new_user@example.com",
      age: 25,
      country: "Unknown",
      followers: 0,
      interests: [],
      profile: { theme: "light", bio: "New user" },
    },
  },
  { upsert: true }
);
```

![Alt Text](images/Screenshot16.png)

### 17. Update all users with a 'dark' theme profile by adding a pro_user: true flag.

```js
db.users.updateMany({ "profile.theme": "dark" }, { $set: { pro_user: true } });
```

![Alt Text](images/Screenshot17.png)

## Delete Queries

### 18. Delete all users who have not logged in (hint: the last_login field does not exist).

```js
db.users.deleteMany({ last_login: { $exists: false } });
```

![Alt Text](images/Screenshot18.png)
