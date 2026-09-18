import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="px-8 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your packaging industry articles.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Articles"
          value="128"
          description="All articles"
        />

        <StatCard
          title="Pending Review"
          value="18"
          description="Awaiting approval"
        />

        <StatCard
          title="Approved"
          value="32"
          description="Ready to publish"
        />

        <StatCard
          title="Published"
          value="78"
          description="Live articles"
        />

      </div>


      {/* Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Articles */}
        <div className="rounded-xl border border-gray-200 bg-white xl:col-span-2">

          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Articles
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Recently added or updated articles
              </p>
            </div>

            <Link
              href="/articles"
              className="text-sm font-medium text-blue-600"
            >
              View all
            </Link>

          </div>


          <div className="divide-y divide-gray-100">

            <ArticleRow
              id="1"
              title="New Digital Packaging Press Launch"
              company="HP"
              status="Pending Review"
            />

            <ArticleRow
              id="2"
              title="Sustainable Folding Carton Solution"
              company="Bobst"
              status="Approved"
            />

            <ArticleRow
              id="3"
              title="New Corrugated Packaging Technology"
              company="BW Papersystems"
              status="Published"
            />

          </div>

        </div>


        {/* Quick Actions */}
        <div className="rounded-xl border border-gray-200 bg-white">

          <div className="border-b border-gray-200 px-6 py-5">

            <h2 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your content
            </p>

          </div>

          <div className="space-y-3 p-5">

            <Link
              href="/articles?status=pending"
              className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <p className="font-semibold text-gray-900">
                Review Articles
              </p>

              <p className="mt-1 text-sm text-gray-500">
                18 articles pending review
              </p>
            </Link>

            <Link
              href="/articles?status=approved"
              className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <p className="font-semibold text-gray-900">
                Publish Articles
              </p>

              <p className="mt-1 text-sm text-gray-500">
                32 articles ready to publish
              </p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}


/* --------------------------------
   Stat Card
-------------------------------- */

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">

      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-400">
        {description}
      </p>

    </div>
  );
}


/* --------------------------------
   Article Row
-------------------------------- */

function ArticleRow({
  id,
  title,
  company,
  status,
}: {
  id: string;
  title: string;
  company: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-5">

      <div className="min-w-0">

        <Link
          href={`/articles/${id}`}
          className="block truncate text-sm font-semibold text-gray-900 hover:text-blue-600"
        >
          {title}
        </Link>

        <p className="mt-1 text-xs text-gray-500">
          {company}
        </p>

      </div>

      <span className="ml-4 whitespace-nowrap rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
        {status}
      </span>

    </div>
  );
}