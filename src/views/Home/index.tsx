import { Layout, theme, Divider, Card, Row, Col } from 'antd';
import styles from './home.module.less';
import Tool from './components/Tool';

const { Header, Content } = Layout;

const tools = new Array(10).fill({ title: 'pdf' });
console.log(tools);
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
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24 },
              { xs: 8, sm: 16, md: 24 }
            ]}
          >
            {tools.map((i, idx) => {
              return (
                <Col key={idx} xs={12} sm={8} md={6} lg={4} xl={4}>
                  <div className={styles.tool}>123</div>
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

Home.displayName = 'Home';

export default Home;
