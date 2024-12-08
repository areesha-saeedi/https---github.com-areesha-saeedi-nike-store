
import React from 'react';  
import Header from '../Components/Header';  
import ProductCard from '../Components/ProductCard';  
import FilterSidebar from '../Components/FilterSidebar';  
import Footer from '../Components/Footer';  
import RelatedCategories from '../Components/RelatedCategories';  


const ProductsPage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <div className="container mx-auto flex">  
        <FilterSidebar />  
        <main className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">  
          <ProductCard   
            imageUrl='/images/air-force-1-mid.jpg' 
            title="Nike Air Force 1 Mid '07"   
            price="MRP: ₹ 10,795.00"   
          />  
          <ProductCard   
            imageUrl="/images/court-vision-low.jpg"   
            title="Nike Court Vision Low Next Nature"   
            price="MRP: ₹ 14,995.00"   
          />  
          <ProductCard   
            imageUrl="/images/air-force-1-plataform.jpg"   
            title="Nike Air Force 1 PLTAF♡RM"   
            price="MRP: ₹ 8,695.00"   
          />  
          <ProductCard   
            imageUrl="/images/air-force-1-react.jpg"   
            title="Nike Air Force 1 React"   
            price="MRP: ₹ 13,295.00"   
          />  
          <ProductCard   
            imageUrl="/images/air-jordan-elevate-low.jpg"   
            title="Air Jordan 1 Elevate Low"   
            price="MRP: ₹ 11,895.00"   
          />  
          <ProductCard   
            imageUrl="/images/nike-standard-issue.jpg"   
            title="Nike Standard Issue"   
            price="MRP: ₹ 2,895.00"   
          />  
          <ProductCard   
            imageUrl="/images/dunk-low-retro-se.jpg"   
            title="Nike Dunk Low Retro SE"   
            price="MRP: ₹ 9,695.00"   
          />  
          <ProductCard   
            imageUrl="/images/drifit-uv-hyverse.jpg"   
            title="Nike Dri-FIT UV Hype"   
            price="MRP: ₹ 2,495.00"   
          />  
          <ProductCard   
            imageUrl="/images/drifit-ready.jpg"   
            title="Nike Dri-FIT Ready"   
            price="MRP: ₹ 2,495.00"   
          />  
          <ProductCard   
            imageUrl="/images/one-leak-protection.jpg"   
            title="Nike One Leak Protection: Period"   
            price="MRP: ₹ 3,395.00"   
          />  
          <ProductCard   
            imageUrl="/images/af1-lv8.jpg"   
            title="Nike Air Force 1 LV8"   
            price="MRP: ₹ 7,495.00"   
          />  
        </main>  
      </div>  
      <Footer />  
    </div>  
  );  
  return (  
    <div>  
      <Header />  
      <div className="container mx-auto flex">  
        <FilterSidebar />  
        <main className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">  
          <ProductCard   
            imageUrl="/images/nike-blazer-low-platform.jpg"   
            title="Nike Blazer Low Platform"   
            price="MRP: ₹ 19,196.00"   
          />  
          <ProductCard   
            imageUrl="/images/nike-air-force-1-07.jpg"   
            title="Nike Air Force 1 '07"   
            price="MRP: ₹ 19,195.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-pro-dri-fit.jpg"   
            title="Nike Pro Dri-FIT"   
            price="MRP: ₹ 1,495.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-dunk-low-retro.jpg"   
            title="Nike Dunk Low Retro"   
            price="MRP: ₹ 8,695.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-air-max-sc.jpg"   
            title="Nike Air Max SC"   
            price="MRP: ₹ 9,595.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-dri-fit-uv-miler.jpg"   
            title="Nike Dri-FIT UV Miler"   
            price="MRP: ₹ 1,685.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-air-max-system.jpg"   
            title="Nike Air Max SYSTEM"   
            price="MRP: ₹ 6,495.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-alto-aiu.jpg"   
            title="Nike Alto AIU"   
            price="MRP: ₹ 2,195.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-court-legacy-lift.jpg"   
            title="Nike Court Legacy Lift"   
            price="MRP: ₹ 7,495.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-sroosh.jpg"   
            title="Nike Sroosh"   
            price="MRP: ₹ 1,995.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-sb-zoom-janoski-og.jpg"   
            title="Nike SB Zoom Janoski OG"   
            price="MRP: ₹ 8,695.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-dri-fit-challenger.jpg"   
            title="Nike Dri-FIT Challenger"   
            price="MRP: ₹ 2,495.00"  
          />  
          <ProductCard   
            imageUrl="/images/jordan-series-es.jpg"   
            title="Jordan Series ES"   
            price="MRP: ₹ 7,495.00"  
          />  
          <ProductCard   
            imageUrl="/images/nike-outdoor-play.jpg"   
            title="Nike Outdoor Play"   
            price="MRP: ₹ 2,495.00"  
          />  
        </main>  
      </div>  
      <Footer />  
    </div>  
  );  
};    

const ProductsPage: React.FC = () => {  
    return (  
      <div>  
        <Header />  
        <div className="container mx-auto p-4">  
          <h2 className="text-xl font-bold mb-4">Just In</h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
            <ProductCard   
              imageUrl="/images/nike-sportswear-trend.jpg"   
              title="Nike Sportswear Trend"   
              description="Older Kids' (Girls') High-waisted Woven Shorts"   
              price="MRP: ₹ 2,495.00"   
            />  
            <ProductCard   
              imageUrl="/images/nike-blazer-low-77-jumbo.jpg"   
              title="Nike Blazer Low '77 Jumbo"   
              description="Women's Shoes"   
              price="MRP: ₹ 8,595.00"   
            />  
            <ProductCard   
              imageUrl="/images/nike-sb-force-58.jpg"   
              title="Nike SB Force 58"   
              description="Skate Shoe"   
              price="MRP: ₹ 5,995.00"   
            />  
          </div>  
          
          <RelatedCategories />  
        </div>  
        <Footer />  
      </div>  
    );  
    return (  
        <div>  
          <Header />  
          <ProductDetail   
            imageUrl="/images/nike-air-force-1-plt-af-orm.jpg"  
            title="Nike Air Force 1 PLT.AF.ORM"  
            description="Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its 'inside out'-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."  
            price="₹ 8,695.00"  
          />  
          <Footer />  
        </div>  
  };
export default ProductsPage;

