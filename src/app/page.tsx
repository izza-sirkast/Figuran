import Link from "next/link";
import GalleryShow from "@/components/gallery/GalleryShow";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Home() {

  return (
    <div className="px-5 py-4">
      <section className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">Gallery</h1>
        <Link href={'/new'} className="flex items-center border border-black rounded-md px-2 hover:bg-gray-200">
          <p className="mr-1 text-xl">Add New</p>
          <IoIosAddCircleOutline className="text-xl" />
        </Link>
      </section>
      <GalleryShow />
    </div>
  );
}
