export default function AccountHome({ user }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <p className="text-sm text-gray-500">My Account</p>

      <h1 className="mt-2 text-3xl font-bold">
        Welcome, {user?.name}
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your profile, applications and account activity.
      </p>
    </section>
  );
}