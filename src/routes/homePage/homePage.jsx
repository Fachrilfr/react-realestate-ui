import SearchBar from "../../components/searchBar/SearchBar";
import './homePage.scss';

function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Maiores commodi distinctio temporibus illum iste harum optio velit pariatur suscipit, 
                        dolore deserunt consequuntur quibusdam inventore laboriosam accusamus fuga, impedit officiis voluptates?
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg3.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage;