export default function Navbar() {
    return(
        <nav className="flex flex-row bg-[#9550a7] top-0 z-10 fixed w-full h-fit px-20 justify-between items-center">
            <img src="logo.png" alt="logo" className="h-32 object-contain"/>
            <ul className="flex flex-row gap-5 text-white font-inter text-[20px]">
                <a href="">Home</a> 
                <a href="">Posibility UK</a>
                <a href="">Give</a>
            </ul>
        </nav>
    );
};
