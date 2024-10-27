import ListItem from "@/components/ListItem";
import Main from "@/components/main";
import PaginatedList from "@/components/PaginatedList";
import Tabs from "@/components/tabs";
import Text from "@/components/text";

export default function HistoryPage() {
  return (
    <Main>
      <Tabs />

      <div className="px-5 ">
        <Text
          title="History"
          text="All history of your completed VC, Accelerator and pitch competition"
          titleClassName="text-lg"
          textClassName="text-sm font-normal text-[#374355]"
          containerClassName="border-none"
        />
        <div className="mt-6 flex flex-col gap-6">
          <PaginatedList
            title="Friday, 11 Oct 2024"
            titleClassName="text-white font-medium text-normal"
          >
            {Array.from({ length: 4 }).map((i) => {
              return (
                <ListItem title="Solocompany" iconSrc="/company-logo.svg" />
              );
            })}
          </PaginatedList>

          <PaginatedList
            title="Thurs, 10 Oct 2024"
            titleClassName="text-white font-medium text-normal"
          >
            {Array.from({ length: 4 }).map((i) => {
              return (
                <ListItem title="Solocompany" iconSrc="/company-logo.svg" />
              );
            })}
          </PaginatedList>
        </div>
      </div>
    </Main>
  );
}
