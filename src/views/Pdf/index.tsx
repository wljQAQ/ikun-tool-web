import { Layout, theme, Divider, Card, Row, Col, Typography, Button } from 'antd';
import styles from './home.module.less';
import IconFont from '@/components/Iconfont';
import { Navigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Pdf = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return <Layout style={{ height: '100%', width: '100%' }}>pdf</Layout>;
};

Pdf.displayName = 'Pdf';

export default Pdf;
