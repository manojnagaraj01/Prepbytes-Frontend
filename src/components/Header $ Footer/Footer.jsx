import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
const Footer = () => {
  return (
   <>
     <div className="footer_box p-2 pb-2 pl-12 pr-12 letter-spacing-[1.41px] text-black bg-[#d9f5f9] font-Poppins font-sans ">
      <div className="footer_flex_container flex flex-row justify-between w-full h-auto m-0 p-3%">
        <div className="footer-social-handles mmin-w-[28%] mr-2">
          <h2 className="footer_title mb-10 text-left text-[18px] font-semibold ">FOLLOW US</h2>
          <div className="footer_social_icons_container pb-5 mb-28 flex items-center justify-between">
            <a href="https://www.facebook.com/prepbytes0211/" target="_blank">
            <span><FaFacebookSquare /></span>
            </a>
            <a href="https://www.instagram.com/prepbytes/" target="_blank">
              
              <span><FaInstagram /></span>
            </a>
            <a href="https://www.linkedin.com/company/prepbytes/" target="_blank">
            <span><FaLinkedin /></span>
            </a>
            <a
              href="https://www.youtube.com/channel/UC0xGnHDrjUM1pDEK2Ka5imA"
              target="_blank"
            >
              <span><FaYoutube /></span>
            </a>
          </div>
          <div className="footer_contact_details">
            <div className="footer_title mb-[10] text-left text-[18px] font-semibold ">CONTACT US</div>
            <div className="">
              <div className="flex">
                <span>
                <FiPhoneCall />
                </span>
                <span className="contact_style">
                  <a
                    href="tel:+91-7969 0021 11"
                    
                  >
                    +91-7969 0021 11
                  </a>
                </span>
              </div>
              <div className="alignContactEmail flex">
                <span>
                <LuMessagesSquare />
                </span>
                <span className="contact_style email">
                  <a
                    href="mailto:support@prepbytes.com"
                  >
                    support@prepbytes.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_articles">
          <div className="footer_title mb-[10%] text-left ">
            <span className="font-semibold text-[18px] ">LATEST ARTICLES</span>
            <ul type="none" className="latestArticlesItems top-margin">
              <a
                // href="https://www.prepbytes.com/blog/html/html-br-tag/"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>HTML br Tag</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/html/html-frame-tag/"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>HTML frame Tag</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/html/html-marquee-tag/"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>HTML Marquee Tag</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/html/html-span-tag/"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>HTML span tag</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/html/html-blink-tag/"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>HTML Blink Tag</li>
              </a>
            </ul>
          </div>
          <div className="footer_title mb-[10%] text-left">
            <span className=" text-[18px] text-[#333] font-semibold">POPULAR ARTICLES</span>
            <ul type="none" className="latestArticlesItems top-margin">
              <a
                // href="https://www.prepbytes.com/blog/?p=18466"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>Touch Command in Linux with Examples</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/?p=18430"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>screen Command in Linux with Examples</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/?p=18434"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>nohup Command in Linux with Examples</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/?p=18410"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>wc command linux examples</li>
              </a>
              <a
                // href="https://www.prepbytes.com/blog/?p=18412"
                className="latestArticlesItems"
                target="_blank"
              >
                <li>sort command linuxunix examples</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer_margin min-w-[15%] text-[14px] flex flex-col">
          <div className="footer_title quick-link-title mb-3 text-[18px] font-semibold text-[#000]">QUICK LINKS</div>
          <a className="footer_links" href="/interview-questions">
            Interview Notes
          </a>
          <a className="footer_links text-[#424242]" href="/mock-tests">
            Mock Tests
          </a>
          <a className="footer_links text-[#424242]" href="/placement-preparation-program">
            Placement Programs
          </a>
          <a className="footer_links text-[#424242]" href="/prepbytes-courses">
            Coding Courses
          </a>
          <a className="footer_links text-[#424242]" href="/about">
            About Us
          </a>
          <a className="footer_links text-[#424242]" href="/blog">
            Blog
          </a>
        </div>
      </div>
      <hr className="footer_line w-full h-[1.5px] border-[0] bg-[#d8d8d8]" />
      <div className="footer_policy_rights flex justify-between pr-4 flex-row">
        <div>Copyright©2024</div>
        <div className="Policy tracking-[1.25px] inline-block">
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/refundpolicy">Refund Policy</a>
          <a href="/terms-and-conditions">Terms of Use</a>
        </div>
      </div>
    </div>
   </>
  );
};

export default Footer;
