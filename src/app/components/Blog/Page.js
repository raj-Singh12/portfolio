import Work from "../Work/Page";

export default function Blog() {
  return (
    <div class="flex flex-col gap-16">
      <article class="group relative flex flex-col items-start">
        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a>
            <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span class="relative z-10">PROFESSIONAL SUMMARY</span>
          </a>
        </h2>
        <time
          class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
          datetime="2022-09-05"
        >
          <span
            class="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          <b> Frontend Developer -</b> 6 Years Experience
        </time>
        <ul class="list-disc">
          <li className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Experienced UI developer with a clear focus on frontend side of an
            application with a demonstrated history of working in the
            Information Technology industry, Video Streaming Platform, Donation,
            Booking App.{" "}
          </li>
          <li className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Involved in development activities and web and Mobile Application
            Frontend Development.
          </li>
          <li className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Pixel perfect conversion into Frontend with Responsive.
          </li>
          <li className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Strong Hand on writing code from scratch.
          </li>
          <li className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            I am the team player as well as team leader. Having Client
            Interactions experienced with day-to-day updates satisfactions.
          </li>
        </ul>
      </article>

      <Work />
    </div>
  );
}
