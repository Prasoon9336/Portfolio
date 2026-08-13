import React from "react";

function Result({ data }) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return (
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-transparent p-8 text-center shadow-lg">
                <p className="text-white">No Result Found!!!</p>
            </div>
        );
    }

    const word = data[0];
    return (
        <>
            <div className="mx-auto mt-10 w-[90%] max-w-4xl rounded-2xl bg-transparent p-6 shadow-xl md:p-8">
                {/* Header */}
                <div className="mb-6 border-b border-gray-200 pb-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-4xl font-bold text-white">{word.word}</h2>
                        <p className="rounded-full bg-transparent px-4 py-2 text-sm font-medium text-white">
                            {word.phonetic}
                        </p>
                    </div>
                </div>


                {/* Meanings */}
                <div className='space-y-8'>
                    {word.meanings.map((meaning, index) => (
                        <div className="rounded-xl bg-transparent p-5" key={index}>
                            <h3 className="mb-4 inline-block rounded-full bg-transparent px-4 py-1.5 text-sm font-semibold capitalize text-white">{meaning.partOfSpeech}</h3>


                            <div className="space-y-4">
                                {meaning.definitions.map((definition, index) => (
                                    <div className="rounded-lg bg-transparent p-4 shadow-sm" key={index}>
                                        <div className="flex gap-3">
                                            <span className="font-bold text-white"> {index + 1}</span>
                                            <p className="leading-7 text-white">{definition.definition}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Result;
