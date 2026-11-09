export type Project = {
    id: number;
    category: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
};


export const projects: Project[] = [
    {
        id: 1,
        category: "EdTech",
        title: "School Management System for CISE",
        description: "A comprehensive school management platform built for CISE, covering student records, staff management, academic administration, and automated reporting to improve operational efficiency.",
        image: { src: "/projects/edtech-school-management-overview.png", alt: "School management system overview dashboard" },
    },
    {
        id: 2,
        category: "Enterprise ERP",
        title: "ERPNext for Import-Export Companies",
        description: "End-to-end ERPNext implementation for import-export trading companies, covering inventory, purchasing, sales, and accounting with automated workflows to maximize efficiency and accuracy.",
        image: { src: "/projects/erp-inventory-dashboard.png", alt: "ERP inventory and warehouse dashboard" },
    },
    {
        id: 3,
        category: "Healthcare Tech",
        title: "Healthcare Management Platform",
        description: "A digital healthcare solution enabling clinics and hospitals to manage patient records, appointments, and clinical workflows efficiently.",
        image: { src: "/projects/healthcare-appointments.png", alt: "Clinic appointment scheduling interface" },
    },
];
