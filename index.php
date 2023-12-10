<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JSON API US Population </title>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script type="text/javascript" src= 
"https://code.jquery.com/jquery-1.12.0.min.js"> 
    </script> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width,  
                                   initial-scale=1"> 
    <script src= 
"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"> 
    </script> 
</head>
<body>
<div class="container">
<canvas id="bar-chart"> 
    </canvas> 

    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="idNo"></th>
      <td id="name"></td>
      <td id="count"></td>
    </tr>
    
  </tbody>
</table>

</div>
<!-- jQuery library -->
<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
</body>
</html>