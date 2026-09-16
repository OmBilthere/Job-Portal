"use client";

import { useEffect, useState } from "react";

export default function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch("/api/jobs");

                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }

                const data = await response.json();

                setJobs(data);
            } catch (error) {
                console.error("Jobs Error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    if (loading) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-24">
                <p className="text-center text-gray-500">Loading jobs...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-24">
                <p className="text-center text-red-500">{error}</p>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                    Career Opportunities
                </p>

                <h1 className="mt-2 text-4xl font-bold text-gray-900">
                    Find Your Next Job
                </h1>

                <p className="mt-3 text-gray-600">
                    Explore job opportunities from companies hiring across different
                    locations.
                </p>
            </div>

            {jobs.length === 0 ? (
                <div className="rounded-xl border bg-white p-10 text-center">
                    <p className="text-gray-500">No jobs found.</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {job.title}
                                </h2>

                                <div className="mt-4 space-y-2 text-sm text-gray-600">
                                    <p>📍 {job.location || "Location not specified"}</p>

                                    <p>
                                        💼{" "}
                                        {job.employmentType
                                            ? job.employmentType.replace(/([A-Z])/g, " $1").trim()
                                            : "Not specified"}
                                    </p>

                                    {job.department && <p>🏢 {job.department}</p>}

                                    {job.team && <p>👥 {job.team}</p>}

                                    {job.workplaceType && (
                                        <p>🏠 {job.workplaceType}</p>
                                    )}
                                </div>

                                <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">
                                    {job.descriptionPlain || "No description available."}
                                </p>
                            </div>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href={job.jobUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 rounded-lg border px-4 py-2.5 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                >
                                    View Job
                                </a>

                                <a
                                    href={job.applyUrl || job.jobUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-700"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}