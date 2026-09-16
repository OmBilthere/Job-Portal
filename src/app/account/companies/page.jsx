
import Link from "next/link";

const companies = [
  {
    name: "Microsoft",
    slug: "microsoft",
    logo: "M",
    description:
      "Build products and technology that empower people and organizations around the world.",
    industry: "Technology",
    location: "Hyderabad · Bangalore",
    openJobs: 48,
    hiring: true,
    tags: ["Software", "Cloud", "AI"],
  },
  {
    name: "Google",
    slug: "google",
    logo: "G",
    description:
      "Organizing the world's information and building products used by billions of people.",
    industry: "Technology",
    location: "Bangalore · Hyderabad",
    openJobs: 36,
    hiring: true,
    tags: ["AI", "Cloud", "Software"],
  },
  {
    name: "Razorpay",
    slug: "razorpay",
    logo: "R",
    description:
      "Building the financial infrastructure that powers businesses across India.",
    industry: "Fintech",
    location: "Bangalore",
    openJobs: 21,
    hiring: true,
    tags: ["Fintech", "Backend", "Product"],
  },
  {
    name: "Atlassian",
    slug: "atlassian",
    logo: "A",
    description:
      "Helping teams collaborate, build better software, and solve complex problems together.",
    industry: "Software",
    location: "Bangalore · Remote",
    openJobs: 19,
    hiring: true,
    tags: ["SaaS", "Cloud", "Engineering"],
  },
  {
    name: "Amazon",
    slug: "amazon",
    logo: "A",
    description:
      "Inventing on behalf of customers and building technology at an enormous scale.",
    industry: "Technology",
    location: "Bangalore · Hyderabad · Chennai",
    openJobs: 67,
    hiring: true,
    tags: ["AWS", "SDE", "Cloud"],
  },
  {
    name: "Flipkart",
    slug: "flipkart",
    logo: "F",
    description:
      "India's digital commerce platform solving challenging problems at massive scale.",
    industry: "E-commerce",
    location: "Bangalore",
    openJobs: 27,
    hiring: true,
    tags: ["E-commerce", "SDE", "Data"],
  },
  {
    name: "Adobe",
    slug: "adobe",
    logo: "A",
    description:
      "Creating digital experiences and tools that help everyone create, work, and communicate.",
    industry: "Software",
    location: "Noida · Bangalore",
    openJobs: 14,
    hiring: true,
    tags: ["Software", "Design", "AI"],
  },
  {
    name: "Uber",
    slug: "uber",
    logo: "U",
    description:
      "Using technology to move people and things safely and efficiently around the world.",
    industry: "Technology",
    location: "Bangalore · Hyderabad",
    openJobs: 22,
    hiring: true,
    tags: ["Backend", "Mobile", "Data"],
  },
  {
    name: "TCS",
    slug: "tcs",
    logo: "T",
    description:
      "A global technology services company helping enterprises transform through technology.",
    industry: "IT Services",
    location: "Pan India",
    openJobs: 83,
    hiring: true,
    tags: ["Fresher", "IT", "Engineering"],
  },
];

const categories = [
  "All Companies",
  "Technology",
  "Fintech",
  "Software",
  "E-commerce",
  "IT Services",
];

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Companies hiring now
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Explore companies.
              <span className="block text-slate-400">
                Find where you want to build your career.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Discover companies, explore their open positions, and apply
              directly through their career opportunities.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-2xl flex-col gap-2 sm:flex-row">
              <div className="flex flex-1 items-center rounded-xl border border-white/10 bg-white/10 px-4 backdrop-blur">
                <svg
                  className="mr-3 h-5 w-5 shrink-0 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="m20 20-4-4" />
                </svg>

                <input
                  type="text"
                  placeholder="Search companies..."
                  className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <button className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <OverviewStat value="1,240+" label="Companies" />
          <OverviewStat value="8,500+" label="Open Jobs" />
          <OverviewStat value="320+" label="Hiring Today" />
          <OverviewStat value="45+" label="Industries" />
        </section>

        {/* Content */}
        <section className="mt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Companies hiring
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Explore companies with active job opportunities.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600">
              Most jobs
              <span>⌄</span>
            </button>
          </div>

          {/* Categories */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                  index === 0
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Company Grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Looking for a specific role?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Search thousands of open positions from companies hiring now.
              </p>
            </div>

            <Link
              href="/jobs"
              className="inline-flex w-fit items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Jobs →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function CompanyCard({ company }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-lg font-bold text-slate-700">
            {company.logo}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {company.name}
            </h3>

            <p className="mt-0.5 text-xs text-slate-400">
              {company.industry}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-lg text-slate-300 transition hover:bg-slate-100 hover:text-slate-700"
        >
          ♡
        </button>
      </div>

      {/* Description */}
      <p className="mt-5 min-h-[48px] text-xs leading-5 text-slate-500">
        {company.description}
      </p>

      {/* Location */}
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>

        {company.location}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {company.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <span className="text-sm font-semibold text-slate-900">
            {company.openJobs}
          </span>

          <span className="ml-1 text-xs text-slate-400">
            open positions
          </span>
        </div>

        <Link
          href={`/companies/${company.slug}`}
          className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition group-hover:bg-slate-800"
        >
          View Company
        </Link>
      </div>
    </div>
  );
}

function OverviewStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <p className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
