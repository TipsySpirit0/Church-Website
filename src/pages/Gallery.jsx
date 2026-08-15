import Header from "../components/Header";

export default function Gallery() {
    return(
        <div className="flex flex-col min-h-dvh pt-25 items-center">
            <div className="w-[75%] flex flex-col">
                <Header main={"Gallery"} sub={" Moments from our services, events, and life together as a church family. Replace these placeholder photos with your own."}/>
                <div className="w-full h-fit grid grid-cols-2 grid-rows-3 gap-2 ">
                    <img src="/public/photos/stormtrooper.jpg" alt="" />
                    <img src="/public/photos/Tatoo girl.jpg" alt="" />
                    <img src="/public/photos/visitor.png" alt="" />
                    <img src="/public/photos/pixel earth.png" alt="" />
                    <img src="/public/photos/pixel sunset.png" alt="" />
                    <img src="/public/photos/stare.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};
