export default function AdminHome({ user }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <p className="text-sm text-gray-500">Admin Dashboard</p>

      <h1 className="mt-2 text-3xl font-bold">
        Welcome, {user?.name}
      </h1>

      <p className="mt-2 text-gray-600">
        Manage users, applications and platform operations.
      </p>
    </section>
  );
}