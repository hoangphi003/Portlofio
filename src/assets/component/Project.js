import { img1, img2, img3, img4 } from "../img";

function Project() {
  return (
    <section
      className="mt-20 bg-slate-800 px-[4.5rem] text-yellow-50 font-RadioCanadaBig leading-7"
      id="projects"
    >
      <h1 className="text-3xl text-white font-bold bg-slate-800 py-8">
        Projects
      </h1>
      <h2 className="bg-slate-800 text-2xl ">Website selling watches online</h2>
      <span className="bg-slate-800 my-3 text-slate-gray lg:block">
        01/2024 - 5/2024
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block lg:block">
        Our customer: Vortex Company.
      </span>
      <span className="bg-slate-800 text-slate-gray py-4 max-sm:block lg:block">
        Some descriptions about our project:
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block lg:block">
        - Vortex where you can find high quality and fashionable watches at
        affordable prices may pay. We are committed to bringing you the best
        shopping experience with many famous watch brands, professional customer
        service and handling reputable warranty. Products: At Vortex, you can
        explore a rich, versatile collection of watches every need and style:
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block lg:block">
        + Men's watches: Sports watches, diving watches, stopwatches,
        wristwatches clock,...
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block">
        + Women's watches: Fashion watches, leather strap watches,...
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block">
        + Couple watches: Couple watches, couple watches,...
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block">
        + Brand watches: Citizen, Casio, Orient, Seiko, Tissot, Rolex, Hublot
        watches
      </span>
      <span className="bg-slate-800 text-slate-gray max-sm:block lg:block">
        - Quality: Vortex always puts quality criteria first. All copper
        products Our watches are all imported genuine from reputable brands
        around the world, ensuring durability, accuracy and safety for users.
      </span>
      <san className="bg-slate-800 text-slate-gray max-sm:block lg:block">
        - Price: We understand that price is an important factor affecting
        purchasing decisions Your merchandise. Therefore, Vortex always strives
        to bring customers products High quality watches with the most
        reasonable prices on the market. Come to Vortex to choose the most
        suitable watch for yourself !
      </san>
      <span className="bg-slate-800 text-slate-gray max-sm:block lg:block">
        - Website synthesizing domestic and international watches, complete with
        designs, colors, and quality materials, brands and needs of each
        customer, easy online payment integration Spend more on shopping.
      </span>
      <div className="group-imgs bg-slate-800 lg:grid grid-cols-2">
        <img src={img2} alt="" className="mt-3 bg-slate-800 " />
        <img
          src={img1}
          alt=""
          className="mt-3 bg-slate-800 h-[600px]"
          width={480}
        />
        <img
          src={img3}
          alt=""
          className="mt-3 bg-slate-800 h-[715px] "
          width={480}
        />
        <img src={img4} alt="" className="mt-3 bg-slate-800" width={480} />
      </div>
      <div className="bg-slate-800 leading-9">
        <span className="text-2xl bg-slate-800 font-bold capitalize block py-6">
          technology we used in this project
        </span>

        <span className="bg-slate-800 text-slate-gray capitalize block">
          + Frontend: AngularJs, Javascript, Jquery, Bootstrap, Thymeleaf.
        </span>
        <span className="bg-slate-800 text-slate-gray capitalize block">
          + Backend: Java (Spring boot).
        </span>
        <span className="bg-slate-800 text-slate-gray capitalize block">
          + Database: MyServer.
        </span>
        <span className="bg-slate-800 text-slate-gray capitalize">
          <a
            href="https://github.com/hoangphi003/Vortexv3.git"
            className="bg-slate-800 hover:text-yellow-50"
          >
            + Github:https://github.com/hoangphi003/Vortexv3.git
          </a>
        </span>
      </div>
    </section>
  );
}

export default Project;
