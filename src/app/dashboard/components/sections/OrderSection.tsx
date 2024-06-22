import { CardOrder } from "../CardOrder";
import { CardSearchOrder } from "../CardSearchOrder";

export const OrderSection = () => {
  return (
    <>
      <h2 className="text-[#7C3AED] font-semibold text-2xl">Mis Pedidos</h2>
      <CardSearchOrder />
      <div className="overflow-scroll overflow-x-hidden max-h-[424px] w-[920px] pb-1">
        <CardOrder />
        <CardOrder />
      </div>
    </>
  );
};
