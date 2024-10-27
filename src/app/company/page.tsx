import DetailsCard from "@/components/cardItems/details-card";
import VideoCard from "@/components/cardItems/video-card";
import Hero from "@/components/hero";
import Main from "@/components/main";
import ProfileTopSection from "@/components/profile/top-section";
import Section from "@/components/section";
import Tabs from "@/components/tabs";
import Text from "@/components/text";

export default function CompanyPage() {
  return (
    <Main>
      <Hero />
      <Tabs />

      <div className="mt-3.5 bg-white py-4 px-5">
        <ProfileTopSection title="Company X">
          <DetailsCard
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoFqbndqL90MJnxuriHIj8S-ZzuhwiG4sYg&s"
            P_one="xcompany@email.com"
            P_two="www.companyx.com"
            P_three="Atlanta, GA, USA"
            P_four="2013"
          />
        </ProfileTopSection>

        <Text
          title="Description"
          text="We are company X, we are sharing about business and help people to solve their problems"
        />

        <Section title="1 minute video">
          <VideoCard
            link="https://youtu.be/dmaCbUuy_MA?si=IWqHYdm9N9e0xQnl"
            thumbnail="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            link_text="www.youtube.com/watch/12345"
            title="Company Video"
          />
        </Section>

        <Text title="How much team you have" text="10-20" />
        <Text title="Company Stage" text="Seed Stage" />
      </div>
    </Main>
  );
}
