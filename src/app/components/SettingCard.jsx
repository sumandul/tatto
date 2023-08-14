"use client";
import Link from "next/link";
import Image from "next/image";

// Images
// import rightArrowRed from "../../public/png_icons/all_settings_icons/red-arrow-right.png";

export default function SettingCard({ icon, title, description, explore }) {
  return (
    <>
      <div className="card__holder flex gap-7">
        <div className="card shadow-md p-5 bg-white rounded-xl flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Image
              className="w-12"
              src={icon}
              alt="img"
              width={50}
              height={50}
            />
            <h1 className="font-bold text-xl">{title}</h1>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">{description}</span>
          </div>
          <div className="flex items-center mt-auto">
            <Link href={explore} className="flex items-center gap-1.5">
              <span className="text-sm font-semibold">Explore</span>
              <Image
                className="w-4"
                src={"/png_icons/all_settings_icons/red-arrow-right.png"}
                width={20}
                height={20}
                alt="iages"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
