import Header from "../header/Header";
import Info from "../info/Info";
import Categories from "../categories/Categories";

export default function FurnitureBtn() {
  return (
    <div className="sub_page">
    <div className="hero_area">
        <Header />
    </div>
    <Categories />
    <Info />
</div>
  );
}