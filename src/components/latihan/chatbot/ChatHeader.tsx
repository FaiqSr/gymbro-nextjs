import Image from "next/image";

const ChatHeader = () => {
  return (
    <div className="mb-5 mt-2 w-full mx-auto text-center">
      <Image
        src="/images/logo.png"
        alt="logo"
        className="mx-auto"
        width={155}
        height={500}
      />
      <h1 className="lg:text-4xl font-bold text-red-500 drop-shadow-[0_0_6px_rgba(255,100,100,0.2)] xl:text-4xl sm:text-5xl text-3xl">
        Selamat Datang
      </h1>
      <p className="pt-3 px-4 sm:px-7 font-semibold lg:text-[18px] xl:text-[18px] sm:text-lg text-[14px]">
        Tanya apa saja tentang GYM!
      </p>
    </div>
  );
};

export default ChatHeader;
