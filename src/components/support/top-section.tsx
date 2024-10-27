import Button from "../button";
import Text from "../text";

export default function SupportTopSection() {
  return (
    <section>
      <Text
        title="Help & Support"
        text="Write your feedback on here and let me know what can we help for you "
        titleClassName="text-lg"
        textClassName="text-sm font-normal text-[#374355]"
        containerClassName="border-none"
      />

      <Button
        text="FAQ"
        className="bg-white w-full border border-[#D3D9E4] text-base font-semibold text-lightGreen"
      />
    </section>
  );
}
