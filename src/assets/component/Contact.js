import ContactCart from "./ContactCart";
import { info } from "../../constants/index";
import { facebook, linkedin, location, mail, phone, twitter } from "../icons";

function Contact() {
  return (
    <section
      id="contactme"
      className="bg-card-color text-yellow-50 font-RadioCanadaBig relative"
    >
      <span
        className="text-3xl font-bold bg-primary lg:absolute lg:top-[-50px] 
      max-sm:absolute max-sm:top-[-50px]  max-sm:left-[5rem]
      lg:left-[31rem] border-2 border-primary px-5 rounded-full"
      >
        Contact me
      </span>
      <div className="flex flex-wrap flex-1 justify-center items-center bg-card-color my-6 pt-3 mb-16">
        {/* {info.map((item) => ( */}
        {/* ))} */}
        <ContactCart iconURL={mail} value={"nguyenhoangphi@gmail.com"} />
        <ContactCart iconURL={phone} value={"(84) 706350313"} />
        <ContactCart
          iconURL={location}
          value={"Chau Thanh A, Hau Giang"}
          class={true}
        />
      </div>
      <div
        className="space-x-14 justify-center items-center flex bg-primary 
       lg:absolute lg:bottom-[-90px] lg:left-[30.5rem] 
        max-sm:absolute max-sm:bottom-[-90px] max-sm:left-[4rem] 
       border-2 border-primary px-5 py-4 rounded-full "
      >
        <a href="https://www.facebook.com/hoangfhi/" className="bg-transparent">
          <img
            src={facebook}
            alt=""
            width={20}
            height={20}
            className="bg-transparent"
          />
        </a>
        <a href="https://x.com/PhiNguy03" className="bg-transparent">
          <img
            src={twitter}
            alt=""
            width={20}
            height={20}
            className="bg-transparent"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ho%C3%A0ng-phi-02041924a/"
          className="bg-transparent"
        >
          <img
            src={linkedin}
            alt=""
            width={20}
            height={20}
            className="bg-transparent"
          />
        </a>
      </div>
    </section>
  );
}

export default Contact;
