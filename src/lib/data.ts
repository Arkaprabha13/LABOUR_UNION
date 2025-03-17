export interface Member {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  tags: string[];
}

export interface Constituency {
  id: string;
  name: string;
  description: string;
  members: Member[];
}

export const constituencies: Constituency[] = [
  {
    id: "c1",
    name: "North Mumbai",
    description: "A vibrant region known for its diverse economy and cultural diversity.",
    members: [
      {
        id: "m1",
        name: "Rajesh Patil",
        position: "Union Organizer",
        bio: "Dedicated to promoting labor rights in the construction industry.",
        imageUrl: "https://media.istockphoto.com/id/1216248810/photo/young-man-at-white-background-stock-images.jpg?s=612x612&w=0&k=20&c=XYpyVJTn0byDPiaSPL6biwet9KfXKecRm7YdIO-R7Uc=",
        tags: ["Labor Rights", "Construction"]
      },
      {
        id: "m2",
        name: "Anita Deshmukh",
        position: "Healthcare Advocate",
        bio: "Fighting for better working conditions for healthcare professionals.",
        imageUrl: "https://media.istockphoto.com/id/1387061442/photo/portrait-of-woman-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=aCtfOOy62bHFDUrdHTEIK420BC07c07sSAN3CvMYmJk=",
        tags: ["Healthcare", "Worker Protection"]
      }
    ]
  },
  {
    id: "c2",
    name: "South Delhi",
    description: "Known for its rich history and a booming education sector.",
    members: [
      {
        id: "m3",
        name: "Amit Yadav",
        position: "Education Sector Lead",
        bio: "Former teacher advocating for better wages and conditions in schools.",
        imageUrl: "https://media.istockphoto.com/id/1307385045/photo/close-up-of-indian-mature-men-stock-photo.jpg?s=612x612&w=0&k=20&c=ppyqkc3B8n1HMzHZ5a_GyykBwBHjdXy_3Kim_12L7cg=",
        tags: ["Education", "Teachers' Rights"]
      },
      {
        id: "m4",
        name: "Neha Agarwal",
        position: "Community Organizer",
        bio: "Helping local communities with educational and welfare initiatives.",
        imageUrl: "https://media.istockphoto.com/id/1282435275/photo/portrait-of-a-middle-aged-man-wearing-kerala-style-traditional-dress-with-folded-hands.jpg?s=612x612&w=0&k=20&c=NfxXOPGewB1kVYhPV8mE1RaiZDcE6QjcmCCJYn77okY=",
        tags: ["Community", "Social Justice"]
      }
    ]
  },
  {
    id: "c3",
    name: "Bangalore North",
    description: "A tech-driven constituency with a growing demand for worker rights in the IT sector.",
    members: [
      {
        id: "m5",
        name: "Vikram Reddy",
        position: "Tech Workers Advocate",
        bio: "Advocating for fair wages and working conditions for tech professionals.",
        imageUrl: "https://media.istockphoto.com/id/673537770/photo/portrait-of-a-young-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=o9c5vOkl0OrtOiwclyXFlPZFP5zH0WUBqwJ0wwPQtFc=",
        tags: ["Technology", "Labor Rights"]
      },
      {
        id: "m6",
        name: "Shruti Joshi",
        position: "Legal Advisor",
        bio: "Providing legal aid to workers in the tech industry facing exploitation.",
        imageUrl: "https://media.istockphoto.com/id/1212177440/photo/portrait-of-a-happy-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=T-hCGhKTZWd3lUk6XugDdCs-n-yV_blogAKgdhAqmBI=",
        tags: ["Legal Aid", "Tech Workers"]
      }
    ]
  },
  {
    id: "c4",
    name: "Hyderabad South",
    description: "A dynamic area with a strong focus on IT and business sector unions.",
    members: [
      {
        id: "m7",
        name: "Kiran Kumar",
        position: "Union Leader",
        bio: "Leading the fight for fair wages in Hyderabad’s booming IT industry.",
        imageUrl: "https://media.istockphoto.com/id/1295213888/photo/senior-man-sitting-at-park-bench.jpg?s=612x612&w=0&k=20&c=WjnoY8IJLsDr7YJNHq28WfkWZ-j2UfQWfPCU58GyEfo=",
        tags: ["Labor Rights", "IT Sector"]
      },
      {
        id: "m8",
        name: "Sonal Mehta",
        position: "Gig Economy Advocate",
        bio: "Working to improve conditions for workers in Hyderabad's gig economy.",
        imageUrl: "https://media.istockphoto.com/id/1213291408/photo/happy-senior-man-at-park.jpg?s=612x612&w=0&k=20&c=6Ja6que7ELmcxA4zVwhyd-bqM-6C_gE8dqFQMb3noaM=",
        tags: ["Gig Economy", "Worker Rights"]
      }
    ]
  },
  {
    id: "c5",
    name: "Kolkata Central",
    description: "An area with a strong labor presence in the manufacturing and education sectors.",
    members: [
      {
        id: "m9",
        name: "Pradeep Roy",
        position: "Factory Worker Representative",
        bio: "Championing the rights of factory workers in Kolkata’s industrial sectors.",
        imageUrl: "https://media.istockphoto.com/id/1367068216/photo/indian-farmer-stock-photo.jpg?s=612x612&w=0&k=20&c=oWgo7XuzHZAGlG55bsiyXwqvWIUBxkNMixpzORUOB7Q=",
        tags: ["Manufacturing", "Labor Rights"]
      },
      {
        id: "m10",
        name: "Deepa Sharma",
        position: "Teacher Union Advocate",
        bio: "A long-time advocate for improving conditions in schools and universities.",
        imageUrl: "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA=",
        tags: ["Education", "Teacher Rights"]
      }
    ]
  },
  {
    id: "c6",
    name: "Chennai South",
    description: "Home to the southern region's tech industry and a growing demand for worker rights.",
    members: [
      {
        id: "m11",
        name: "Ravi Subramanian",
        position: "IT Workers Organizer",
        bio: "Promoting fair labor practices in Chennai’s growing IT sector.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kYWluJTIwbWVufGVufDB8fDB8fHww",
        tags: ["Tech Workers", "Labor Rights"]
      },
      {
        id: "m12",
        name: "Anjali Kumar",
        position: "Healthcare Worker Leader",
        bio: "Fighting for improved healthcare standards and better treatment for workers.",
        imageUrl: "https://media.istockphoto.com/id/1128678986/photo/portrait-of-a-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=t5cOTvEBV__4mSyFiGR22NwDFGxIeuGdyr2sNQ80-4k=",
        tags: ["Healthcare", "Labor Rights"]
      }
    ]
  },
  {
    id: "c7",
    name: "North Kolkata",
    description: "Famous for its educational institutions and the industrial belt in the region.",
    members: [
      {
        id: "m13",
        name: "Mohan Kumar",
        position: "Labor Rights Advocate",
        bio: "Fighting for fair wages and worker benefits in Kolkata’s industrial hubs.",
        imageUrl: "https://media.istockphoto.com/id/1134255601/photo/handsome-hispanic-man-wearing-casual-t-shirt-at-home-smiling-in-love-showing-heart-symbol-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=HZOhJl3eMSnppAB61x_q2xQclNQ7e6pda0jjohCmZ-w=",
        tags: ["Labor Rights", "Industrial Workers"]
      },
      {
        id: "m14",
        name: "Jaya Iyer",
        position: "Community Advocate",
        bio: "Dedicated to advocating for social justice and equitable access to resources.",
        imageUrl: "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=1bzox3frm2EJNbC2bo2EWSQYxn_SIa4ii9h5wCtlvmU=",
        tags: ["Community", "Social Justice"]
      }
    ]
  },
  {
    id: "c8",
    name: "Central Bangalore",
    description: "Known for its education and tech industries, with a growing workforce population.",
    members: [
      {
        id: "m15",
        name: "Kavya Singh",
        position: "Education Sector Advocate",
        bio: "Promoting better pay and working conditions for teachers and educational workers.",
        imageUrl: "https://media.istockphoto.com/id/1433286209/photo/portrait-of-man-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=j3xORRlK_EEIjWpHzb-kCWgpYEp20Sdq0U1392a-Vjw=",
        tags: ["Education", "Teachers' Rights"]
      },
      {
        id: "m16",
        name: "Harish Nair",
        position: "Tech Advocate",
        bio: "Leading the advocacy for better working conditions in the booming tech industry.",
        imageUrl: "https://media.istockphoto.com/id/1256138159/photo/handsome-man-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=iW71j1nM90u65Wybm0Ua_SIG2HIypP-_J4UAQYZc_EU=",
        tags: ["Tech Industry", "Labor Rights"]
      }
    ]
  },
  // You can continue adding additional constituencies similarly by following the same structure
];

export const members = constituencies.flatMap(constituency => constituency.members);
