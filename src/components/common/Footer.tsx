const Footer = () => {
  return (
    <div className=" w-full py-10 bg-[#000] flex items-center justify-center flex-col">
      <div className="w-[95%] h-[80%] grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
        {/* logo */}
        <div className=" font-black text-[3rem] m-0 text-slate-50 max-md:text-[2rem]">
          Louis Etor
        </div>
        <div className="">
          <ul className="text-white text-sm">
            <p className="font-bold text-xl">Contact us</p>
            <br />
            <li>Louis Estate, Lekki, Lagos</li>

            <li>Toluca Lake,</li>

            <li>
              <a href="mailto:louisetor@gmail.com"> louisetor@gmail.com</a>
            </li>
            <li>
              <a href="tel:+2349079678532">(+234)907-9768-532</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <p className="font-bold text-xl">Quick Links</p>
            <br />
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white">
            <p className="font-bold text-xl">Stay Connected</p>
            <br />
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[95%] m-auto text-white py-8">
        <p>© {new Date().getUTCFullYear()} Louis Etor</p>
      </div>
    </div>
  );
};

export default Footer;
