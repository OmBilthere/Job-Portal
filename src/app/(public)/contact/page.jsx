
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="pt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Get in touch
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Let&apos;s build stronger connections together.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
            Have a question, partnership idea, or want to know more about the
            platform? Send us a message and our team will get back to you.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm font-medium text-slate-500">Email</p>
              <p className="mt-1 font-semibold text-slate-900">
                support@academiaindustry.com
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Phone</p>
              <p className="mt-1 font-semibold text-slate-900">
                +91 00000 00000
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Availability</p>
              <p className="mt-1 font-semibold text-slate-900">
                Monday – Friday, 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Send us a message
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Fill in the details below and we&apos;ll get back to you.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
