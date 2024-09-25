import React, { useState } from "react";

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState("Focused");

  const tabs = [
    { label: "Focused", value: "focused" },
    { label: "Unread", value: "unread" },
    { label: "Drafts", value: "drafts" },
    { label: "Connections", value: "my-connections" },
    { label: "InMail", value: "inmail" },
    // { label: "Starred", value: "starred" },
  ];

  return (
    <div className="flex h-10 space-x-1 p-0">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setSelectedTab(tab.value)}
          className={`${
            selectedTab === tab.value
              ? "bg-green-600 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
