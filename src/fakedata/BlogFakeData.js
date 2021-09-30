import blog1 from '../Assets/images/blog1.png';
import blog2 from '../Assets/images/blog2.png';
import blog3 from '../Assets/images/blog3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faBell, faTruck } from '@fortawesome/free-solid-svg-icons';

const BlogFakeData = [
  {
    id: 1,
    img: blog1,
    title: 'Fast Delivery',
    details: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.',
    icon: <FontAwesomeIcon icon={faBus} />,
  },
  {
    id: 2,
    img: blog2,
    title: 'A Good Auto Responder',
    details: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.',
    icon: <FontAwesomeIcon icon={faBell} />,
  },
  {
    id: 3,
    img: blog3,
    title: 'Home Delivery',
    details: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.',
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
]

export default BlogFakeData;