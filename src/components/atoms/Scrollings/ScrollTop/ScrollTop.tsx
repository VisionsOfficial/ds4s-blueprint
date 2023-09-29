import React, { PropsWithChildren } from 'react';
import { useScrollTop } from '../../../../hooks/useScrollTop';

type Props = {};

export const ScrollTop = ({ children }: PropsWithChildren<Props>) => {
    useScrollTop();
    return <>{children}</>;
};
