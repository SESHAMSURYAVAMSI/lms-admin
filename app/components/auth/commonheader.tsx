// Header.tsx
"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-[#d9f0ff] to-[#b8e1ff] py-10 flex flex-col items-center border-none shadow-md">
      {/* Logo & Title */}
      <div className="flex flex-col items-center justify-center space-y-3 mb-4">
        <Image
          src="/urological.png"
          alt="Urological Society of India"
          width={200}
          height={20}
          className="mb-2"
        />

      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-6">
        {/* Card 1 - Events */}
        <div className="bg-[#A0D2FA] backdrop-blur-sm shadow-md rounded-xl p-6 w-60 flex flex-col items-center">
          <Image
            src="/login-calender.png"
            alt="Events"
            width={130}
            height={130}
            className="mb-3"
          />
          <p className="text-xl font-bold text-[#1F5C9E]">Events</p>
          <p className="text-2xl font-bold text-[#007AFF]">20</p>
        </div>

        {/* Card 2 - Talks */}
        <div className="bg-[#A0D2FA] backdrop-blur-sm shadow-md rounded-xl p-6 w-60 flex flex-col items-center">
          <Image
            src="/login-mic.png"
            alt="Talks"
            width={130}
            height={130}
            className="mb-3"
          />
          <p className="text-xl font-bold text-[#1F5C9E]">Talks</p>
          <p className="text-2xl font-bold text-[#007AFF]">200</p>
        </div>

        {/* Card 3 - Speakers */}
        <div className="bg-[#A0D2FA] backdrop-blur-sm shadow-md rounded-xl p-6 w-60 flex flex-col items-center">
          <Image
            src="/login-speaker.png"
            alt="Speakers"
            width={130}
            height={130}
            className="mb-3"
          />
          <p className="text-xl font-bold text-[#1F5C9E]">Speakers</p>
          <p className="text-2xl font-bold text-[#007AFF]">40</p>
        </div>
      </div>
    </header>
  );
}
