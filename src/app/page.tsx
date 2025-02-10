"use client"

import BannerCarousel from "./components/BannerCarousel";
import { EmblaOptionsType } from "embla-carousel";

const data = [<p key="1">1</p>,<p key="2">2</p>,<p key="3">3</p>]
const OPTIONS: EmblaOptionsType = { loop: true }

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BannerCarousel slides={data} options={OPTIONS}/>
      </main>
    </div>
  );
}
