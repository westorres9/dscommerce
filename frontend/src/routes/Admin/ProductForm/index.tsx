import './styles.css';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as productService from '../../../services/product-service';
import * as categoryService from '../../../services/category-service';
import {dirtyAndValidate} from "../../../utils/forms";
import FormTextArea from "../../../components/FormTextArea";
import {Category} from "../../../types/category";
import FormSelect from "../../../components/FormSelect";

export default function ProductForm() {

    const params = useParams();

    const isEditing = params.productId !== 'create';

    const [categories, setCategories] = useState<Category[]>([]);

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                return /^.{3,80}$/.test(value);
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (value: any) {
                return Number(value) > 0;
            },
            message: "Favor informe um preço positivo"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
            validation: function (value: string) {
                return /^.{3,80}$/.test(value);
            },
            message: "Favor informar uma URL de imagem válida"
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (value: string) {
                return /^.{10,}$/.test(value);
            },
            message: "A descrição deve ter pelo menos 10 caracteres"
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function (value: Category[]) {
                return value.length > 0;
            },
            message: "Escolha pelo menos uma categoria"
        }
    })

    useEffect(() => {
        categoryService.findAllRequest()
            .then(response => {
                setCategories(response.data);
            })
    }, [])

    useEffect(() => {
        const result = forms.toDirty(formData, "price");
        console.log(result);

        if(isEditing) {
            productService.findById(Number(params.productId))
                .then(response => {
                    const newFormData = forms.updateAll(formData, response.data)
                    setFormData(newFormData);
                })
        }
    },[])

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        const result = forms.updateAndValidate(formData, name, value);
        setFormData(result);
    }

    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }

    return (
        <main>
            <section id="product-form-section" className="dsc-container">
                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form">
                        <h2>Dados do produto</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    { ...formData.name }
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                />
                                <div className="dsc-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    { ...formData.price }
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                />
                                <div className="dsc-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    { ...formData.imgUrl }
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                />
                                <div className="dsc-form-error">{formData.imgUrl.message}</div>
                            </div>
                            <div>
                                <FormSelect
                                    { ...formData.categories }
                                    className="dsc-form-control"
                                    options={categories}
                                    onChange={(obj: any) => {
                                        const newFormdata = forms.updateAndValidate(formData, "categories", obj);
                                        setFormData(newFormdata);
                                    }}
                                    onTurnDirty={handleTurnDirty}
                                    isMulti
                                    getOptionLabel={(obj: any) => obj.name }
                                    getOptionValue={(obj: any) => String(obj.id)}
                                />
                                <div className="dsc-form-error">{formData.categories.message}</div>
                            </div>
                            <div>
                                <FormTextArea
                                    { ...formData.description }
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    className="dsc-form-control dsc-textarea"
                                />
                                <div className="dsc-form-error">{formData.description.message}</div>
                            </div>

                        </div>

                        <div className="dsc-product-form-buttons">
                            <Link to="/admin/products">
                                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
                            </Link>

                            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}