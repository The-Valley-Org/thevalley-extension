import AnswersForm from "@/components/answers/form";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Tabs from "@/components/tabs";

export default function AnswersPage() {
  return (
    <Main>
      <Hero />
      <Tabs />

      <div className="px-5">
        <AnswersForm />
      </div>
    </Main>
  );
}
