import "bootstrap-icons/font/bootstrap-icons.css";
import { Calendar, SendHorizontal, Quote } from "lucide-react";
import NavigationMenuWithDropdown from "@/components/ui/personal/navigation_menu_with_dropdown";

const FAQ = () => {
  return (
    <main className="">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        FAQ
      </p>
      <p className="mt-1 text-center text-xl font-semibold md:mt-2 md:text-2xl lg:text-3xl">
        You might be wondering...
      </p>

      {/* FAQ */}
      <div className="mx-auto mb-12 mt-9 max-w-[85rem] px-4 py-10 sm:px-6 md:mb-16 md:mt-12 lg:mb-24 lg:mt-16 lg:px-8 lg:py-14">
        <div className="divide-gray-200 mx-auto max-w-2xl divide-y">
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="text-gray-500 mt-1 size-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div>
                <h3 className="text-gray-800 font-semibold md:text-lg">
                  Can I cancel at anytime?
                </h3>
                <p className="text-gray-500 mt-1">
                  Yes, you can cancel anytime no questions are asked while you
                  cancel but we would highly appreciate if you will give us some
                  feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="text-gray-500 mt-1 size-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div>
                <h3 className="text-gray-800 font-semibold md:text-lg">
                  My team has credits. How do we use them?
                </h3>
                <p className="text-gray-500 mt-1">
                  Once your team signs up for a subscription plan. This is where
                  we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="text-gray-500 mt-1 size-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div>
                <h3 className="text-gray-800 font-semibold md:text-lg">
                  How does Preline&apos;s pricing work?
                </h3>
                <p className="text-gray-500 mt-1">
                  Our subscriptions are tiered. Understanding the task at hand
                  and ironing out the wrinkles is key.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="text-gray-500 mt-1 size-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div>
                <h3 className="text-gray-800 font-semibold md:text-lg">
                  How secure is Preline?
                </h3>
                <p className="text-gray-500 mt-1">
                  Protecting the data you trust to Preline is our first
                  priority. This part is really crucial in keeping the project
                  in line to completion.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="text-gray-500 mt-1 size-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div>
                <h3 className="text-gray-800 font-semibold md:text-lg">
                  How do I get access to a theme I purchased?
                </h3>
                <p className="text-gray-500 mt-1">
                  If you lose the link for a theme you purchased, don&apos;t
                  panic! We&apos;ve got you covered. You can login to your
                  account, tap your avatar in the upper right corner, and tap
                  Purchases. If you didn&apos;t create a login or can&apos;t
                  remember the information, you can use our handy Redownload
                  page, just remember to use the same email you originally made
                  your purchases with.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="text-gray-500 mt-1 size-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div>
                <h3 className="text-gray-800 font-semibold md:text-lg">
                  Upgrade License Type
                </h3>
                <p className="text-gray-500 mt-1">
                  There may be times when you need to upgrade your license from
                  the original type you purchased and we have a solution that
                  ensures you can apply your original purchase cost to the new
                  license purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End FAQ */}
    </main>
  );
};

export default FAQ;
