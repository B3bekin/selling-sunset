import Image from "next/image";
import Video from "next-video";
import myVideo from "@/videos/house-video.mp4"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="bg-slate-10 lg:mx-28 md:mx-14 sm:mx-7">
      <div className="">
        <div className="flex justify-center pt-10">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full pb-16"
          >
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2 sm:basis-1">
                <Image
                  className="rounded-lg"
                  src="/224371a850d1b4747b41a9f5ec31c7afd.jpg"
                  width={500}
                  height={500}
                  alt="house-1"
                />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Image
                  className="rounded-lg"
                  src="/97ee591ab324a55780bdf349433dc251.jpg"
                  width={500}
                  height={500}
                  alt="house-2"
                />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Image
                  className="rounded-lg"
                  src="/ef779f5cc0546de8d66902caa0fe1fb6.jpg"
                  width={500}
                  height={500}
                  alt="house-3"
                />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Image
                  className="rounded-lg"
                  src="/896189812-5c1ea277c9e77c0001c5c65a.jpg"
                  width={500}
                  height={500}
                  alt="house-4"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <h1 className="text-center font-bold text-3xl text-green-700 mb-10">
          Plusy
        </h1>

        <div>
          <div className="grid grid-cols-4 grid-rows-2 gap-10">
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.88em' height='1em' viewBox='0 0 448 512'%3E%3Cpath fill='%23000' d='M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5c0 12.8 10.3 23.1 23.1 23.1H104l-73.4 73.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6H80L5.4 409.5c-3.5 4.2-5.4 9.5-5.4 15c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h168.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-tree"
                />
              </CardContent>
              <CardTitle className="text-center">
                1 ha soukromého lesoparku
              </CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.13em' height='1em' viewBox='0 0 576 512'%3E%3Cpath fill='%23000' d='M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1c0 148-119.9 267.9-267.9 267.9h-40.2C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3M301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6c3.5-3.7 8.4-5.6 13.5-5.6s10 1.9 13.5 5.6'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-spa"
                />
              </CardContent>
              <CardTitle className="text-center">
                Wellness s bazénem a saunou
              </CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.25em' height='1em' viewBox='0 0 640 512'%3E%3Cpath fill='%23000' d='M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64H64c-17.7 0-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h32zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32h-32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32M416 224v64H224v-64z'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-dumbbell"
                />
              </CardContent>
              <CardTitle className="text-center">
                Venkovní posilovna a tělocvična v interiéru
              </CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32zM256 352a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m32-32a32 32 0 1 0 0-64a32 32 0 1 0 0 64'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-dumbbell"
                />
              </CardContent>
              <CardTitle className="text-center">Umývárná kol a psů</CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.88em' height='1em' viewBox='0 0 448 512'%3E%3Cpath fill='%23000' d='M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-dumbbell"
                />
              </CardContent>
              <CardTitle className="text-center">
                Místnost pro rodinného lékaře
              </CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24M160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-dumbbell"
                />
              </CardContent>
              <CardTitle className="text-center">
                Shuttle - privátní doprava
              </CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.25em' height='1em' viewBox='0 0 640 512'%3E%3Cpath fill='%23000' d='M160 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128M88 480v-80H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4l-28.6 37.8c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.6-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32M480 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.1 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-13-20.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-dumbbell"
                />
              </CardContent>
              <CardTitle className="text-center">Dětský klub</CardTitle>
            </Card>
            <Card className="py-4">
              <CardContent className="flex justify-center">
                <Image
                  src={
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96M117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2l-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5zM128 352a32 32 0 1 0-64 0a32 32 0 1 0 64 0m288-224a32 32 0 1 0 0-64a32 32 0 1 0 0 64'/%3E%3C/svg%3E"
                  }
                  width={50}
                  height={50}
                  alt="icon-dumbbell"
                />
              </CardContent>
              <CardTitle className="text-center">
                Přímé napojení na cyklostezku
              </CardTitle>
            </Card>
          </div>
        </div>

        <div className="min-w-full bg-green-100 my-10 shadow-3xl rounded-lg">
          <div className="grid grid-cols-2 ">
            <div>
              <Image
                className=""
                src="/a93d95a0979751b3ea15775f85f52e5a.jpg"
                width={600}
                height={600}
                alt="house-4"
              />
            </div>
            <div className="bg-gradient-to-tr from-gray-400 to bg-pink-200">
              <div className="p-10 leading-loose">
                Vestibulum fermentum tortor id mi. Phasellus rhoncus. Fusce
                tellus odio, dapibus id fermentum quis, suscipit id erat. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Aliquam in lorem sit amet leo
                accumsan lacinia.
                <br />
                <br />
                Aliquam erat volutpat. Itaque earum rerum hic tenetur a sapiente
                delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat. Fusce
                du Leo, imperdiet in, aliquam sit amet, feugiat eu, orci.
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-full bg-green-100 my-10 shadow-3xl rounded-lg">
          <div className="grid grid-cols-3 ">
            <div className="py-10 pr-10 leading-loose bg-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis
              viverra diam non justo. Donec quis nibh at felis congue commodo.
              Nulla turpis magna, cursus sit amet, suscipit a, interdum id,
              felis. Praesent vitae arcu tempor neque lacinia pretium. Integer
              tempor. Nunc dapibus tortor vel mi dapibus sollicitudin.
            </div>

            <div className="col-span-2">
              
                <Video src={myVideo}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
