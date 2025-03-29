import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramList_M1 = () => {
  const programs = [
    {
      title: "研究室の購買システムの自動化プロトタイプ",
      languages: ["Raspberry Pi、Python"],
      description: 
      (<p>
        Raspberry Piと画像認識を利用して、研究室の購買システムの自動化のための開発に取り組みました。購入者の顔と商品の画像から、どの人が何を購入したかを判別し、データベースに保存し、合計の購入額を管理します。購入額はSlackのチャンネルで設定されたメッセージを送信することで確認できます。チームで取り組み、私はRaspberry Piとカメラで画像を撮影するところと、Slackへの通知を担当しました。詳しくは、チームメンバーが作成した<a href="https://github.com/dynle/raspi-inventory-management-system" target="_brank">こちらのGitHubリポジトリ</a>をご確認ください。
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
