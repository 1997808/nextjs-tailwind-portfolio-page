"use client";
import { Input, Button, Typography } from "@material-tailwind/react";
import PortalShortcut from "../components/portal-shortcut";
import { ChartBarIcon, CursorArrowRaysIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";

const PORTAL_ITEMS = [
  {
    icon: ChartBarIcon,
    name: "Science",
  },
  {
    icon: PuzzlePieceIcon,
    name: "Web",
  },
  {
    icon: CursorArrowRaysIcon,
    name: "Certification",
  },
  {
    icon: ChartBarIcon,
    name: "Bachelor",
  },
  {
    icon: PuzzlePieceIcon,
    name: "Web",
  },
  {
    icon: CursorArrowRaysIcon,
    name: "Proficiency",
  },
  {
    icon: ChartBarIcon,
    name: "Computer",
  },
  {
    icon: PuzzlePieceIcon,
    name: "Certified",
  },
  {
    icon: CursorArrowRaysIcon,
    name: "Framework",
  },
];

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography placeholder={""}
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Dev Portal
          </Typography>
          <Typography placeholder={""}
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Khanh, a dedicated web developer specializing in Node.js and React.js, eager to expand my skills and delve deeper into the world of web development. Here, you&apos;ll get a glimpse of my journey as I explore the intersection of creativity and functionality in web development.
          </Typography>
          <div className="grid">
            <Typography placeholder={""}
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div>
          <Typography placeholder={""} variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <div className="w-full h-[30rem] rounded-lg grid grid-cols-3 gap-6">
          {PORTAL_ITEMS.map((item, idx) => (
            <PortalShortcut key={idx} {...item} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
