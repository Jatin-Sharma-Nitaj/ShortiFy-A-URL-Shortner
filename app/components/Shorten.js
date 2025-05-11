"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("");
                setshorturl("");
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error))
        console.log(generated)
    }

    return (
        <section
            id="shorten"
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 sm:px-10 border-t border-gray-800"
        >
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-4xl font-extrabold text-white mb-8">Shorten Your Link</h3>
                <form className="space-y-4">
                    <input
                        value={url}
                        onChange={e => seturl(e.target.value)}
                        type="text"
                        placeholder="Enter your long URL"
                        className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <input
                        value={shorturl}
                        onChange={e => setshorturl(e.target.value)}
                        type="text"
                        placeholder="Enter your custom shortlink"
                        className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <button
                        type="button"
                        onClick={generate}
                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300"
                    >
                        🔗 Generate Short Link
                    </button>
                </form>

                {generated && (
                    <div className="mt-8 text-lg font-mono text-green-400 bg-gray-800 px-4 py-2 rounded-md break-words">
                        Your link: <a href={generated} target="_blank" rel="noopener noreferrer" className="underline">{generated}</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shorten;
