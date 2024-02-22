
import "./HomePage.css"

export default function HomePage() {

    return (
        <div>
            
            <div className="TitlePicHomepage">
                    <h1 className="overtitleHomePage">Proodly Presents</h1>
                    <img className="popcornHomepage" src="/public/popcorn.webp" alt="popcirn pic" />
                    <img className="eatingsoonHomepage" src="/public/comingsoon Yellow.png" alt="eating pic" />
            </div>
          
            
            <div className="boxHomepage">
             <div className="presenationHomepage">
                <h6 className="presentationTitleHomepage">Meet the Culinary Trio Behind the Silver Screen Recipes: Marco, Mathieu, and Michael!</h6>
                <p>
                    Lights, camera, cook! Step into the world of the culinary trio—Marco, Mathieu, and Michael—where pasta meets programming, croissants collide with coding, and sauerkraut shares the spotlight with software. Who said techies can't be foodies?
                </p>
            </div>
            <video className="videoHomepage" src="./public/cookingVideo.mp4" autoPlay loop muted ></video>
            </div>
            <div className="underborHomepage"> 
            Hailing from the lands of pasta, croissants, and sauerkraut—Italy, France, and Germany respectively—these three young and enthusiastic minds have embarked on a deliciously daring adventure: crafting a cookbook filled with recipes inspired by the tantalizing treats found in movies and series.
            <br />
            <br />
                    Together, this dynamic trio combines their culinary prowess with their programming prowess to concoct recipes that are as delightful to taste as they are amusing to read. 
                    <br />
                    <br />
                    So, grab your aprons, fire up your stovetops, and join Marco, Mathieu, and Michael on their deliciously entertaining escapade. Because when it comes to cooking with a side of comedy, these three amigos are ready to steal the show! Bon appétit, buon appetito, guten Appetit, and happy coding!
                    <br />
                    <br />
                    This text was generating by chat gpt
            </div>
         
        </div>
    )
}

