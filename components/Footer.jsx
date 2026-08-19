import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer_wrapper__9GQwi">
        <div className="container_container__v5gtR">
          <div className="footer_content__E2ijt">
            <div className="footer_newsletter-container__POI_T">
              <div>
                <div className="footer_newsletter-title__bRCRZ">
                  Subscribe to our Newsletter!
                </div>
                <div className="footer_newsletter-form__0k_h5">
                  <form>
                    <div className="footer_input-container__K2c_A">
                      <div className="form-text-input_form-input__5AJnT">
                        <div className="text-input_input-wrapper__ia6GQ form-text-input_input-wrapper__Aw_YD footer_input-wrapper__1l5CZ text-input_dark__c1u8L">
                          <input
                            type="text"
                            className="text-input_input__cs4B0"
                            placeholder="Enter address"
                            autoComplete="on"
                            name="email"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <button
                        id="btn_newsletter_signup_footer"
                        type="submit"
                        className="footer_newsletter-submit-btn__HrC3v"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer_contacts__HFiAl">
                <div data-contact="address" className="footer_contact__fFxbr">
                  <div className="footer_contact-label__gYKsP">Head Office</div>
                  <div className="footer_contact-value__e1jbK">
                    <Link href="geo:40.75104385252497,-73.98395637414475">
                      <div>5 West 37th Street, 12th Floor,</div>
                      <div>New York, NY 10018</div>
                    </Link>
                  </div>
                </div>
                <div data-contact="email" className="footer_contact__fFxbr">
                  <div className="footer_contact-label__gYKsP">Email Us</div>
                  <div className="footer_contact-value__e1jbK">
                    <Link href="mailto:hello@findrealestate.com">
                      hello@findrealestate.com
                    </Link>
                  </div>
                </div>
                <div data-contact="phone" className="footer_contact__fFxbr">
                  <div className="footer_contact-label__gYKsP">Call Us</div>
                  <div className="footer_contact-value__e1jbK">
                    <Link href="tel:+12129949965">
                      <span>+1 212 994 9965</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_links__vib46">
              <div className="footer_nav__XkBHY">
                <Link className="footer_nav-link__LFUNG" href="/search">
                  <span data-text="Search">Search</span>
                </Link>
                <Link className="footer_nav-link__LFUNG" href="/agents">
                  <span data-text="Agents">Agents</span>
                </Link>
                <Link className="footer_nav-link__LFUNG" href="/join">
                  <span data-text="Join">Join</span>
                </Link>
                <Link className="footer_nav-link__LFUNG" href="/about-us">
                  <span data-text="About Us">About Us</span>
                </Link>
                <Link
                  className="footer_nav-link__LFUNG"
                  href="https://app.findrealestate.com/authentication/sign-in"
                >
                  <span data-text="Agent Portal">Agent Portal</span>
                </Link>
              </div>
              <div className="footer_socials__4JfcA">
                <Link
                  href="https://facebook.com/findrealestate.hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link__2uQBq"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.instagram.com/findrealestate.hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link__2uQBq"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.youtube.com/@findrealestate_hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link__2uQBq"
                >
                  Youtube
                </Link>
                <Link
                  href="https://www.linkedin.com/company/oxford-property-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link__2uQBq"
                >
                  Linkedin
                </Link>
              </div>
            </div>
            <div className="footer_logo__5ncK8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 975 280"
              >
                <path
                  fill="currentColor"
                  d="M836.06 1.01c77.3 0 139.94 62.69 139.94 140C976 218.33 913.35 281 836.06 281H702.61V1.01zm-52.82 80.17v119.44h44.58a59.5 59.5 0 0 0 42.21-17.5 59.7 59.7 0 0 0-42.2-101.94z"
                  data-letter="f"
                ></path>
                <path
                  fill="currentColor"
                  d="M595.45 183.2V1h80.14v279.99H556.68l-73.33-152.93V281H403.2V1h110.33z"
                  data-letter="i"
                ></path>
                <path
                  fill="currentColor"
                  d="M376.19 280.99h-141l61.26-140.29L235.2 1h141v279.99Z"
                  data-letter="n"
                ></path>
                <path
                  fill="currentColor"
                  d="M244.55 81.28H81.14v59.42h101.02v80.17H81.14v60.12H1V1h207.91z"
                  data-letter="d"
                ></path>
              </svg>
            </div>
            <div className="footer_copyright-container__yt1ht">
              <div className="footer_sublinks__Pj_ed">
                <Link href="/terms-of-service">Terms</Link>
                <Link href="/privacy-policy">Privacy policy</Link>
                <Link
                  target="_blank"
                  href="https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf"
                >
                  Fair Housing Notice
                </Link>
                <Link href="/operating-procedure">Operating Procedure</Link>
                <Link href="/press-and-media">Press</Link>
                <span className="undefined">
                  Housing Choice Vouchers Welcome
                </span>
                <span className="undefined">
                  Se Aceptan Vales de Elección de Vivienda
                </span>
              </div>
              <div>FIND Real Estate</div>
              <div>Copyright © 2026</div>
            </div>
          </div>
        </div>
      </div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PQQ5DTWQ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div
        id="_rht_toaster"
        style={{
          position: "fixed",
          zIndex: "9999",
          top: "16px",
          left: "16px",
          right: "16px",
          bottom: "16px",
          pointerEvents: "none",
        }}
      ></div>
      <script
        src="js/webpack-7e957915deec5928.js"
        id="_R_"
        async={true}
      ></script>
    </>
  );
}
