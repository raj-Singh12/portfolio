
import Image from "next/image";
import LogoDesktop from "../../../../../public/images/blastofbeauty.png";

export default function ImageCart() {
  return (
    <div class="mt-16 sm:mt-20">
      <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          {/* <img
            alt=""
            loading="lazy"
            width="3744"
            height="5616"
            decoding="async"
            data-nimg="1"
            class="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 640px) 18rem, 11rem"
            srcset=""
            src="https://github.com/rajsingh-vks/portffolio/blob/master/public/images/blastofbeauty.png"
          /> */}
          <Image src={LogoDesktop} />
        </div>
        <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <img
            alt=""
            loading="lazy"
            width="3936"
            height="2624"
            decoding="async"
            data-nimg="1"
            class="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 640px) 18rem, 11rem"
            srcset=""
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75"
          />
        </div>
        <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <img
            alt=""
            loading="lazy"
            width="5760"
            height="3840"
            decoding="async"
            data-nimg="1"
            class="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 640px) 18rem, 11rem"
            srcset=""
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
          />
        </div>
        <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <img
            alt=""
            loading="lazy"
            width="2400"
            height="3000"
            decoding="async"
            data-nimg="1"
            class="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 640px) 18rem, 11rem"
            srcset=""
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=384&q=75"
          />
        </div>
      </div>
    </div>
  );
}
