import Articles from './Articles';

function Genre({genre, quote, author, src, owner, ownerLink}){
    return (
        <>
            <div className='col w-100 overflow-hidden position-relative mb-5'>
            <img src={src} alt="" className="img-genre" />
            <div className='img-mask position-absolute top-0 left-0 w-100 h-100'></div>
            <div class="container genre">
                <div className="row d-flex justify-content-center px-5">
                <h1 className='text-white display-lg-2 display-md-1 display-5' style={{fontWeight: "normal", opacity: ".9"}}>{genre}</h1>
                <p className='text-white ' style={{fontWeight: "lighter", opacity: ".9"}}>{quote}</p>
                <p className='text-white' style={{fontWeight: "lighter", opacity: ".9", textAlign: "right"}}>{author}</p>
                </div>
            </div>
            <div className='position-absolute bottom-0 end-0 pe-5'>
                <a href={ownerLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                    <p className='text-white' style={{fontSize: "10px", fontWeight: "lighter", opacity: ".7", textAlign: "right"}}>Image by {owner}</p>
                </a>
            </div>
            </div>
            
            <Articles genre={genre} step={16} publisher="Nature World News"></Articles>
        </>
    );
}

export default Genre;