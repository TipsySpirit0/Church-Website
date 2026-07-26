import { Globe, Send, MessageCircle, Camera, Music2 } from 'lucide-react';

export default function Footer() {
    return(
        <div className="bg-[#330040] p-10 flex justify-center font-inter text-gray-400">
            <div className="w-[75%] flex flex-col items-center">
                <div>
                    <div className="flex flex-row gap-6">
                        <h1 className='flex items-center flex-row gap-2'><Globe/>CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><Send />CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><MessageCircle />CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><Camera />CAC Possibility Assembly</h1>
                        <h1 className='flex items-center flex-row gap-2'><Music2 />CAC Possibility Assembly</h1>
                    </div>
                    <div className="flex flex-col"></div>
                </div>
            </div>
        </div>
    );
};
