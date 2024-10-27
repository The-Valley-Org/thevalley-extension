import DetailsCard from "@/components/cardItems/details-card";
import SimpleCard from "@/components/cardItems/simple-card";
import VideoCard from "@/components/cardItems/video-card";
import Hero from "@/components/hero";
import Main from "@/components/main";
import ProfileTopSection from "@/components/profile/top-section";
import Section from "@/components/section";
import Tabs from "@/components/tabs";
import Text from "@/components/text";
import { IoBagHandleSharp } from "react-icons/io5";

export default function ProfilePage() {
  return (
    <Main>
      <Hero />
      <Tabs />

      <div className="mt-3.5 bg-white py-4 px-5">
        <ProfileTopSection title="Thomas Alfa">
          <DetailsCard
            imgUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            P_one="thomasalfa@email.com"
            P_two="Atlanta, GA, USA"
            P_three="11/21/1991"
            P_four="Male"
          />
        </ProfileTopSection>

        <Section title="Education">
          <SimpleCard
            title="Emory University"
            P_one="MBA, Business"
            P_two="2022-2024"
            imgUrl="https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <SimpleCard
            title="Emory University"
            P_one="MBA, Business"
            P_two="2022-2024"
            imgUrl="https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </Section>

        <Section title="Employment">
          <SimpleCard
            title="Project Manager"
            P_one="Facebook"
            P_two="2021"
            icon={<IoBagHandleSharp />}
          />

          <SimpleCard
            title="Project Manager"
            P_one="Facebook"
            P_two="2021"
            icon={<IoBagHandleSharp />}
          />
        </Section>

        <Text
          title="Implessive accomplishment"
          text="I’ve had another vc backed company
i launched years ago"
        />

        <Section title="1 minute video">
          <VideoCard
            link="https://youtu.be/dmaCbUuy_MA?si=IWqHYdm9N9e0xQnl"
            thumbnail="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            link_text="www.youtube.com/watch/12345"
            title="My video"
          />
        </Section>

        <Section title="Links">
          <SimpleCard
            title="Linked In"
            link="#"
            link_text="linkedin.com/thomaslafa"
            imgUrl="data:image/png;base64,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"
          />

          <SimpleCard
            title="Linked In"
            link="#"
            link_text="linkedin.com/thomaslafa"
            imgUrl="data:image/png;base64,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"
          />
        </Section>
        <Text
          title="How did you hear about the valley"
          text="From website and conference i joined"
        />
      </div>
    </Main>
  );
}
