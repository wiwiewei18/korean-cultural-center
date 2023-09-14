import Slider from "./Slider";
import Kyorugi from "../assets/img/contact-us.png";
import WA from "../assets/img/contact-us-wa.png";
import IG from "../assets/img/contact-us-ig.png";
import Decoration from "../assets/img/footer-decoration.png";

const AboutUs = () => {
  return (
    <div className="py-16 w-[90%] mx-auto text-white">
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <div className="border-8 border-white rounded flex">
          <div className="w-[40%] bg-gradient-to-r from-85% from-soft-blue to-85% to-white flex flex-col items-start justify-between">
            <div className="p-8 pt-14">
              <img
                src={Kyorugi}
                alt="Taekwondo Sparring"
                className="w-full object-cover"
              />
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-2">
                  <img src={WA} alt="Taekwondo WhatsApp" />
                  <a
                    href="#"
                    className="relative text-secondary font-bold text-lg overflow-hidden"
                  >
                    <span className="relative z-10">+62 813 6388 4040</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img src={IG} alt="Taekwondo Instagram" />
                  <a
                    href="#"
                    className="relative text-secondary font-bold text-lg overflow-hidden"
                  >
                    <span className="relative z-10">
                      @batam_korean_taekwondo
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <img src={Decoration} alt="Decoration" />
          </div>
          <div className="w-[60%] bg-white py-8 pr-16 pl-2">
            <h2 className="text-3xl text-dark-blue font-bold mb-4">
              Start Your Taekwondo Adventure!
            </h2>
            <p className="text-black text-lg">
              Enrich your child's growth and development through our
              all-inclusive Taekwondo program, priced at just
              <b>IDR 800,000 per month</b>
              , covering elementary, secondary, and kindergarten classes.
              <br />
              <br />
              <b className="text-warning">Secure their spot</b> now for a
              brighter future!
            </p>

            <form action="#">
              <div>
                <h4 className="text-black font-bold text-sm mt-6 mb-3">
                  Guardian’s Information
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <input required placeholder=" " />
                      <span>Name</span>
                    </label>
                  </div>
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <input required placeholder=" " />
                      <span>Relation with Student</span>
                    </label>
                  </div>
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <input required placeholder=" " />
                      <span>Address</span>
                    </label>
                  </div>
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <input required placeholder=" " />
                      <span>Phone / WA</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-black font-bold text-sm mt-5 mb-3">
                  Child Information
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <input required placeholder=" " />
                      <span>Name</span>
                    </label>
                  </div>
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <input required placeholder=" " />
                      <span>Age</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-black font-bold text-sm mt-5 mb-3">
                  Additional Message
                </h4>
                <div className="gap-x-6 gap-y-2">
                  <div>
                    <label class="pure-material-textfield-outlined w-full">
                      <textarea
                        required
                        placeholder=" "
                        className="resize-none"
                        rows={8}
                      />
                      <span>Message (Optional)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button className="bg-secondary hover:bg-dark-blue transition p-2 px-8 rounded-[4px]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
