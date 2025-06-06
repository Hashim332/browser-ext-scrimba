type QuickAddProps = {
  popularStocks?: string[];
  onClick: (ticker: string) => Promise<void>;
};

export default function QuickAdd({ popularStocks, onClick }: QuickAddProps) {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl my-4 py-4 sm:py-6 px-2 sm:px-4 bg-white rounded-md shadow-sm mx-auto text-center">
      <h1 className="pb-4 text-lg sm:text-xl md:text-2xl font-semibold">
        Quick add
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {popularStocks &&
          popularStocks.map((stock: string) => (
            <button
              key={stock}
              onClick={() => onClick(stock)}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 bg-white shadow-sm hover:shadow-md
                     cursor-pointer transition-all duration-200
                     hover:border-blue-400 hover:text-blue-600 text-gray-600 font-semibold text-sm sm:text-base"
            >
              + {stock}
            </button>
          ))}
      </div>
    </div>
  );
}
