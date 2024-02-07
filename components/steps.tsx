/**
 * This code was generated by v0 by Vercel.
 * @see http://v0.dev/t/RolouReNaC2
 */
import Link from "next/link"
import Image from "next/image"

export function Steps() {
  return (
    <section className="py-12 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
        <div className="absolute top-0 left-0 mt-4 ml-4">
          <Image
            alt="Logo"
            className="w-24 h-24 mb-4"
            height={100}
            src="/itgeeks.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width={100}
          />
        </div>
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Image
            alt="Logo"
            className="w-24 h-24 mb-4"
            height="100"
            src="/postman.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="text-6xl font-bold text-gray-900 dark:text-gray-800">1</div>
          <Link className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
                href="http://postman.itgeeks.social/">
            Create a postman account
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Make sure to use this link to create your account
          </p>
          <Link className="text-lg font-medium dark:text-[#495057] hover:underline"
                href="http://postman.itgeeks.social/">
            http://postman.itgeeks.social/
          </Link>

        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="text-6xl font-bold text-gray-900 dark:text-gray-800">2</div>
          <Link className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400" href="http://www.postman.com/downloads/">
            Install postman
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
             Install the Postman on your laptop.(We have a workshop 🙌)
          </p>
          <Link className="text-lg font-medium dark:text-[#495057] hover:underline"
                href="https://www.postman.com/downloads">
            https://www.postman.com/downloads
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="text-6xl font-bold text-gray-900 dark:text-gray-800">3</div>
          <Link className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400" href="http://forms.gle/DjJRqKNGEXTyQiSw6">
            Fill up the registration form
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Fill up the registration form to get the access to the API
          </p>
          <Link className="text-lg font-medium dark:text-[#495057] hover:underline"
                href="http://registre.itgeeks.social">
            http://registre.itgeeks.social
          </Link>
        </div>
      </div>
    </section>
  )
}
