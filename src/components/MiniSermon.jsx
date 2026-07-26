export default function MiniSermon({ type, title, date }) {
    return(
        <div className="p-5 rounded-xl border border-[#65007f] w-103.75 flex flex-col gap-1">
            <p className="font-inter text-sm text-[#65007f]">{type}</p>
            <h1 className="font-playfair text-3xl font-semibold text-[#330040]">{title}</h1>
            <p className="text-md text-gray-500">{date}</p>
        </div>
    );
};
