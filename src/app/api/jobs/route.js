export async function GET() {
  const response = await fetch(
    "https://api.ashbyhq.com/posting-api/job-board/CompanyName",
    { cache: "no-store" }
  );

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }

  const data = await response.json();

  return Response.json(data.jobs);
}