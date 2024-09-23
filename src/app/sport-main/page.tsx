import Layout from '@/components/layout/Layout';
import SportView from '@/containers/sport';
import SportMainView from '@/containers/sport-main/SportMainView';
import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <SportMainView />
    </Layout>
  )
};

export default Page;
