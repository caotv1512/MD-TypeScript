import React, { useState } from "react";
import User from "./User";
import Product from "./Product";
import Order from "./Order";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("user");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "user":
        return <User />;
      case "product":
        return <Product />;
      case "order":
        return <Order />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Tab Manager Example</h1>
      <div style={{ display: "flex" }}>
        <div className="tab-buttons" style={{ display: "flex", flexDirection: "column", marginRight: "50px" }}>
          <button onClick={() => handleTabClick("user")}>User Manager</button>
          <button onClick={() => handleTabClick("product")}>
            Product Manager
          </button>
          <button onClick={() => handleTabClick("order")}>Order Manager</button>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default App;
