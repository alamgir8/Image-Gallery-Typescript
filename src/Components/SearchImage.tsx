import React, { useState } from 'react';

type Props = {
    searchText : (text: string) => void;
}
const SearchImage:React.FC<Props> = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit = (e:any) => {
        e.preventDefault();
        searchText(text)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 border py-2 rounded">
                    <input onChange={(e) => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 
                    mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder='Search Your Image'/>
                    <button type='submit' className="flex-shrink-0 focus:outline-none bg-green-500 hover:bg-green-700 
                    bg-green-500 hover:bg-green-700 text-white text-lg py-1 px-2 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchImage;