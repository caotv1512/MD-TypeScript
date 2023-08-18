import React from 'react';
import { Input, QRCode, Space } from 'antd';

const QACode: React.FC = () => {
  const [text, setText] = React.useState('https://facebook.com/hoangnamcao1512');

  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      {/* <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
    </Space>
  );
};

export default QACode;