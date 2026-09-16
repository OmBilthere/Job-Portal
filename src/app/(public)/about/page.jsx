
export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gray-50 px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-indigo-600">ABOUT US</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
            Connecting academia with the real world
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AcademiaIndustry is designed to reduce the gap between what
            students learn in classrooms and what industries expect in the
            workplace.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-indigo-600">OUR MISSION</p>
            <h2 className="mt-3 text-3xl font-bold">
              Making education more practical and industry-ready
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Academic education provides a strong foundation, but students
              also need practical exposure, relevant skills and opportunities
              to understand how those skills are applied in the industry.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Our platform brings students, educational institutions and
              industry organizations together so they can collaborate,
              discover opportunities and build meaningful professional
              connections.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Learn", "Build knowledge and relevant skills."],
              ["02", "Practice", "Work on practical projects and experiences."],
              ["03", "Connect", "Interact with institutions and industry."],
              ["04", "Grow", "Turn skills into career opportunities."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <span className="text-sm font-bold text-indigo-600">
                  {number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold text-indigo-600">OUR VISION</p>
            <h2 className="mt-3 text-3xl font-bold">
              A stronger ecosystem for students and industry
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              We envision an ecosystem where academic learning and industry
              requirements continuously support each other.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Students", "Access practical learning, projects, internships and career opportunities."],
              ["Institutions", "Strengthen industry collaboration and improve student outcomes."],
              ["Industry", "Discover emerging talent and participate in skill development."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gray-900 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Education should open doors to opportunity.
          </h2>
          <p className="mt-4 leading-7 text-gray-400">
            We are building the bridge that helps students cross from
            classroom learning to real-world careers.
          </p>
        </div>
      </section>
    </main>
  );
}
