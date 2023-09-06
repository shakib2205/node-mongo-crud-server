/*
----------------------
MongoDb Connection
----------------------
1. Create account
2. create and user with password
3. whitelist ip address
4. database > connect> driver > node> show all code
5. change the password uri
-------------------------------

1.Create Operation
2.app.post('/users/async (req, res) => {}')
3. make the function async to use await inside it 
4.Make sure you use the express.json() middleware
5.access data from the body: const user = req.body
6.const result = await userCollection.insertOne(user);
7. res.send(result)



Client side
-----------
1. create fetch
2.add second perameter as an object
3. provide method : 'POST
4. add headers:{'content-type': 'application/json'}
5. add body: JSON.Stringify(user)


----------
READ Many
----------
1.create a cursor = useCollection.find()
2. const result = await cursor.toArray();

-----------
DELETE
-----------
1. create app.delete('/users/:id', async (req, res)=> {})
2.Specify unique object id to delete the right user
3.const query = { _id: new ObjectId(id) };
4.const result = await userCollection.deleteOne(query);


Client
------
1. create dynamic url with id
2. mention the delete method
*/