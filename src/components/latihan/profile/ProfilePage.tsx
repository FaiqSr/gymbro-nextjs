import Image from "next/image";

const ProfilePage = ({ onEdit }: { onEdit: () => void }) => {
  return (
    <>
      <div className="flex flex-col xl:flex-row w-full gap-2 max-w-[999px] lg:w-[678px] xl:w-[999px] lg:mx-80 xl:ml-[276px] h-auto min-h-[500px] md:min-h-[600px] lg:h-auto bg-black/60 rounded-xl lg:rounded-3xl mx-auto my-6 md:my-5 lg:my-8 px-4 md:px-6 lg:px-8 pt-4 pb-6 md:pt-6 mb-36">
        <div className="flex flex-col gap-6 p-5 mt-5 rounded-3xl bg-abu-abu/25  xl:w-1/2">
          <h1 className="font-semibold text-[32px] text-center">Nama Lengkap</h1>
          <Image src="" width={320} height={320} alt="Random Image" className="rounded-full border-5 border-coklat mx-auto" />
          <div className="md:flex md:flex-col md:items-center md:gap-2">
            <h2 className="font-semibold text-[20px]  text-center">Kalori</h2>
            <div className=" w-full md:w-[520px] h-[120px] lg:w-[560px] xl:w-full bg-black/50 rounded-3xl"></div>
          </div>
        </div>
        <div className="rounded-3xl mt-5 bg-abu-abu/25 xl:w-1/2 pb-[40px]">
          <div className="flex flex-col p-4 mt-3 gap-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[20px] font-semibold">Informasi Pribadi</h1>
              <button className="text-coklat font-semibold text-[16px] hover:underline cursor-pointer" onClick={onEdit}>
                Edit
              </button>
            </div>
            <div className="w-full max-w-full flex gap-4">
              <div className="w-1/2">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Nama Depan</h2>
                <div className=" bg-black/50 rounded-2xl max-w-full py-2 px-3 text-sm">Ilham Bonardo</div>
              </div>
              <div className="w-1/2">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Nama Belakang</h2>
                <div className=" bg-black/50 rounded-2xl max-w-full py-2 px-3 text-sm">Marpaung</div>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Tanggal Lahir</h2>
                <div className="flex gap-3">
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3 text-sm">06</div>
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3 text-sm">12</div>
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3 text-sm">2004</div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[15px] text-abu mb-1">Email</h2>
              <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">ilhambonardo123@gmail.com</div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[15px] text-abu mb-1">Nama Pengguna</h2>
              <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">ilhambonardoo</div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Jenis Kelamin</h2>
                <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">Pria</div>
              </div>
              <div className="w-full flex gap-3">
                <div className="w-1/2">
                  <h2 className="font-semibold text-[15px] text-abu mb-1">Berat</h2>
                  <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">67 Kg</div>
                </div>
                <div className="w-1/2">
                  <h2 className="font-semibold text-[15px] text-abu mb-1">Tinggi</h2>
                  <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">180 Cm </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
