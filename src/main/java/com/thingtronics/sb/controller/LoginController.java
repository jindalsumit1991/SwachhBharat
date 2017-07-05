package com.thingtronics.sb.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.thingtronics.sb.dao.UserDao;
import com.thingtronics.sb.domain.LoginResponse;
import com.thingtronics.sb.model.Login;
import com.thingtronics.sb.model.User;

@CrossOrigin
@RestController
public class LoginController {

	private static Logger logger = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	UserDao userService;

	/*
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView showLogin(HttpServletRequest request, HttpServletResponse response) {
		logger.info("Inside showLogin() method");
		ModelAndView mav = new ModelAndView("login");
		mav.addObject("login", new Login());
		return mav;
	}
	*/

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public LoginResponse loginUser(@RequestBody Login loginRequest) {
		logger.info("in login()");
		LoginResponse response = new LoginResponse();
		User user = userService.validateUser(loginRequest);
		if (null != user) {
			response.setUserData(user);
		} else {
			response.setSuccess(false);
			response.setErrorMsg("Login failed");
		}
		logger.info("loginUser() - authlevel: " + response.getUserData().getAuthlevel());
		return response;
	}
}