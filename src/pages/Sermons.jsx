import Header from "../components/Header";

export default function Sermons() {
    return(
        <div className="flex flex-col h-dvh pt-25 items-center">
            <div className="w-[75%] flex flex-col">
                <Header main={"Sermons"} sub={"Catch-up on past Sermons"}/>
            </div>
        </div>
    );
};
