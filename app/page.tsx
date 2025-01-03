import Image from "next/image";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="px-[200px] py-2 ">
      <header className="flex justify-between text-lg">
        <h1 className="">Madelyn Torff</h1>
        <nav className="flex gap-10">
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <main>
        <div className="flex justify-between relative h-[80vh]">
          <div className=" mt-[75px] w-[40%]">
            <p className="uppercase mb-5 font-extrabold text-amber-400 text-xl">
              UI/UX Designer
            </p>
            <h1 className="text-6xl mb-[24px] text-justify font-bold">
              Hello, My name is Madelyn Torff
            </h1>
            <p className="text-slate-400 text-2xl font-light text-justify mb-[24px]">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <button className="px-5 py-3 bg-amber-400 mr-5 rounded-lg font-bold">
              Projects
            </button>
            <button className="px-5 py-3 outline rounded-lg font-bold">
              LinkedIn
            </button>
          </div>
          <div className="absolute right-[-200px] top-[-40px] z-[-1]">
            <Image
              width={800}
              height={629}
              src="/image.png"
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-black text-center decoration-amber-400 underline underline-offset-[16px] mb-[100px]">
            Projects
          </h1>
          <div className="flex flex-col gap-[75px] items-center justify-center w-3/4 mx-auto">
            <div className="rounded-lg shadow-xl bg-white flex items-center flex-nowrap">
              <div className="flex-1 w-1/2 p-[36px]">
                <h1 className="text-5xl font-bold mb-[32px]">Project Name</h1>
                <p className="text-slate-500 font-light text-xl text-justify mb-[24px]">
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className="px-5 py-3 outline mr-5 rounded-[24px] font-bold">
                  View Project
                </button>
              </div>
              <Image
                className="flex-1 w-1/2 rounded-r-lg"
                width={150}
                height={150}
                src="/project.png"
                alt="Picture of the author"
              />
            </div>
            <div className="rounded-lg shadow-xl bg-white flex items-center flex-nowrap">
              <Image
                className="flex-1 w-1/2 rounded-l-lg"
                width={150}
                height={150}
                src="/project.png"
                alt="Picture of the author"
              />
              <div className="flex-1 w-1/2 p-[36px]">
                <h1 className="text-5xl font-bold mb-[32px]">Project Name</h1>
                <p className="text-slate-500 font-light text-xl text-justify mb-[24px]">
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className="px-5 py-3 outline mr-5 rounded-[24px] font-bold">
                  View Project
                </button>
              </div>
            </div>{" "}
            <div className="rounded-lg shadow-xl bg-white flex items-center flex-nowrap">
              <div className="flex-1 w-1/2 p-[36px]">
                <h1 className="text-5xl font-bold mb-[32px]">Project Name</h1>
                <p className="text-slate-500 font-light text-xl text-justify mb-[24px]">
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className="px-5 py-3 outline mr-5 rounded-[24px] font-bold">
                  View Project
                </button>
              </div>
              <Image
                className="flex-1 w-1/2 rounded-r-lg"
                width={150}
                height={150}
                src="/project.png"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="mt-[200px]">
          <div className="flex justify-center gap-5">
            <AiFillInstagram size={45} />
            <AiFillLinkedin size={45} />
            <MdEmail size={45} />
          </div>
          <p className="text-center mt-5 font-light">Madelyn Torff 2021</p>
        </div>
      </main>
    </div>
  );
}
