import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramList_M1 = () => {
  const programs = [
    {
      title: "QRコード生成サイト",
      languages: ["React、JavaScript"],
      description: 
      (<p>
        Reactを使用してQRコード生成のサイトを作成しました。作成したQRコードをダウンロードできるようになっています。URLは<a href="https://syuitsudustbox.com/qr_generator/" target="_brank">こちら</a>になります。
        また、<a href="https://syuitsudustbox.com/main/2023/05/29/post-151/" target="_brank">こちらのサイト</a>で解説を行っています。
      </p>)
    },
    {
      title: "ポートフォリオ",
      languages: ["React、JavaScript"],
      description: 
      (<p>
        このサイト自身です。ポートフォリオとしての機能以外にも、デザインにもこだわって作っています。
      </p>)
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

export default ProgramList_M1;
