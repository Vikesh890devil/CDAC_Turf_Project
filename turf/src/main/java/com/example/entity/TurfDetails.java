package com.example.entity;

import java.util.Arrays;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class TurfDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long turfId;
	private String name;
	@Column(columnDefinition = "VARCHAR(1000)")
	private String description;
	private double width;
	private double length;
	@Lob
	@Column(name = "photo", columnDefinition = "LONGBLOB")
	private byte[] image;


	@ManyToOne
	@JoinColumn(name = "manager_id", referencedColumnName = "managerId")
	private ManagerRegistration manager;

	public TurfDetails() {
		// TODO Auto-generated constructor stub
	}
	

	public TurfDetails(Long turfId, String name, String description, double width, double length, byte[] image,
			ManagerRegistration manager) {
		super();
		this.turfId = turfId;
		this.name = name;
		this.description = description;
		this.width = width;
		this.length = length;
		this.image = image;
		this.manager = manager;
	}


	public Long getTurfId() {
		return turfId;
	}

	public void setTurfId(Long turfId) {
		this.turfId = turfId;
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

	public ManagerRegistration getManager() {
		return manager;
	}

	public void setManager(ManagerRegistration manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "TurfDetails [turfId=" + turfId + ", name=" + name + ", description=" + description + ", width=" + width
				+ ", length=" + length + ", image=" + Arrays.toString(image) + ", manager=" + manager + "]";
	}

}
