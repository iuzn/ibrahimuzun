import Image from "next/image";

export default function ProfileCard() {
  const title =
    "I am Ibrahim Uzun, a developer and designer at Orb in Istanbul.";
  return (
    <div className="bg-default w-[500px] h-60 rounded-3xl flex p-2.5 ">
      <div className="flex items-center gap-2.5 h-fit">
        <Image
          src={"/i.jpg"}
          alt={"Profile Picture"}
          width={88}
          height={88}
          className="rounded-[14px]"
          quality={100}
        />
        <h1 className="text-[32px] leading-[34px] text-[#056148]">{title}</h1>
      </div>
    </div>
  );
}