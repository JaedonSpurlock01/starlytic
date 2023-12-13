import { Button } from "@/components/ui/button";
import { FiChevronsDown } from "react-icons/fi";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col text-center items-center relative z-[2]">
        <h1 className="text-5xl">STARLYTIC</h1>
        <p className="text-xs pb-4">Your Place, In Space</p>
        <span className="pb-8">
          <FiChevronsDown />
        </span>

        <Button variant="outline">
          <Link href="/dashboard">Enter Dashboard</Link>
        </Button>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/rotating-earth.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
