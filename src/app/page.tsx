import Main from "@/components/main";
import Hero from "@/components/hero";
import Tabs from "@/components/tabs";
import SearchBar from "@/components/searchBar";
import PaginatedList from "@/components/PaginatedList";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <Main>
      <div className="flex flex-col justify-start">
        <Hero/>
        <Tabs/>
        <div className="flex flex-col p-4 gap-4 bg-background">
          <SearchBar />

          <PaginatedList
          title="Suggested Venture Capitals"
          btnText="More Companies"
          >
            {
              Array.from({length: 6}).map(i => {
                return(
                  <ListItem
                  title="Solocompany"
                  iconSrc="/company-logo.svg"
                  />
                )
              })
            }
          </PaginatedList>

          <PaginatedList
          title="Accelerator Programs"
          btnText="More Accelerators"
          >
            {
              Array.from({length: 2}).map(i => {
                return(
                  <ListItem
                  title="Solocompany"
                  iconSrc="/company-logo.svg"
                  />
                )
              })
            }
          </PaginatedList>

          <PaginatedList
          title="Pitch Competitions"
          btnText="More Competitions"
          >
            {
              Array.from({length: 2}).map(i => {
                return(
                  <ListItem
                  title="Solocompany"
                  iconSrc="/company-logo.svg"
                  />
                )
              })
            }
          </PaginatedList>

        </div>
      </div>
    </Main>
  );
}
