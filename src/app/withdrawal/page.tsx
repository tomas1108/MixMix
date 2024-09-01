import Layout from '@/components/layout/Layout';
import WithdrawView from '@/containers/withdrawal';
import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <WithdrawView />
    </Layout>
  )
};

export default Page;
