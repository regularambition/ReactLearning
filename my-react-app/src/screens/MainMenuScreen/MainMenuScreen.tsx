import './MainMenuScreen.css';

function MainMenuScreen() {
  return (
    <div className="main-menu-screen">
      <nav className="main-menu-screen__menu" aria-label="メインメニュー">
        {/* 後でボタン要素を配置する */}
      </nav>

      <div className="main-menu-screen__user-name">
        <h6>ユーザー名</h6>
      </div>

      <header className="main-menu-screen__title">
        <h6>メインメニュー画面</h6>
      </header>

      <div className="main-menu-screen__content">
        {/* 主要部分の要素を配置する */}
      </div>
    </div>
  );
}

export default MainMenuScreen;
