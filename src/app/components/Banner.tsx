import Link from "next/link";
export default function Banner() {
    return (
        <div className="w-full bg-red-600 text-white text-center py-3 shadow-md animate-drop-in ">
            <p className="text-sm sm:text-base font-medium">
                <Link className="duration-300 hover:text-red-300 hover:underline" href="https://11.ugahacks.com/">
                     UH11 Registration Live!
                </Link>
            </p>
        </div>
    );
}
