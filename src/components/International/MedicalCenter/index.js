import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"

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
            <div>
              Internatioal Medical Center or IMC is set up to facilitate all
              aspects of hospital & medical care, ensuring the best quality,
              responsible and safe services We give utmost attention to the
              provision of treatment and services that are of the highest
              standards, always with the patients' satisfaction in mind.
            </div>
            <div>
              Our doctors who provide treatment for international patients are
              specially trained in various specialtiesand sub-specialties, being
              highly experienced and widely recognized in their fields of
              interest. Weemphasize upon having clear communications between
              patients and doctors, developing thorough understanding of all
              available options and having informed consents.
            </div>
            <div>
              Under the umbrella of IMC, there are two highly efficient service
              providers of excellence, the International Relations Center (IRC)
              and the International Correspondence Center (ICC).
            </div>
            <div>
              Our Phyathai Service Ambassador of International Relations Center
              (IRC) are proficient in a large number of languages, such as,
              English, Arabic, Chinese, German, Cambodian, French, Spanish,
              Burmease, Bangladeshi, and they are ready and most willing to
              assist you in all aspects of language communication and cultural
              requirement.
            </div>
            <div>
              As for the other wing of IMC, the International Correspondence
              Center (ICC), this functions as a central respository for all
              information concerning Phyathai Group of Hospitals. ICC can assist
              you with any kind of clinical enquiries. Your questions will be
              brought to medical specialists' attention for an initial
              assessment and advice regarding the clinical management guideline
              will be forwarded to you within 24 hours after the initial
              contact. ICC can also provide you with information on all aspects
              of hospital care and price estimation.
            </div>
            <div>
              Clinical appointments can also be arranged via the ICC. You can
              mail or call us for further details, including arrangement for
              airport pick up, premium Fast Track Immigration Service at
              Suvarnabhumi Airport, as well as hotel reservation.
            </div>
            <div>
              Having registered with ICC, the patient will be personally
              assisted and guided through every step of the way by Phyathai
              Service Ambassador. Even on the first visit, your medical file
              will be ready and waiting at the assigned clinic, thereby
              short-cutting the process and minimizing your waiting time.
            </div>
            <div>
              We look forward to serve you. Please feel free to contact us at
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: 'url("/images/international/03.jpg")',
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

export default MedicalCenter
