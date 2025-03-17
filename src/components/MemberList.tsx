import { useState, useEffect } from 'react';
import { Constituency, members } from '@/lib/data';
import CircularGallery from './CircularGallery';
import { motion } from 'framer-motion';

interface MemberListProps {
  constituency: Constituency | null;
}

const MemberList = ({ constituency }: MemberListProps) => {
  const [filteredMembers, setFilteredMembers] = useState<any[]>([]);
  
  useEffect(() => {
    if (constituency) {
      const filtered = members.filter(
        member => constituency.members.some(m => m.id === member.id)
      );
      setFilteredMembers(filtered);
    } else {
      setFilteredMembers([]);
    }
  }, [constituency]);

  if (!constituency) {
    return null;
  }

  // Format the members data for the CircularGallery
  const galleryItems = filteredMembers.map(member => ({
    image: member.imageUrl,
    text: member.name
  }));

  return (
    <section className="py-16 bg-union-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip bg-union-red/10 text-union-red mb-4"
          >
            {constituency.name}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-medium text-white mb-4"
          >
            Members Standing for Election
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            These are the members standing for election in the {constituency.name} constituency. 
            Scroll to explore all candidates.
          </motion.p>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {filteredMembers.map(member => (
              <div key={member.id} className="bg-white p-4 rounded-lg shadow-md">
                <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700 mb-2">{member.position}</p>
                <p className="text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-white">No members found for this constituency.</p>
          </div>
        )}

        <div className="h-[500px] relative">
          <CircularGallery
            items={galleryItems}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
      </div>
    </section>
  );
};

export default MemberList;