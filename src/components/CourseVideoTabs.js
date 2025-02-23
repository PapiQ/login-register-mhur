import React, { useState } from "react";
import "../styles/CourseVideoTabs.css";

const CourseVideoTabs = ({ transcript, notes, downloads, discuss }) => {
  const [activeTab, setActiveTab] = useState("transcript");

  return (
    <div className="video-resources-tabs">
      <div className="video-resources-tabs-header">
        <button
          className={activeTab === "transcript" ? "active" : ""}
          onClick={() => setActiveTab("transcript")}
        >
          Transcript
        </button>
        <button
          className={activeTab === "notes" ? "active" : ""}
          onClick={() => setActiveTab("notes")}
        >
          Notes
        </button>
        <button
          className={activeTab === "downloads" ? "active" : ""}
          onClick={() => setActiveTab("downloads")}
        >
          Downloads
        </button>
        <button
          className={activeTab === "discuss" ? "active" : ""}
          onClick={() => setActiveTab("discuss")}
        >
          Discuss
        </button>
      </div>
      <div className="video-resources-tabs-header-divider"></div>
      <div className="video-resouces-tabs-content">
        {activeTab === "transcript" && <div>{transcript}</div>}
        {activeTab === "notes" && <div>{notes}</div>}
        {activeTab === "downloads" && <div>{downloads}</div>}
        {activeTab === "discuss" && <div>{discuss}</div>}
      </div>
    </div>
  );
};

export default CourseVideoTabs;
