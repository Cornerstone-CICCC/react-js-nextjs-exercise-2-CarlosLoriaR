import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className="min-h-screen p-8">
      <Link
        href="/users"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Users
      </Link>
      <div className="bg-white shadow rounded-lg p-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          {user.firstName} {user.lastName}
        </h1>
        <p className="mb-2">
          <span className="font-semibold">Age:</span> {user.age}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Gender:</span> {user.gender}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}
