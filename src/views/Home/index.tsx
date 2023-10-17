import { Layout, theme, Divider, Card, Row, Col, Typography, Button } from 'antd';
import styles from './home.module.less';
import IconFont from '@/components/Iconfont';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const tools = new Array(10).fill({ title: 'pdf' });
const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const navigate = useNavigate();

  function handleTool() {
    navigate('/pdf');
  }

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
          <Title level={3}>全部模块</Title>
          <Divider />
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24 },
              { xs: 8, sm: 16, md: 24 }
            ]}
          >
            {tools.map((i, idx) => {
              return (
                <Col key={idx} xs={12} sm={8} md={4} lg={4} xl={3} onClick={handleTool}>
                  <Row className={styles.tool} align={'middle'}>
                    <Col span={5}>
                      <IconFont type="ikun-pdf" style={{ fontSize: '20px' }} />
                    </Col>
                    <Col>
                      <div className={styles.title}>PDF To Word</div>
                      <Text type="secondary">将 pdf 转成 word</Text>
                    </Col>
                  </Row>
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
