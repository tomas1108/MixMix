import Layout from '@/components/layout/Layout';
import SlotView from '@/containers/slot';
import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <SlotView />
    </Layout>
  )
};

export default Page;
