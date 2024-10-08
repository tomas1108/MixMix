import Layout from '@/components/layout/Layout';
import DepositView from '@/containers/deposit';

import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <DepositView />
    </Layout>
  )
};

export default Page;
