import './style.css'
import CatalogMovie from '../CatalogMovie'
import downArrow from './icons/down-arrow.svg'

const index = () => {
    return (
        <>
            <section className="catalog-section">
                <div className="catalog">
                    <div className="catalog-filters">
                        <div className="catalog-left-filters">
                            <div className="catalog-filter">
                                <img src={downArrow} alt="down" />
                                <span>por gênero</span>
                            </div>
                            <div className="catalog-filter-trending selected">
                                <span>mais populares</span>
                            </div>
                        </div>
                        <div className="catalog-filter">
                            <img src={downArrow} alt="down" />
                            <span>em lista</span>
                        </div>
                    </div>
                    <div className="catalog-movies-container wrap">
                        <CatalogMovie/>
                        <CatalogMovie/>
                        <CatalogMovie/>
                        <CatalogMovie/>
                        <CatalogMovie/>
                    </div>
                    <div className="catalog-load-more-button">
                        <span>carregar mais</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index