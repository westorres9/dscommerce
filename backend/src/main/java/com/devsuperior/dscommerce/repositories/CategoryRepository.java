package com.devsuperior.dscommerce.repositories;

import com.devsuperior.dscommerce.entities.Category;
import com.devsuperior.dscommerce.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT obj FROM Category obj "
            + "WHERE UPPER(obj.name) LIKE UPPER(CONCAT('%', :name, '%'))")
    List<Category> searchByName(String name);
}
