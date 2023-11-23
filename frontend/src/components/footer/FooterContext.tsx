import { useNavigate } from "react-router-dom";
import { Button, Input, Typography } from "../../design-system";
import { RouteNames } from "../../routers/interface";

function FooterContext() {
  const navigate = useNavigate();
  return (
    <footer className="flex justify-between max-lg:flex-col gap-20 items-center my-9">
      <div className="flex flex-col gap-6 max-w-[433px]">
        <div className="bg-black p-3 h-10 w-[90px] flex justify-center items-center text-white rounded-lg">
          LOGO
        </div>
        <Typography variant="body4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
        <div className="flex items-center gap-2 w-full">
          <Input placeholder="Enter email" className="w-full" />
          <Button size="large">Subscribe</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 ma gap-[84px] max-sm:gap-3 item-center">
        <div className="mb-8">
          <h2 className="text-2xl max-xl:text-lg font-semibold mb-4 pb-1 ">
            Quick Links
          </h2>
          <div className="w-9 bg-tertiary-300 h-[0.5px] mb-6" />
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((label, index) => (
              <Typography
                key={index}
                variant="body3"
                onClick={() => {
                  navigate(RouteNames.HOME, {
                    state: { path: label },
                  });
                }}
                color="gray.300"
                className="hover:!text-tertiary-300 !max-sm:text-lg hover:underline cursor-pointer"
              >
                {label}
              </Typography>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl max-xl:text-lg font-semibold mb-4 pb-1 ">
            Support
          </h2>
          <div className="w-9 bg-tertiary-300 h-[0.5px] mb-6" />
          <div className="flex flex-col gap-2">
            {SUPPORT.map((label, index) => (
              <Typography
                key={index}
                variant="body3"
                color="gray.300"
                className="hover:!text-tertiary-300 !max-sm:text-lg hover:underline cursor-pointer"
              >
                {label}
              </Typography>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl max-xl:text-lg font-semibold mb-4 pb-1 ">
            Contact Info
          </h2>
          <div className="w-9 bg-tertiary-300 h-[0.5px] mb-6" />
          <div className="flex flex-col gap-2">
            {CONTACTS.map((label, index) => (
              <Typography
                key={index}
                variant="body3"
                color="gray.300"
                className="!max-sm:text-lg"
              >
                {label}
              </Typography>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default FooterContext;

const QUICK_LINKS = [
  "Home",
  "About Us",
  "Features",
  "Pricing",
  "FAQ",
  "Contact",
];

const SUPPORT = ["Support", "Benefits", "Plan", "News & Articles", "Blog"];
const CONTACTS = [
  "Email: info@email.cpm",
  "Phone: +234 810 395 2995",
  "Address: Plot 123, ABC Rd.",
];