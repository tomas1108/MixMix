// components/MiddleSection.js
"use client";
import { BannerSlider, ButtonGrid } from "@/components";
import { _IMAGE_URL } from "@/constants/global";

const notices = _IMAGE_URL.notices;
const events = _IMAGE_URL.events;
const items = _IMAGE_URL.items;

const MiddleSection = () => {
  return (
    <section
      className="lg:w-3/5 w-full bg-gray rounded-lg shadow h-screen overflow-y-auto space-y-4 flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
      <BannerSlider />
      <ButtonGrid />
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-2">
          {/* Left Information Div */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-lg block hover:bg-gray-200 focus:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:-translate-y-1"
          >
            <div className="flex justify-between bg-gray-300 p-4 rounded-t-lg">
              <h2 className="text-lg font-bold">공지사항</h2>
              <span className="text-sm text-orange-500 font-semibold cursor-pointer">
                + MORE
              </span>
            </div>
            <div className="p-4">
              <ul className="text-red-500">
                {notices.map((notice, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out"
                  >
                    {notice}
                  </li>
                ))}
              </ul>
            </div>
          </a>

          {/* Right Information Div */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-lg block hover:bg-gray-200 focus:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:-translate-y-1"
          >
            <div className="flex justify-between bg-gray-300 p-4 rounded-t-lg">
              <h2 className="text-lg font-bold">이벤트</h2>
              <span className="text-sm text-orange-500 font-semibold cursor-pointer">
                + MORE
              </span>
            </div>
            <div className="p-4">
              <ul className="text-red-500">
                {events.map((event, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out"
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((item, index) => (
            <a
              href="https://www.youtube.com"
              key={index}
              className="block relative group"
              target="_blank"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto rounded-lg"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
MiddleSection.displayName = "MiddleSection";
export default MiddleSection;
