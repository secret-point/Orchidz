import { Layout } from "@/components/layout/layout";
import HeaderNavigation, {
  HeaderNavigationLoggedIn,
} from "@/components/navigation/headerNavigation";

export default function App() {
  return (
    <Layout>
      <HeaderNavigation></HeaderNavigation>
    </Layout>
  );
}
