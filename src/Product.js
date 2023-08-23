import './App.css';
const Product=(props)=>{
    return(
        <div className="Product">
           <img src={props.path} alt=""></img>
           <h1 className="t-center">{props.name}</h1>
           <h4 className="t-center">{props.rating}</h4>
           <button>Book Tickets</button>
        </div>
    );
};
//import Product from './Product';
{/*  <h1 className="t-center">Movie Tickets</h1>
                <Product name="Guntur Karam" rating= "9.8/10 Rating"   path="https://m.media-amazon.com/images/M/MV5BMjU4NDk1YTUtZTM4Ny00MjE5LWExMTItN2FhNDU5ZDM2YTk1XkEyXkFqcGdeQXVyMTE5NTEyNTg5._V1_.jpg" alt="Guntur karam"/>
                <Product name="Businessman" rating= "8.5/10 Rating"   path="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/aba7876793394660fa748d3b216787aea6edd0a56ad4472910248d329f7cde4d._RI_TTW_.jpg" alt="Businessman"/>
                <Product name="BRO" rating= "8.6/10 Rating"   path="https://cdn.123telugu.com/videosimg/wp-content/uploads/2023/07/BRO.jpg" alt="Bro"/>
                <Product name="Baby" rating= "8.7/10 Rating"   path="https://upload.wikimedia.org/wikipedia/en/4/46/Baby_theatrical_poster.jpg" alt="Baby"/>
                <Product name="Adipurush" rating= "6/10 Rating"   path="https://cdn.zeebiz.com/sites/default/files/2023/06/16/247430-adipurush.jpg" alt="Adipurush"/>
                <Product name="PUSHPA 2" rating= "9/10 Rating"   path="https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg" alt="Pushpa"/>
                <Product name="Rocky Aur Rani" rating= "8/10 Rating"   path="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rocky-aur-rani-kii-prem-kahaani-et00312549-1690269122.jpg" alt="Rockey"/>
                <Product name="Slum Dog Husband" rating= "7.9/10 Rating"   path="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/slum-dog-husband-et00342354-1690376353.jpg" alt="Slum Dog Husband"/>
                <Product name="Meg 2: The Trench" rating= "7/10 Rating"   path="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-meg-2-the-trench-et00358316-1690446228.jpg" alt="Meg 2: The Trench"/>
                <Product name="Blood & Chocolate" rating= "6/10 Rating"   path="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/blood-and-chocolate-et00365748-1690961448.jpg" alt="Blood & Chocolate"/>
              */}
export default Product;