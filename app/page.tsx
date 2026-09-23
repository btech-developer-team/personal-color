import { Suspense } from "react";
import Home from "@/components/Home/page";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Suspense>
        <Home />
      </Suspense>
    </div>
  );
}
