import Header from "../header/Header";
import Catalog from "../catalog/Catalog";
import Info from "../info/Info";

export default function CatalogBtn() {
  return (
<div className="sub_page">
            <div className="hero_area">
                <Header />
            </div>
            <Catalog />
            <Info />
        </div>
  );
}