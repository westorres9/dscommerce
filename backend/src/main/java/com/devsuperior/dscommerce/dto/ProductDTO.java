package com.devsuperior.dscommerce.dto;

import com.devsuperior.dscommerce.entities.Category;
import com.devsuperior.dscommerce.entities.Product;

import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProductDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @Size(min = 3,max = 80, message = "Campo deve ter entre 3 e 80 caracteres")
    @NotNull(message = "nome do produto nao pode ser nulo")
    @NotBlank(message = "Campo deve ser preenchido")
    private String name;

    @NotBlank(message = "Campo deve ser preenchido")
    private String description;

    @NotNull(message = "preço do produto nao pode ser nulo")
    @Positive(message = "Valor deve ser positivo")
    private Double price;

    @NotNull(message = "imagem do produto nao pode ser nula")
    @NotBlank(message = "Campo deve ser preenchido")
    private String imgUrl;

    @NotEmpty(message = "Deve ter pelo menos uma categoria")
    private List<CategoryDTO> categories = new ArrayList<>();

    public ProductDTO(){
    }

    public ProductDTO(Long id, String name, String description, Double price, String imgUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    public ProductDTO(Product entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.price = entity.getPrice();
        this.imgUrl = entity.getImgUrl();
        for (Category cat : entity.getCategories()) {
            categories.add(new CategoryDTO(cat));
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public List<CategoryDTO> getCategories() {
        return categories;
    }
}
