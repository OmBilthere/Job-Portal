"use client";

import Link from "next/link";

const jobs = [
  {
    company: "Microsoft",
    role: "Software Engineer",
    location: "Hyderabad · Hybrid",
    type: "Full Time",
  },
  {
    company: "Razorpay",
    role: "Software Engineer I",
    location: "Bangalore · On-site",
    type: "Full Time",
  },
  {
    company: "Atlassian",
    role: "Backend Engineer",
    location: "Remote · India",
    type: "Full Time",
  },
  {
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore · Hybrid",
    type: "Full Time",
  },
];

const companies = [
  { name: "Microsoft", jobs: "124 open jobs", letter: "M" },
  { name: "Google", jobs: "86 open jobs", letter: "G" },
  { name: "Razorpay", jobs: "42 open jobs", letter: "R" },
  { name: "Atlassian", jobs: "38 open jobs", letter: "A" },
  { name: "Amazon", jobs: "156 open jobs", letter: "A" },
  { name: "Adobe", jobs: "31 open jobs", letter: "A" },
];

export default function PublicHome() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Your career search, organized
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Stop searching everywhere.
                <span className="mt-2 block text-slate-400">
                  Start finding the right jobs.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Discover jobs from company career pages, track every
                application in one place, and stay on top of your next
                opportunity.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/account"
                  className="rounded-xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Create Account
                </Link>

                <Link
                  href="/account/jobs"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Jobs
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
                <span>✓ Direct company jobs</span>
                <span>✓ Smart job tracking</span>
                <span>✓ One place to manage everything</span>
              </div>
            </div>

            {/* DASHBOARD PREVIEW */}
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4 lg:px-10">
          <Metric value="8,500+" label="Open Jobs" />
          <Metric value="1,240+" label="Companies" />
          <Metric value="320+" label="Hiring Today" />
          <Metric value="45+" label="Industries" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-slate-950 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-slate-500">
              THE OLD WAY
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Job searching shouldn't feel like a full-time job.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Switching between job boards, company career pages,
              spreadsheets and emails makes it easy to miss opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <ProblemCard
              number="01"
              title="Too many platforms"
              description="Jobs are scattered across multiple websites and career pages."
            />

            <ProblemCard
              number="02"
              title="Applications get lost"
              description="Without a proper tracker, it becomes difficult to remember where you applied."
            />

            <ProblemCard
              number="03"
              title="Missed opportunities"
              description="Deadlines, interview dates and new openings are easy to overlook."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-white/10 bg-slate-900/40 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-500">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need, in one workflow.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Academia keeps your entire job search organized from discovering
              an opportunity to landing the interview.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              title="Discover"
              description="Find relevant openings from companies and career pages in one place."
              icon={<SearchIcon />}
            />

            <StepCard
              number="02"
              title="Track"
              description="Save interesting jobs and track every application through its current stage."
              icon={<TrackIcon />}
            />

            <StepCard
              number="03"
              title="Apply"
              description="Open the original company listing and apply directly to the employer."
              icon={<ApplyIcon />}
            />
          </div>
        </div>
      </section>

      {/* JOB DISCOVERY */}
      <section className="bg-slate-950 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-slate-500">
              JOB DISCOVERY
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find jobs without jumping between websites.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Search by role, company, location and work type. Save the jobs
              worth applying to and open the original company listing whenever
              you're ready.
            </p>

            <div className="mt-8 space-y-4">
              <Feature text="Search thousands of job openings" />
              <Feature text="Filter by location and work type" />
              <Feature text="Save jobs for later" />
              <Feature text="Apply directly through the company" />
            </div>

            <Link
              href="/account/jobs"
              className="mt-9 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Browse Jobs →
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl">
            <div className="flex gap-2 border-b border-white/10 pb-4">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-500">
                <SearchIcon />
                Search software engineer...
              </div>

              <div className="hidden rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-400 sm:block">
                Filters
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {jobs.map((job) => (
                <JobCard key={job.company + job.role} {...job} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION TRACKER */}
      <section className="border-y border-white/10 bg-slate-900/40 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Application pipeline</p>
                  <h3 className="mt-1 font-semibold">Your applications</h3>
                </div>

                <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-400">
                  7 Total
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Pipeline value="2" label="Applied" />
                <Pipeline value="1" label="Review" />
                <Pipeline value="2" label="Interview" />
                <Pipeline value="1" label="Offer" />
              </div>

              <div className="mt-5 space-y-3">
                <Application
                  company="Google"
                  role="Software Engineer"
                  status="Interview"
                />

                <Application
                  company="Microsoft"
                  role="Software Engineer II"
                  status="Under Review"
                />

                <Application
                  company="Razorpay"
                  role="Software Engineer I"
                  status="Applied"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-slate-500">
              APPLICATION TRACKING
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Know exactly where every application stands.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              No more spreadsheets or guessing. Keep applications organized
              with a simple pipeline that shows what needs your attention.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <MiniFeature title="Applied" />
              <MiniFeature title="Under Review" />
              <MiniFeature title="Interview" />
              <MiniFeature title="Offer" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="bg-slate-950 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-slate-500">
                COMPANY DISCOVERY
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore companies that are hiring.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Discover companies, explore their open positions and find
                opportunities that match your career goals.
              </p>
            </div>

            <Link
              href="/account/companies"
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              View all companies →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.name} {...company} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/10 bg-slate-900/40 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-slate-500">
              BUILT FOR YOUR SEARCH
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple tools. Less chaos.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Smart Search"
              text="Quickly find roles based on the things that matter to you."
              icon={<SearchIcon />}
            />

            <FeatureCard
              title="Saved Jobs"
              text="Keep promising opportunities in one place and revisit them later."
              icon={<BookmarkIcon />}
            />

            <FeatureCard
              title="Application Tracking"
              text="Track applications from the first submission to the final offer."
              icon={<TrackIcon />}
            />

            <FeatureCard
              title="Company Pages"
              text="Explore companies and see their currently available roles."
              icon={<BuildingIcon />}
            />

            <FeatureCard
              title="Notifications"
              text="Stay aware of application updates and important job activity."
              icon={<BellIcon />}
            />

            <FeatureCard
              title="Direct Apply"
              text="Go directly to the original employer job listing when applying."
              icon={<ApplyIcon />}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-lg font-bold text-slate-950">
            A
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Your next opportunity starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Stop keeping your career search scattered across different
            platforms. Bring everything together with Academia.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/account"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Get Started
            </Link>

            <Link
              href="/account/jobs"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-950">
              A
            </div>

            <span className="font-semibold">Academia</span>
          </div>

          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/about" className="hover:text-slate-300">
              About
            </Link>
            <Link href="/services" className="hover:text-slate-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact
            </Link>
            <span>Privacy</span>
            <span>Terms</span>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Academia
          </p>
        </div>
      </footer>
    </main>
  );
}

/* Dashboard Preview */

function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />

      <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

          <div className="ml-3 h-7 flex-1 rounded-lg bg-white/5" />
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Welcome back</p>
              <h3 className="mt-1 text-lg font-semibold">
                Your job search
              </h3>
            </div>

            <div className="rounded-lg bg-white/10 px-3 py-2 text-xs text-slate-300">
              This week
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Stat value="24" label="Saved" />
            <Stat value="08" label="Applied" />
            <Stat value="03" label="Interviews" />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-300">
                Recent opportunities
              </p>

              <span className="text-[10px] text-slate-500">View all</span>
            </div>

            <JobPreview
              company="Microsoft"
              role="Software Engineer"
              location="Hyderabad"
            />

            <JobPreview
              company="Razorpay"
              role="Software Engineer - I"
              location="Bangalore"
            />

            <JobPreview
              company="Atlassian"
              role="Backend Engineer"
              location="Remote"
              last
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small Components */

function Metric({ value, label }) {
  return (
    <div className="px-6 py-7 text-center">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-xl font-semibold">{value}</p>
      <p className="mt-1 text-[10px] text-slate-500">{label}</p>
    </div>
  );
}

function JobPreview({ company, role, location, last }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 py-3 ${
        !last ? "border-b border-white/5" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
          {company.charAt(0)}
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-slate-200">
            {role}
          </p>

          <p className="mt-1 text-[10px] text-slate-500">
            {company} · {location}
          </p>
        </div>
      </div>

      <span className="shrink-0 rounded-md bg-emerald-400/10 px-2 py-1 text-[9px] text-emerald-400">
        New
      </span>
    </div>
  );
}

function ProblemCard({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <span className="text-xs text-slate-600">{number}</span>

      <h3 className="mt-8 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-slate-200">
          {icon}
        </div>

        <span className="text-xs text-slate-600">{number}</span>
      </div>

      <h3 className="mt-8 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-400">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-400">
        ✓
      </span>
      {text}
    </div>
  );
}

function JobCard({ company, role, location, type }) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold">
          {company.charAt(0)}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{role}</p>
          <p className="mt-1 text-xs text-slate-500">
            {company} · {location}
          </p>
          <p className="mt-2 text-[10px] text-slate-600">{type}</p>
        </div>
      </div>

      <button className="hidden shrink-0 rounded-lg border border-white/10 px-3 py-2 text-[10px] text-slate-400 transition hover:bg-white/5 hover:text-white sm:block">
        View
      </button>
    </div>
  );
}

function Pipeline({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <p className="text-lg font-semibold">{value}</p>
      <p className="mt-1 text-[10px] text-slate-500">{label}</p>
    </div>
  );
}

function Application({ company, role, status }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
          {company.charAt(0)}
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-medium">{role}</p>
          <p className="mt-1 text-[10px] text-slate-500">{company}</p>
        </div>
      </div>

      <span className="shrink-0 rounded-md bg-white/5 px-2 py-1 text-[9px] text-slate-400">
        {status}
      </span>
    </div>
  );
}

function MiniFeature({ title }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-400">
      <span className="mr-2 text-emerald-400">✓</span>
      {title}
    </div>
  );
}

function CompanyCard({ name, jobs, letter }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-semibold">
          {letter}
        </div>

        <span className="text-xs text-slate-600">→</span>
      </div>

      <h3 className="mt-6 font-semibold">{name}</h3>
      <p className="mt-1 text-xs text-slate-500">{jobs}</p>
    </div>
  );
}

function FeatureCard({ title, text, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-slate-300">
        {icon}
      </div>

      <h3 className="mt-6 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

/* Icons */

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m20 20-4-4" />
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h7" />
    </svg>
  );
}

function ApplyIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h12v16l-6-3-6 3V4Z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 20V5h8v15M14 9h4v11M9 8h2M9 11h2M9 14h2" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
      />
    </svg>
  );
}