export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;0,700;1,300&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <title>Nikol photo</title>
  <script src="/static/client.js" type="application/javascript"></script>
</head>

<body>
  <div id="react_root">${content}</div>
</body>

</html>
`;
