package com.example.restra;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingCon {
	@Autowired
	BookingSer bs;
	
	@PostMapping("/book")
	public void booking(@RequestBody Booking b) {
		bs.booking(b);
	}
	
	 @GetMapping("/bookall")
	    public List<Booking> getAllBookings() {
	        return bs.getAllBookings();
	    }

	   

	    @PostMapping("/add")
	    public Booking addBooking(@RequestBody Booking Booking) {
	        return bs.addBooking(Booking);
	    }

	    @PutMapping("/bookupdate/{id}")
	    public Booking updateBooking(@PathVariable Integer id, @RequestBody Booking Booking) {
	        return bs.updateBooking(id, Booking);
	    }

	    @DeleteMapping("/bookdelete/{id}")
	    public ResponseEntity<Void> deleteBooking(@PathVariable Integer id) {
	        bs.deleteBooking(id);
	        return ResponseEntity.noContent().build();
	    }
	

}
