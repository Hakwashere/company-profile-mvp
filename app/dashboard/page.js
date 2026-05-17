"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState(query);

  useEffect(() => {
    setSearch(query);

    const fetchContacts = async () => {
      let supabaseQuery = supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (query) {
        supabaseQuery = supabaseQuery.ilike("name", `%${query}%`);
      }

      const { data, error } = await supabaseQuery;

      if (error) {
        console.log(error);
        setContacts([]);
        return;
      }

      setContacts(data || []);
    };

    fetchContacts();
  }, [query]);

  const handleSearch = (value) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    const searchQuery = params.toString();
    router.replace(searchQuery ? `/dashboard?${searchQuery}` : "/dashboard");
  };

  const handleDelete = async (id) => {
    const previousContacts = contacts;

    setContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== id)
    );

    const { error } = await supabase.from("contacts").delete().eq("id", id);

    if (error) {
      console.log(error);
      alert("Failed to delete contact message");
      setContacts(previousContacts);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Contact Messages</h1>
          <p className="mt-2 text-gray-400">
            Search contact messages by sender name.
          </p>
        </div>

        <div className="w-full md:max-w-sm">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Search Name
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 shadow-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="rounded-xl border border-gray-700 bg-gray-900 p-6 shadow-xl transition hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-blue-400">
                    {contact.name}
                  </h2>

                  <p className="text-gray-300">{contact.email}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <p className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                    {contact.service || "No service selected"}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleDelete(contact.id)}
                    className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:bg-red-500/20 hover:text-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-gray-100">
                {contact.message}
              </p>

              <p className="mt-4 text-xs text-gray-500">
                {new Date(contact.created_at).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-gray-700 bg-gray-900 p-8 text-center text-gray-400">
            No contact messages found.
          </div>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black p-10 text-white">
          Loading dashboard...
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
