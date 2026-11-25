import SidebarScreenLayout from '../../components/layout/SidebarScreenLayout';
import './CreditsScreen.css';

function CreditsScreen() {
  return (
    <SidebarScreenLayout>
      <ol className="credits-page">
        <li>https://commons.nicovideo.jp/works/nc470108</li>
        <li>素材2</li>
        <li>素材3</li>
        <li>素材4</li>
        <li>素材5</li>
      </ol>
    </SidebarScreenLayout>
  );
}

export default CreditsScreen;
