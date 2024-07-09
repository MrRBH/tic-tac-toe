import React, { useCallback, useState, useEffect } from 'react';

function PasswordGenerator() {
    const [length, setLength] = useState(10);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const PasswordMaker = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_";
        for (let i = 0; i < length; i++) {
            const char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        PasswordMaker();
    }, [length, numberAllowed, charAllowed, PasswordMaker]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        console.log("PasswordCopied")
    };
    

    return (
        <div className="w-full max-w-lg mx-auto my-8 shadow-md rounded-lg p-4 bg-gray-800 text-orange-500">
            <h2 className='text-white mb-4'>Password Generator</h2>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={password}
                    placeholder="Password..."
                    readOnly
                    className="w-full py-2 px-4 rounded-l-lg bg-gray-700 text-white outline-none"
                />
                <button
                    onClick={copyToClipboard}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                >
                    Copy
                </button>
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="range"
                    value={length}
                    min={6}
                    max={50}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                    className="w-full mr-4"
                />
                <label className="text-white">Length: {length}</label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={numberAllowed}
                    onChange={() => setNumberAllowed(!numberAllowed)}
                    className="mr-2"
                />
                <label className="text-white mr-4">Include Numbers</label>
                <input
                    type="checkbox"
                    checked={charAllowed}
                    onChange={() => setCharAllowed(!charAllowed)}
                    className="mr-2"
                />
                <label className="text-white">Include Special Characters</label>
            </div>
        </div>
    );
}

export default PasswordGenerator;
