<?php
    use Slim\Http\Request;
    use Slim\Http\Response;
   
    
    $app->options('/{routes:.+}', function ($request, $response, $args) {
                  return $response;
                  });
    $app->add(function ($req, $res, $next) {
              $response = $next($req, $res);
              return $response
              ->withHeader('Access-Control-Allow-Origin', '*')
              ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
              ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
              });
    
    //----------------------------------------------------------------------------
   //GET ALL INFO
    $app->get('/account/{username}/{type}', function ($request, $response, $args){
              $username = $request->getAttribute('username');
              $type = $request->getAttribute('type');
              $parent = "parent";
              $sth = $this->dbConn->prepare("SELECT * FROM accounts WHERE username = '$username'" );
              $sth->execute();
              $output = $sth->fetchAll();
              
              if($type == $parent){
                  $sth2 = $this->dbConn->prepare("SELECT * FROM child_info WHERE username = '$username'" );
                  $sth2->execute();
                  $output2 = $sth2->fetchAll();
              
                  $sth3 = $this->dbConn->prepare("SELECT * FROM payment_info WHERE username = '$username'" );
                  $sth3->execute();
                  $output3 = $sth3->fetchAll();
              }
              else{
                  $sth2 = $this->dbConn->prepare("SELECT * FROM nanny_info WHERE username = '$username'" );
                  $sth2->execute();
                  $output2 = $sth2->fetchAll();
              
                  $sth3 = $this->dbConn->prepare("SELECT * FROM deposit_info WHERE username = '$username'" );
                  $sth3->execute();
                  $output3 = $sth3->fetchAll();
              }
              
              $finaloutput= array_merge($output, $output2, $output3);
              return $this->response->withJson($finaloutput);
              });
    
    
    
    
    //----------------------------------------------------------------------------
    //ACCOUNT
    
    
    $app->post('/account/new', function ($request, $response) {
               $input = $request->getParsedBody();
               //insert information into accounts table
               $sql = "INSERT INTO accounts (username, password, firstname, lastname, age, gender, address, city, state, zip, email, phone, type) VALUES (:username, :password, :firstname, :lastname, :age, :gender, :address, :city, :state, :zip, :email, :phone, :type)";
               $sth = $this->dbConn->prepare($sql);
               $sth->bindParam("username", $input['username']);
               $sth->bindParam("password", $input['password']);
               $sth->bindParam("firstname", $input['firstname']);
               $sth->bindParam("lastname", $input['lastname']);
               $sth->bindParam("age", $input['age']);
               $sth->bindParam("gender", $input['gender']);
               $sth->bindParam("address", $input['address']);
               $sth->bindParam("city", $input['city']);
               $sth->bindParam("state", $input['state']);
               $sth->bindParam("zip", $input['zip']);
               $sth->bindParam("email", $input['email']);
               $sth->bindParam("phone", $input['phone']);
               $sth->bindParam("type", $input['type']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
    $app->get('/account', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM accounts");
              $sth->execute();
              $accounts = $sth->fetchAll();
              return $this->response->withJson($accounts);
              });
    
    
    
      //----------------------------------------------------------------------------
    //CHILDREN
    
    $app->post('/children/new', function ($request, $response) {
               $file = file_get_contents("php://input");
               $data = json_decode($file, true);
               foreach ($data["string"] as $key => $value) {
               $name = $value["name"];
               $gender = $value["gender"];
               $age = $value["age"];
               $likes = $value["likes"];
               $allergies = $value["allergies"];
               $specialReqs = $value["specialReqs"];
               $medications = $value["medications"];
               $username = $value["username"];
               $sql = "INSERT INTO child_info (name, gender, age, likes, allergies, specialReqs, medications, username) VALUES ('$name', '$gender', '$age', '$likes', '$allergies', '$specialReqs', '$medications', '$username')";
               $sth = $this->dbConn->prepare($sql);
               $sth->execute();
               }
               return $this->response->withJson($name);
               });
    
    $app->get('/children', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM child_info");
              $sth->execute();
              $child_info = $sth->fetchAll(); return $this->response->withJson($child_info);
              });
    
    $app->get('/children/{username}', function ($request, $response, $args)
              {
              $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT * FROM child_info WHERE username = '$username'");
              $sth->execute();
              $child_info = $sth->fetchAll(); return $this->response->withJson($child_info);
              });
    
    
    
      //----------------------------------------------------------------------------
    //NANNY_INFO
    $app->post('/nanny_info/new', function ($request, $response) {
               $input = $request->getParsedBody();
              $sql = "INSERT INTO nanny_info (yearsExp, minAge, maxAge, minWage, cpr, pet_friendly, can_drive, can_cook, bio, username) VALUES (:yearsExp, :minAge, :maxAge, :minWage, :cpr, :pet_friendly, :can_drive, :can_cook, :bio, :username)";
               $sth = $this->dbConn->prepare($sql);
               $sth->bindParam("yearsExp", $input['yearsExp']);
               $sth->bindParam("cpr", $input['cpr']);
               $sth->bindParam("can_cook", $input['can_cook']);
               $sth->bindParam("can_drive", $input['can_drive']);
               $sth->bindParam("pet_friendly", $input['pet_friendly']);
               $sth->bindParam("minAge", $input['minAge']);
               $sth->bindParam("maxAge", $input['maxAge']);
               $sth->bindParam("minWage", $input['minWage']);
               $sth->bindParam("bio", $input['bio']);
               $sth->bindParam("username", $input['username']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
   
    $app->get('/nanny_info', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM nanny_info");
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
              });
    
    $app->get('/nanny_info/{gender}/{minNannyAge}/{maxNannyAge}/{minChildAge}/{maxChildAge}/{experience}/{zip}', function ($request, $response, $args)
              {
              $gender = $request->getAttribute('gender');
              $minNannyAge = $request->getAttribute('minNannyAge');
              $maxNannyAge = $request->getAttribute('maxNannyAge');
              $minChildAge = $request->getAttribute('minChildAge');
              $maxChildAge = $request->getAttribute('maxChildAge');
              $experience = $request->getAttribute('experience');
              $zip = $request->getAttribute('zip');
              $sth= $this->dbConn->prepare("SELECT a.username FROM nanny_info n join accounts a on n.username = a.username where a.age between $minNannyAge and $maxNannyAge AND n.minAge <= $minChildAge and n.maxAge >= $maxChildAge and a.gender='$gender' and n.yearsExp >= $experience and a.zip = $zip ");
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
              });
    
    
    
    
    
    
     //----------------------------------------------------------------------------
    //NANNY_REFERENCES
    
    $app->post('/nanny_references/new', function ($request, $response) {
               $file = file_get_contents("php://input");
               $data = json_decode($file, true);
               foreach ($data["string"] as $key => $value) {
               $name = $value["name"];
               $email = $value["email"];
               $phone_number = $value["phone_number"];
               $username = $value["username"];
               $sql = "INSERT INTO nanny_references (name, email, phone_number, username) VALUES ('$name', '$email', '$phone_number', '$username')";
               print_r($data);
               $sth = $this->dbConn->prepare($sql);
               $sth->execute();
               }
               return $this->response->withJson($name);
               });
    
    $app->get('/nanny_references', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM nanny_references");
              $sth->execute();
              $nanny_references = $sth->fetchAll();
              return $this->response->withJson($nanny_references);
              });
    
    
    
    
    
      //----------------------------------------------------------------------------
    //PAYMENT_INFO
    $app->post('/payment_info/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO payment_info (name, address, city, state, zip, cardNumber, expiration, automatic, username) VALUES (:name, :address, :city, :state, :zip, :cardNumber, :expiration, :automatic, :username)";
               $sth = $this->dbConn->prepare($sql);
               $sth->bindParam("name", $input['name']);
               $sth->bindParam("cardNumber", $input['cardNumber']);
               $sth->bindParam("expiration", $input['expiration']);
               $sth->bindParam("address", $input['address']);
               $sth->bindParam("city", $input['city']);
               $sth->bindParam("state", $input['state']);
               $sth->bindParam("zip", $input['zip']);
               $sth->bindParam("automatic", $input['automatic']);
               $sth->bindParam("username", $input['username']);
               $sth->execute();
               return $this->response->withJson($input);
               });
               
    $app->get('/payment_info', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM payment_info");
              $sth->execute();
              $accounts = $sth->fetchAll();
              return $this->response->withJson($accounts);
              });
   
    $app->get('/accounts/payment/{username}', function ($request, $response, $args)
              {
              $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT automatic FROM payment_info where username = '$username'");
              $sth->execute();
              $accounts = $sth->fetchAll();
              return $this->response->withJson($accounts);
              });
    
    
    
      //----------------------------------------------------------------------------
   
    
//DEPOSIT_INFO

    $app->post('/deposit_info/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO deposit_info (name, accountNumber, type, routingNumber, username) VALUES (:name, :accountNumber, :type, :routingNumber, :username)";
               $sth = $this->dbConn->prepare($sql);
               $sth->bindParam("name", $input['name']);
                $sth->bindParam("accountNumber", $input['accountNumber']);
                $sth->bindParam("routingNumber", $input['routingNumber']);
                $sth->bindParam("type", $input['type']);
               $sth->bindParam("username", $input['username']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
    $app->get('/deposit_info', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM deposit_info");
              $sth->execute();
              $accounts = $sth->fetchAll();
              return $this->response->withJson($accounts);
              });
  
    
 //----------------------------------------------------------------------------
   
    
    
  

    

  
    
    //Display jobs
    $app->get('/jobs', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM jobs");
              $sth->execute();
              $jobs = $sth->fetchAll(); return $this->response->withJson($jobs);
              });
    
    //Display tasks
    $app->get('/tasks', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM tasks");
              $sth->execute();
              $tasks = $sth->fetchAll(); return $this->response->withJson($tasks);
              });
    
    //display nannys in certain zipcode
    $app->get('/nannys/zip/{zip}', function ($request, $response, $args){
              $zip = $request->getAttribute('zip');
              $sth = $this->dbConn->prepare("SELECT * FROM nanny_info WHERE zip = $zip" );
              $sth->execute();
              $zip = $sth->fetchAll();
              return $this->response->withJson($zip);
              });
    
    
    
    
    
    
    
    
    //display nannys of a certain age
    $app->get('/nannys/age_range/{lower}/{upper}', function ($request, $response, $args){
              $lower = $request->getAttribute('lower');
              $upper = $request->getAttribute('upper');
              $sth = $this->dbConn->prepare("SELECT * FROM nanny_info WHERE age between $lower AND $upper" );
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
              });
    
    
    
    
    
    

    
   
    
   
