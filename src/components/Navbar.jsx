export default function Navbar() {
    return(
        <nav className="flex flex-row bg-[#9550a7] top-0 fixed w-full h-fit py-4 px-8 justify-between items-center">
            <img src="logo.png" alt="logo" className="h-20 w-auto"/>
            <ul className="flex flex-row gap-5 text-white text-[17px]">
                <a href="">Home</a>
                <a href="">Posibility UK</a>
                <a href="">Give</a>
            </ul>
        </nav>
    );
};
