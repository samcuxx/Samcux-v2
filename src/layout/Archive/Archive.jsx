import React, { useEffect } from "react";
import ArchiveCenter from "../../components/ArchiveCenter/ArchiveCenter";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";

const Archive = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Left />
      <ArchiveCenter />
      <Right />
    </div>
  );
};

export default Archive;
