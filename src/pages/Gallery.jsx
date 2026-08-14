import Header from "../components/Header";

export default function Gallery() {
    return(
        <div className="flex flex-col h-dvh pt-25 items-center">
            <div className="w-[75%] flex flex-col">
                <Header main={"Gallery"} sub={" Moments from our services, events, and life together as a church family. Replace these placeholder photos with your own."}/>
            </div>
        </div>
    );
};
