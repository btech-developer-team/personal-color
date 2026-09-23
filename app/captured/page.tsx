import { Suspense } from "react";
import Captured from "@/components/Captured";

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex items-center justify-center text-center px-6">
      <Suspense>
        <Captured />
      </Suspense>
    </div>
  );
};

export default Page;