import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'orders',
    path: '/user',
    icon: icon('ic_order'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_product'),
  },
  {
    title: 'categories',
    path: '#',
    icon: icon('ic_categories'),
  },
  {
    title: 'customers',
    path: '#',
    icon: icon('ic_customer'),
  },
  {
    title: 'reports',
    path: '#',
    icon: icon('ic_report'),
  },
  {
    title: 'coupons',
    path: '#',
    icon: icon('ic_coupons'),
  },
  {
    title: 'inbox',
    path: '#',
    icon: icon('ic_inbox'),
  },
  {
    title:'Other information',
    type:'separater'
  },
  {
    title: 'knowledge base',
    path: '#',
    icon: icon('ic_knowledge'),
  },
  {
    title: 'product updates',
    path: '#',
    icon: icon('ic_p_update'),
  },
  {
    title:'Settings',
    type:'separater'
  },
  {
    title: 'personal settings',
    path: '#',
    icon: icon('ic_personal'),
  },
  {
    title: 'global settings',
    path: '#',
    icon: icon('ic_setting'),
  },
];

export default navConfig;
