import { useState } from "react";
import { IContent } from "../../types/data";
import { Tab } from "./Tab";
import { TabContent } from "./TabContent";
import { DifferentContent } from "./DifferentContent";


interface ITabbedProps {
  content: IContent[];
}

export function Tabbed({ content }: ITabbedProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}