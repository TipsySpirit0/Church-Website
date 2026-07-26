export default function Navbar() {
    return(
        <nav className="flex flex-row bg-[#9550a7] top-0 z-10 fixed w-full h-fit px-20 justify-between items-center">
            <div id="logo" className="flex flex-row items-center">
                <img src="logo.png" alt="logo" className="h-20 object-contain"/>
            </div>
            <ul className="flex flex-row gap-5 items-center text-white font-inter text-lg">
                <a href="">Home</a> 
                <a href="">About</a>
                <a href="">Stream</a>
                <a href="">Gallery</a>
                <a href="">Sermons</a>
                <a href="" className="bg-[#ffd700] text-black px-3 py-1 rounded-2xl ">Give</a>
            </ul>
        </nav>
    );
};
