
import husky from "./images/husky.jpg";

function App() {
  return (
    <div className="mx-auto my-5" style={{width: "550px"}}>
      <div className="bg-dark text-white card">
        <img src={husky} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h3 className="card-title">Surajit Shaw</h3>
          <h6 className="mt-2 card-subtitle text-warning"><small>Front-end Developer</small></h6>
          <h6 className="card-subtitle text-secondary my-1"><small>surajit-portfolio.com</small></h6>
          <a href="#" className="btn btn-light mt-4" style={{width: "100%"}}>Email</a>
        </div>
        <div className="card-body">
        <h3>About</h3>
        <p className="lead">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
