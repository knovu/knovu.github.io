import { toLower } from 'lodash';
import type { To } from 'react-router';

// Product
import DealerOpsProductSVG from '../assets/products/imgs/dealerops-product.svg';
import SaiaProductSVG from '../assets/products/imgs/saia-product.svg';
import KahuaProductSVG from '../assets/products/imgs/kahua-product.svg';
import SAPProductSVG from '../assets/products/imgs/sap-product.svg';

export const LABELS = {
  NAME: 'Jess Graham',
  NAVIGATION: {
    HOME: 'Home',
    CAREER: 'Career',
    PROJECTS: 'Projects',
    BLOG: 'Blog',
    CONTACT: 'Contact',
  },
  BUTTONS: {
    SUBMIT: 'Submit',
    CANCEL: 'Cancel',
    NEXT: 'Next',
    PREVIOUS: 'Previous',
  },
  MESSAGES: {
    WELCOME: 'Welcome to my portfolio!',
    LOADING: 'Loading, please wait...',
    SUCCESS: 'Operation completed successfully!',
    ERROR: 'Something went wrong. Please try again.',
    EMPTY_STATE: 'No items found.',
  },
  FORMS: {
    NAME: 'Full Name',
    EMAIL: 'Email Address',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm Password',
  },
  TITLES: {
    PAGE_HOME: 'Welcome Home',
    PAGE_CAREER: 'Explore Career Opportunities',
    PAGE_PROJECTS: 'Our Projects',
    PAGE_BLOG: 'Insights & Blog',
  },
  PRODUCTS: {
    DEALEROPS: 'DealerOps',
    SAIA: 'Saia',
    KAHUA: 'Kahua',
    SAP: 'SAP',
  },
  PRODUCT_DESCRIPTIONS: {
    DEALEROPS:
      'A software company providing cloud‑based analytics and reporting solutions that help automotive dealerships track, manage, and optimize performance across operations.',
    SAIA: 'A U.S. less‑than‑truckload (LTL) freight and logistics company providing regional and national transportation services for shipments across North America.',
    KAHUA:
      'A cloud‑based construction project and program management platform used to plan, collaborate, and deliver complex capital projects efficiently.',
    SAP: 'A global enterprise software company that provides solutions for ERP, analytics, supply chain, and business operations used by organizations worldwide.',
  },
} as const;

export const ROUTES = {
  INDEX: '/',
  CAREER: '/career',
  PROJECTS: '/projects',
  BLOG: '/blog',
  GITHUB: 'https://github.com/knovu',
  LINKEDIN: 'https://www.linkedin.com/in/jess-graham-a6a489141',
  EMAIL: `mailto:jess.graham.biz@gmail.com?subject=%F0%9F%93%9D%20Let's%20Connect%20About%20Opportunities&body=Hi%20Jess,%0D%0A%0D%0AI%20came%20across%20your%20website%20and%20would%20love%20to%20connect%20regarding%20a%20potential%20opportunity.%20Please%20find%20the%20details%20below:%0D%0A%0D%0A1.%20Your%20Name:%0D%0A2.%20Company/Organization:%0D%0A3.%20Role/Opportunity:%0D%0A4.%20Preferred%20Date/Time%20for%20a%20Call:%0D%0A5.%20Additional%20Notes:%0D%0A%0D%0AI%20look%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0AThank%20you,%0D%0A%5BYour%20Name%5D`,

  // Products
  DEALEROPS: 'https://www.dealerops.com',
  SAIA: 'https://www.saia.com',
  KAHUA: 'https://www.kahua.com',
  SAP: 'https://www.sap.com',
} as const;

export const MAX_WIDTH = 1700;

export interface INavItem {
  label?: string;
  to: To;
}

export const NAV: INavItem[] = [
  {
    label: toLower(LABELS.NAVIGATION.HOME),
    to: ROUTES.INDEX,
  },
  {
    label: toLower(LABELS.NAVIGATION.CAREER),
    to: ROUTES.CAREER,
  },
  {
    label: toLower(LABELS.NAVIGATION.PROJECTS),
    to: ROUTES.PROJECTS,
  },
  {
    label: toLower(LABELS.NAVIGATION.BLOG),
    to: ROUTES.BLOG,
  },
] as const;

export interface IProductItem {
  label: string;
  value: string;
  link: string;
  description: string;
  experience: string[];
  startDate: Date | string;
  endDate: Date | string;
  element: string;
  job: string;
}

export const PRODUCTS: IProductItem[] = [
  {
    label: LABELS.PRODUCTS.DEALEROPS,
    value: 'dealerops',
    link: ROUTES.DEALEROPS,
    description: LABELS.PRODUCT_DESCRIPTIONS.DEALEROPS,
    experience: [
      'Led architecture and end-to-end delivery of a greenfield multi-tenant SaaS product serving 80,000+ active users and millions of monthly requests.',
      'Architected and shipped React, Next.js, and NestJS applications, including a high-performance marketing product and GraphQL API layer.',
      'Designed secure tenant isolation, scalable data models, and product-wide engineering standards.',
      'Owned authentication modernization, migrating legacy session systems to OAuth 2.0-based centralized identity.',
      'Mentored engineers and drove cross-functional technical direction to support long-term product growth.',
    ],
    startDate: 'Mar 2022',
    endDate: 'Present',
    element: DealerOpsProductSVG,
    job: 'Senior Full Stack Engineer',
  },
  {
    label: LABELS.PRODUCTS.SAIA,
    value: 'saia',
    link: ROUTES.SAIA,
    description: LABELS.PRODUCT_DESCRIPTIONS.SAIA,
    experience: [
      'Architected and delivered a cross-platform React Native product used daily by 5,000+ enterprise users.',
      'Built reusable TypeScript components and Node.js/Express APIs powering mobile and B2B systems.',
      'Implemented OAuth 2.0 and Okta SSO to standardize enterprise identity and security.',
      'Contributed to Dockerized and Kubernetes-backed deployments for scalable mobile and backend services.',
      'Partnered with stakeholders to translate complex workflows into production-grade mobile experiences.',
    ],
    startDate: 'Aug 2021',
    endDate: 'Jun 2022',
    element: SaiaProductSVG,
    job: 'Full Stack Engineer',
  },
  {
    label: LABELS.PRODUCTS.KAHUA,
    value: 'kahua',
    link: ROUTES.KAHUA,
    description: LABELS.PRODUCT_DESCRIPTIONS.KAHUA,
    experience: [
      'Built and owned a full-stack internal product supporting customer visibility and operational workflows.',
      'Architected and executed a 50+ TB enterprise ETL migration pipeline in C# on AWS.',
      'Designed and launched the company’s first mobile CI/CD pipeline, improving release velocity and reliability.',
      'Developed internal QA and support tooling integrating multiple enterprise data sources.',
      'Led system integrations across ticketing and internal ecosystems to enable scalable operations.',
    ],
    startDate: 'Apr 2019',
    endDate: 'Aug 2021',
    element: KahuaProductSVG,
    job: 'Software Engineer (Promoted from Intern)',
  },
  {
    label: LABELS.PRODUCTS.SAP,
    value: 'sap',
    link: ROUTES.SAP,
    description: LABELS.PRODUCT_DESCRIPTIONS.SAP,
    experience: [
      'Engineered mobile automation frameworks improving regression coverage and release velocity.',
      'Contributed to a cross-platform inventory system and SDK with a shared C++ core across Android and WPF clients.',
      'Established CI/CD pipelines using Jenkins for enterprise mobile applications.',
      'Delivered production Android features integrated with SQL Server–backed services.',
      'Collaborated on system architecture and object-oriented design for scalable inventory workflows.',
    ],
    startDate: 'Jul 2018',
    endDate: 'Mar 2019',
    element: SAPProductSVG,
    job: 'Software Engineer (Promoted from Intern)',
  },
];
