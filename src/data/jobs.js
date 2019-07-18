const jobs = [
    {   
        key:"00000",
        jobID:"Job0",
        type:"Engineering",
        jobTtitle:"Co-op/Intern : Python Mathlab Programmer",
        rating:"4.5/5",
        location:"Kanata, ON",
        company:"Ciena",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.ciena.ca/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
        
    },
    {   
        key:"1234",
        jobID:"Job1",
        type:"Engineering",
        jobTtitle:"User Experience Designer",
        rating:"4.2/5",
        location:"Richmond, VA",
        company:"Google, Inc.",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.google.com",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    },
    {   
        key:"4567",
        jobID:"Job2",
        jobTtitle:"User Experience Designer",
        type:"Engineering",
        rating:"3.4/5",
        location:"Montreal, QC",
        company:"McIntire Solutions, LLC",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.mcintiresolutions.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"8910",
        jobID:"Job3",
        jobTtitle:"Software Developper",
        rating:"4.0/5",
        type:"Engineering",
        location:"Quebec, QC",
        company:"Shopify",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.shopify.ca/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"1112",
        jobID:"Job4",
        jobTtitle:"Software Tester",
        rating:"4.4/5",
        type:"Engineering",
        location:"Quebec, QC",
        company:"McIntire Solutions, LLC",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.mcintiresolutions.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"1314",
        jobID:"Job5",
        type:"Engineering",
        jobTtitle:"Senior Software Engineer",
        rating:"2.5/5",
        location:"Halifax, NS",
        company:"Google, Inc.",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.google.com",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"1514",
        jobID:"Job6",
        type:"Medical",
        jobTtitle:"Lion Tamer",
        rating:"2.5/5",
        location:"Halifax, NS",
        company:"Amazing Circus",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.circusvegasonwheels.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"1617",
        jobID:"Job7",
        type:"Finance",
        jobTtitle:"Senior Vice President",
        rating:"4.5/5",
        location:"Halifax, NS",
        company:"Amazing Circus",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.circusvegasonwheels.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"1819",
        jobID:"Job8",
        type:"Finance",
        jobTtitle:"Private Equity Analyst – Paid Internship",
        rating:"3.2/5",
        location:"Halifax, NS",
        company:"Nokia",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.nokia.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"2021",
        jobID:"Job9",
        type:"Telecommunication",
        jobTtitle:"Telecom engineer",
        rating:"5/5",
        location:"Toronto, ON",
        company:"Ciena",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.ciena.ca/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    
    },
    {   
        key:"2223",
        jobID:"Job10",
        type:"Telecommunication",
        jobTtitle:"Fiber Splicing Technician",
        rating:"5/5",
        location:"Regina, SK",
        company:"Nokia",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.nokia.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    },
    {   
        key:"2425",
        jobID:"Job11",
        type:"Medical",
        jobTtitle:"Medical Aesthetic Receptionist",
        rating:"5/5",
        location:"Ottawa, ON",
        company:"Ottawa Skin Clinic",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.ottawaskinclinic.ca/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    },
    {   
        key:"2223",
        jobID:"Job12",
        type:"Medical",
        jobTtitle:"Medical / Writer Researcher",
        rating:"2.8/5",
        location:"Kanata, ON",
        company:"Thera-Business",
        p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur Ad dolore earum ipsum unde.",
        p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi delectus deleniti dicta dolor ducimus excepturi facere in, inventore ipsa iste nemo neque nulla odio officia pariatur, perspiciatis quia quis quos rerum, sunt tenetur!Ad dolore earum ipsum unde.",
        u1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        u3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex!",
        url:"https://www.therabusiness.com/",
        img:"https://placehold.it/66x66",
        description:"There’s a lot of opportunity here to work on a wide range of very challenging projects and to grow quickly."
    },
    
]

export default jobs;