import Layout from '@/components/layout/Layout';
import SportView from '@/containers/sport';
import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <SportView />
    </Layout>
  )
};

export default Page;
