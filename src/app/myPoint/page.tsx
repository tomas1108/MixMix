import Layout from '@/components/layout/Layout';
import MyPointView from '@/containers/point';

import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <MyPointView />
    </Layout>
  )
};

export default Page;
