package com.test.poop;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Register extends HttpServlet {
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    System.out.println(request.getAttribute("fn"));
    String firstName = request.getParameter("fn");
    String lastName = request.getParameter("ln");
    String userName = request.getParameter("un");
    String password = request.getParameter("ps");
    String date = request.getParameter("date");
    String email = request.getParameter("re");
    String aadhar = request.getParameter("aa");
    String mobile = request.getParameter("mo");
    System.out.println(userName);

    try {
    System.out.println("Inside Register");
      Class.forName("com.mysql.jdbc.Driver").newInstance();
      Connection con = DriverManager.getConnection("jdbc:mysql://localhost/test?user=sai&password=password");

      PreparedStatement ps = con.prepareStatement("insert into users values(?,?,?,?,?,?,?,?)");

      ps.setString(1, firstName);
      ps.setString(2, lastName);
      ps.setString(3, userName);
      ps.setString(4, password);
      ps.setString(5, date);
      ps.setString(6, email);
      ps.setString(7, aadhar);
      ps.setString(8, mobile);	

      int i = ps.executeUpdate();
      if (i > 0)
    	  response.sendRedirect("http://localhost:8080/Poopy/#login-page");

    } catch (Exception e2) {
      System.out.println(e2);
    }

    out.close();
  }

}