package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	/**
	 * Lista os produtos pelo nome em ordem crescente
	 * documentation jpa spring data para mais detalhes
	 * @return List de products
	 */
	List<Product> findAllByOrderByNameAsc();
}
