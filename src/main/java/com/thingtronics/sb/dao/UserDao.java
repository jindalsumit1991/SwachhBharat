package com.thingtronics.sb.dao;

import com.thingtronics.sb.model.Login;
import com.thingtronics.sb.model.User;

public interface UserDao {
  void register(User user);
  User validateUser(Login login);
}