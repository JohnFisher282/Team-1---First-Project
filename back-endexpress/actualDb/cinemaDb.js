const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kezhb:r5o5k0amW7yaQHuF@cluster0.57i19.mongodb.net/cinema?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
