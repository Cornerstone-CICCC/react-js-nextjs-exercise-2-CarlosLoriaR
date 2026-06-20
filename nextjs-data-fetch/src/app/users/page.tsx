import Link from "next/link";

interface User {
  id: number;
  firstName: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="text-blue-500 hover:underline text-lg"
            >
              {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
