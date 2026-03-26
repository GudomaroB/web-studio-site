"use client";

import { useRouter } from "next/navigation";

type ContactRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  service: string;
  budget: string;
  message: string;
  createdAt: Date;
};

export function AdminRequestsList({
  requests
}: {
  requests: ContactRequest[];
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin";
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Удалить заявку?");
    if (!confirmed) return;

    const res = await fetch(`/api/admin/requests/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) {
      alert("Ошибка при удалении");
      return;
    }

    router.refresh();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6 flex justify-between">
        <h1 className="text-xl font-semibold">Заявки</h1>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:opacity-80"
        >
          Выйти
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="rounded-2xl border bg-gray-950 p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="space-y-2 text-sm">
              <p>
                <strong>Имя:</strong> {request.name}
              </p>
              <p>
                <strong>Email:</strong> {request.email}
              </p>
              <p>
                <strong>Телефон:</strong> {request.phone}
              </p>
              <p>
                <strong>Компания:</strong> {request.company || "—"}
              </p>
              <p>
                <strong>Услуга:</strong> {request.service}
              </p>
              <p>
                <strong>Бюджет:</strong> {request.budget}
              </p>
              <p className="line-clamp-3">
                <strong>Сообщение:</strong> {request.message}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(request.createdAt).toLocaleString("ru-RU")}
              </p>

              <div className="pt-3">
                <button
                  onClick={() => handleDelete(request.id)}
                  className="w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
