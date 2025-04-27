"use client";
import blogDetailData from "@/components/Blog/blogDetailData";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DataPoint() {
  const searchParams = useSearchParams();

  const id = searchParams.get(
    "uzBXf4tZ3MR2w5wenftIYO6LI7tAYlcTgEx3fUc5AyOu32Wtda",
  );
  const detailData = blogDetailData.find(
    (data) => data.id_blog === parseInt(id),
  );
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <a href={detailData?.link} target="_blank">
                  {/* <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight"> */}
                  <h2 className="mb-8 block text-3xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl sm:text-4xl">
                    {detailData?.header}
                  </h2>
                </a>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10"></div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {detailData?.header_paragraph}
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={detailData?.image}
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    {detailData?.fitur}
                  </h3>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {detailData?.point?.map((point, index) => (
                      <li
                        key={index}
                        className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      {detailData?.end}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

const BlogDetailsPageData = () => {
  return (
    <Suspense>
      <DataPoint />
    </Suspense>
  );
};

export default BlogDetailsPageData;
