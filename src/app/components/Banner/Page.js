import ImageCart from "./ImageCart/Page";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  return (
    <>
      <AnimatePresence>
        <motion.main className="flex-auto" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exists={{ opacity: 0, y:15 }} transition={{ delay: 0.25 }}>
          <div className="sm:px-8 mt-9">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      Software designer, founder, and amateur astronaut.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      I’m Spencer, a software designer and entrepreneur based in
                      New York City. I’m the founder and CEO of Planetaria,
                      where we develop technologies that empower regular people
                      to explore space on their own terms.
                    </p>
                    <div className="mt-6 flex gap-6">
                      <a
                        className="group -m-1 p-1"
                        aria-label="Follow on Twitter"
                        href="https://twitter.com"
                      ></a>
                      <a
                        className="group -m-1 p-1"
                        aria-label="Follow on Instagram"
                        href="https://instagram.com"
                      ></a>
                      <a
                        className="group -m-1 p-1"
                        aria-label="Follow on LinkedIn"
                        href="https://linkedin.com"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                        ></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ImageCart />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
