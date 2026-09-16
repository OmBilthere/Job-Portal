
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Welcome */}
        <section className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Wednesday, September 16
              </p>

              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Good morning, Om 👋
              </h1>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Here&apos;s what&apos;s happening with your job search.
              </p>
            </div>

            <Link
              href="account/jobs"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Find Jobs
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Saved Jobs"
            value="24"
            subtitle="5 added this week"
            icon={<BookmarkIcon />}
          />

          <StatCard
            title="Applications"
            value="08"
            subtitle="2 submitted this week"
            icon={<ApplicationIcon />}
          />

          <StatCard
            title="Interviews"
            value="03"
            subtitle="1 upcoming"
            icon={<CalendarIcon />}
          />

          <StatCard
            title="Profile Views"
            value="17"
            subtitle="4 more than last week"
            icon={<EyeIcon />}
          />
        </section>

        {/* Main Grid */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Recommended Jobs */}
          <div className="rounded-2xl border border-slate-200 bg-white lg:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Recommended Jobs
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Opportunities that match your profile
                </p>
              </div>

              <Link
                href="account/jobs"
                className="text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                View all →
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              <JobCard
                company="Microsoft"
                role="Software Engineer"
                location="Hyderabad · Hybrid"
                salary="₹12L – ₹20L"
                posted="2h ago"
                match="94%"
              />

              <JobCard
                company="Razorpay"
                role="Software Engineer I"
                location="Bangalore · Hybrid"
                salary="₹10L – ₹16L"
                posted="5h ago"
                match="91%"
              />

              <JobCard
                company="Atlassian"
                role="Backend Engineer"
                location="Remote · India"
                salary="₹18L – ₹28L"
                posted="1d ago"
                match="87%"
              />

              <JobCard
                company="Flipkart"
                role="SDE - 1"
                location="Bangalore · On-site"
                salary="₹9L – ₹15L"
                posted="1d ago"
                match="84%"
              />
            </div>
          </div>

          {/* Application Status */}
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Application Status
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Your recent applications
                </p>
              </div>

              <Link
                href="account/applications"
                className="text-xs font-semibold text-slate-700"
              >
                View all →
              </Link>
            </div>

            <div className="p-5">
              <ApplicationItem
                company="Google"
                role="Software Engineer"
                status="Interview"
                statusType="interview"
              />

              <ApplicationItem
                company="Amazon"
                role="SDE I"
                status="Under Review"
                statusType="review"
              />

              <ApplicationItem
                company="Adobe"
                role="Frontend Engineer"
                status="Applied"
                statusType="applied"
              />

              <ApplicationItem
                company="TCS"
                role="Graduate Engineer"
                status="Applied"
                statusType="applied"
                last
              />
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Profile Completion */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Complete your profile
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  A complete profile helps us find better opportunities.
                </p>
              </div>

              <span className="text-sm font-semibold text-slate-900">
                75%
              </span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/4 rounded-full bg-slate-900" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                3 items remaining
              </span>

              <Link
                href="/profile"
                className="text-xs font-semibold text-slate-900"
              >
                Complete profile →
              </Link>
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Your saved jobs
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Jobs you want to apply to later
                </p>
              </div>

              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                24
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <MiniJob company="Stripe" role="Software Engineer" />
              <MiniJob company="Walmart" role="SDE - 1" />
              <MiniJob company="Uber" role="Frontend Engineer" />
            </div>

            <Link
              href="/jobs/saved"
              className="mt-5 block text-xs font-semibold text-slate-900"
            >
              View saved jobs →
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-6">
            <h2 className="font-semibold">Quick actions</h2>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Jump back into your job search.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <QuickAction href="/jobs" label="Find Jobs" />
              <QuickAction href="/jobs/saved" label="Saved Jobs" />
              <QuickAction href="/applications" label="Applications" />
              <QuickAction href="/profile" label="My Profile" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          {icon}
        </div>

        <span className="text-xs text-emerald-600">+12%</span>
      </div>

      <p className="mt-5 text-sm text-slate-500">{title}</p>

      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
    </div>
  );
}

function JobCard({
  company,
  role,
  location,
  salary,
  posted,
  match,
}) {
  return (
    <div className="flex gap-4 px-5 py-5 transition hover:bg-slate-50 sm:px-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
        {company.charAt(0)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {role}
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-600">
              {company}
            </p>
          </div>

          <span className="w-fit rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
            {match} match
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
          <span>📍 {location}</span>
          <span>₹ {salary.replace("₹", "")}</span>
          <span>{posted}</span>
        </div>
      </div>

      <button
        type="button"
        className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-100 hover:text-slate-700 sm:flex"
      >
        ♡
      </button>
    </div>
  );
}

function ApplicationItem({
  company,
  role,
  status,
  statusType,
  last,
}) {
  const statusClasses = {
    interview: "bg-blue-50 text-blue-600",
    review: "bg-amber-50 text-amber-600",
    applied: "bg-slate-100 text-slate-600",
  };

  return (
    <div
      className={`flex gap-3 py-4 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
        {company.charAt(0)}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-slate-800">
          {role}
        </p>

        <p className="mt-1 text-[11px] text-slate-400">
          {company}
        </p>

        <span
          className={`mt-2 inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ${statusClasses[statusType]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function MiniJob({ company, role }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-bold text-slate-600">
        {company.charAt(0)}
      </div>

      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-slate-800">
          {role}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-400">
          {company}
        </p>
      </div>
    </div>
  );
}

function QuickAction({ href, label }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
    >
      {label}
    </Link>
  );
}

function BookmarkIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17l-6-3-6 3V4Z" />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
