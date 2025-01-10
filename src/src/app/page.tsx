import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <main className="max-w-4xl w-full text-center space-y-8">
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/headerimg.png"
          alt="Header Image"
          width={1200} 
          height={400} 
          className="w-full h-full object-cover"
        />
      </div>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome To Ilham Blog
        </h1>
        <p className="text-lg text-gray-600">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat malesuada ultrices fusce inceptos suspendisse purus. Facilisi turpis lectus accumsan elit nascetur libero fringilla. Taciti ligula nascetur senectus; posuere mus in augue gravida viverra. Curae sapien nisi blandit neque aptent mauris ac. Posuere taciti duis malesuada egestas ullamcorper? Est ante inceptos accumsan dis ridiculus ligula luctus litora morbi. Facilisi vivamus primis lacus vulputate magna rhoncus non class.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="px-6 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100"
          >
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
