const Introduction = () => {
  return (
    <div className="relative">
      <h1 className="text-2xl font-bold text-neutral-900 pl-7 pt-9">Fred Santos</h1>
      <h2 className="text-l text-neutral-900 pl-7 pt-2">Junior Frontend Developer</h2>
      <p className="text-xs pl-7 max-w-xl pt-3 leading-5 tracking-wide">
        I'm a software enginner specialized in frontend development for complex scalable web apps. I write about
        software development on my blog. Want to know how I may help your project? Check out my project portfolio and
        online resume.
      </p>
      <button className="rounded p-2 bg-main	text-white ml-7 mt-5 text-sm hover:bg-lime-500 transition delay-75">
        View Portfolio
      </button>
      <button
        className="rounded p-2 bg-slate-900 text-white ml-7 mt-5 text-sm hover:bg-neutral-500 transition delay-75"
        onclick="location.href='https://fredsantos.dev/FredSantos_Frontend_Developer.pdf'"
        type="button"
      >
        Download CV
      </button>
      <img src="https://i.pravatar.cc/300" className="absolute top-0 right-0 pr-7 pt-7" />
    </div>
  )
}

export default Introduction
