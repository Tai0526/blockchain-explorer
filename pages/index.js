import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      {/** <Trending /> */}
      <div className="mt-20" />
      {/** <CMCtable */}
    </div>
  );
}
