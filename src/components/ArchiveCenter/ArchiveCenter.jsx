import React from "react";
import Header from "../Header/Header";
import Contact from '../Contact/Contact'
import "./ArchiveCenter.css";
import TableRow from "./TableRow";
const ArchiveCenter = () => {
  return (
    <div className="archiveCenter">
      <Header />

      <div className="main-archive">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th class="hide-on-mobile">Made at</th>
              <th class="hide-on-mobile">Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
      <Contact/>
    </div>
  );
};

export default ArchiveCenter;
