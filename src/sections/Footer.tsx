import { footerLogo } from "../assets/images/index.js";
import { copyrightSign } from "../assets/icons/index.js";
import { socialMedia, footerLinks } from "../constants.ts";

export default function Footer(): JSX.Element {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between items-start gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store, get rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <a
                href={social.link}
                key={social.name}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                aria-label={social.name}
                rel="noreferrer"
                target="_blank"
              >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white text-2xl font-montserrat font-medium mb-6">
                {title}
              </h4>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    key={name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center text-white-400">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>2022 Nike, Inc. All Rights Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}
