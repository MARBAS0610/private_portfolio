import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';
import ImageTextRow from './ImageTextRow';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>丸山 結 (Yui Maruyama)</h1>
      <ImageTextRow
      imageSrc="./photo_maruyama.jpg"
      altText="Image: Yui Maruyama"
      >

      <h2>経歴</h2>
      <p>2001年生まれ。大阪大学情報科学研究科の修士1年。
        情報ネットワーク学専攻 モバイルコンピューティング講座 山口研究室所属（<a href="https://mc.net.ist.osaka-u.ac.jp/ja/" target="_brank">研究室HP</a>）。
        主にメタバースと3Dデータの活用に関する研究をしています。趣味はラーメン屋巡り、ゲーム（RPGと音ゲー）、旅行など。
      </p>

      <ul class="text-left-margin-auto">
        <li>2020年3月 愛知県立刈谷高等学校 卒業</li>
        <li>2020年4月 大阪大学 基礎工学部 情報科学科 入学</li>
        <li>2024年3月 卒業</li>
        <li>2024年4月 大阪大学 情報科学研究科 情報ネットワーク学専攻 入学</li>
        <li>2026年3月 卒業予定</li>
      </ul>
      </ImageTextRow>
      <Tabs />
    </div>
  );
}

export default App;
