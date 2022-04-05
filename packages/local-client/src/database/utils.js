const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://urtheaman:7279856900@cluster0.qlwoo.mongodb.net/js-notebook?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const dbInitializer = async () => {
  await client.connect();
  const notebooks = client.db("js-notebook").collection("notebooks");
  const x = "Finding the best result twice".toLowerCase().replaceAll(" ", "-");
  await notebooks
    .insertOne({
      _id: x,
      data: {
        id: "2546",
        type: "text",
        content: "hey",
      },
    })
    .then((res) => {
      console.log("doc added with id ", res.insertedId);
      client.close();
    });
};

export default dbInitializer
