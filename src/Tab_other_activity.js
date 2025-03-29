import ActivityCard from "./ActivityCard";


// 大学の講義での開発経験
const Tab_other_activity = () => {
  const activities_parttime = [
    {
      title: "荷物の仕分けアルバイト",
      period: "2020年10月〜2021年6月",
      description: "某物流企業の倉庫での荷物の仕分けのアルバイトです。トラックドライバーが集めた荷物を行き先ごとに分けて他のトラックに積み込む仕事を主に担当しました。世の中の物流を支える業務の理解が深まりました。",
    },
    {
      title: "塾講師アルバイト",
      period: "2021年6月〜2023年6月",
      description: "塾で個別指導の講師としてアルバイトしました。主に数学を担当し、1対1or2で授業を行いました。1対1の場合生徒個人の理解を深めることが重要となり、この仕事を通じて理解しやすい説明の技術が身につきました。複雑な論理を、基本的な事項の積み重ねとして段階的に伝えることと、定期的に理解できているか確認することを意識しました。",
    },
    // 必要ならさらに追加
  ];
  const activities_intern = [
    {
      title: "GMOインターネットグループ（株）",
      period: "2024年8月26日〜2024年9月6日",
      description: "LLMを用いたアプリケーション開発にチームで取り組みました。私はその中でRAG（検索拡張生成）の部分を担当しました。AWS等を用いた実用的なアプリケーション開発や、レベルの高いチームメンバーとの開発が貴重な経験となりました。",
    },
    {
      title: "日立製作所（株）",
      period: "2025年1月20日〜2025年1月31日",
      description: "3Dデータを用い、具体的な作業のマニュアルを生成するための研究開発に取り組みました。3Dデータとそれを用いた画像から、画像を撮影した場所の位置推定を行うというタスクに取り組みました。大学での研究で扱った3Dデータの処理をさらに詳しく学び、知識を深めることができました。また企業での研究開発の現場を体験し、より実用化に寄った研究の魅力を知りました。",
    },
    // 必要ならさらに追加
  ];


  return (
    <div>
      <h1>その他活動記録</h1>
      <p>大学以外での活動について紹介します。</p>
      <h2>アルバイト</h2>
      {activities_parttime.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          period={activity.period}
          description={activity.description}
         />
      ))}
      <h2>インターンシップ</h2>
      {activities_intern.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          period={activity.period}
          description={activity.description}
         />
      ))}
    </div>
  );

};
  
  export default Tab_other_activity;
  