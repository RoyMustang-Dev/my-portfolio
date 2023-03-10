import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <motion.div layout className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4 >{title}</h4>
          <span >{description}</span>
          <div class="icons">
            <a href={link} target="_blank" rel="noreferrer"><span><FaLink size="2em" color="white" style={{margin: 14}} /></span></a>
          </div>
        </div>
      </motion.div>
    </Col>
  )
}
