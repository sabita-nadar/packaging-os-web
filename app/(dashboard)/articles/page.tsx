import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="px-8 py-8">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Articles
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Review, approve and publish packaging industry articles.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        <table className="w-full">

          <thead className="border-b border-gray-200 bg-gray-50">

            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Article
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Company
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-100">

            <Article
              id="1"
              title="New Digital Packaging Press Launch"
              company="HP"
              status="Pending Review"
            />

            <Article
              id="2"
              title="Sustainable Folding Carton Solution"
              company="Bobst"
              status="Approved"
            />

            <Article
              id="3"
              title="New Corrugated Packaging Technology"
              company="BW Papersystems"
              status="Published"
            />

          </tbody>

        </table>

      </div>

    </div>
  );
}


function Article({
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
    <tr className="hover:bg-gray-50">

      <td className="px-6 py-5">
        <Link
          href={`/articles/${id}`}
          className="font-medium text-gray-900 hover:text-blue-600"
        >
          {title}
        </Link>
      </td>

      <td className="px-6 py-5 text-sm text-gray-600">
        {company}
      </td>

      <td className="px-6 py-5">

        <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
          {status}
        </span>

      </td>

      <td className="px-6 py-5 text-right">

        <Link
          href={`/articles/${id}`}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          View
        </Link>

      </td>

    </tr>
  );
}