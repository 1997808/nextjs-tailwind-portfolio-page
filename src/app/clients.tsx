"use client";

import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "ncc.png",
  "adamo.png",
  "mirabo.svg",
  "lynkid.svg",
  "vpbank.svg",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-8">
          Work Experience
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {CLIENTS.map((logo, key) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={key}
              alt={logo}
              width={200}
              height={200}
              className="w-48 max-h-16 object-scale-down"
              src={`/works/logo-${logo}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
