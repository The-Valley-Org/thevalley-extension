import Main from "@/components/main";
import Hero from "@/components/hero";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <Main>
      <div className="flex flex-col justify-start">
        <Hero/>
        <Tabs/>
      </div>
    </Main>
  );
}
