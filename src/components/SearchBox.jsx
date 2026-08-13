import React from 'react'

function SearchBox({ searchWord, word, setWord }) {

    return (
        <div>
            <form className='p-10 gap-9 flex justify-center text-white text-center' onSubmit={searchWord}>
                <input className='p-5 flex-15px border-2 border-transparent text-white focus:outline-0 bg-transparent placeholder-indigo-400 rounded-4xl transition duration-300 ease-in-out hover:bg-indigo-400 hover:placeholder-white'
                    type="text"
                    placeholder="Enter Word....."
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <button className='px-14 flex-5px bg-transparent rounded-4xl transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white'
                    type="submit">
                    Search!
                </button>
            </form>
        </div>
    )
}

export default SearchBox