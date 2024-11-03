import Categories from "../Categories/Categories";
import Reuse from "../Reuse/Reuse";

const Home = () => {
  return (
    <div>
      <div className="banner-img h-[500px] w-11/12 mx-auto mt-4 mb-8"></div>
      <div>
        <Reuse
          title="Browse Coffees by Category"
          subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
        ></Reuse>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
