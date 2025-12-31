'use client';

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={30} speedOnHover={10}>
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            className="pointer-events-none h-8 w-auto select-none grayscale hover:grayscale-0 transition-all"
            height={logo.height || 32}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || 100}
            unoptimized
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
