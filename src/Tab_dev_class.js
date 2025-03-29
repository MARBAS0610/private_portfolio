import ProgramList_B1 from "./ProgramList_B1";
import ProgramList_B2 from "./ProgramList_B2";
import ProgramList_B3 from "./ProgramList_B3";
import ProgramList_M1 from "./ProgramList_M1";

// 大学の講義での開発経験
const Tab_dev_class = () => {
    return (
      <div>
        <h1>開発経験（大学の講義）</h1>
        <p>大学の講義で制作した開発物をご紹介します。</p>
        <h2>大学1年</h2>
        <ProgramList_B1/>
        <h2>大学2年</h2>
        <ProgramList_B2/>
        <h2>大学3年</h2>
        <ProgramList_B3/>
        <h2>大学院</h2>
        <ProgramList_M1/>
      </div>
    );
  };
  
  export default Tab_dev_class;
  