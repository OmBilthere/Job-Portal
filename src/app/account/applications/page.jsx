"use client";

import { useState } from "react";
import Link from "next/link";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore · Hybrid",
    appliedDate: "Sep 14, 2026",
    status: "Interview",
    statusType: "interview",
    stage: "Technical Interview",
    nextStep: "Sep 18, 2026",
    jobType: "Full-time",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Software Engineer II",
    location: "Hyderabad · Hybrid",
    appliedDate: "Sep 12, 2026",
    status: "Under Review",
    statusType: "review",
    stage: "Application Review",
    nextStep: "Waiting for response",
    jobType: "Full-time",
  },
  {
    id: 3,
    company: "Razorpay",
    role: "Software Engineer I",
    location: "Bangalore · On-site",
    appliedDate: "Sep 10, 2026",
    status: "Applied",
    statusType: "applied",
    stage: "Application Submitted",
    nextStep: "Waiting for response",
    jobType: "Full-time",
  },
  {
    id: 4,
    company: "Atlassian",
    role: "Backend Engineer",
    location: "Remote · India",
    appliedDate: "Sep 06, 2026",
    status: "Interview",
    statusType: "interview",
    stage: "Hiring Manager Round",
    nextStep: "Sep 20, 2026",
    jobType: "Full-time",
  },
  {
    id: 5,
    company: "Amazon",
    role: "SDE I",
    location: "Hyderabad · On-site",
    appliedDate: "Sep 03, 2026",
    status: "Rejected",
    statusType: "rejected",
    stage: "Application Closed",
    nextStep: "—",
    jobType: "Full-time",
  },
  {
    id: 6,
    company: "Adobe",
    role: "Frontend Engineer",
    location: "Noida · Hybrid",
    appliedDate: "Aug 29, 2026",
    status: "Applied",
    statusType: "applied",
    stage: "Application Submitted",
    nextStep: "Waiting for response",
    jobType: "Full-time",
  },
  {
    id: 7,
    company: "Flipkart",
    role: "SDE - 1",
    location: "Bangalore · Hybrid",
    appliedDate: "Aug 25, 2026",
    status: "Offer",
    statusType: "offer",
    stage: "Offer Received",
    nextStep: "Respond by Sep 22",
    jobType: "Full-time",
  },
];

const filters = [
  "All",
  "Applied",
  "Under Review",
  "Interview",
  "Offer",
  "Rejected",
];

export default function ApplicationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredApplications =
    activeFilter === "All"
      ? applications
      : applications.filter(
          (application) => application.status === activeFilter
        );

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        {/* Header */}
        <section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Your career activity
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              My Applications
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Keep track of every application, interview, and opportunity in
              one place.
            </p>
          </div>

          <Link
            href="/jobs"
            className="inline-flex w-fit items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Find More Jobs
            <span className="ml-2">→</span>
          </Link>
        </section>

        {/* Stats */}
        <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-5">
          <ApplicationStat
            label="Total"
            value="07"
            icon={<BriefcaseIcon />}
          />

          <ApplicationStat
            label="Applied"
            value="02"
            icon={<SendIcon />}
          />

          <ApplicationStat
            label="Under Review"
            value="01"
            icon={<ClockIcon />}
          />

          <ApplicationStat
            label="Interviews"
            value="02"
            icon={<CalendarIcon />}
          />

          <ApplicationStat
            label="Offers"
            value="01"
            icon={<CheckIcon />}
          />
        </section>

        {/* Progress */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Application pipeline
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your applications across different hiring stages.
              </p>
            </div>

            <p className="text-xs font-medium text-slate-500">
              7 total applications
            </p>
          </div>

          <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="w-[28%] bg-slate-400" />
            <div className="w-[14%] bg-amber-400" />
            <div className="w-[28%] bg-blue-500" />
            <div className="w-[14%] bg-emerald-500" />
            <div className="w-[14%] bg-red-400" />
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <PipelineLabel color="bg-slate-400" label="Applied" count="2" />
            <PipelineLabel
              color="bg-amber-400"
              label="Under Review"
              count="1"
            />
            <PipelineLabel
              color="bg-blue-500"
              label="Interview"
              count="2"
            />
            <PipelineLabel color="bg-emerald-500" label="Offer" count="1" />
            <PipelineLabel color="bg-red-400" label="Rejected" count="1" />
          </div>
        </section>

        {/* Filters */}
        <section className="mt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                    activeFilter === filter
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600"
            >
              Recently Updated
              <span>⌄</span>
            </button>
          </div>
        </section>

        {/* Applications */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-[2fr_1.2fr_1fr_1fr_40px] gap-4 border-b border-slate-100 bg-slate-50 px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400 lg:grid">
            <span>Position</span>
            <span>Applied</span>
            <span>Status</span>
            <span>Next Step</span>
            <span />
          </div>

          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
              />
            ))
          ) : (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <BriefcaseIcon />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                No applications found
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                You don&apos;t have any applications in this category yet.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function ApplicationCard({ application }) {
  return (
    <div className="group border-b border-slate-100 px-5 py-5 last:border-0 hover:bg-slate-50 sm:px-6 lg:grid lg:grid-cols-[2fr_1.2fr_1fr_1fr_40px] lg:items-center lg:gap-4">
      {/* Position */}
      <div className="flex min-w-0 gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
          {application.company.charAt(0)}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-900">
            {application.role}
          </h3>

          <p className="mt-1 text-xs font-medium text-slate-600">
            {application.company}
          </p>

          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-400">
            <span>📍 {application.location}</span>
            <span>{application.jobType}</span>
          </div>
        </div>
      </div>

      {/* Applied */}
      <div className="mt-4 lg:mt-0">
        <p className="text-[10px] uppercase tracking-wide text-slate-400 lg:hidden">
          Applied
        </p>

        <p className="mt-1 text-xs font-medium text-slate-600 lg:mt-0">
          {application.appliedDate}
        </p>
      </div>

      {/* Status */}
      <div className="mt-4 lg:mt-0">
        <p className="text-[10px] uppercase tracking-wide text-slate-400 lg:hidden">
          Status
        </p>

        <StatusBadge
          status={application.status}
          type={application.statusType}
        />

        <p className="mt-1 text-[10px] text-slate-400">
          {application.stage}
        </p>
      </div>

      {/* Next Step */}
      <div className="mt-4 lg:mt-0">
        <p className="text-[10px] uppercase tracking-wide text-slate-400 lg:hidden">
          Next Step
        </p>

        <p className="mt-1 text-xs font-medium text-slate-600 lg:mt-0">
          {application.nextStep}
        </p>
      </div>

      {/* More */}
      <button
        type="button"
        className="mt-4 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-700 lg:mt-0"
      >
        ⋮
      </button>
    </div>
  );
}

function StatusBadge({ status, type }) {
  const styles = {
    applied: "bg-slate-100 text-slate-600",
    review: "bg-amber-50 text-amber-600",
    interview: "bg-blue-50 text-blue-600",
    offer: "bg-emerald-50 text-emerald-600",
    rejected: "bg-red-50 text-red-500",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ${
        styles[type]
      }`}
    >
      {status}
    </span>
  );
}

function ApplicationStat({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

function PipelineLabel({ color, label, count }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
      <span className="font-semibold text-slate-700">{count}</span>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 7h16v13H4V7Zm0 4h16M10 11v2h4v-2"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 4 17 8-17 8 3-8-3-8Z"
      />
      <path strokeLinecap="round" d="M7 12h14" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
      />
    </svg>
  );
}