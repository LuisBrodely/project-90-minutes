import { CircleHelpIcon } from "lucide-react";

export const CardSearchOrder = () => {
  return (
    <div className="w-[897px] h-48 bg-[#FFF] shadow-md flex flex-col items-start gap-10 pt-10 mb-10 ml-1">
      <div className="flex w-[900px] justify-around">
        <div className="flex gap-8">
          <button className="text-[#0F172A] font-light hover:text-[#7C3AED] transition-all hover:duration-all hover:font-semibold hover:border-b-[#7C3AED]">
            Ver todos
          </button>
          <button className="text-[#0F172A] font-light hover:text-[#7C3AED] transition-all hover:duration-all hover:font-semibold hover:border-b-[#7C3AED]">
            Por pagar
          </button>
          <button className="text-[#0F172A] font-light hover:text-[#7C3AED] transition-all hover:duration-all hover:font-semibold hover:border-b-[#7C3AED]">
            Por Enviar
          </button>
          <button className="text-[#0F172A] font-light hover:text-[#7C3AED] transition-all hover:duration-all hover:font-semibold hover:border-b-[#7C3AED]">
            Finalizado
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a href="" className="text-[#A9A9A9] ">
            ¿Necesitas ayuda?
          </a>
          <CircleHelpIcon size={20} />
        </div>
      </div>
      <div className="flex gap-3 ml-24">
        <input
          type="text"
          placeholder="Buscar Pedido"
          className="border-2 rounded-sm w-96 pl-2"
        />
        <button className="bg-[#7C3AED] text-[#FFF] font-medium rounded-sm h-10 w-20 hover:scale-105 transition-all hover:duration-300">
          Buscar
        </button>
      </div>
    </div>
  );
};
