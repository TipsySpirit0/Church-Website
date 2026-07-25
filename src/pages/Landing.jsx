export default function Landing() {
    return (
        <div className="h-dvh w-full bg-[url('/public/BG.svg')] bg-cover bg-center bg-no-repeat py-40 px-20">
            <div>
                <h1 className="text-black font-playfair font-bold text-6xl mt-5 mb-6">Welcome to CAC<br />Possibility Assembly Nation</h1>
                <p className="font-inter font-light text-xl">We are excited to welcome you home as part of our church family</p>
            </div>
            
            <img src="/public/Group 10.png" alt="schedule board" className="my-10" />

            <div className="flex flex-row gap-2 text-2xl font-inter ">
                <h1>Join us</h1>
                <a href="">Live</a>
            </div>

        </div>
    );
};
