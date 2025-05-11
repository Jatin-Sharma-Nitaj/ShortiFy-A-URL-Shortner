import clientPromise from "@/app/lib/Mongodb"

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("Shortify");
    const collection = db.collection("url");

    // chek if short url exist
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success:true,
        error:false,
        message:"URL already exist!! Try Another one"});
  
    }
   const result =  await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl,
    })
    return Response.json({
        success:true,
        error:false,
        message:"Url successfully Generated"
    })
}