import React, { memo } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import type { IconFontProps } from '@ant-design/icons/lib/components/IconFont';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4289108_87xgr9bdyet.js'
});

const index = memo(({ type, className, style }: IconFontProps) => {
  return <IconFont type={type} className={className} style={style}></IconFont>;
});

index.displayName = 'IconFont';

export default index;
