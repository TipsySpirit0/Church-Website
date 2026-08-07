import { Globe, Send, MessageCircle, Camera, Music2 } from 'lucide-react';

export default function Footer() {
    return(
        <div className="bg-[#330040] p-10 flex justify-center font-inter text-gray-400">
            <div className="w-[75%]">
                <div className='grid grid-col-1 items-center divide-y divide-gray-400 divide-opacity-50'>
                    <div className="flex flex-row gap-6 py-8">
                        <h1 className='flex items-center flex-row gap-2'><Globe/>CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><Send />CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><MessageCircle />CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><Camera />CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><Music2 />CAC Possibility Assembly</h1>
                    </div>
                    <div className="flex flex-row font-inter w-[75%] justify-between py-8">
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold'>Explore</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>Events Calender</li>
                                <li>Sermons</li>
                                <li>Gallery</li>
                                <li>Stream</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold'>Connect</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>About</li>
                                <li>Give</li>
                                <li>Get Connected</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold'>Visit Us</h1>
                            <p className=''>3 Fatokun Street, Oremeta, <br /> Aba Apanu, Ologuneru Road, Ibadan.</p>
                        </div>
                    </div>
                </div>
                <p className="text-left text-gray-400 text-sm opacity-60">
                    &copy; {new Date().getFullYear()} CAC Possibiltiy Assembly Nation. All rights reserved.
                </p>
            </div>
        </div>
    );
};
