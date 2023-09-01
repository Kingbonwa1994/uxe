'use client'
import { useRouter } from 'next/navigation';

const SignupButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signup'); // Redirect to the signup page
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Service Provider?
    </button>
  );
};

export default SignupButton;
