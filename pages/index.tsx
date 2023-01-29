import { HeaderNavigation } from '../components/HeaderNavigation/HeaderNavigation';
import HeaderSearchAttributes from '../components/HeaderNavigation/HeaderNavigationAttributes.json';
import { FeaturedCollection } from '../components/Landing/FeaturedCollection';
import { FeaturedProjects } from '../components/Landing/ProjectCard';

export default function HomePage() {
  return (
    <>
    <HeaderNavigation links={HeaderSearchAttributes.links} />
    <FeaturedCollection />
    <FeaturedProjects />
    </>
  );
}
