import Products from "./dummy-data.json";

export default function Skill() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">Skill</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {Products.map((product) => {
          return (
            <li key={product.id} className="flex gap-4">
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {product.skillTitle}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {product.skill}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  <time dateTime="2019">{product.periods}</time>
                </dd>
              </dl>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
