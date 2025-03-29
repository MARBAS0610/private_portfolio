import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramList_B1 = () => {
  const programs = [
    {
      title: "オセロ",
      languages: ["C"],
      description: "ターミナル上で動作する1人用オセロです。対戦相手のCPUの意思決定も実装し、特にこの部分に力を入れました。",
    },
    {
      title: "遺伝のシミュレーション",
      languages: ["C"],
      description: "生物が代を重ねていく様子をシミュレーションするプログラムです。高速化に力を入れました。",
    },
    // 必要ならさらに追加
  ];

  return (
    <div>
      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          title={program.title}
          languages={program.languages}
          frameworks={program.frameworks}
          description={program.description}
        />
      ))}
    </div>
  );
};

export default ProgramList_B1;
