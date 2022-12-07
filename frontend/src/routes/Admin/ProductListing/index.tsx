import './styles.css';
import EditIcon from '../../../assets/img/edit.svg';
import DeleteIcon from '../../../assets/img/delete.svg';
import {useEffect, useState} from "react";
import * as productService from '../../../services/product-service';
import { Product } from '../../../types/Product';
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";


export default function ProductListing() {

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação realizada com sucesso",
    });

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<Product[]>([]);

    type QueryParams = {
        page: number;
        name: string;
    }

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ''
    })

    useEffect(()=>{
        productService.findPageRequest(queryParams.page,queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(products.concat(nextPage))
                setIsLastPage(response.data.last)
            })
    },[queryParams]);

    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParams({...queryParams,page: 0, name: searchText});
    }

    function handleNextPageClick() {
        setQueryParams({...queryParams, page: queryParams.page + 1})
    }

    function handleDialogInfoClose() {
        setDialogInfoData({...dialogInfoData, visible: false});
    }

    function handleDeleteClick() {
        setDialogInfoData({...dialogInfoData, visible: true});
    }


    return (
        <main>
            <section id="product-listing-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

                <div className="dsc-btn-page-container dsc-mb20">
                    <div className="dsc-btn dsc-btn-white">Novo</div>
                </div>

                <SearchBar onSearch={handleSearch}/>

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                    <tr>
                        <th className="dsc-tb576">ID</th>
                        <th></th>
                        <th className="dsc-tb768">Preço</th>
                        <th className="dsc-txt-left">Nome</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td className="dsc-tb576">{product.id}</td>
                                <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name}/></td>
                                <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                                <td className="dsc-txt-left">{product.name}</td>
                                <td><img className="dsc-product-listing-btn" src={EditIcon} alt="Editar"/></td>
                                <td><img onClick={handleDeleteClick} className="dsc-product-listing-btn" src={DeleteIcon} alt="Deletar"/></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                {
                    !isLastPage &&
                    <div onClick={handleNextPageClick}>
                        <ButtonNextPage />
                    </div>
                }
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo message={dialogInfoData.message} onDialogClose={handleDialogInfoClose}/>
            }
        </main>
    );
}