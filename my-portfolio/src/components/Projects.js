import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Web Development",
      description: "Created a bunch of Websites",
      imgUrl: projImg1,
      link: 'https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs'
    },
    {
      title: "Web Development",
      description: "Created a bunch of Websites",
      imgUrl: projImg1,
      link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Web Development",
      description: "Created a bunch of Websites",
      imgUrl: projImg1,
      link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Streamlit Apps",
    description: "Created a bunch of Data Models",
    imgUrl: projImg2,
    link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Streamlit Apps",
    description: "Created a bunch of Data Models",
    imgUrl: projImg2,
    link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Streamlit Apps",
    description: "Created a bunch of Data Models",
    imgUrl: projImg2,
    link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Data Science",
    description: "Some very popular Data Science Projects",
    imgUrl: projImg3,
    link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Data Science",
    description: "Some very popular Data Science Projects",
    imgUrl: projImg3,
    link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
    {
      title: "Data Science",
    description: "Some very popular Data Science Projects",
    imgUrl: projImg3,
    link:"https://github.com/RoyMustang-Dev/pytorch-zero_To_GANs",
    },
  ];

  const projects1 = [
    {
      title: "Web Development",
      description: "Created a bunch of Websites",
      imgUrl: projImg1,
    },
    {
      title: "Web Development",
      description: "Created a bunch of Websites",
      imgUrl: projImg1,
    },
    {
      title: "Web Development",
      description: "Created a bunch of Websites",
      imgUrl: projImg1,
    },
  ];

  const projects2 = [
  {
    title: "Streamlit Apps",
    description: "Created a bunch of Data Models",
    imgUrl: projImg2,
  },
  {
    title: "Streamlit Apps",
    description: "Created a bunch of Data Models",
    imgUrl: projImg2,
  },
  {
    title: "Streamlit Apps",
    description: "Created a bunch of Data Models",
    imgUrl: projImg2,
  },
  ];

  const projects3 = [
  {
    title: "Data Science",
    description: "Some very popular Data Science Projects",
    imgUrl: projImg3,
  },
  {
    title: "Data Science",
    description: "Some very popular Data Science Projects",
    imgUrl: projImg3,
  },
  {
    title: "Data Science",
    description: "Some very popular Data Science Projects",
    imgUrl: projImg3,
  },
];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="main">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="main">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="first">WebSites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Python</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data Science</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="main">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
