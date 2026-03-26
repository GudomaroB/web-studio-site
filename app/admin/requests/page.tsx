// import { prisma } from "@/lib/prisma";
// import { AdminRequestsList } from "@/components/admin/admin-requests-list";

// export default async function AdminRequestsPage() {
//   const requests = await prisma.contactRequest.findMany({
//     orderBy: {
//       createdAt: "desc"
//     }
//   });

//   return (
//     <main className="min-h-screen p-6">
//       <h1 className="text-3xl font-semibold mb-6">Заявки</h1>
//       <AdminRequestsList requests={requests} />
//     </main>
//   );
// }
import { prisma } from "@/lib/prisma";
import { AdminRequestsList } from "@/components/admin/admin-requests-list";

export const dynamic = "force-dynamic";

export default async function AdminRequestsPage() {
  const requests = await prisma.contactRequest.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-6">Заявки</h1>
      <AdminRequestsList requests={requests} />
    </main>
  );
}
