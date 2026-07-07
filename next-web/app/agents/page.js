import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="agents-page_agents-page__VOwov">
          <section>
            <div className="container_container__v5gtR">
              <div className="agents-hero_content__Iaj_D">
                <div >
                  <div className="agents-hero_title__siWa2">
                    Meet Our Agents
                  </div>
                  <p className="agents-hero_subtitle__JhNup">
                    Over 1,000 Agents Dedicated to Moving You Forward
                  </p>
                </div>
                <div >
                  <div className="agents-hero_search__7t0xo">
                    <div className="search-input_search-input__UilDV">
                      <div className="search-input_input-wrapper__nPuxY">
                        <div className="text-input_input-wrapper__ia6GQ">
                          <input
                            type="text"
                            className="text-input_input__cs4B0 search-input_text-input__qRfAI"
                            placeholder="Search by agent"
                            autoComplete="off"
                            defaultValue=""
                          />
                          <div className="text-input_icon-after__i2YjD">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m2.472 20.469 4.694-4.694a8.26 8.26 0 1 1 1.06 1.06L3.533 21.53a.751.751 0 0 1-1.06-1.061m17.78-9.97a6.75 6.75 0 1 0-6.75 6.75 6.757 6.757 0 0 0 6.75-6.75"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="agents-hero_figure__obVOq"
                  style={{ position: "relative"}}
                >
                  <img
                    alt="Agents Banner"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      objectFit: "cover",
                      color: "transparent"}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    srcSet="/images/image_1.jpg 375w, /images/image_1.jpg 375w, /images/image_3.jpg 768w, /images/image_3.jpg 768w, /images/image_2.jpg 1024w, /images/image_2.jpg 1024w, /images/image_4.jpg 1200w, /images/image_4.jpg 1200w, /images/image_6.jpg 1400w, /images/image_6.jpg 1400w, /images/image_5.jpg 1600w, /images/image_5.jpg 1600w, /images/image.jpg 1920w, /images/image.jpg 1920w"
                    src="/images/image.jpg"
                  />
                </div>
                <div className="agents-hero_description__sm6Wp">
                  With a team of over 1,000 Certified Agents across diverse
                  markets, FIND offers you unmatched expertise and personalized
                  support for every real estate need.{" "}
                  <span className="em">
                    Each FIND agent is committed to helping you take the next
                    step with confidence, backed by local insights and a deep
                    understanding of your goals.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container_container__v5gtR">
              <div className="labeled-section_labeled-section__cCSIG">
                <div className="labeled-section_label-container__qBH7q">
                  <div className="labeled-section_label__hHJX0 why_label__vCZkF">
                    <div>
                      <h2 className="why_title__jU06a">
                        Why Work with a <span className="em">FIND Agent?</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="labeled-section_content__XMCAJ">
                  <div>
                    <div className="collapsible_collapsible-mobile__w8_e_">
                      <div className="collapsible_collapsible-mobile__w8_e_">
                        <div className="collapsible_item__VdUU7">
                          <div
                            className="collapsible_trigger__YVdqC"
                            data-index="01"
                          >
                            <div>Certified Professionals</div>
                          </div>
                          <div className="collapsible_content__3mg0E">
                            <div className="collapsible_content-inner__D62mz">
                              Every agent at FIND completes a rigorous
                              certification process to ensure they have the
                              skills, market knowledge, and dedication to
                              provide a smooth and informed experience. When you
                              work with FIND, you’re working with an agent you
                              can trust.
                            </div>
                          </div>
                        </div>
                        <div className="collapsible_item__VdUU7">
                          <div
                            className="collapsible_trigger__YVdqC"
                            data-index="02"
                          >
                            <div>Locally Focused, Globally Minded</div>
                          </div>
                          <div className="collapsible_content__3mg0E">
                            <div className="collapsible_content-inner__D62mz">
                              From the heart of the city to your ideal suburb,
                              our agents know the neighborhoods inside out,
                              providing the local knowledge you need and the
                              global perspective to navigate any market.
                            </div>
                          </div>
                        </div>
                        <div className="collapsible_item__VdUU7">
                          <div
                            className="collapsible_trigger__YVdqC"
                            data-index="03"
                          >
                            <div>Agent-Owned Brokerage</div>
                          </div>
                          <div className="collapsible_content__3mg0E">
                            <div className="collapsible_content-inner__D62mz">
                              FIND is an agent-owned company, so our agents are
                              invested in your success. With ownership
                              opportunities and a shared commitment to growth,
                              you’ll feel the difference in every interaction.
                            </div>
                          </div>
                        </div>
                        <div className="collapsible_item__VdUU7">
                          <div
                            className="collapsible_trigger__YVdqC"
                            data-index="04"
                          >
                            <div>Flexible Support for All Needs</div>
                          </div>
                          <div className="collapsible_content__3mg0E">
                            <div className="collapsible_content-inner__D62mz">
                              Whether buying, selling, renting, or developing
                              property, FIND agents bring comprehensive support
                              and access to our industry-leading tools. We
                              tailor our approach to fit your needs and
                              streamline the real estate journey.
                            </div>
                          </div>
                        </div>
                        <div className="collapsible_item__VdUU7">
                          <div
                            className="collapsible_trigger__YVdqC"
                            data-index="05"
                          >
                            <div>Innovative Tools & Technology</div>
                          </div>
                          <div className="collapsible_content__3mg0E">
                            <div className="collapsible_content-inner__D62mz">
                              FIND delivers a modern and seamless real estate
                              experience with cutting-edge tools that enhance
                              your property search, marketing strategies, and
                              transaction efficiency.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible_collapsible-desktop__gk0EQ">
                      <div
                        data-state="closed"
                        className="collapsible_item__VdUU7"
                      >
                        <div
                          className="collapsible_trigger__YVdqC"
                          type="button"
                          aria-controls="radix-_R_q9bsnn5tjb_"
                          aria-expanded="false"
                          data-state="closed"
                          data-index="01"
                          title="Certified Professionals"
                        >
                          <div>Certified Professionals</div>
                          <div className="collapsible_trigger-icon__qgUgb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              width="3.2rem"
                              height="3.2rem"
                              style={{
                                transform: "rotate(0deg)",
                                transition: "transform 0.3s ease-in-out"}}
                            >
                              <path
                                fill="currentColor"
                                d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-state="closed"
                          id="radix-_R_q9bsnn5tjb_"
                          hidden={true}
                          className="collapsible_content__3mg0E"
                        ></div>
                      </div>
                      <div
                        data-state="closed"
                        className="collapsible_item__VdUU7"
                      >
                        <div
                          className="collapsible_trigger__YVdqC"
                          type="button"
                          aria-controls="radix-_R_1a9bsnn5tjb_"
                          aria-expanded="false"
                          data-state="closed"
                          data-index="02"
                          title="Locally Focused, Globally Minded"
                        >
                          <div>Locally Focused, Globally Minded</div>
                          <div className="collapsible_trigger-icon__qgUgb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              width="3.2rem"
                              height="3.2rem"
                              style={{
                                transform: "rotate(0deg)",
                                transition: "transform 0.3s ease-in-out"}}
                            >
                              <path
                                fill="currentColor"
                                d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-state="closed"
                          id="radix-_R_1a9bsnn5tjb_"
                          hidden={true}
                          className="collapsible_content__3mg0E"
                        ></div>
                      </div>
                      <div
                        data-state="closed"
                        className="collapsible_item__VdUU7"
                      >
                        <div
                          className="collapsible_trigger__YVdqC"
                          type="button"
                          aria-controls="radix-_R_1q9bsnn5tjb_"
                          aria-expanded="false"
                          data-state="closed"
                          data-index="03"
                          title="Agent-Owned Brokerage"
                        >
                          <div>Agent-Owned Brokerage</div>
                          <div className="collapsible_trigger-icon__qgUgb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              width="3.2rem"
                              height="3.2rem"
                              style={{
                                transform: "rotate(0deg)",
                                transition: "transform 0.3s ease-in-out"}}
                            >
                              <path
                                fill="currentColor"
                                d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-state="closed"
                          id="radix-_R_1q9bsnn5tjb_"
                          hidden={true}
                          className="collapsible_content__3mg0E"
                        ></div>
                      </div>
                      <div
                        data-state="closed"
                        className="collapsible_item__VdUU7"
                      >
                        <div
                          className="collapsible_trigger__YVdqC"
                          type="button"
                          aria-controls="radix-_R_2a9bsnn5tjb_"
                          aria-expanded="false"
                          data-state="closed"
                          data-index="04"
                          title="Flexible Support for All Needs"
                        >
                          <div>Flexible Support for All Needs</div>
                          <div className="collapsible_trigger-icon__qgUgb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              width="3.2rem"
                              height="3.2rem"
                              style={{
                                transform: "rotate(0deg)",
                                transition: "transform 0.3s ease-in-out"}}
                            >
                              <path
                                fill="currentColor"
                                d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-state="closed"
                          id="radix-_R_2a9bsnn5tjb_"
                          hidden={true}
                          className="collapsible_content__3mg0E"
                        ></div>
                      </div>
                      <div
                        data-state="closed"
                        className="collapsible_item__VdUU7"
                      >
                        <div
                          className="collapsible_trigger__YVdqC"
                          type="button"
                          aria-controls="radix-_R_2q9bsnn5tjb_"
                          aria-expanded="false"
                          data-state="closed"
                          data-index="05"
                          title="Innovative Tools & Technology"
                        >
                          <div>Innovative Tools & Technology</div>
                          <div className="collapsible_trigger-icon__qgUgb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              width="3.2rem"
                              height="3.2rem"
                              style={{
                                transform: "rotate(0deg)",
                                transition: "transform 0.3s ease-in-out"}}
                            >
                              <path
                                fill="currentColor"
                                d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-state="closed"
                          id="radix-_R_2q9bsnn5tjb_"
                          hidden={true}
                          className="collapsible_content__3mg0E"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="certified-agents_certifiedAgents__mnBH_">
            <div className="container_container__v5gtR">
              <div className="agents-section_content__gg7Yj">
                <div className="agents-section_title__cSwOI">
                  <h2>
                    Certified <span className="em">Agents</span>
                  </h2>
                </div>
                <div className="agents-section_controls___meG_">
                  <div
                    className="select-base_trigger__s1nK4 select-base_underlined__Bffhu"
                    tabIndex="0"
                    role="button"
                    aria-haspopup="listbox"
                    type="button"
                    aria-controls="radix-_R_6dbsnn5tjb_"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                  >
                    <div className="select-base_trigger-label__lc7Xc">
                      All Locations
                    </div>
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width="2.4rem"
                        height="2.4rem"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <select
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      position: "absolute",
                      border: "0",
                      width: "1px",
                      height: "1px",
                      padding: "0",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0, 0, 0, 0)",
                      whiteSpace: "nowrap",
                      wordWrap: "normal"}}
                  >
                    <option defaultValue=""></option>
                  </select>
                  <div
                    className="select-base_trigger__s1nK4 select-base_underlined__Bffhu"
                    tabIndex="0"
                    role="button"
                    aria-haspopup="listbox"
                    type="button"
                    aria-controls="radix-_R_adbsnn5tjb_"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                  >
                    <div className="select-base_trigger-label__lc7Xc">
                      All Specialties
                    </div>
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width="2.4rem"
                        height="2.4rem"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <select
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      position: "absolute",
                      border: "0",
                      width: "1px",
                      height: "1px",
                      padding: "0",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0, 0, 0, 0)",
                      whiteSpace: "nowrap",
                      wordWrap: "normal"}}
                  >
                    <option defaultValue=""></option>
                  </select>
                </div>
                <div className="certified-agents_grid__orUos">
                  <div className="grid_wrapper__5qWqs">
                    <div className="grid-skeleton_grid__evAfN" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
    <div key={i} className="agent" style={{ borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ height: '280px', width: '100%', overflow: 'hidden' }}>
        <img 
          src="/images/businesswomen_talking_walking_together_city_b99be30d39.jpg" 
          alt="Agent" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="card_content__48mMW" style={{ padding: '20px' }}>
        <div className="card_name__zxWBM" style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '8px' }}>
          {["Sarah Jenkins", "Michael Chang", "David Reynolds", "Emma Watson", "James Lee", "Olivia Martin", "Daniel Smith", "Sophia Taylor"][i-1]}
        </div>
        <div className="card_rating__GAMde" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb400' }}>
          <span>★★★★★</span>
          <span className="card_rating-votes__R9bLQ" style={{ color: '#666', fontSize: '0.9rem' }}>80 reviews</span>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
