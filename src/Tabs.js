import React, { useState } from 'react';
import './Tabs.css';
import Tab_dev_class from './Tab_dev_class';
import Tab_dev_others from './Tab_dev_others';
import Tab_other_activity from './Tab_other_activity';
import Tab_research from './Tab_research';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button 
          className={activeTab === 'tab1' ? 'active' : ''} 
          onClick={() => handleTabClick('tab1')}
        >
          研究活動
        </button>
        <button 
          className={activeTab === 'tab2' ? 'active' : ''} 
          onClick={() => handleTabClick('tab2')}
        >
          開発経験（大学の講義）
        </button>
        <button 
          className={activeTab === 'tab3' ? 'active' : ''} 
          onClick={() => handleTabClick('tab3')}
        >
          その他開発経験
        </button>
        <button 
          className={activeTab === 'tab4' ? 'active' : ''} 
          onClick={() => handleTabClick('tab4')}
        >
          その他活動記録
        </button>
      </div>
      <div className="tab-content">
        {/* タブの内容をここに記述 */}
        {activeTab === 'tab1' && <div><Tab_research /></div>}
        {activeTab === 'tab2' && <div><Tab_dev_class /></div>}
        {activeTab === 'tab3' && <div><Tab_dev_others /></div>}
        {activeTab === 'tab4' && <div><Tab_other_activity /></div>}
      </div>
    </div>
  );
};

export default Tabs;
