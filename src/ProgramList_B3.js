import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramList_B3 = () => {
  const programs = [
    {
      title: "簡易コンパイラ",
      languages: ["Java（、CASL2、Pascal）"],
      description: "Pascalのサブセットの文法で書かれたプログラムをCASL2というアセンブリ言語に変換するコンパイラです。構文解析、字句解析など自然言語処理の基礎を学びました。また、大規模なプログラムを構造化して書くことの重要性も学びました。",
    },
    {
      title: "ネットワーク内で使えるチャットアプリ",
      languages: ["C（、Java）"],
      description: "ターミナル上で動作するチャットアプリです。同じネットワーク内にいる人と通信し、互いにメッセージを送信することができます。ソケット通信やパイプを用いたデータ送受信について学びました。GUI部分の開発も行い、現実のチャットシステムに近づける工夫をしました。",
    },
    {
      title: "センサーを利用したRPGゲームの戦闘画面",
      languages: ["Arduino、Python"],
      description: "Arduinoでセンサーの値を読み取り、その値がゲーム内に反映されるようなゲームの戦闘画面を作りました。例えば、プレイヤーが炎の攻撃をする際に、温度センサーに高温のものを近づけるほどダメージが増加する、というものです。ArduinoとPCのプログラムでシリアル通信を行い、センサーの入力を受け取ります。電子工作が、現実にないものを実現できる無限の可能性を持っていることに気づきました。",
    },
    {
      title: "簡易CPU",
      languages: ["VHDL"],
      description: "VHDLを利用し、簡単な命令セットを備えたCPUの設計に挑戦しました。VHDLで作成した回路をFPGAに書き込み、命令が正しく実行されることを確かめました。CPU内の計算処理について学習し実装することで、普段あまり目にしない計算機の低レイヤの知識を深めることができました。",
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

export default ProgramList_B3;
