import React from "react";
import List from "../../config/List";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import "./ArchiveCenter.css";
import TableRow from "./TableRow";
import { Fade } from "react-awesome-reveal";
const ArchiveCenter = () => {

  

  return (
    <div className="archiveCenter">
      <Header headerTitle="Archive" des="A big list of things I’ve worked on" />

      <div className="main-archive">
          <Fade>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              {/* <th class="hide-on-mobile">Made at</th> */}
              <th class="hide-on-mobile">Built with</th>
              <th>Link</th>
            </tr>
          </thead>
            <tbody>
            {List.map((item) => {
          return (
              <TableRow 
               siteLink={item.siteLink}
               projectLinkGithub={item.projectLinkGithub}
               title={item.title}
               description={item.description}
               skill={item.skill}
               projectImage={item.projectImage}
               year = {item.year}
              />
              );
            })}
            </tbody>
        </table>
          </Fade>
      </div>
      <Contact />
    </div>
  );
};

export default ArchiveCenter;
