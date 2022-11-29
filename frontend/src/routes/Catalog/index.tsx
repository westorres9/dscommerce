import './styles.css';
import computerImg from '../../assets/img/computer.png';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';

export default function Catalog() {
    return (
        <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar/>
        
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
          <CatalogCard/>
        </div>
                
        <ButtonNextPage/>
      </section>
    </main>
    )
} 