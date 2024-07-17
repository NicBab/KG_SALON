import styles from "@/style";
import Link from "next/link";
import Button from "./Button";
import Social from "./Social";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} h-[260px] m-10 p-3 flex-col rounded-xl z-[2] border border-green-50 bg bg-yellow-50 shadow opacity-90`}
    >
      
      <div className="flex-1 flex flex-col z-[1]">
        
        <h2 className={`${styles.cardHeading} mt-3`}>Walk ins welcome!</h2>
        <p className="p-5">Located at: 123 Johnston st. Lafayette, La</p>
      </div>
      
      <div className="flex-1 flex-col gap-3 sm:flex-row z-[4]">
        <Link href="/contact">
          <Button type="button" title="Contact Us" variant="btn_green" />
        </Link>
      </div>
      <Social/>
    </section>
  );
};

export default CTA;
