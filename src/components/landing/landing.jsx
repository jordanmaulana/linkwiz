import React from "react";
import { Infinity, InfinityIcon, PieChartIcon, UsersRoundIcon } from "lucide-react";
import Image from "next/image";
import { Footer } from "../shared-ui/Footer";
import { Header } from "../shared-ui/Header";

export const LandingPage = () => {
  return (
    <main className="space-y-24">
      <Header />
      <section className="flex items-center gap-32 max-w-5xl m-auto">
        <div>
          <h1 className="font-bold text-6xl text-dark max-w-xl">We're here to increase your productivity</h1>
          <Image src="/green_line.svg" width={476} height={29} className="mt-8" />

          <p className="text-dark text-lg font-medium mt-8  max-w-xl">Let's make your sales leads more organized and easily followed up using LinkWiz.</p>
        </div>
        <Image src="/linkwiz_header.png" width={702} height={559} />
      </section>

      <div>
        <section className="bg-lightPurple p-16">
          <div className="flex max-w-5xl m-auto gap-16">
            <div className="flex-1 flex-col">
              <h2 className="text-dart font-semibold text-4xl">How we scale up online stores</h2>
              <p className="text-grey text-base font-medium mt-8">
                When your online store grows, you will be facing rapid growing leads that have to be followed up too. Thus, you need more customer service that
                are able to convert those leads into sales. Now you have to create campaign for each customer service. THIS IS WHERE WE TAKE PLACE. LinkWiz
                could easily groups all your customer services into 1 campaign link!
              </p>
            </div>

            <div className="space-y-8 w-80">
              <PromoItem child={<InfinityIcon color="green" />} title={"Unlimited usage"} desc={"Unlimited number of links, agents or traffic."} />
              <PromoItem child={<PieChartIcon color="green" />} title={"Analytics"} desc={"Analyze your leads traffic in daily basis."} />
              <PromoItem child={<UsersRoundIcon color="green" />} title={"Engagement"} desc={"Quickly engages you with your audience."} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

const PromoItem = ({ child, title, desc }) => {
  return (
    <div className="flex gap-8">
      <div className="bg-white p-4 rounded-xl h-fit">{child}</div>
      <div>
        <div className="font-bold text-2xl">{title}</div>
        <p className="text-grey text-sm">{desc}</p>
      </div>
    </div>
  );
};
