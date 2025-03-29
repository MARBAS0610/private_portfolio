// 研究活動
import ImageTextRow from "./ImageTextRow";
import TextImageRow from "./TextImageRow";
import "./imagestyle.css";

const Tab_research = () => {
    return (
        <div>
            <h1>研究内容</h1>
            <p>研究内容とその成果についてご紹介します。</p>

            <h2>研究概要</h2>
            <img src="./research_image.png" alt="This research" className="main_image"/>
            <p style={{ marginTop: "30px", marginBottom: "100px" }}>
                新形式の遠隔交流を実現するための、現実世界を3D共有するメタバースについて研究しています。3Dデータは容量が大きく、リアルタイムで共有するためにはデータ量の削減が必要です。しかしリアリティのある交流のためには交流のデータ量を削減しつつも、映像としての品質はなるべく保ちたいというトレードオフが課題です。これを解決するための最適化問題を定式化し、解く方法を考案しました。
            </p>

            <h2>背景</h2>
            <ImageTextRow
            imageSrc="./hybrid_metaverse.png"
            altText="picture of new style remote communication"
            >
                <p>COVID-19の流行以降、リモートでの交流の機会が増えています。現在主流なのが、Zoomをはじめとしたビデオ通話ツールです。しかし、メタバースはそれをさらに上回る臨場感を提供すると期待されています。</p>
            </ImageTextRow>

            <h2>課題</h2>
            <TextImageRow
            imageSrc="./metaverse_image.png"
            altText="picture of related work"
            >
                <p>先行研究では、空間を3次元点群としてスキャンし共有システムが考えられました。このシステムの課題は、3次元点群のデータ量が大きく、データを削減しつつ送信しないと多人数で空間を共有するのが難しいという点でした。</p>
            </TextImageRow>

            <h2>研究の目標</h2>
            <ImageTextRow
            imageSrc="./assignment.png"
            altText="picture of assignment"
            >
                <p>3次元点群のデータ量削減をしつつも、空間を映像として見た時の品質はなるべく高く保つことが、リアリティのある交流の実現には欠かせません。このトレードオフを数式に落とし込んで解決するのが本研究の目標です。つまり、3次元点群のデータ量の上限が制約として与えられたとき、空間の映像品質を最大にするように制御する必要があります。3次元点群の解像度（=点の数）やフレームレートを適切に制御することで、低容量かつ人間にとって不自然でない空間を実現します。</p>
            </ImageTextRow>

            <h2>提案手法</h2>
            <TextImageRow
            imageSrc="./methods.png"
            altText="picture of proposed method"
            >
                <p>この課題に対し、まず議論すべきなのは映像品質の定式化です。映像品質というのは人間の主観に強く依存する指標であり、単純な定式化は難しいです。例えば、フレームレートが半減しても、品質が必ずしも半減するとは限りません。この複雑な関係を効率よく獲得するために、本研究ではニューラルネットワークを用います。人間の主観に関するデータを学習させ、その傾向を自動的に学習してくれるのではないかという意図があります。ニューラルネットワークの構造として、ICNN（Input Convex Neural Networks）というものを用いました。これは、関数を凸関数として学習するというニューラルネットワークです。関数を凸関数として学習することで、後述する最適化の目的関数とする際に、必ず映像品質の最適解を得るようなパラメータの存在を保証することができます。</p>
                <p>もう1点議論すべきは、この最適化問題をどのように解くかということです。ただ解くだけだと問題が生じる可能性があります。ユーザが増えた時、問題が非常に複雑になりますし、ニューラルネットワークのモデルを1箇所のマシンに集約して最適化しなければならず、スケーラビリティに配慮した最適化が求められます。これに対し我々は、ADMM（交互方向乗数法）に基づく分散型最適化手法を用いました。全体の最適化問題をユーザ単位の最適化問題に分散し、計算リソースと通信の負荷を抑えることができるのが本手法の利点です。</p>
            </TextImageRow>

            <h2>結果</h2>
            <ImageTextRow
            imageSrc="./results.png"
            altText="picture of result"
            >
                <p>複数のオープンデータを組み合わせた空間とVMAF（Video Multimethod Assessment Function）という映像品質の指標を組み合わせて学習データを作成しました。提案手法の実装とシミュレーションを行い、シンプルな（=1個のマシンで全体の最適化を一気に実行する）最適化手法との比較を行いました。シミュレーションの結果、特にユーザ数が多い場合について、収束時間と最適化に要した通信量が優れることを示しました。また、ニューラルネットワークの精度に関しても評価を行い、人間の主観を高い精度で学習できていることを示しました。</p>
            </ImageTextRow>

            <h2>応用先</h2>
            <h3>①リモート出社システム</h3>
            <ImageTextRow
            imageSrc="./remote_work.png"
            altText="picture of remote work system"
            >
                <p>本研究のシステムを活用し、従業員が自らの周辺環境を3Dスキャン、共有することで、離れた場所でも同じオフィスに出社しているような感覚を提供するリモートワークが実現できます。従来のリモートワークは、自室だと業務に集中できないことが主な課題でした。しかしこのシステムが実現すれば、同じ空間に他の社員がいるような体験を作り出し、出社にしかない適度な緊張感が再現され、業務効率アップにつながるでしょう。</p>
            </ImageTextRow>

            <h3>②遠隔リハビリテーションシステム</h3>
            <ImageTextRow
            imageSrc="./remote_rehabilitation.png"
            altText="picture of remote rehabilitation system"
            >
                <p>遠隔でのリハビリテーションへの応用もこの研究成果の大きな可能性だと感じています。リハビリテーションは動きの指導ですから、実際に介護者が被介護者の目の前で動きを指導する必要がありました。しかし、本研究のシステムを用いれば、遠隔からでも被介護者のそばに移動し、3Dで動きを指導することができます。</p>
            </ImageTextRow>

            <h2>研究成果</h2>
            <p>国内研究会で1件、国際学会で1件の論文を発表しております。また、論文誌への採択もされ、今後掲載される予定です。このほかに査読中の論文が1件、発表予定が1件あります。</p>
            <h3>論文一覧</h3>
            <ul>
                <li>丸山 結, 天野 辰哉, 山口 弘純, "実空間融合型メタバースにおける共有オブジェクト品質の分散型最適化手法", 情報処理学会 第198回DPS研究会（2024年3月）</li>
                <li>Yui Maruyama, Tatsuya Amano, Hirozumi Yamaguchi, "Scalable and Distributed Optimization of Shared 3D Object Quality for Large-Scale Hybrid-Metaverses", 2024 21st Annual IEEE International Conference on Sensing, Communication, and Networking（SECON）（2024年12月）</li>
                <li>Yui Maruyama, Tatsuya Amano, Hirozumi Yamaguchi, "ICNN Based Distributed Optimization of 3D Point Cloud Quality for Real-Time Physical Space Sharing", Journal on Information Processing, Vol.33（2025年5月掲載予定）</li>
            </ul>
        </div>
    );
};

export default Tab_research;