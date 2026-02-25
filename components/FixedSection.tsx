import Navbar from "./Navbar";
function FixedSection() {
    return (
        <div className="hidden lg:flex items-center h-full flex-col p-13 z-10 fixed w-[50vw] h-screen bg-white mix-blend-screen justify-between">
            <div className="max-w-[70%] aspect-square">
                <svg className="w-full h-full" width="954" height="968" viewBox="0 0 954 968" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M228.294 517.562C230.09 512.034 237.91 512.034 239.706 517.562L285.189 657.544C285.992 660.016 288.296 661.69 290.896 661.69L438.081 661.69C443.893 661.69 446.31 669.128 441.608 672.544L322.532 759.058C320.429 760.586 319.549 763.294 320.353 765.766L365.835 905.748C367.632 911.276 361.305 915.872 356.602 912.456L237.527 825.942C235.424 824.415 232.576 824.415 230.473 825.942L111.398 912.456C106.695 915.872 100.368 911.276 102.165 905.748L147.647 765.766C148.451 763.294 147.571 760.586 145.468 759.058L26.3922 672.544C21.6899 669.128 24.1065 661.69 29.9189 661.69L177.104 661.69C179.704 661.69 182.008 660.016 182.811 657.544L228.294 517.562Z" fill="black" />
                    <circle cx="705" cy="247" r="206" fill="black" />
                    <rect x="521" y="796" width="390" height="99" rx="6" fill="black" />
                    <rect x="157" y="22.8408" width="429" height="99" rx="6" transform="rotate(90 157 22.8408)" fill="black" />
                    <rect x="521" y="669" width="390" height="99" rx="6" fill="black" />
                    <rect x="283.999" y="22.4204" width="429" height="99" rx="6" transform="rotate(90 283.999 22.4204)" fill="black" />
                    <rect x="521" y="542" width="390" height="99" rx="6" fill="black" />
                    <rect x="410.999" y="22" width="429" height="99" rx="6" transform="rotate(90 410.999 22)" fill="black" />
                </svg>
            </div>
            <h1 className="text-6xl font-bold uppercase text-black">get started</h1>
            <Navbar />
        </div>
    );
}

export default FixedSection;