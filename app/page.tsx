import { Butcherman } from "next/font/google";
import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="">
      <div className="background-text-container">
          <h1 className="background-text text-[100px] sm:text-[120px] md:text-[140px] lg:text-[180px]">Training Tomorrows Workforce</h1>
      </div>
      <main className="flex justify-center items-center h-screen">
        
       <Button text="Get Quote"/>
     
      </main>
      
    </div>
  );
}
