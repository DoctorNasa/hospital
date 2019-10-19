import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import BannerBottom1 from "../BannerBottom1"

const RelationCenter = () => {
  return (
    <div>
      <div style={{ position: "relative", zIndex: -1 }}>
        <Grid container justify="center">
          <Grid item md={8} sm={11}>
            <div>
              <BlueTitleIcon
                text="INTERNATIONAL RELATION CENTER"
                icon="/images/icons/international/2.png"
              />
            </div>
          </Grid>
        </Grid>
        <div style={{ width: "65%" }}>
          <Grid container justify="flex-end">
            <Grid item md={9} sm={11} xs={12}>
              <div style={{ display: "flex", paddingRight: 30 }}>
                <div style={{ flex: 1, textIndent: 25 }}>
                  <p>
                    <b>
                      Our Phyathai Service Ambassador of International Relations
                      Center (IRC)
                    </b>{" "}
                    are proficient in a large number of languages, such as,
                    English, Arabic, Chinese, German,Cambodian, French, Spanish,
                    Burmease, Bangladeshi, and they are ready and most willing
                    to assist you in all aspects oflanguage communication and
                    cultural requirement.
                  </p>
                  <p>
                    It is never an easy decision to travel overseas for medical
                    treatment – there are many factors involved that need
                    thorough planning. It is also common to worry about the
                    logistics when you finally arrive at the hospital. How will
                    you communicate with staff in a foreign country? How will
                    you know where to go? What if it takes longer than expected
                    and my visa runs out – will I be put on a plane back home
                    without receiving all the medical attention I need?
                  </p>
                  <p>
                    Fortunately these are complications you will never have to
                    worry about at Phyathai 2 International. We have many years
                    experience of working with international patients and have
                    every possible issue covered. Our service ambassadors at the
                    dedicated International Relations Center (IRC) are
                    proficient in a range of languages including; English,
                    Arabic, Chinese, German, Cambodian, French, Spanish,Burmese,
                    Bangladeshi - and are ready to assist in any aspect of
                    language communication or cultural understanding throughout
                    your stay.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            width: "35%",
            height: "100%",

            maxWidth: 600,
            right: 0,
            top: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            margin: "60px 0px 60px 0px"
          }}
        >
          <img
            style={{ width: "100%" }}
            src="/images/international/AST_img4.jpg"
          />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          marginTop: 150,
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "right",
          height: "100%",
          marginBottom: 120
        }}
      >
        <div
          style={{
            width: "40%",
            left: 0,
            top: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            height: "100%",
            maxWidth: 600
          }}
        >
          <img
            style={{
              width: "100%"
            }}
            src="/images/international/AST_img3.jpg"
          />
        </div>
        <div
          style={{
            width: "60%"
          }}
        >
          <Grid container>
            <Grid item md={8} sm={11} xs={12}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    flex: 1,
                    textIndent: 25,
                    textAlign: "left",
                    paddingLeft: 30
                  }}
                >
                  <p>
                    Our service to ensure you have a seamless and trouble free
                    medical visit to Thailand begins when you are still at home.
                    We are on hand to answer any questions you have before you
                    have even left. We can handle embassy procedures and act as
                    a liaison with the Thai embassy to ensure all your paperwork
                    is in order. If a visa extension is required once you are in
                    Thailand – we can also take care of this.
                  </p>
                  <p>
                    On your arrival at Suvarnabhumi International Airport you
                    will be given complimentary Fast Track Immigration, so there
                    will be no standing around in queues for long periods. Once
                    you are through immigration a complimentary chauffeur
                    service is ready and waiting to escort you to your hotel or
                    hospital.
                  </p>
                  <p>
                    Once at the hospital our personal concierge service will
                    tend to your every need, accompanying patients to their
                    appointments for guaranteed peace of mind. We like to make
                    sure everyone has a pleasurable and stress-free stay when
                    visiting Phyathai 2International Hospital – so if you have
                    any questions, please don’t hesitate to ask a member of our
                    staff who will be glad to help.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <BannerBottom1 image="/images/international/02.jpg" />
    </div>
  )
}

export default RelationCenter
