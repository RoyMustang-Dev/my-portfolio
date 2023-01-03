import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4 class="card-title">{title}</h4>
          <span class="card-text">{description}</span>
          <div class="icons">
            <a href={link} target="_blank" className="btn btn-primary" ><span>Link</span>
              <i class="fa fa-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
