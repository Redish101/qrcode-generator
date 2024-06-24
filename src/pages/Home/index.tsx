import type { ProFormInstance } from '@ant-design/pro-components';
import {
  PageContainer,
  ProForm,
  ProFormSegmented,
  ProFormText,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { QRCode, QRCodeProps, Typography } from 'antd';
import { useRef, useState } from 'react';
import styles from './index.less';

interface MainForm {
  content: string;
  errorLevel: QRCodeProps['errorLevel'];
}

const HomePage: React.FC = () => {
  const formRef = useRef<ProFormInstance<MainForm>>();

  const [content, setContent] = useState<string>();
  const [errorLevel, setErrorLevel] = useState<QRCodeProps['errorLevel']>('L');

  const refresh = (content: string, errorLevel: QRCodeProps['errorLevel']) => {
    setContent(content);
    setErrorLevel(errorLevel);
    console.log(content, errorLevel);
  };

  return (
    <PageContainer title="QR Code Generator">
      <div className={styles.container}>
        <ProForm<{
          content: string;
          errorLevel: QRCodeProps['errorLevel'];
        }>
          formRef={formRef}
          onFieldsChange={() => {
            refresh(
              formRef.current?.getFieldValue('content'),
              formRef.current?.getFieldValue('errorLevel'),
            );
          }}
          submitter={false}
        >
          <ProFormText name="content" label="内容" width="lg" />
          <ProFormSegmented
            name="errorLevel"
            label="容错等级"
            valueEnum={{
              L: 'L (7%)',
              M: 'M (15%)',
              Q: 'Q (25%)',
              H: 'H (30%)',
            }}
          />
          <QRCode
            value={content || 'Redish101'}
            errorLevel={errorLevel || 'L'}
          />
        </ProForm>
        <Typography.Text type="secondary">
          By <Link to={'https://redish101.top'}>Redish101</Link>
        </Typography.Text>
      </div>
    </PageContainer>
  );
};

export default HomePage;
