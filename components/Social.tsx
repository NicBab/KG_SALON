import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/constants";

const Social = () => {
  return (
    <div>
      <ul className="regular-14 flex gap-4 text-gray-30">
        {SOCIALS.links.map((link) => (
          <Link href="/" key={link}>
            <Image src={link} alt="logo" width={24} height={24} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Social;
