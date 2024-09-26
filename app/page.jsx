import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photos from "@/components/Photos";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-[calc(100vh-150px)] flex flex-col justify-between">

      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Jewel Hossain Fahim</span>
            </h1>
            <p className="max-w-[570px] mb-9 text-white/80">
              I specialize in crafting elegant digital experiences, with a
              strong proficiency in a diverse range of programming languages and
              technologies.
            </p>

            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1i5L9Ek0zjuwYWaofXCe9WClgb-WGyCMg/view?usp=sharing" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>

                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photos />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
}
