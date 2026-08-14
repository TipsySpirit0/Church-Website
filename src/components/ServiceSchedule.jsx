export default function ServiceSchedule() {
    return(
        <div className="m-5 h-fit w-auto hover:scale-105 duration-150 ease-in">
            <h1 className="bg-[#ffd700] text-black px-4 py-2 rounded-full flex gap-2 items-center font-inter text-sm translate-y-5 translate-x-5 -rotate-5 max-w-fit">Join us every</h1>
            <div className="p-7 bg-[#65007f] text-white rounded-2xl flex flex-row item gap-36">
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-playfair font-semibold">Sunday</h1>
                    <p className="text-md font-inter text-gray-400">First Service . 8AM <br />Second Service . 10AM</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-playfair font-semibold">Wednesday</h1>
                    <p className="text-md font-inter text-gray-400">Global Bible Study . 5:30PM</p>
                </div>

                <div className="flex">
                    <div className="bg-gray-400 opacity-50 w-0.5 h-[75%] self-center mr-3"></div>
                    <p className="text-md font-inter text-gray-400 h-auto content-center">3 Fatokun Street, Oremeta,<br />Aba Apanu, Ologuneru Road,<br />Ibadan.</p>
                </div>
            </div>
        </div>
    )
};
