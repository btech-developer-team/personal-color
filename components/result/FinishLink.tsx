"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTrackingHref } from "@/lib/utils/withSearchParams";

const FinishLink = () => {
  const withParams = useTrackingHref();

  return (
    <Link href={withParams("/")} className="w-full ">
      <Button className="berl-btn w-full max-w-36 mx-auto">Finish</Button>
    </Link>
  );
};

export default FinishLink;
