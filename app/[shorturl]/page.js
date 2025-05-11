import { redirect } from "next/navigation";
import clientPromise from "@/lib/Mongodb";

export default async function Page({ params }) {
    const shorturl = params.shorturl; // Extract the shorturl from params

    try {
        const client = await clientPromise;
        const db = client.db("Shortify");
        const collection = db.collection("url");

        // Find the document with the matching shorturl
        const doc = await collection.findOne({ shorturl: shorturl });

        if (doc) {
            // Redirect to the actual URL if found
            redirect(doc.url);
        } else {
            // Redirect to the home page if the shorturl is not found
            redirect(process.env.NEXT_PUBLIC_HOST || "http://localhost:3000");
        }
    } catch (error) {
        console.error("Error in redirection:", error);
        // Redirect to the home page in case of an error
        redirect(process.env.NEXT_PUBLIC_HOST || "http://localhost:3000");
    }

    return null; // This will never be reached due to the redirect
}