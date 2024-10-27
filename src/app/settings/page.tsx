import Main from "@/components/main";
import SettingsForm from "@/components/settings";

import Tabs from "@/components/tabs";
import Text from "@/components/text";

export default function SettingsPage() {
  return (
    <Main>
      <Tabs />

      <div className="px-5 ">
        <Text
          title="Settings"
          text="This is settings page to set up your email or your payment plan"
          titleClassName="text-lg"
          textClassName="text-sm font-normal text-[#374355]"
          containerClassName="border-none"
        />

        <SettingsForm />
      </div>
    </Main>
  );
}
