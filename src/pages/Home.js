import ProductList from "../features/product/components/ProductList";
import NavBar from "../features/navbar/Navbar";


function Home(){
    return (
        <div>
                 <NavBar></NavBar>
                <ProductList></ProductList>
            
        </div>
    );
}

export default Home;