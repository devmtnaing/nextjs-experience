import Link from "next/link";

export default function NoDataFound(redirect_url) {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Record not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the record you’re looking for.
            </p>
            <div className="mt-6">
              <Link href={redirect_url}>
                <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  <span aria-hidden="true"> &larr;</span>
                  Go back
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
