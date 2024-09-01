import Layout from '@/components/layout/Layout';
import CasinoView from '@/containers/casino';
import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <CasinoView />
    </Layout>
  )
};

export default Page;
