import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  return (
    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
      <div className="hidden lg:block">
        <button
          onClick={() => router.push(process.env.NEXT_PUBLIC_APP_SIGNUP!)}
          className="px-3 py-1.5 text-sm font-medium rounded-md text-white bg-[#0A66C2] hover:bg-[#004182] transition"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Register;
