"use client";

import { useState } from "react";
import { CardSections } from "./components/CardSections";
import { OrderSection } from "./components/sections/OrderSection";

import Image from "next/image";

import logo from "@/assets/icons/logo.svg";
import { MembershipsSection } from "./components/sections/MembershipsSection";

const DashboardPage = () => {
  const [activeButton, setActiveButton] = useState("Pedidos");

  const buttons = [
    { name: "Pedidos" },
    { name: "Membresías" },
  ];

  const renderSection = () => {
    switch (activeButton) {
      case "Pedidos":
        return <OrderSection />;
      case "Membresías":
        return <MembershipsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row mt-5 justify-around overflow-hidden">
      <div className="basis 1/4 flex flex-col items-center gap-5">
        <div className="flex gap-2">
          <Image src={logo} alt="Logo-90minutos" />
          <h2 className="flex items-center">
            <span className="text-2xl font-semibold text-[#7C3AED]">90</span>
            <span className="text-2xl font-light text-[#7C3AED]">Minutos</span>
          </h2>
        </div>
        <CardSections
          buttons={buttons}
          activeButton={activeButton}
          onButtonClick={setActiveButton}
        />
      </div>
      <div className="basis 3/4 flex flex-col pt-5 gap-2">
        {renderSection()}
      </div>
    </div>
  );
};

export default DashboardPage;
