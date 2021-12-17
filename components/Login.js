import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="h-screen bg-black z-10 relative text-white">
      <div className="h-full flex flex-col justify-center items-center space-y-[20px]">
        {/* <Image
          src="https://lh3.googleusercontent.com/qzvn4dmAgYSPx75VwmFY7gjuxNGoiOTIRLI7URICeARvSud75oRzZtlLB7g-bHMExx8KzRd2R-D2gLp7fRy9IsyhvY6oJQ5c8CxuPqXZfPPwENwiMWeTX4Wpx_KanSPu2iEBdlsR4zVi2VJXcQkWi41bwtZVzv2You2o5YJNwgZG2RzJXKtQBmxgTOZCnBe0fASqT-km29FJUt5DdOMAh7bBnvhljEbZ9XLzJKbhJIztOV0_vS0aHxiRH91QZfEBSXxrFFlHwnoH0mZz5aeNlNeaK8PGoGhzZSkBirw3m5Yai6QH0ki2upQ2kDguhKSX3MlOL8vXAFILzfLaUKfdWKKhvCTzjo-q_Xv_TSaZmMYhrRf-a0B1S5x1KCtEZYJdwn1zOvE3FDpraFP_21t4ogLJTRWOJjQEp1Atzl0PGHxATzmC5IRonoL_QMEYw9w5_WwmiKw-86OYDCIO0WaaNoK0dIFderCIwLVrR6QA2-kZ15Biuv36Fn6b5WHQPvw-ojPmOAZ5AeDyxWCnkJy8S3WYgmsSMFilltOzbu0-TJ-PU8NuBCGb6nva3cMtmUd2JMNY0S1HaSiuLFW1z4Bht7-w1uCUNsbd93EBHQ5DmBqv989zWCZtou4uGupIFXbnNFjNSWi_Gqm_ESrJX9xKwvrrZXnkNzfNw31ne-GSLxxmiVhc0E1zsmQ7MBqZrXbl3X9TApCUX8PGOp1XYM-P9ak=w496-h584-no?authuser=0"
          width={150}
          height={150}
          className="rounded-full "
          objectFit="cover"
        /> */}

        <h1 className="font-bold ">Login</h1>

        <button
          onClick={authenticate}
          className="bg-blue-700  cursor-pointer py-4 px-12 rounded-[5px]"
        >
          Log In
        </button>
      </div>
      {/* 
      <div className=" absolute inset-0 z-[-1] ">
        <Image
          src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Blue-HD-Wallpaper-1080p-for-Android-Phones-with-5-inch-Display.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-[.3] lg:opacity-[.1]"
        />
      </div> */}
    </div>
  );
}

export default Login;
