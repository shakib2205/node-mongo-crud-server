
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//username:dbUser3
//pass:XVViFBHwzJu3VhtH




const uri = "mongodb+srv://dbUser3:XVViFBHwzJu3VhtH@cluster0.iz6re5a.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const usersCollection = client.db('nodeMongoCrud').collection('users');

    app.get('/users', async (req, res) => {
      const query = {};
      const cursor = usersCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      console.log(result);
      res.send(result);

      console.log('trying to delete', id);
    })

  }
  finally {

  }
}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('hello from node mongo crud server')
});

app.listen(port, () => {
  console.log('listening the port')
});