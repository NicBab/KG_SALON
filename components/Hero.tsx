import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import styles from "@/style";
import { Social } from "@/components/index ";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-30 xl:flex-row">
      <div className="retro-hair xl:hidden opacity-10" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/retro_bars.png"
          alt="kg-logo"
          width={30}
          height={30}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] opacity-80"
        /> */}
        <h1 className="bold-52 lg:bold-88">KG_SALON</h1>
        <p className={`${styles.paragraph}`}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href="/contact">
            <Button
              type="button"
              title="Contact Us"
              variant="btn_green w-full"
            />
          </Link>
          <Link href="/">
            <Button
              type="button"
              title="Book Now"
              variant="btn_white_text w-full"
            />
          </Link>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="absolute z-[0]  w-[50%] h-[60%] rounded-full purple__gradient opacity-[.1]" />
        <div className="relative z-20 w-[400px] flex flex-col gap-8 rounded-3xl bg-yellow-50 shadow px-7 py-8 opacity-80">
          <div className="flex flex-col">
            <div className="flexBetween">
              <Image
                src="/phone.png"
                alt="phone"
                width={28}
                height={28}
                className="regular-16"
              />
            </div>
            <p className="bold-20 text-white">PHONE: (337) 123-4576</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <Image
                src="/location.svg"
                alt="location"
                width={28}
                height={28}
                className="regular-16"
              />
              <p className="bold-20 text-white">ADDRESS: Lafayette, La</p>
            </div>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <Social />
              <p className="bold-20 text-white">FOLLOW US:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
