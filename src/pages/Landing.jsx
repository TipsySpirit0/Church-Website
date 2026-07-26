import Hero from "../components/Hero";
import ServiceSchedule from "../components/ServiceSchedule";

export default function Landing() {
    return (
        <div className=" flex flex-col items-center">
            <Hero />
            <ServiceSchedule />
        </div>
    );
};
