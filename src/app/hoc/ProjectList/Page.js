import data from "../../data";

export default function ProjectList() {
  return (
    <>
          {data.projects.map((project) => (
            <div
              key={project._id}
              className="flex relative aspect-[11/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2"
            >
              <a href={`/project/${project._id}`} className="m-auto">
                <img
                  className="medium"
                  src={project.image}
                  alt={project.name}
                />
                <h4 className="flex justify-center mt-4"><b>{project.name}</b></h4>
              </a>
            </div>
          ))}
          </>
  );
}
