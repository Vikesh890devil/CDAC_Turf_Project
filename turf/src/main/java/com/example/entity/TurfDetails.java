package com.example.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;

@Entity
public class TurfDetails {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition="VARCHAR(1000)")
    private String description;
    private double width;
    private double length;
    @Lob
    @Column(name = "photo", columnDefinition="LONGBLOB")
    private byte[] image;
    
    @OneToMany(mappedBy = "turf" )
	private List<Booking>  booking =new ArrayList<>();
    
    
    public TurfDetails() {
		// TODO Auto-generated constructor stub
	}

    

	public TurfDetails(Long id, String name, String description, double width, double length, byte[] image,
			List<Booking> booking) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.width = width;
		this.length = length;
		this.image = image;
		this.booking = booking;
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


	public double getWidth() {
		return width;
	}


	public void setWidth(double width) {
		this.width = width;
	}


	public double getLength() {
		return length;
	}


	public void setLength(double length) {
		this.length = length;
	}


	public byte[] getImage() {
		return image;
	}


	public void setImage(byte[] image) {
		this.image = image;
	}


	public List<Booking> getBooking() {
		return booking;
	}


	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}
	

    



}
