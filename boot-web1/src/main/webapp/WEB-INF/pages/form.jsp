<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="s" %>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Customer form</title>
</head>
<body>
<h2>Adding new customer</h2>
<s:form method="post" modelAttribute="customer">
	Name : <s:input path="firstName"/>
	<s:input path="lastName"/>	<br/>
	Phone : <s:input path="phoneNo"/><br/>
	EMail : <s:input path="email"/><br/>
	<input type="submit" value="Save"/>
</s:form>
</body>
</html>