import Layout from '@/components/layout/Layout';

import QnaView from '@/containers/qna';

import { NextPage } from 'next';


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Layout>
       <QnaView />
    </Layout>
  )
};

export default Page;
