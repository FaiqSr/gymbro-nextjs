import ImageProfile from "@/components/profile/ImageProfile";

const page = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="mt-2">
        <ImageProfile />
        <div className="m-auto">
          <h1 className="text-slate-500 font-semibold text-2xl">Name User</h1>
          <h2 className="text-slate-800 font-bold">user@gmail.com</h2>
        </div>
      </div>
    </section>
  );
};

export default page;
