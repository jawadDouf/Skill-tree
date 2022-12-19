<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1><%= "Hello World!" %>
    <form action="addStudent">
        <input name="f_name" />
        <input name="l_name" />
        <input name="email" />
        <input name="password" />
        <input type="submit">
    </form>
</h1>
<br/>

</body>
</html>