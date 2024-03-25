import { useState } from "react";
import Article from "./Article";
import articles from "./article-parser/articles.json";

function Articles({genre, step, publisher}){
    let contents = 0;
    const [range, setRange] = useState(step);

    return (
        <>
            <div className="row px-2 px-md-3 px-lg-5 gx-3">
                {
                genre === "all" 
                ?
                Object.keys(articles).map(g => {
                    return Object.keys(articles[g]).map(link => 
                        { 
                            if (contents == range) return;
                            contents++;
                            return <Article publisher={publisher} key={link} image={articles[g][link].image} headline={articles[g][link].headline} 
                                    date={articles[g][link].date} summary={articles[g][link].summary}></Article>
                        })
                    })
                :
                Object.keys(articles[genre]).map(link => 
                        {
                            if (contents == range) return;
                            contents++;
                            return <Article publisher={publisher} key={link} image={articles[genre][link].image} headline={articles[genre][link].headline} 
                                    date={articles[genre][link].date} summary={articles[genre][link].summary}></Article>
                        })
                }
            </div>
            <div className="col d-flex justify-content-center mt-5">
                <button type="button" class="btn btn-outline-dark w-50 rounded-0" onClick={() => setRange(prev => prev + step)}>See More</button>
            </div>
        </>
    );
}

export default Articles;