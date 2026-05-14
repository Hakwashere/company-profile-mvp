import { supabase } from "@/lib/supabase";

export default async function Dashboard() {

  const { data: contacts, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Contact Messages
      </h1>

      <div className="grid gap-6">

        {contacts?.map((contact) => (
          <div
            key={contact.id}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-blue-400">
              {contact.name}
            </h2>

            <p className="text-gray-300">
              {contact.email}
            </p>

            <p className="text-sm text-purple-400 mt-2">
              {contact.service}
            </p>

            <p className="mt-4">
              {contact.message}
            </p>

            <p className="text-xs text-gray-500 mt-4">
              {new Date(contact.created_at).toLocaleString()}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}