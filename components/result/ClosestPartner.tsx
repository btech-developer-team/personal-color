import dynamic from "next/dynamic";
import type { Location } from "@/components/Maps/MapBox";

// maplibre-gl is browser-only and large, so keep it out of the server build
// and the initial client chunk. Load it only when this map actually renders.
const Map = dynamic(() => import("@/components/Maps/MapBox"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-lg bg-muted animate-pulse" />
  ),
});

const locations: Location[] = [
  {
    id: 1,
    name: "Mitra A",
    coordinates: [106.827153, -6.175392],
  },
  {
    id: 2,
    name: "Mitra B",
    coordinates: [106.800331, -6.21462],
  },
];

const ClosestPartner = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-2">
        <div className="md:w-1/3">
          <h1 className="berl-btn text-center p-3">Mitra Terdekat</h1>
        </div>

        <div className="w-[80vw] h-[40vh] overflow-hidden">
          <Map locations={locations} />
        </div>
      </div>
    </div>
  );
};

export default ClosestPartner;
