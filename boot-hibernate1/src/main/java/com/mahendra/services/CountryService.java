package com.mahendra.services;

import java.io.Serializable;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mahendra.ContinentDAO;
import com.mahendra.dao.CountryDAO;
import com.mahendra.entities.Continent;
import com.mahendra.entities.Country;

@Service
public class CountryService {
	@Autowired
	private CountryDAO dao;
	@Autowired
	private ContinentDAO dao2;
	
	
	public Country findById(Integer id) {
		Optional<Country> country= dao.findById(id);
		if(!country.isPresent()) {
			throw new RuntimeException("Country not found!");
		}
		return country.get();
	}
	
	@Transactional
	public void save(Continent continent) {
		dao2.save(continent);
	}
	
	@Transactional
	public void save(Country country) {
		Country c =dao.save(country);
		System.out.println("New country created: "+c.getId());
	}
	
	public Collection<Country> listAll(){
		return (Collection<Country>)dao.findAll();
	}
}
