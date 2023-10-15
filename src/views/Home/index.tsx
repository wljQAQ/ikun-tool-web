import { Layout, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      <Header style={{ background: colorBgContainer }}>
        <h2>IKUN TOOL</h2>
      </Header>

      <Layout>
        <Sider theme="light" breakpoint="lg" collapsedWidth="0">
          1
        </Sider>
        <Content>2</Content>
      </Layout>
    </Layout>
  );
};

Home.displayName = 'Home';

export default Home;
