"use client";

import MetricCards from "./MetricCards";
import Goals from "./Goals";
import Allocation from "./Allocation";
import UpcomingPayments from "./UpcomingPayments";
import Opportunities from "./Opportunities";
import Institutions from "./Institutions";

export default function Dashboard() {
  const today = new Intl.DateTimeFormat("es-UY", { weekday: "long", day: "numeric", month: "long" }).format(new Date());

  return (
    <div className="space-y-5 pb-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[12.5px] font-medium capitalize text-[#9CA3AF]">{today}</p>
          <h1 className="mt-1 text-[22px] font-semibold tracking-[-0.015em] text-[#0B1220]">
            Hola Francisco, tu situación financiera está bajo control
          </h1>
        </div>
      </div>

      <MetricCards />
      <Goals />

      <div className="grid grid-cols-3 gap-3.5">
        <div className="col-span-1">
          <Allocation />
        </div>
        <div className="col-span-2">
          <UpcomingPayments />
        </div>
      </div>

      <Opportunities />
      <Institutions />
    </div>
  );
}
