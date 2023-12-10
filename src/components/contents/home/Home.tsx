import "../../../styles/contents/home/Home.css";
import SearchBar from "../../shared/SearchBar";
import Hero from "./views/Hero";

const Home = () => {
  const localSearch = (searched: string) => {
    console.log(searched);
  };

  return (
    <div className="Home p-0">
      <Hero />

      <div className="Sub-Links px-5">
        <div>
          <a href="" className="me-4">
            Subjects
          </a>
          <a href="" className="me-4">
            Grades
          </a>
          <a href="" className="me-4">
            Library
          </a>
          <a href="" className="me-4">
            Members
          </a>
          <a href="" className="me-4">
            Tasks
          </a>
          <a href="">Sports</a>
        </div>

        <SearchBar SearchedQuery={localSearch} />
      </div>
    </div>
  );
};

export default Home;
