import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";

// This component runs on the server
const Sponsors = async () => {
  const sponsorImages = await getSponsorImages();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Sponsors
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsorImages.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={`/sponsors/${logo}`}
                alt={`Sponsor ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get sponsor images from public/sponsors directory
const getSponsorImages = () => {
  const sponsorsDir = path.join(process.cwd(), "public/sponsors");
  const sponsorImages = fs
    .readdirSync(sponsorsDir)
    .filter((file) => /\.(png|jpg|jpeg|svg|webp)$/.test(file));

  return sponsorImages;
};

export default Sponsors;
