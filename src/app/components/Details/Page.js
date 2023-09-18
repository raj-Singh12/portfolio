import Blog from "../Blog/Page";
import Enquiry from "../Enquiry/Page";
import Skill from "../Skill/Page";

export default function Details() {
    return (
        <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mb-9">
                <Blog />
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <Skill />
                  {/* <Enquiry /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  