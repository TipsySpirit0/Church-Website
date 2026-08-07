import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="flex flex-row bg-[#9550a7] top-0 z-10 fixed w-full h-fit px-20 justify-between items-center">
            <div id="logo" className="flex flex-row items-center">
                <img src="logo.png" alt="logo" className="h-20 object-contain"/>
            </div>
            <ul className="flex flex-row gap-5 items-center text-white font-inter text-lg">
                <Link to="/" className="hover:scale-105 transition duration-150 active:font-bold">Home</Link> 
                <Link to="/" className="hover:scale-105 transition duration-150 active:font-bold">About</Link>
                <Link to="/stream" className="hover:scale-105 transition duration-150 active:font-bold">Stream</Link>
                <Link to="/" className="hover:scale-105 transition duration-150 active:font-bold">Gallery</Link>
                <Link to="/sermons" className="hover:scale-105 transition duration-150 active:font-bold">Sermons</Link>
                <Link to="/" className="bg-[#ffd700] text-black px-3 py-1 rounded-2xl hover:scale-105 transition duration-150 active:font-bold">Give</Link>
            </ul>
        </nav>
    );
};
