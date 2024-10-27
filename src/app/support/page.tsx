import Main from "@/components/main";
import SupportForm from "@/components/support/form";
import SupportTopSection from "@/components/support/top-section";
import Tabs from "@/components/tabs";
import Text from "@/components/text";

export default function SupportPage() {
  return (
    <Main>
      <Tabs />

      <div className="px-5 ">
        <SupportTopSection />


        <SupportForm/>
      </div>
    </Main>
  );
}
