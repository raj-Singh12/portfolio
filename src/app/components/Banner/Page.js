export default function Banner() {
  return (
    <>
      <main class="flex-auto">
        <div class="sm:px-8 mt-9">
          <div class="mx-auto w-full max-w-7xl lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="max-w-2xl">
                  <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Software designer, founder, and amateur astronaut.
                  </h1>
                  <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I’m Spencer, a software designer and entrepreneur based in
                    New York City. I’m the founder and CEO of Planetaria, where
                    we develop technologies that empower regular people to
                    explore space on their own terms.
                  </p>
                  <div class="mt-6 flex gap-6">
                    <a
                      class="group -m-1 p-1"
                      aria-label="Follow on Twitter"
                      href="https://twitter.com"
                    ></a>
                    <a
                      class="group -m-1 p-1"
                      aria-label="Follow on Instagram"
                      href="https://instagram.com"
                    ></a>
                    <a
                      class="group -m-1 p-1"
                      aria-label="Follow on LinkedIn"
                      href="https://linkedin.com"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                      ></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div class="mt-16 sm:mt-20">
          <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt=""
                loading="lazy"
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="1"
                class="absolute inset-0 h-full w-full object-cover"
                
                sizes="(min-width: 640px) 18rem, 11rem"
                srcset=""
                src=""
              />
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
                src=""
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
                src=""
              />
              <img
                alt=""
                loading="lazy"
                width="4240"
                height="2384"
                decoding="async"
                data-nimg="1"
                class="absolute inset-0 h-full w-full object-cover"
                
                sizes="(min-width: 640px) 18rem, 11rem"
                srcset=""
              />
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div class="flex flex-col gap-16">
                    <article class="group relative flex flex-col items-start">
                      <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                          <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span class="relative z-10">
                            Crafting a design system for a multiplanetary future
                          </span>
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
                        September 5, 2022
                      </time>
                      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Most companies try to stay ahead of the curve when it
                        comes to visual design, but for Planetaria we needed to
                        create a brand that would still inspire us 100 years
                        from now when humanity has spread across our entire
                        solar system.
                      </p>
                      <div
                        aria-hidden="true"
                        class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                      >
                        Read article
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          class="ml-1 h-4 w-4 stroke-current"
                        >
                          <path
                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </article>
                    <article class="group relative flex flex-col items-start">
                      <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <a href="/articles/introducing-animaginary">
                          <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span class="relative z-10">
                            Introducing Animaginary: High performance web
                            animations
                          </span>
                        </a>
                      </h2>
                      <time
                        class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                        datetime="2022-09-02"
                      >
                        <span
                          class="absolute inset-y-0 left-0 flex items-center"
                          aria-hidden="true"
                        >
                          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        </span>
                        September 2, 2022
                      </time>
                      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        When you’re building a website for a company as
                        ambitious as Planetaria, you need to make an impression.
                        I wanted people to visit our website and see animations
                        that looked more realistic than reality itself.
                      </p>
                      <div
                        aria-hidden="true"
                        class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                      >
                        Read article
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          class="ml-1 h-4 w-4 stroke-current"
                        >
                          <path
                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </article>
                    <article class="group relative flex flex-col items-start">
                      <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <a href="/articles/rewriting-the-cosmos-kernel-in-rust">
                          <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span class="relative z-10">
                            Rewriting the cosmOS kernel in Rust
                          </span>
                        </a>
                      </h2>
                      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        When we released the first version of cosmOS last year,
                        it was written in Go. Go is a wonderful programming
                        language, but it’s been a while since I’ve seen an
                        article on the front page of Hacker News about rewriting
                        some important tool in Go and I see articles on there
                        about rewriting things in Rust every single week.
                      </p>
                    </article>
                  </div>
                  <div class="space-y-10 lg:pl-16 xl:pl-24">
                    <form
                      class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                      action="/thank-you"
                    >
                      <div class="mt-6 flex">
                        <input
                          type="email"
                          placeholder="Email address"
                          aria-label="Email address"
                          required=""
                          class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                        />
                        <button
                          class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                          type="submit"
                        >
                          Join
                        </button>
                      </div>
                    </form>
                    <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                      <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                          class="h-6 w-6 flex-none"
                        >
                          <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          ></path>
                          <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            class="stroke-zinc-400 dark:stroke-zinc-500"
                          ></path>
                        </svg>
                        <span class="ml-3">Work</span>
                      </h2>
                      <ol class="mt-6 space-y-4">
                        <li class="flex gap-4">
                          <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img
                              alt=""
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              class="h-7 w-7"
                              
                              src="/_next/static/media/planetaria.ecd81ade.svg"
                            />
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
