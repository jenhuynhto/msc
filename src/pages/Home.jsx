import Slides from "../components/Slides"

export default function Home() {
    return (
        <>
            <div className="flex justify-center lg:my-10">
                <Slides />
            </div>

            <div className="flex justify-center bg-gray-100">
                <div className="mt-20 nav-text text-4xl">GI Procedures</div>
            </div>
            <div className="flex justify-between items-center pt-10 nav-text text-2xl bg-gray-100">
                <div className="flex-1 flex justify-center">Colonoscopy</div>
                <div className="flex-1 flex justify-center">Hemorrhoid Banding</div>
                <div className="flex-1 flex justify-center">Bravo pH Testing</div>
            </div>
            <div className="flex justify-between items-center pt-10 nav-text text-2xl bg-gray-100">
                <div className="flex-1 flex justify-center">Flexible Sigmoidoscopy</div>
                <div className="flex-1 flex justify-center">Upper Endoscopy</div>
            </div>
        </>
    );
};