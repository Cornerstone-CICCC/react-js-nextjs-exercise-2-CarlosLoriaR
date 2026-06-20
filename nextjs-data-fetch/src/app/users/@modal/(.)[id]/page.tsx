import Modal from "@/app/components/Modal";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

export default async function UserModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <Modal>
      <h2 className="text-xl font-bold mb-4">User Info</h2>
      <p className="mb-2">
        <span className="font-semibold">ID:</span> {user.id}
      </p>
      <p className="mb-2">
        <span className="font-semibold">First Name:</span> {user.firstName}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Last Name:</span> {user.lastName}
      </p>
    </Modal>
  );
}
