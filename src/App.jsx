import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import BackToTop from './BackToTop';
import './index.css';
import Genre from './Genre';

function App() {
  return (
    <>
    <BrowserRouter>
      <div class="col" style={{scrollBehavior: "smooth", overflow: "hidden"}}>
      <section id="#top">
      <nav className="z-3 position-absolute w-100 row navbar navbar-expand-lg  pt-5 pb-0 px-3 px-md-0 px-lg-0 mx-0" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="col-md-5 d-flex justify-content-center">
            <Link className="navbar-brand" to="/"> <h4><b>John Kenneth Lunaba</b></h4></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active me-3" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active me-3" to="">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active me-3" to="">Multimedia</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </a>
                    <ul class="dropdown-menu rounded-0" style={{backgroundColor:"rgba(0, 0, 0, .4)", backdropFilter: "blur(5px)"}}>
                      <li><Link class="dropdown-item" to="/w&d">Weather & Disaster</Link></li>
                      <li><Link class="dropdown-item" to="/env">Environment</Link></li>
                      <li><Link class="dropdown-item" to="/s&a">Space & Ancient Times</Link></li>
                      <li><Link class="dropdown-item" to="/health">Health</Link></li>
                      <li><Link class="dropdown-item" to="/w&a">Wildlife & Animals</Link></li>
                      <li><Link class="dropdown-item" to="">Digital & Business</Link></li>
                      <li><Link class="dropdown-item" to="">Graphics & Images</Link></li>
                      <li><Link class="dropdown-item" to="">Research</Link></li>
                    </ul>
                  </li>
                </ul>
            </div>
        </div>
      </nav>
      </section>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/w&d" element={
            <Genre genre="Weather & Disasters" quote="Adversity is like a strong wind. It tears away from us all but the things that cannot be torn, so that we see ourselves as we really are." author="- Arthur Golden"
            src="https://images.pexels.com/photos/9076534/pexels-photo-9076534.jpeg?cs=srgb&dl=pexels-recep-tayyip-%C3%A7elik-9076534.jpg&fm=jpg&_gl=1*bayn2j*_ga*MjEyNzEzMzY4OC4xNzExMjE0NzU1*_ga_8JE65Q40S6*MTcxMTIxNDc1NS4xLjEuMTcxMTIxNTMzMy4wLjAuMA.." owner="Recep Tayyip Çelik" ownerLink="https://www.pexels.com/@djordje-petrovic-590080/"/>
          }/>
          <Route path="/env" element={
            <Genre genre="Environment" quote="The environment and the economy are really both two sides of the same coin. If we cannot sustain the environment, we cannot sustain ourselves" author="- Wangari Maathai"
            src="https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg" owner="Pixabay" ownerLink="https://www.pexels.com/@pixabay/"/>
          }/>
          <Route path="/s&a" element={
            <Genre genre="Space & Ancient Times" quote="The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science" author="- Albert Einstein"
            src="https://images.pexels.com/photos/9956995/pexels-photo-9956995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" owner="Robert Gruszecki" ownerLink="https://www.pexels.com/@lexx/"/>
          }/>
           <Route path="/health" element={
            <Genre genre="Health" quote="Health is like money, we never have a true idea of its value until we lose it." author="- Josh Billings"
            src="https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" owner="Pixabay" ownerLink="https://www.pexels.com/@pixabay/"/>
          }/>
          <Route path="/w&a" element={
            <Genre genre="Wildlife & Animals" quote="In the end, we will conserve only what we love; we will love only what we understand; and we will understand only what we are taught." author="- Baba Dioum"
            src="https://images.pexels.com/photos/14465578/pexels-photo-14465578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" owner="Jürgen" ownerLink="https://www.pexels.com/@jurgen-32247829/"/>
          }/>
      </Routes>
      <a href="#top">
          <BackToTop/>
      </a>
      </div>
      <div className='mt-5 row bg-black'>
          footer
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
