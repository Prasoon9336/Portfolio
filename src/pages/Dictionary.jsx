import React, { useState } from 'react'
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import useFetch from "../components/useFetch";
import Result from "../components/Result";

function Dictionary() {
    const [word, setWord] = useState("");
    const [url, setUrl] = useState("");

    const data = useFetch(url);

    function searchWord(e) {
        e.preventDefault();

        if (!word.trim()) {
            return;
        }

        setUrl(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.trim())}`
        );
    }


    return (
        <main className="min-h-screen flex items-center justify-center bg-transparent py-12 px-6">
            <div className="w-full max-w-3xl bg-transparent rounded-xl p-8 text-center">
                <Header />
                <div className="mt-6">
                    <SearchBox
                        word={word}
                        setWord={setWord}
                        searchWord={searchWord}
                    />
                </div>

                <div className="mt-6">
                    <Result data={data} />
                </div>
            </div>
        </main>
    )
}

export default Dictionary