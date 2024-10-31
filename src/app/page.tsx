
import Link from "next/link";


export default function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-white text-black">
      <button className="bg-blue-600 px-4 py-2 text-white rounded-lg"><Link href={"/country"}>Country Page</Link></button>
     
      </div>
  );
}
