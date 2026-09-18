import Link from "next/link";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="px-8 py-8">

      <Link
        href="/articles"
        className="text-sm font-medium text-blue-600"
      >
        ← Back to Articles
      </Link>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-8">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-medium text-gray-500">
              Article #{id}
            </p>

            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              New Digital Packaging Press Launch
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Company: HP
            </p>
          </div>

          <span className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
            Pending Review
          </span>

        </div>

        <div className="my-8 border-t border-gray-200" />

        <div className="prose max-w-none">

          <p>
            This is the article content area. The AI-generated
            article will appear here for editorial review.
          </p>

          <p>
            Editors can review, edit and approve the article
            before publication.
          </p>

        </div>

        {/* Actions */}
        <div className="mt-10 flex gap-3">

          <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700">
            Approve
          </button>

          <button className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
            Reject
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Publish
          </button>

        </div>

      </div>

    </div>
  );
}