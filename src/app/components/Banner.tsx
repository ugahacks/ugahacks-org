import Link from "next/link";
export default function Banner() {
    return (
        <div className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-700 to-indigo-700 text-white text-center py-3 shadow-md animate-drop-in ">
            <p className="text-sm sm:text-base font-medium">
                <Link className="hover:text-red-400" href="https://mybyte.ugahacks.com/">
                    🪄 UH11 Registration Live!
                </Link>
            </p>
        </div>
    );
}
