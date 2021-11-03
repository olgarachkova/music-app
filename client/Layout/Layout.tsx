import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import React, { FunctionComponent } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Container } from '@mui/material';
import { Player } from '../components/Player/Player';
import Head from 'next/head';

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Container className={styles.body}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>, title = 'Best music here!') => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout title={title}>
                <Component {...props} />
            </Layout>
        );
    };
};