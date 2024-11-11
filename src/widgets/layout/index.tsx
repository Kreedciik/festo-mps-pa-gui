import React, { FC } from 'react';
import { NavbarMinimal } from './ui/navbar';
import { Flex } from '@mantine/core';

interface IProps {
  children: React.ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
    <Flex>
      <NavbarMinimal />
      <div>{children}</div>
    </Flex>
  );
};
