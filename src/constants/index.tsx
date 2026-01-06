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
      'Lead architecture and delivery of a cloud-based, multi-tenant SaaS platform supporting 80,000+ users.',
      'Designed and built React, Node.js, and NestJS full-stack architecture for long-term scalability.',
      'Implemented a centralized authentication and authorization system, migrating legacy sessions to OAuth 2.0.',
      'Owned database design and tenant isolation strategy, enabling secure, scalable SaaS growth.',
      'Guided engineers and DBAs on system design, deployment strategy, and platform standards.',
    ],
    startDate: 'Mar 2022',
    endDate: 'Present',
    element: DealerOpsProductSVG,
    job: 'Senior Software Engineer',
  },
  {
    label: LABELS.PRODUCTS.SAIA,
    value: 'saia',
    link: ROUTES.SAIA,
    description: LABELS.PRODUCT_DESCRIPTIONS.SAIA,
    experience: [
      'Built a cross-platform mobile platform used by 5,000+ drivers for secure enterprise access.',
      'Introduced OAuth 2.0 and Okta-based SSO, standardizing identity across internal applications.',
      'Developed React Native and TypeScript applications with shared business logic across platforms.',
      'Improved Node.js / Express APIs supporting authentication and internal integrations.',
      'Contributed to Dockerized and Kubernetes-backed deployments for mobile and backend services.',
    ],
    startDate: 'Aug 2021',
    endDate: 'Jun 2022',
    element: SaiaProductSVG,
    job: 'React Native Developer',
  },
  {
    label: LABELS.PRODUCTS.KAHUA,
    value: 'kahua',
    link: ROUTES.KAHUA,
    description: LABELS.PRODUCT_DESCRIPTIONS.KAHUA,
    experience: [
      'Built and owned a full-stack system with React, Node.js, Express.js, and SQL Server supporting customer relationship visibility and internal operations.',
      'Led the design and execution of a 50+ TB data ETL pipeline in C#, leveraging AWS to transform legacy client data at enterprise scale.',
      'Implemented the company’s first mobile CI/CD pipeline, replacing manual build processes and improving release reliability.',
      'Developed internal tools used by support and QA teams, integrating multiple external data sources to improve operational insight.',
      'Owned and extended the internal QA platform, building custom PHP integrations to push information to Microsoft Azure.',
    ],
    startDate: 'Apr 2019',
    endDate: 'Aug 2021',
    element: KahuaProductSVG,
    job: 'Software Engineer Intern (Full-Time Equivalent)',
  },
  {
    label: LABELS.PRODUCTS.SAP,
    value: 'sap',
    link: ROUTES.SAP,
    description: LABELS.PRODUCT_DESCRIPTIONS.SAP,
    experience: [
      'Led the mobile automation implementation, delivering system and performance improvements.',
      'Helped support a cross-platform inventory management system and SDK with a shared C++ core across mobile and desktop clients.',
      'Established automated testing and CI/CD pipelines using Jenkins for mobile applications.',
      'Integrated with SQL Server and packages supporting enterprise inventory workflows.',
      'Collaborated with senior engineers on system design and object-oriented architecture.',
    ],
    startDate: 'Jul 2018',
    endDate: 'Mar 2019',
    element: SAPProductSVG,
    job: 'Software Engineer Intern (Full-Time Equivalent)',
  },
];
