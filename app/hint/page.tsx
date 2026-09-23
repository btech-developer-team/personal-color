import { Suspense } from "react";
import HintComponent from "@/components/Hint/HintComponent";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-main flex items-center justify-center text-center">
      <Suspense>
        <HintComponent />
      </Suspense>
    </div>
  );
};

export default Page;
