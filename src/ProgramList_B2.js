import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramList_B2 = () => {
  const programs = [
    {
      title: "簡易シェル",
      languages: ["C"],
      description: "ターミナル上で動作する簡単なシェルです。cd、historyなどのコマンドの動作を自力で実装しました。想定外の入力への対策に力を入れ、なるべく多くのケースで正常に動作するようにしました。",
    },
    {
      title: "プロキシサーバの改良",
      languages: ["C"],
      description: "C言語で書かれたプロキシサーバのコードを読み、それに機能を1個追加しました。私のチームは、webサイトの数字を漢数字に置き換える機能を追加しました。プロキシサーバのコードを読み、webサイトのHTMLが実際に送られている箇所を見つけるのに苦労しました。プロキシサーバの利用のために、Linuxマシンの操作の基礎を学びました。",
    },
    {
      title: "ライフゲーム",
      languages: ["Java"],
      description: "Javaを使用してGUI含むライフゲームの基本機能を一通り実装しました。追加の機能としてBGMを流すなど、ゲームらしくなる工夫をしました。",
    },
    {
      title: "ロボットの対戦（Robocode）",
      languages: ["Java"],
      description: "Robocodeというプログラミングゲームで、ロボットを制御して戦うプログラムを開発しました。この課題では受講者がチームに分かれ、最終的に開発したロボットを戦わせます。複数のロボットが強調して戦うプログラムを構築し、私たちのチームは3位入賞を果たしました。",
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

export default ProgramList_B2;
