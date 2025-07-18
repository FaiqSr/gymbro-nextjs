import Image from "next/image";

const ProfilePage = ({ onEdit }: { onEdit: () => void }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-4 md:gap-6 max-w-[999px] lg:ml-20 xl:ml-72 h-auto min-h-[500px] md:min-h-[600px] lg:h-[742px] bg-black/60 rounded-xl lg:rounded-3xl mx-auto my-6 md:my-8 lg:my-15 px-4 md:px-6 lg:px-8 pt-4 pb-6 md:pt-6">
        <div className="flex flex-col gap-6 p-5 rounded-3xl lg:w-1/2  bg-abu-abu/25">
          <h1 className="font-semibold text-[32px] text-center">Nama Lengkap</h1>
          <Image src="" width={320} height={320} alt="Random Image" className="rounded-full border-5 border-coklat mx-auto" />
          <h2 className="font-semibold text-[20px] lg:pl-3">Kalori</h2>
          <div className="w-[417px] h-[160px] bg-black/50 rounded-3xl"></div>
        </div>
        <div className="rounded-3xl lg:w-1/2 bg-abu-abu/25">
          <div className="flex flex-col p-4 mt-3 gap-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[20px] font-semibold">Informasi Pribadi</h1>
              <button className="text-coklat font-semibold text-[16px] hover:underline cursor-pointer" onClick={onEdit}>
                Edit
              </button>
            </div>
            <div className="w-full flex gap-4">
              <div className=" w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Nama Depan</h2>
                <div className="w-full bg-black/50 rounded-2xl py-2 px-3">Ilham Bonardo</div>
              </div>
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Nama Belakang</h2>
                <div className="w-full bg-black/50 rounded-2xl py-2 px-3">Marpaung</div>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Tanggal Lahir</h2>
                <div className="flex gap-3">
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3">06</div>
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3">12</div>
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3">2004</div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[15px] text-abu mb-1">Email</h2>
              <div className="bg-black/50 rounded-2xl w-full py-2 px-3">ilhambonardo123@gmail.com</div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[15px] text-abu mb-1">Nama Pengguna</h2>
              <div className="bg-black/50 rounded-2xl w-full py-2 px-3">ilhambonardoo</div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">Jenis Kelamin</h2>
                <div className="bg-black/50 rounded-2xl w-full py-2 px-3">Pria</div>
              </div>
              <div className="w-full flex gap-3">
                <div className="w-1/2">
                  <h2 className="font-semibold text-[15px] text-abu mb-1">Berat</h2>
                  <div className="bg-black/50 rounded-2xl w-full py-2 px-3">67 Kg</div>
                </div>
                <div className="w-1/2">
                  <h2 className="font-semibold text-[15px] text-abu mb-1">Tinggi</h2>
                  <div className="bg-black/50 rounded-2xl w-full py-2 px-3">180 Cm </div>
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
