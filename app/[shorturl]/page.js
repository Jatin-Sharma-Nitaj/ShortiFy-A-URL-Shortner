import { redirect } from "next/navigation"
import clientPromise from "../lib/Mongodb"

export default async function Page({params}){

    const shorturl = (await params).shorturl
     const client = await clientPromise;
    const db = client.db("Shortify");
    const collection = db.collection("url");

 const doc = await collection.findOne({ shorturl: shorturl });
    if (doc) {
     redirect(doc.url)
    }
    else {redirect(`${NEXT_PUBLIC_HOST}`)}
    return <div>
     My post  :url
    </div>
}