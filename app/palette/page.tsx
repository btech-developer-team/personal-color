import { Suspense } from "react";
import SelectTone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";

const Page = async () => {
  const endpoint = "depth_level";
  const depthLevel = await getTone({ endpoint });

  const paletteImages = depthLevel.map((item) => item.image);

  return (
    <Suspense>
    <SelectTone
      pageIndex={10}
      tone="SKIN TONE"
      mode="skintone"
      paletteImages={paletteImages}
      urlBack="/hint"
      urlNext="/undertone-1"
      judulTone="Check undertone kamu 1/3"
      description="mohon identifikasi warna yang paling mendekati dengan kulit anda."
    />
    </Suspense>
  );
};

export default Page;
