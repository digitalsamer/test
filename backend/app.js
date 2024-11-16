const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 8000;

// MongoDB connection string (local or MongoDB Atlas)
const url = 'mongodb://localhost:27017';  // For local MongoDB

const dbName = 'web';
let db;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(client => {
    console.log('Connected to MongoDB');
    db = client.db(dbName); // Specify your database name
})
.catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/add-user', async (req, res) => {
    try {
      const user = req.body; // Assuming the request body contains the user data
      const collection = db.collection('user'); // 'users' is the collection name
      const result = await collection.insertOne(user); // Insert one document
      res.status(201).send(`User added with ID: ${result.insertedId}`);
    } catch (error) {
      res.status(500).send('Error adding user: ' + error.message);
    }
  });

  app.get('/users', async (req, res) => {
    try {
      const collection = db.collection('user');
      const users = await collection.find({}).toArray(); // Find all users
      
      console.log('Users fetched successfully:', users);
      console.log('Status Code:', 200); // Log success status

      res.status(200).json(users);
    } catch (error) {
      res.status(500).send('Error fetching users: ' + error.message);
    }
  });


  app.get('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const collection = db.collection('user');
      const user = await collection.findOne({ _id: new ObjectId(id) });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send('Error fetching user: ' + error.message);
    }
  });
  

  app.put('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const collection = db.collection('user');
      const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
      if (result.modifiedCount > 0) {
        res.status(200).send('User updated successfully');
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send('Error updating user: ' + error.message);
    }
  });
  

  app.delete('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const collection = db.collection('user');
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount > 0) {
        res.status(200).send('User deleted successfully');
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send('Error deleting user: ' + error.message);
    }
  });


  app.post('/add-contact', async (req, res) => {
    try {
      const user = req.body; // Assuming the request body contains the user data
      const collection = db.collection('contact'); // 'users' is the collection name
      const result = await collection.insertOne(user); // Insert one document
      res.status(201).send(`User added with ID: ${result.insertedId}`);
    } catch (error) {
      res.status(500).send('Error adding user: ' + error.message);
    }
  });


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
