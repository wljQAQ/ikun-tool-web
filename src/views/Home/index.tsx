import { Layout, theme, Divider, Card } from 'antd';
import styles from './home.module.less';

const { Header, Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      <Header className="border-bottom" style={{ background: colorBgContainer }}>
        <h2>IKUN TOOL</h2>
      </Header>

      <Layout>
        <Content
          className={styles.container}
          style={{
            background: colorBgContainer
          }}
        >
          <span className={styles.title}>全部模块</span>
          <Divider />
          <Card title="Pdf To Word" style={{ width: 300 }} hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

Home.displayName = 'Home';

export default Home;
