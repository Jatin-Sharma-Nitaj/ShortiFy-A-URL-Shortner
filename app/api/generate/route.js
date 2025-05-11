import clientPromise from "@/app/lib/Mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("Shortify");
    const collection = db.collection("url");

    // Check if shorturl already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists! Try another one.",
      });
    }

    // Insert new shorturl
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL successfully generated",
    });
  } catch (error) {
    console.error("API /api/generate error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
