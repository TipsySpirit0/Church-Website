import Header from "../components/Header";

export default function Give() {
    return(
        <div className="flex flex-col h-dvh pt-25 items-center">
            <div className="w-[75%] flex flex-col">
                <Header main={"Give"} sub={"Thank you for supporting the work of the ministry. Feel free to give what you can 😁."}/>
            </div>
        </div>
    );
};
