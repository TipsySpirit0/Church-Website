import Hero from "../components/Hero";
import ServiceSchedule from "../components/ServiceSchedule";
import MiniSermon from "../components/MiniSermon";
import MiniCalendar from "../components/MiniCalendar";
import { Link } from "react-router-dom";
import { ArrowRightToLine } from "lucide-react";

export default function Landing() {
    return (
        <div className=" flex flex-col items-center">
            <Hero />
            <ServiceSchedule />
            <div className="w-[75%] mt-15">
                <div className="flex flex-col gap-5 mb-2">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-4xl font-playfair">Recent Sermons</h1>
                        <Link to="/sermons" className="text-md font-inter text-[#65007f] hover:scale-105 transition duration-150 flex flex-row gap-2 items-center">View all <ArrowRightToLine size={18} /></Link>
                    </div>
                    <div className="flex gap-5 justify-center mb-10">
                        <MiniSermon type={"sunday service"} title={"The First"} date={"12 Jun 2026 . 52 min"} />
                        <MiniSermon type={"sunday service"} title={"The First"} date={"12 Jun 2026 . 52 min"} />
                        <MiniSermon type={"sunday service"} title={"The First"} date={"12 Jun 2026 . 52 min"} />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-4xl font-playfair">Upcoming Events</h1>
                        <a href="" className="text-md font-inter text-[#65007f]">Full calendar</a>
                    </div>
                    <MiniCalendar title={"Harvest"} sub={"the crops"} date={"31st oct"} time={"3:00AM"}/>
                </div>
            </div>
        </div>
    );
};
