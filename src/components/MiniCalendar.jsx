export default function MiniCalendar({title, sub, date, time}) {
    return(
        <div className="p-5 rounded-xl border border-[#65007f] flex justify-between items-center">
            <div>
                <h1 className="font-playfair text-3xl font-semibold text-[#330040]">{title}</h1>
                <p className="text-md text-gray-500">{sub}</p>
            </div>
            <div className="font-inter text-sm text-[#65007f]">
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
    );
};
