import {CarouselItem} from "@/components/ui/carousel";

import Image from "next/image";

export default function CarusPicOne() {
  return (
    <div>
      <CarouselItem className="basis-1/3">
        <Image
          src="/public/59aab53ef3995c1aadec782cc45f2c70.jpg"
          width={500}
          height={500}
          alt="house-1"
        />
      </CarouselItem>
    </div>
  );
}
