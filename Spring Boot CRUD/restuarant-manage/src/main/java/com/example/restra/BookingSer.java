package com.example.restra;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


@Service
public class BookingSer {
	
	@Autowired
	BookingRepo br;
	
	public void booking(Booking b) {
		br.save(b);
	}
	
	 public List<Booking> getAllBookings() {
	        return br.findAll();
	    }

	    public Booking addBooking(Booking Booking) {
	        return br.save(Booking);
	    }

	    public Booking updateBooking(Integer id, Booking Booking) {
	        Booking existingBooking = br.findById(id).orElseThrow(() -> new RuntimeException("Booking not found"));
	        existingBooking.setName(Booking.getName());
	        existingBooking.setEmail(Booking.getEmail());
	        existingBooking.setNumber(Booking.getNumber());
	        existingBooking.setDate(Booking.getDate());
	        existingBooking.setAddress(Booking.getAddress());
	        return br.save(existingBooking);
	    }

	    public void deleteBooking(Integer id) {
	        br.deleteById(id);
	    }
}
