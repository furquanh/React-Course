import { useState } from 'react';

export default function Conditional ({isButton, config, children}) {
    const Tag = isButton ? 'button' : 'a'
    return <Tag {...config}>{children}</Tag>
}
