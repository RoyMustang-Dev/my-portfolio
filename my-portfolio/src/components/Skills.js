import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Core Tech Stack</h2>
                        <p>Through a vigorous and dedicated learning journey, I have accumulated vast Technical, Interpersonal and Professional skills.<br></br> Some of the industry's standard skillset are mentioned below.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Programming Languages</h5>
                                <p>R, C, Python</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Data Manipulation Libraries</h5>
                                <p>NumPy, Pandas, SciPy</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Natural Language Processing</h5>
                                <p>NLTK, Scikit-Learn, Deep Learning</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Databases</h5>
                                <p>MySQL, PostgreSQL, Amazon Redshift</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Data Visualization Libraries</h5>
                                <p>MatplotLib, Seaborn, Plotly & Cufflinks</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Machine Learning</h5>
                                <p>Scikit-Learn, TensorFlow, Keras & PyTorch</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Data Presentation Tools</h5>
                                <p>PowerBI, Excel, Zoho Analytics</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Git - GitHub - GitHub Actions</h5>
                                <p>For Version Controlling</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Dockers & Kubernetes</h5>
                                <p>For Containerization and Pipelining</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Industry Standard Tools & Techs</h5>
                                <p>MySQL Workbench, Anaconda Package Manager, PyCharm, GitBash, Heroku</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Streamlit</h5>
                                <p>For creating Data Models (Web Apps) & Free Hosting</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
