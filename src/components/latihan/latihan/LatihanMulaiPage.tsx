const LatihanMulaiPage = () => {
  const urutan1 = Array.from({ length: 4 }, (_, i) => i + 1);
  return (
    <>
      <section className="w-full dark:bg-gradient-to-t dark:from-black dark:via-red-700 dark:to-black">
        <div className="xl:ml-80 ">
          <h1 className="font-semibold text-[70px] text-coklat">Mulai Latihan!</h1>
          <div className="grid grid-cols-3 grid-rows-3 mx-8 gap-8 ">
            {urutan1.map((urutan1) => (
              <div key={urutan1} className="rounded-full w-[100px] h-[100px] bg-black ring-5 hover:ring-[10px] shadow-amber-50 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="relative flex items-center justify-center h-full text-[50px] font-extrabold text-lime-300 drop-shadow-[2px_2px_0px_orange]">{urutan1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatihanMulaiPage;
