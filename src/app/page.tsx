import Main from "@/components/main";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Main>
      <div className="flex flex-col justify-start">
        <Hero/>
      </div>
    </Main>
  );
}
