import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import { FunctionComponent } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Container } from '@mui/material';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Container className={styles.body}>
                {children}
            </Container>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};