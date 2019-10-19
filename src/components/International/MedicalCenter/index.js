import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import BannerBottom1 from "../BannerBottom1"

const MedicalCenter = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="INTERNATIONAL MEDICAL CENTER"
            icon="/images/icons/international/3.png"
          />
          <div>
            <p>
              <b>Internatioal Medical Center or IMC</b> is set up to facilitate
              all aspects of hospital & medical care, ensuring the best quality,
              responsible and safe services We give utmost attention to the
              provision of treatment and services that are of the highest
              standards, always with the patients' satisfaction in mind.
            </p>
            <p>
              <b>Our doctors</b> who provide treatment for international
              patients are specially trained in various specialtiesand
              sub-specialties, being highly experienced and widely recognized in
              their fields of interest. Weemphasize upon having clear
              communications between patients and doctors, developing thorough
              understanding of all available options and having informed
              consents.
            </p>
            <p>
              <b>Under the umbrella of IMC</b>, there are two highly efficient
              service providers of excellence, the International Relations
              Center (IRC) and the International Correspondence Center (ICC).
            </p>
            <p>
              <b>
                Our Phyathai Service Ambassador of International Relations
                Center (IRC)
              </b>{" "}
              are proficient in a large number of languages, such as, English,
              Arabic, Chinese, German, Cambodian, French, Spanish, Burmease,
              Bangladeshi, and they are ready and most willing to assist you in
              all aspects of language communication and cultural requirement.
            </p>
            <p>
              As for the other wing of IMC,{" "}
              <b>the International Correspondence Center (ICC)</b>, this
              functions as a central respository for all information concerning
              Phyathai Group of Hospitals. ICC can assist you with any kind of
              clinical enquiries. Your questions will be brought to medical
              specialists' attention for an initial assessment and advice
              regarding the clinical management guideline will be forwarded to
              you within 24 hours after the initial contact. ICC can also
              provide you with information on all aspects of hospital care and
              price estimation.
            </p>
            <p>
              Clinical appointments can also be arranged via the ICC. You can
              mail or call us for further details, including arrangement for
              airport pick up, premium Fast Track Immigration Service at
              Suvarnabhumi Airport, as well as hotel reservation.
            </p>
            <p>
              Having registered with ICC, the patient will be personally
              assisted and guided through every step of the way by{" "}
              <b>Phyathai Service Ambassador</b>. Even on the first visit, your
              medical file will be ready and waiting at the assigned clinic,
              thereby short-cutting the process and minimizing your waiting
              time.
            </p>
            <p>
              We look forward to serve you. Please feel free to contact us at
            </p>
          </div>
        </Grid>
      </Grid>
      <BannerBottom1
        image="/images/international/03.jpg"
        phone="+66 2617 2444 Ext: 2020, 2057, 5221"
      />
    </div>
  )
}

export default MedicalCenter
