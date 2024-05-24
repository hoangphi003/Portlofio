import { avt } from "../img";
import { facebook, twitter, linkedin } from "../icons";
import Button from "./Button";

function Hero() {
  return (
    <section className="flex-1 mt-20">
      <div className="intro flex justify-evenly max-sm:block ">
        <div
          className="capitalize text-white text-2xl mr-20 max-sm:w-full max-sm:mr-0
         max-sm:text-center "
        >
          i'm&nbsp;
          <span className="text-primary text-[3rem] leading-normal">
            Hoàng phi <br />
          </span>
          a java developer, nice too meet you!!!
          <div className="max-sm:flex items-center justify-center mb-10">
            <Button label="Contact me" />
          </div>
        </div>
        <div className="avt max-sm:flex items-center justify-center mb-10">
          <img
            src={avt}
            alt="Avatar"
            width={250}
            height={250}
            className="rounded-full "
          />
        </div>
        <div className="box-line bg-primary w-[3px] h-20 flex flex-col relative max-sm:hidden">
          <div className="flex flex-col absolute space-y-9 top-24 end-[-9px]">
            <a href="https://www.facebook.com/hoangfhi/">
              {" "}
              <img
                src={facebook}
                alt=""
                width={20}
                height={20}
                className="min-w-[20px]"
              />
            </a>
            <a href="https://x.com/PhiNguy03">
              {" "}
              <img
                src={twitter}
                alt=""
                width={20}
                height={20}
                className="min-w-[20px]"
              />
            </a>
            <a href="https://www.linkedin.com/in/ho%C3%A0ng-phi-02041924a/">
              <img
                src={linkedin}
                alt=""
                width={20}
                height={20}
                className="min-w-[20px]"
              />
            </a>
          </div>
        </div>
        <div className="hidden space-x-14 justify-center items-center max-sm:flex">
          <a href="https://www.facebook.com/hoangfhi/">
            <img src={facebook} alt="" width={20} height={20} />
          </a>
          <a href="https://x.com/PhiNguy03">
            <img src={twitter} alt="" width={20} height={20} />
          </a>
          <a href="https://www.linkedin.com/in/ho%C3%A0ng-phi-02041924a/">
            <img src={linkedin} alt="" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
