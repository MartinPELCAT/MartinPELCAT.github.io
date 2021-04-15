import dynamic from "next/dynamic";
import { DownloadIcon } from "../components/icons/DownloadIcon";
import { InboxIcon } from "../components/icons/InboxIcon";

const Layout = dynamic(() => import("../components/Layout"));

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto my-4 px-2">
        <a href="/CV.pdf" target="_blank" download="CV-Martin-PELCAT">
          <div className="p-3 bg-white rounded-md flex text-gray-600 justify-between items-center">
            <span className="text-gray-800 text-2xl font-medium">
              Télecharger mon CV
            </span>
            <DownloadIcon />
          </div>
        </a>

        <div className="grid grid-cols-2 gap-4 my-4">
          <div>
            <a href="https://www.linkedin.com/in/martinpelcat/">
              <div className="bg-white rounded-md shadow flex py-3 flex-col justify-between overflow-hidden transform duration-300 hover:scale-105">
                <div className="flex-1 flex items-center">
                  <img src="/contact/linkedin.webp" alt="" className="px-3" />
                </div>
                <div className="text-center font-light italic pt-3">
                  LinkedIn
                </div>
              </div>
            </a>
          </div>
          <div>
            <div className="h-full bg-white rounded-md shadow flex py-3 flex-col justify-between overflow-hidden transform duration-300 hover:scale-105">
              <div className="flex flex-col px-4 space-y-4">
                <img src="/contact/envelope.png" alt="" />
              </div>
              <div className="text-center font-light italic pt-3">
                martinpelcat@hotmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
