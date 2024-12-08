// src/app/page.tsx  
import Header from './Components/Header';  

const App = () => {  
  return (  
    <div className="app-container">  
      <Header />  
      <main className="main-content">  
        <h1 className="text-center mt-8">Welcome to Our Store</h1>  
        {/* Other content goes here */}  
      </main>  
    </div>  
  );  
}   
import Button from './Components/Button';  

  const handleClick = () => {  
    alert('Button Clicked!');    
  return (
    <div className="app-container">  
      <h1 className="text-center">Welcome to Our Store</h1>  
      <div className="flex justify-center mt-5">  
        <Button onClick={handleClick} variant="primary">  
          Add to Cart  
        </Button>  
        <Button onClick={handleClick} variant="secondary" className="ml-4">  
          View Details  
        </Button>  
        <Button onClick={handleClick} variant="outline" className="ml-4">  
          Buy Now  
        </Button>  
      </div>  
    </div>  
  );
  };
export default App;