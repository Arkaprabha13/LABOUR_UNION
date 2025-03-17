
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ConstituencySelector from '@/components/ConstituencySelector';
import MemberList from '@/components/MemberList';
import Join from '@/components/Join';
import { Constituency } from '@/lib/data';

const Index = () => {
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(null);

  const handleConstituencySelect = (constituency: Constituency) => {
    setSelectedConstituency(constituency);
  };

  return (
    <Layout>
      <Hero />
      <About />
      <div id="constituency">
        <ConstituencySelector onSelect={handleConstituencySelect} />
      </div>
      <MemberList constituency={selectedConstituency} />
      <Join />
    </Layout>
  );
};

export default Index;
