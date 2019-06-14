<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.sparrowzoo.com/ui" prefix="j" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
          content="A layout example with a side menu that hides on mobile, just like the Pure website.">
    <title>Sparrow DatePicker &ndash; Sparrow JS Framework</title>
    <jsp:include page="${root_path}/examples/head.jsp"/>
</head>

<body>

<div id="layout">
    <jsp:include page="${root_path}/examples/menu.jsp"/>
    <div id="main">
        <div class="header">
            <h1>日期控件</h1>
            <h2>windows 日期选择控件</h2>
        </div>

        <div class="content">
            <input type="text" id="txtDatePicker"/>
        </div>

    </div>
</div>
</body>

<script type="text/javascript">
    var datePicker = new DatePicker("datePicker");
    window.onload = function () {
        datePicker.config.srcElement = $("txtDatePicker");
        datePicker.init();
    }
</script>
</html>
