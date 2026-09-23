import { Suspense } from "react";
import ContactForm from "@/components/result/ContactForm";
import Heading from "@/components/ui/Heading";

const Page = () => {
  return (
    <div className="bg-main min-h-screen w-screen flex flex-col justify-center items-center">
      <Heading size="md" />

      <div className="xl:w-[30vw] md:w-[50vw] w-[80%]">
        <Suspense>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
