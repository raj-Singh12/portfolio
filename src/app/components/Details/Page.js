import Blog from "../Blog/Page";
import Work from "../Work/Page";
import Enquiry from "../Enquiry/Page";

export default function Details() {
    return (
        <div class="sm:px-8 mt-24 md:mt-28">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <Blog />
                <div class="space-y-10 lg:pl-16 xl:pl-24">
                  <Enquiry />
                  <Work />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  