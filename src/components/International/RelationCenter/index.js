import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"

const RelationCenter = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="INTERNATIONAL RELATION CENTER"
            icon="/images/icons/international/2.png"
          />
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textIndent: 25 }}>
              <p>
                <b>
                  Our Phyathai Service Ambassador of International Relations
                  Center (IRC)
                </b>{" "}
                are proficient in a large number of languages, such as, English,
                Arabic, Chinese, German,Cambodian, French, Spanish, Burmease,
                Bangladeshi, and they are ready and most willing to assist you
                in all aspects oflanguage communication and cultural
                requirement.
              </p>
              <p>
                It is never an easy decision to travel overseas for medical
                treatment – there are many factors involved that need thorough
                planning. It is also common to worry about the logistics when
                you finally arrive at the hospital. How will you communicate
                with staff in a foreign country? How will you know where to go?
                What if it takes longer than expected and my visa runs out –
                will I be put on a plane back home without receiving all the
                medical attention I need?
              </p>
              <p>
                Fortunately these are complications you will never have to worry
                about at Phyathai 2 International. We have many years experience
                of working with international patients and have every possible
                issue covered. Our service ambassadors at the dedicated
                International Relations Center (IRC) are proficient in a range
                of languages including; English, Arabic, Chinese, German,
                Cambodian, French, Spanish,Burmese, Bangladeshi - and are ready
                to assist in any aspect of language communication or cultural
                understanding throughout your stay.
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <h1>PICTURE</h1>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <h1>PICTURE</h1>
            </div>
            <div
              style={{
                flex: 1,
                textIndent: 25
              }}
            >
              <p>
                Our service to ensure you have a seamless and trouble free
                medical visit to Thailand begins when you are still at home. We
                are on hand to answer any questions you have before you have
                even left. We can handle embassy procedures and act as a liaison
                with the Thai embassy to ensure all your paperwork is in order.
                If a visa extension is required once you are in Thailand – we
                can also take care of this.
              </p>
              <p>
                On your arrival at Suvarnabhumi International Airport you will
                be given complimentary Fast Track Immigration, so there will be
                no standing around in queues for long periods. Once you are
                through immigration a complimentary chauffeur service is ready
                and waiting to escort you to your hotel or hospital.
              </p>
              <p>
                Once at the hospital our personal concierge service will tend to
                your every need, accompanying patients to their appointments for
                guaranteed peace of mind. We like to make sure everyone has a
                pleasurable and stress-free stay when visiting Phyathai
                2International Hospital – so if you have any questions, please
                don’t hesitate to ask a member of our staff who will be glad to
                help.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: 'url("/images/international/02.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: 400
        }}
      >
        fff
      </div>
    </div>
  )
}

export default RelationCenter
