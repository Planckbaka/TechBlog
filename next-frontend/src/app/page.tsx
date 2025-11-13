"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Shuffle from "@/components/Shuffle";
import PixelBlast from "@/components/PixelBlast";

export default function Home() {
  return (
    <main className=" min-h-screen flex  flex-col justify-center w-full">
      {/* 背景层 - 固定定位全屏，给 PixelBlast 明确的容器尺寸 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '800px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <PixelBlast
          variant="square"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="relative z-1 flex justify-center w-full mt-10 mb-10 px-4 md:px-40 lg:px-60 bg-transparent">
        <div className="flex flex-col md:flex-row items-center max-w-5xl  gap-8 md:gap-12">
          <div className="flex flex-col">
            <Avatar className="h-36 w-36">
              <AvatarImage src="/avatar.jpeg" alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex justify-center mt-4 gap-x-3 py-1 backdrop-blur-md rounded-lg">
              <Link href="https://github.com/Planckbaka">
                <FaGithub className="h-8 w-8" />
              </Link>
              <BiLogoGmail className="h-8 w-8" />
              <FaLinkedin className="h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left ">
            <Shuffle
              text={`Aki Wayne `}
              tag="h1"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
            <h1 className="h1 font-body pb-6 hidden ">Aki Wayne | 张伟煌</h1>
            <p className="intro backdrop-blur-2xl p-2 rounded-lg">
              Full-stack engineer with a front-end emphasis and substantial
              back-end experience.
              <br /> Proficient in Go, Python, and JavaScript/TypeScript, with
              expertise in building user interfaces using React and Next.js in
              combination with Tailwind CSS. <br /> in developing backend
              services with Gin and in contributing to open-source projects,
              including work on the Gin repository.{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
