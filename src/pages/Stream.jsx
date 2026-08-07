import Header from "../components/Header";
import ServiceSchedule from "../components/ServiceSchedule";

export default function Stream() {
    return (
        <div className="flex flex-col h-dvh pt-25 items-center">
            <div className="w-[75%] flex flex-col">
                <Header main="Watch live" sub="Join our services online, live every sunday and wednesday, or catch up on recent services" />
                
                <ServiceSchedule />
            </div>
        </div>
    );
};
