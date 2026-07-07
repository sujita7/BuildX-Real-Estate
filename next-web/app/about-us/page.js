import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="about-page_wrapper__g83HR">
          <section className="about-page_banner__yLmpV">
            <div className="container_container__v5gtR">
              <div>
                <div
                  
                  className="about-page_banner-title__qb78x"
                >
                  <h1>About Us</h1>
                </div>
              </div>
              <div
                
                className="about-page_banner-subtitle__fIWFi"
              >
                Our Mission: Moving You Forward in Real Estate
              </div>
              <div className="about-page_banner-img__QYl9f">
                <video
                  src="/media/find-about.mp4"
                  loop={true}
                  autoPlay=""
                  muted={true}
                  playsInline=""
                ></video>
              </div>
              <div className="about-page_banner-description__7AGDl">
                At FIND, we're more than a real estate brokerage; we're a
                movement dedicated to helping our clients and agents move
                forward.{" "}
                <span className="em">
                  From finding the perfect property to empowering agents to
                  build thriving careers, our mission is simple: make every step
                  in real estate a positive one.
                </span>
              </div>
            </div>
          </section>
          <section className="about-page_who-we-are__VxGR5">
            <div className="container_container__v5gtR">
              <div className="about-page_row__Pw_hA">
                <div className="about-page_col__EpttX">
                  <div className="about-page_who-we-are-label__sjv4C">
                    Who We Are
                  </div>
                  <div
                    className="about-page_who-we-are-particle-img__ptHgP"
                    style={{ position: "relative"}}
                  >
                    <img
                      alt="Who We Are"
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
                      srcSet="/images/image_34.png 375w, /images/image_34.png 375w, /images/image_48.png 768w, /images/image_48.png 768w, /images/image_53.png 1024w, /images/image_53.png 1024w, /images/image_37.png 1200w, /images/image_37.png 1200w, /images/image_141.png 1400w, /images/image_141.png 1400w, /images/image_47.png 1600w, /images/image_47.png 1600w, /images/image_19.png 1920w, /images/image_19.png 1920w"
                      src="/images/image_19.png"
                    />
                  </div>
                </div>
                <div className="about-page_col__EpttX">
                  <div className="about-page_who-we-are-title__ibrq1">
                    <span className="em">Who</span> We Are
                  </div>
                  <div
                    className="about-page_who-we-are-img__SL_Px"
                    style={{ position: "relative"}}
                  >
                    <img
                      alt="Who We Are"
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
                      srcSet="/images/image_35.png 375w, /images/image_35.png 375w, /images/image_65.png 768w, /images/image_65.png 768w, /images/image_45.png 1024w, /images/image_45.png 1024w, /images/image_36.png 1200w, /images/image_36.png 1200w, /images/image_44.png 1400w, /images/image_44.png 1400w, /images/image_93.png 1600w, /images/image_93.png 1600w, /images/image_13.png 1920w, /images/image_13.png 1920w"
                      src="/images/image_13.png"
                    />
                  </div>
                  <div className="about-page_who-we-are-description__8MvTZ">
                    Founded on the belief that real estate should be empowering
                    for everyone involved, FIND combines innovative tools, a
                    client-centered approach, and an agent-owned{" "}
                    <span className="em">
                      model to redefine what a modern brokerage can be. Today,
                      we’re proud to support over 1,000 agents and countless
                      clients on their journeys.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container_container__v5gtR">
              <div className="labeled-section_labeled-section__cCSIG">
                <div className="labeled-section_label-container__qBH7q">
                  <div className="labeled-section_label__hHJX0">
                    <div className="about-page_section-label__APKJl">
                      <div>
                        <span className="em">What</span> Sets
                      </div>
                      <div>FIND Apart</div>
                    </div>
                  </div>
                </div>
                <div className="labeled-section_content__XMCAJ">
                  <div className="collapsible_collapsible-mobile__w8_e_">
                    <div className="collapsible_collapsible-mobile__w8_e_">
                      <div className="collapsible_item__VdUU7">
                        <div
                          className="collapsible_trigger__YVdqC"
                          data-index="01"
                        >
                          <div>Agent-Owned and Client-Focused</div>
                        </div>
                        <div className="collapsible_content__3mg0E">
                          <div className="collapsible_content-inner__D62mz">
                            FIND is built by agents, for agents, and is designed
                            with clients in mind. As an agent-owned company, our
                            team has a vested interest in your success and
                            fosters an environment of dedication and trust.
                          </div>
                        </div>
                      </div>
                      <div className="collapsible_item__VdUU7">
                        <div
                          className="collapsible_trigger__YVdqC"
                          data-index="02"
                        >
                          <div>Certified Agents with Local Expertise</div>
                        </div>
                        <div className="collapsible_content__3mg0E">
                          <div className="collapsible_content-inner__D62mz">
                            All FIND agents complete a thorough certification
                            program that sets them apart as trusted experts in
                            their markets. Whether you’re buying, selling, or
                            renting, our agents offer deep local insights
                            tailored to your goals.
                          </div>
                        </div>
                      </div>
                      <div className="collapsible_item__VdUU7">
                        <div
                          className="collapsible_trigger__YVdqC"
                          data-index="03"
                        >
                          <div>Flexible Membership Plans</div>
                        </div>
                        <div className="collapsible_content__3mg0E">
                          <div className="collapsible_content-inner__D62mz">
                            We’ve replaced traditional commission models with
                            flexible membership plans, giving our agents freedom
                            and stability to deliver an exceptional client
                            experience. This unique approach means our agents
                            are focused on your needs - not just on percentages.
                          </div>
                        </div>
                      </div>
                      <div className="collapsible_item__VdUU7">
                        <div
                          className="collapsible_trigger__YVdqC"
                          data-index="04"
                        >
                          <div>Innovative Tools and Technology</div>
                        </div>
                        <div className="collapsible_content__3mg0E">
                          <div className="collapsible_content-inner__D62mz">
                            Our platform offers advanced tools, analytics, and
                            resources that streamline every real estate process.
                            With FIND, you get modern, efficient support backed
                            by technology that keeps your journey simple and
                            smooth.
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
                        aria-controls="radix-_R_qdbsnn5tjb_"
                        aria-expanded="false"
                        data-state="closed"
                        data-index="01"
                        title="Agent-Owned and Client-Focused"
                      >
                        <div>Agent-Owned and Client-Focused</div>
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
                        id="radix-_R_qdbsnn5tjb_"
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
                        aria-controls="radix-_R_1adbsnn5tjb_"
                        aria-expanded="false"
                        data-state="closed"
                        data-index="02"
                        title="Certified Agents with Local Expertise"
                      >
                        <div>Certified Agents with Local Expertise</div>
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
                        id="radix-_R_1adbsnn5tjb_"
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
                        aria-controls="radix-_R_1qdbsnn5tjb_"
                        aria-expanded="false"
                        data-state="closed"
                        data-index="03"
                        title="Flexible Membership Plans"
                      >
                        <div>Flexible Membership Plans</div>
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
                        id="radix-_R_1qdbsnn5tjb_"
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
                        aria-controls="radix-_R_2adbsnn5tjb_"
                        aria-expanded="false"
                        data-state="closed"
                        data-index="04"
                        title="Innovative Tools and Technology"
                      >
                        <div>Innovative Tools and Technology</div>
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
                        id="radix-_R_2adbsnn5tjb_"
                        hidden={true}
                        className="collapsible_content__3mg0E"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="core-team_wrapper__Za5Fz">
            <div className="container_container__v5gtR">
              <div className="core-team_title__2Xew0">
                <div className="em">Meet the</div>FIND Team
              </div>
              <div className="progress-slider_progress-slider__qK3uB">
                <div className="swiper progress-slider_slider__vRu_h core-team_slider__ZIFd4">
                  <div className="swiper-wrapper progress-slider_slider-wrapper__Pv7Nu">
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Adam Mahfouda"
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
                              srcSet="/images/image_12.jpg 375w, /images/image_12.jpg 375w, /images/image_16.jpg 768w, /images/image_16.jpg 768w, /images/image_28.jpg 1024w, /images/image_28.jpg 1024w, /images/image_22.jpg 1200w, /images/image_22.jpg 1200w, /images/image_17.jpg 1400w, /images/image_17.jpg 1400w, /images/image_26.jpg 1600w, /images/image_26.jpg 1600w, /images/image_2.jpg 1920w, /images/image_2.jpg 1920w"
                              src="/images/image_2.jpg"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Adam Mahfouda
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Founder and Chief Executive Officer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Jules Borbely"
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
                              srcSet="/images/image_10.jpg 375w, /images/image_10.jpg 375w, /images/image_11.jpg 768w, /images/image_11.jpg 768w, /images/image_19.jpg 1024w, /images/image_19.jpg 1024w, /images/image_24.jpg 1200w, /images/image_24.jpg 1200w, /images/image_18.jpg 1400w, /images/image_18.jpg 1400w, /images/image_25.jpg 1600w, /images/image_25.jpg 1600w, /images/image.jpg 1920w, /images/image.jpg 1920w"
                              src="/images/image.jpg"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Jules Borbely
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Chief Operating Officer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Dina Tango"
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
                              srcSet="/images/image_9.jpg 375w, /images/image_9.jpg 375w, /images/image_21.jpg 768w, /images/image_21.jpg 768w, /images/image_13.jpg 1024w, /images/image_13.jpg 1024w, /images/image_20.jpg 1200w, /images/image_20.jpg 1200w, /images/image_14.jpg 1400w, /images/image_14.jpg 1400w, /images/image_23.jpg 1600w, /images/image_23.jpg 1600w, /images/image_3.jpg 1920w, /images/image_3.jpg 1920w"
                              src="/images/image_3.jpg"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Dina Tango
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Chief Financial Officer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Molly Concannon"
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
                              srcSet="/images/image_15.jpg 375w, /images/image_15.jpg 375w, /images/image_31.jpg 768w, /images/image_31.jpg 768w, /images/image_27.jpg 1024w, /images/image_27.jpg 1024w, /images/image_30.jpg 1200w, /images/image_30.jpg 1200w, /images/image_32.jpg 1400w, /images/image_32.jpg 1400w, /images/image_29.jpg 1600w, /images/image_29.jpg 1600w, /images/image_1.jpg 1920w, /images/image_1.jpg 1920w"
                              src="/images/image_1.jpg"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Molly Concannon
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Chief of Staff
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Christina Alexander"
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
                              srcSet="/images/image_24.png 375w, /images/image_24.png 375w, /images/image_26.png 768w, /images/image_26.png 768w, /images/image_33.png 1024w, /images/image_33.png 1024w, /images/image_27.png 1200w, /images/image_27.png 1200w, /images/image_32.png 1400w, /images/image_32.png 1400w, /images/image_28.png 1600w, /images/image_28.png 1600w, /images/image_1.png 1920w, /images/image_1.png 1920w"
                              src="/images/image_1.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Christina Alexander
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Agent Success Manager
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Jay Khan"
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
                              srcSet="/images/image_22.png 375w, /images/image_22.png 375w, /images/image_30.png 768w, /images/image_30.png 768w, /images/image_31.png 1024w, /images/image_31.png 1024w, /images/image_25.png 1200w, /images/image_25.png 1200w, /images/image_29.png 1400w, /images/image_29.png 1400w, /images/image_23.png 1600w, /images/image_23.png 1600w, /images/image.png 1920w, /images/image.png 1920w"
                              src="/images/image.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Jay Khan
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Director of Coaching and Agent Development
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Jamie Sittner"
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
                              srcSet="/images/image_39.png 375w, /images/image_39.png 375w, /images/image_80.png 768w, /images/image_80.png 768w, /images/image_50.png 1024w, /images/image_50.png 1024w, /images/image_49.png 1200w, /images/image_49.png 1200w, /images/image_62.png 1400w, /images/image_62.png 1400w, /images/image_51.png 1600w, /images/image_51.png 1600w, /images/image_14.png 1920w, /images/image_14.png 1920w"
                              src="/images/image_14.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Jamie Sittner
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Team Leader - Ballston Spa
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Casey Gaddy"
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
                              srcSet="/images/image_38.png 375w, /images/image_38.png 375w, /images/image_52.png 768w, /images/image_52.png 768w, /images/image_41.png 1024w, /images/image_41.png 1024w, /images/image_68.png 1200w, /images/image_68.png 1200w, /images/image_122.png 1400w, /images/image_122.png 1400w, /images/image_57.png 1600w, /images/image_57.png 1600w, /images/image_18.png 1920w, /images/image_18.png 1920w"
                              src="/images/image_18.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Casey Gaddy
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Pennsylvania Regional Manager & Broker
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Dimitar Nikolov"
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
                              srcSet="/images/image_40.png 375w, /images/image_40.png 375w, /images/image_42.png 768w, /images/image_42.png 768w, /images/image_75.png 1024w, /images/image_75.png 1024w, /images/image_43.png 1200w, /images/image_43.png 1200w, /images/image_46.png 1400w, /images/image_46.png 1400w, /images/image_59.png 1600w, /images/image_59.png 1600w, /images/image_5.png 1920w, /images/image_5.png 1920w"
                              src="/images/image_5.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Dimitar Nikolov
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Founding Partner
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Edon Mustafa"
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
                              srcSet="/images/image_56.png 375w, /images/image_56.png 375w, /images/image_58.png 768w, /images/image_58.png 768w, /images/image_54.png 1024w, /images/image_54.png 1024w, /images/image_70.png 1200w, /images/image_70.png 1200w, /images/image_102.png 1400w, /images/image_102.png 1400w, /images/image_117.png 1600w, /images/image_117.png 1600w, /images/image_11.png 1920w, /images/image_11.png 1920w"
                              src="/images/image_11.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Edon Mustafa
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Chief Technology Officer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Erisa Jakupi-Voca"
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
                              srcSet="/images/image_66.png 375w, /images/image_66.png 375w, /images/image_97.png 768w, /images/image_97.png 768w, /images/image_111.png 1024w, /images/image_111.png 1024w, /images/image_105.png 1200w, /images/image_105.png 1200w, /images/image_73.png 1400w, /images/image_73.png 1400w, /images/image_140.png 1600w, /images/image_140.png 1600w, /images/image_7.png 1920w, /images/image_7.png 1920w"
                              src="/images/image_7.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Erisa Jakupi-Voca
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Director of Growth
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Adea Fejza"
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
                              srcSet="/images/image_67.png 375w, /images/image_67.png 375w, /images/image_74.png 768w, /images/image_74.png 768w, /images/image_94.png 1024w, /images/image_94.png 1024w, /images/image_76.png 1200w, /images/image_76.png 1200w, /images/image_153.png 1400w, /images/image_153.png 1400w, /images/image_81.png 1600w, /images/image_81.png 1600w, /images/image_2.png 1920w, /images/image_2.png 1920w"
                              src="/images/image_2.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Adea Fejza
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Assistant Coordinator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Agnesa Eshrefi"
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
                              srcSet="/images/image_82.png 375w, /images/image_82.png 375w, /images/image_84.png 768w, /images/image_84.png 768w, /images/image_128.png 1024w, /images/image_128.png 1024w, /images/image_101.png 1200w, /images/image_101.png 1200w, /images/image_79.png 1400w, /images/image_79.png 1400w, /images/image_139.png 1600w, /images/image_139.png 1600w, /images/image_10.png 1920w, /images/image_10.png 1920w"
                              src="/images/image_10.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Agnesa Eshrefi
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Accounting Assistant
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Albina Ibrahimi"
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
                              srcSet="/images/image_55.png 375w, /images/image_55.png 375w, /images/image_90.png 768w, /images/image_90.png 768w, /images/image_142.png 1024w, /images/image_142.png 1024w, /images/image_98.png 1200w, /images/image_98.png 1200w, /images/image_129.png 1400w, /images/image_129.png 1400w, /images/image_120.png 1600w, /images/image_120.png 1600w, /images/image_16.png 1920w, /images/image_16.png 1920w"
                              src="/images/image_16.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Albina Ibrahimi
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Executive Assistant
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Albina Maliqi"
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
                              srcSet="/images/image_61.png 375w, /images/image_61.png 375w, /images/image_78.png 768w, /images/image_78.png 768w, /images/image_83.png 1024w, /images/image_83.png 1024w, /images/image_77.png 1200w, /images/image_77.png 1200w, /images/image_87.png 1400w, /images/image_87.png 1400w, /images/image_123.png 1600w, /images/image_123.png 1600w, /images/image_15.png 1920w, /images/image_15.png 1920w"
                              src="/images/image_15.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Albina Maliqi
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Agent Support
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Albinot Blakcorri"
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
                              srcSet="/images/image_60.png 375w, /images/image_60.png 375w, /images/image_138.png 768w, /images/image_138.png 768w, /images/image_95.png 1024w, /images/image_95.png 1024w, /images/image_106.png 1200w, /images/image_106.png 1200w, /images/image_108.png 1400w, /images/image_108.png 1400w, /images/image_132.png 1600w, /images/image_132.png 1600w, /images/image_4.png 1920w, /images/image_4.png 1920w"
                              src="/images/image_4.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Albinot Blakcorri
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Executive Assistant
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Dardan Sokoli"
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
                              srcSet="/images/image_72.png 375w, /images/image_72.png 375w, /images/image_151.png 768w, /images/image_151.png 768w, /images/image_104.png 1024w, /images/image_104.png 1024w, /images/image_149.png 1200w, /images/image_149.png 1200w, /images/image_85.png 1400w, /images/image_85.png 1400w, /images/image_148.png 1600w, /images/image_148.png 1600w, /images/image_12.png 1920w, /images/image_12.png 1920w"
                              src="/images/image_12.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Dardan Sokoli
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Agent Support
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Diellza Salicana"
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
                              srcSet="/images/image_64.png 375w, /images/image_64.png 375w, /images/image_110.png 768w, /images/image_110.png 768w, /images/image_92.png 1024w, /images/image_92.png 1024w, /images/image_121.png 1200w, /images/image_121.png 1200w, /images/image_136.png 1400w, /images/image_136.png 1400w, /images/image_126.png 1600w, /images/image_126.png 1600w, /images/image_20.png 1920w, /images/image_20.png 1920w"
                              src="/images/image_20.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Diellza Salicana
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Accounting Assistant
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Emona Shehu"
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
                              srcSet="/images/image_63.png 375w, /images/image_63.png 375w, /images/image_109.png 768w, /images/image_109.png 768w, /images/image_124.png 1024w, /images/image_124.png 1024w, /images/image_143.png 1200w, /images/image_143.png 1200w, /images/image_115.png 1400w, /images/image_115.png 1400w, /images/image_114.png 1600w, /images/image_114.png 1600w, /images/image_3.png 1920w, /images/image_3.png 1920w"
                              src="/images/image_3.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Emona Shehu
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Senior Executive Assistant to the COO
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Erëza Begu"
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
                              srcSet="/images/image_89.png 375w, /images/image_89.png 375w, /images/image_137.png 768w, /images/image_137.png 768w, /images/image_144.png 1024w, /images/image_144.png 1024w, /images/image_145.png 1200w, /images/image_145.png 1200w, /images/image_134.png 1400w, /images/image_134.png 1400w, /images/image_100.png 1600w, /images/image_100.png 1600w, /images/image_6.png 1920w, /images/image_6.png 1920w"
                              src="/images/image_6.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Erëza Begu
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Frontend Engineer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Florent Kuçi"
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
                              srcSet="/images/image_86.png 375w, /images/image_86.png 375w, /images/image_147.png 768w, /images/image_147.png 768w, /images/image_116.png 1024w, /images/image_116.png 1024w, /images/image_150.png 1200w, /images/image_150.png 1200w, /images/image_107.png 1400w, /images/image_107.png 1400w, /images/image_99.png 1600w, /images/image_99.png 1600w, /images/image_21.png 1920w, /images/image_21.png 1920w"
                              src="/images/image_21.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Florent Kuçi
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Senior Executive Assistant to the COO
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Genita Rexhepi"
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
                              srcSet="/images/image_69.png 375w, /images/image_69.png 375w, /images/image_113.png 768w, /images/image_113.png 768w, /images/image_96.png 1024w, /images/image_96.png 1024w, /images/image_125.png 1200w, /images/image_125.png 1200w, /images/image_103.png 1400w, /images/image_103.png 1400w, /images/image_91.png 1600w, /images/image_91.png 1600w, /images/image_8.png 1920w, /images/image_8.png 1920w"
                              src="/images/image_8.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Genita Rexhepi
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Property Data Management & Project Manager
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Gresa Leci"
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
                              srcSet="/images/image_88.png 375w, /images/image_88.png 375w, /images/image_146.png 768w, /images/image_146.png 768w, /images/image_118.png 1024w, /images/image_118.png 1024w, /images/image_119.png 1200w, /images/image_119.png 1200w, /images/image_127.png 1400w, /images/image_127.png 1400w, /images/image_131.png 1600w, /images/image_131.png 1600w, /images/image_17.png 1920w, /images/image_17.png 1920w"
                              src="/images/image_17.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Gresa Leci
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Executive Assistant at The Empire Team
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide progress-slider_slide__DCVGv core-team_slide__3X2ID">
                      <div >
                        <div>
                          <div className="core-team_list-item-image__6rSj1">
                            <img
                              alt="Pellumb Hajdari"
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
                              srcSet="/images/image_71.png 375w, /images/image_71.png 375w, /images/image_152.png 768w, /images/image_152.png 768w, /images/image_135.png 1024w, /images/image_135.png 1024w, /images/image_130.png 1200w, /images/image_130.png 1200w, /images/image_112.png 1400w, /images/image_112.png 1400w, /images/image_133.png 1600w, /images/image_133.png 1600w, /images/image_9.png 1920w, /images/image_9.png 1920w"
                              src="/images/image_9.png"
                            />
                          </div>
                          <div className="core-team_list-item-name__Mdfh1">
                            Pellumb Hajdari
                          </div>
                          <div className="core-team_list-item-title__8AGHe">
                            Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-scrollbar"></div>
                </div>
                <div className="core-team_slider-controls-wrapper__gUgRj slider-controls_controls__x_E7P">
                  <div className="slider-counter_wrapper__1Cp5s">
                    <div className="slider-counter_value-container___sVAa">
                      <div className="slider-counter_placeholder__d2mbp">
                        00
                      </div>
                      <div className="slider-counter_value__lz2PU">01</div>
                    </div>
                    <div className="slider-counter_total__TU5Lh">24</div>
                  </div>
                  <div className="slider-navigation_wrapper__anFWO">
                    <div className="slider-navigation_left__fRvU3">
                      <button
                        className="button_icon-button__pp9M4 button_color-primary__JJ7Hh"
                        disabled=""
                      >
                        <div className="button_content__6Zh3n">
                          <div className="button_content-icon__uRCIq">
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button className="button_icon-button__pp9M4 button_color-primary__JJ7Hh">
                        <div className="button_content__6Zh3n">
                          <div className="button_content-icon__uRCIq">
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-page_join__45Yjv">
            <div className="container_container__v5gtR">
              <div className="about-page_join-img__W6WuA">
                <video
                  src="/media/find-about-2.mp4"
                  loop={true}
                  autoPlay=""
                  muted={true}
                  playsInline=""
                ></video>
              </div>
              <div className="about-page_join-text__wWcbf">
                Our team is as diverse as our clients and as driven as our
                mission. From experienced agents and support staff to
                forward-thinking leaders,{" "}
                <span className="em">
                  everyone at FIND is united in creating meaningful real estate
                  experiences.
                </span>
              </div>
              <div className="about-page_join-controls__Go1uN">
                <Link
                  className="button_button-round__TFjlU button_color-primary__JJ7Hh"
                  href="/certified-agents"
                >
                  <div className="button_content__6Zh3n">
                    <div className="button_button-round-text__IEwW5">
                      <span data-text="Learn More About Our Agents">
                        Learn More About Our Agents
                      </span>
                    </div>
                    <span className="button_icon-after__vljdM">
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
                    </span>
                  </div>
                </Link>
                <Link
                  className="button_button-round__TFjlU button_color-secondary__FZDOG"
                  href="/join"
                >
                  <div className="button_content__6Zh3n">
                    <div className="button_button-round-text__IEwW5">
                      <span data-text="Join Our Team">Join Our Team</span>
                    </div>
                    <span className="button_icon-after__vljdM">
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
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className="about-page_core-values__hV28T">
            <div>
              <div className="core-values_core-values-title__CIJMF">
                <h2>
                  <span className="em">Our</span> Core Values
                </h2>
              </div>
              <div className="core-values_core-values-description__JAxDa">
                FIND-certified agents embody the core values that define our
                company:
              </div>
              <div className="core-values_core-values-slides__IFlhH">
                <div className="core-values-slides_wrapper__AQMSC">
                  <div className="core-values-slides_slide__a7k_5">
                    <div className="core-values-slides_img-wrapper__gWg1J">
                      <img
                        alt="Positive Culture"
                        loading="lazy"
                        width="2120"
                        height="1414"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="/images/image_5.jpg 1x"
                        src="/images/image_5.jpg"
                      />
                    </div>
                    <div className="core-values-slides_content__nPYPx">
                      <div className="core-values-slides_title__nLzex">
                        Positive Culture
                      </div>
                      <div style={{ width: "100%", overflow: "hidden" }}>
                        <div className="core-values-slides_description__QXUOE">
                          Creating a fun, supportive, and enjoyable environment.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="core-values-slides_slide__a7k_5">
                    <div className="core-values-slides_img-wrapper__gWg1J">
                      <img
                        alt="Honesty and Integrity"
                        loading="lazy"
                        width="2119"
                        height="1414"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="/images/image_8.jpg 1x"
                        src="/images/image_8.jpg"
                      />
                    </div>
                    <div className="core-values-slides_content__nPYPx">
                      <div className="core-values-slides_title__nLzex">
                        Honesty and Integrity
                      </div>
                      <div style={{ width: "100%", overflow: "hidden" }}>
                        <div className="core-values-slides_description__QXUOE">
                          Doing the right thing, even when no one is watching.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="core-values-slides_slide__a7k_5">
                    <div className="core-values-slides_img-wrapper__gWg1J">
                      <img
                        alt="Respect and Empathy"
                        loading="lazy"
                        width="2120"
                        height="1414"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="/images/image_4.jpg 1x"
                        src="/images/image_4.jpg"
                      />
                    </div>
                    <div className="core-values-slides_content__nPYPx">
                      <div className="core-values-slides_title__nLzex">
                        Respect and Empathy
                      </div>
                      <div style={{ width: "100%", overflow: "hidden" }}>
                        <div className="core-values-slides_description__QXUOE">
                          Treating everyone with kindness, understanding, and
                          genuine care.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="core-values-slides_slide__a7k_5">
                    <div className="core-values-slides_img-wrapper__gWg1J">
                      <img
                        alt="Embracing Change"
                        loading="lazy"
                        width="2120"
                        height="1414"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="/images/image_6.jpg 1x"
                        src="/images/image_6.jpg"
                      />
                    </div>
                    <div className="core-values-slides_content__nPYPx">
                      <div className="core-values-slides_title__nLzex">
                        Embracing Change
                      </div>
                      <div style={{ width: "100%", overflow: "hidden" }}>
                        <div className="core-values-slides_description__QXUOE">
                          Staying flexible, forward-thinking, and open to new
                          possibilities.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="core-values-slides_slide__a7k_5">
                    <div className="core-values-slides_img-wrapper__gWg1J">
                      <img
                        alt="Exceptional Service"
                        loading="lazy"
                        width="2120"
                        height="1414"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="/images/image_7.jpg 1x"
                        src="/images/image_7.jpg"
                      />
                    </div>
                    <div className="core-values-slides_content__nPYPx">
                      <div className="core-values-slides_title__nLzex">
                        Exceptional Service
                      </div>
                      <div style={{ width: "100%", overflow: "hidden" }}>
                        <div className="core-values-slides_description__QXUOE">
                          Going above and beyond to deliver value, consistency,
                          and care in every interaction.
                        </div>
                      </div>
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
