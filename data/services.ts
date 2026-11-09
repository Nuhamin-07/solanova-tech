export type Service = {
    id: number;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    overview: string;
    capabilities: string[];
};

export type ServiceCardProps = {
    service: Service;
};

export const services: Service[] = [
    {
        id: 1,
        title: "Custom Software Development",
        description: "Purpose-built software shaped around your business goals, workflows, and customers.",
        image: {
            src: "/services/custom-software-development.png",
            alt: "Custom software development illustration",
        },
        overview: "When off-the-shelf tools do not fit, custom software can bring your processes together and support the way your business actually works. We help shape the right product, then build it with a focus on usability, reliability, and future growth.",
        capabilities: [
            "Business-specific web platforms and internal tools",
            "Workflow automation and system integrations",
            "Product planning, development, and ongoing improvements",
        ],
    },
    {
        id: 2,
        title: "SaaS Platform Development",
        description: "Scalable cloud software designed to serve users, teams, or organizations through a shared platform.",
        image: {
            src: "/services/saas-platform-development.png",
            alt: "SaaS platform development illustration",
        },
        overview: "We design and build software-as-a-service products that are accessible through the cloud and ready to evolve with your users. From early product planning through implementation, we focus on a reliable platform and a clear experience.",
        capabilities: [
            "SaaS product planning and technical architecture",
            "Cloud-based platform and account experiences",
            "Scalable foundations and ongoing product improvements",
        ],
    },
    {
        id: 3,
        title: "Mobile App Development",
        description: "Intuitive mobile experiences that help your customers and team get things done on the go.",
        image: {
            src: "/services/mobile-app-development.png",
            alt: "Mobile app development illustration",
        },
        overview: "We create mobile applications around the needs of your users and the goals of your business. From planning the experience to building and refining the app, we focus on intuitive journeys, dependable performance, and maintainable foundations.",
        capabilities: [
            "Mobile product planning and user flows",
            "Customer-facing and internal mobile applications",
            "App implementation, refinement, and ongoing improvements",
        ],
    },
    {
        id: 4,
        title: "Web Application Development",
        description: "Modern, responsive web applications built around your users and business workflows.",
        image: {
            src: "/services/web-application-development.png",
            alt: "Web application development illustration",
        },
        overview: "We build web applications that make business processes and digital services easier to use. Each application is designed for responsive access, clear workflows, and room to grow as your needs change.",
        capabilities: [
            "Responsive web application design and development",
            "Business tools, portals, and digital services",
            "Integrations, maintenance, and iterative improvements",
        ],
    },
];
