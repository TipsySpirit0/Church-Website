export default function Header({main, sub}) {
    return (
        <div className="p-2 flex flex-col gap-2">
            <h1 className="text-5xl font-playfair font-bold text-[#330040]">{main}</h1>
            <p className="text-lg opacity-65 font-inter text-black">{sub}</p>
        </div>
    );
};
