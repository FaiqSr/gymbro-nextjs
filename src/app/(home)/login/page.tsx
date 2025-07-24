import LoginForm from "@/components/home/login/LoginForm";

const Page = () => {
  return (
    <>
      <section
        style={{ backgroundImage: 'url("/images/gymBg.png")' }}
        className="bg-no-repeat bg-cover min-h-svh flex justify-center items-center flex-col"
      >
        <LoginForm />
      </section>
    </>
  );
};

export default Page;
