import { useEffect, useState } from "react";

const API = "https://dummyjson.com/products";

export default function Work() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    setLoading(true);

    async function getList() {
      const apiResponse = await fetch(API);
      const result = await apiResponse.json();

      if (result && result.products && result.products.length > 0) {
        setTimeout(() => {
          setProducts(result.products);
          setLoading(false);
        }, 1000);
      }
    }
    getList();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!products) {
    return <p>No profile data</p>;
  }
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="">
      
      {products && products.length > 0
        ? products.map((item) => (
            <div key={item.id}>
              <h4>
                {item.title} <sup>{item.rating}</sup>
              </h4>
              <h5>
                <span>{item.brand}</span>
              </h5>
              <br />
              <div>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <br />
              <p>{item.description}</p>
              <br />
              <h6>background content</h6>
              <button
                onClick={() =>
                  setBackgroundStyle({ backgroundColor: "red" })
                }
              >
                Change background Color
              </button>
              <button onClick={() => alert("Hello")}>Check Price</button>
            </div>
          ))
        : null}
      </div>
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        <li className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt=""
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              data-nimg="1"
              className="h-7 w-7"
              // style="color:transparent"
              src="/_next/static/media/planetaria.ecd81ade.svg"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Planetaria
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2019 until Present"
            >
              <time dateTime="2019">2019</time>
              <span aria-hidden="true">—</span>
              <time dateTime="2023">Present</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt=""
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              className="h-7 w-7"
              // style="color:transparent"
              src="/_next/static/media/airbnb.b4000690.svg"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Airbnb
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Product Designer
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2014 until 2019"
            >
              <time dateTime="2014">2014</time>{" "}
              <span aria-hidden="true">—</span>
              <time dateTime="2019">2019</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt=""
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              className="h-7 w-7"
              // style="color:transparent"
              src="/_next/static/media/facebook.dd9e7d48.svg"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Facebook
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              iOS Software Engineer
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2011 until 2014"
            >
              <time dateTime="2011">2011</time>
              <span aria-hidden="true">—</span>
              <time dateTime="2014">2014</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt=""
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              className="h-7 w-7"
              // style="color:transparent"
              src="/_next/static/media/starbucks.4a5bd050.svg"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Starbucks
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Shift Supervisor
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="2008 until 2011"
            >
              <time dateTime="2008">2008</time>
              <span aria-hidden="true">—</span>
              <time dateTime="2011">2011</time>
            </dd>
          </dl>
        </li>
      </ol>
      <a
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        href="#"
      >
        Download CV
      </a>
    </div>
  );
}
