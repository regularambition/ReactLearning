import HowToPlayPageLayout, {
  type HowToPlayPagingProps,
} from './HowToPlayPageLayout';
import './BasicRulePage.css';

type BasicRulePageProps = HowToPlayPagingProps & {
  pageNo: number;
  rules: readonly string[];
};

function BasicRulePage({ pageNo, rules, ...pagingProps }: BasicRulePageProps) {
  return (
    <HowToPlayPageLayout title={`基本ルール${pageNo}`} {...pagingProps}>
      <ul className="basic-rule-page__rules">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </HowToPlayPageLayout>
  );
}

export default BasicRulePage;
