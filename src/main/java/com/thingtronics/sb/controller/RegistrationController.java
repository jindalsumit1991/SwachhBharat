package com.thingtronics.sb.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.thingtronics.sb.dao.UserDao;
import com.thingtronics.sb.domain.RegisterResponse;
import com.thingtronics.sb.model.User;

@RestController
@CrossOrigin
public class RegistrationController {

	private static Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	@Autowired
	public UserDao userService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView showHome(HttpServletRequest request, HttpServletResponse response) {
		logger.info("IN RegistrationController.showHome()");
		ModelAndView mav = new ModelAndView("home");
		logger.info("OUT RegistrationController.showHome()");
		return mav;
	}
	
	/*
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView showRegister(HttpServletRequest request, HttpServletResponse response) {
		logger.info("IN RegistrationController.showRegister()");
		ModelAndView mav = new ModelAndView("register");
		mav.addObject("user", new User());
		logger.info("OUT RegistrationController.showRegister()");
		return mav;
	}
	*/

	@RequestMapping(value = "/registerUser", method = RequestMethod.POST)
	public RegisterResponse addUser(@RequestBody User user) {
		logger.info("IN RegistrationController.addUser()");
		RegisterResponse response = new RegisterResponse();
		userService.register(user);
		logger.info("Username: " + user.getUsername());
		logger.info("Password: " + user.getPassword());
		logger.info("First Name: " + user.getFirstname());
		logger.info("Last Name: " + user.getLastname());
		logger.info("Address: " + user.getAddress());
		logger.info("Phone: " + user.getPhone());
		logger.info("AuthLevel: " + user.getAuthlevel());
		logger.info("OUT RegistrationController.addUser()");
		response.setName(user.getFirstname() + " " + user.getLastname());
		return response;
	}
}