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
   //get account by username
    $app->get('/account/{username}', function ($request, $response, $args){
              $username = $request->getAttribute('username');
              $sth = $this->dbConn->prepare("SELECT * FROM accounts WHERE username = '$username'" );
              $sth->execute();
              $output = $sth->fetchAll();
              

                  $sth2 = $this->dbConn->prepare("SELECT * FROM child_info WHERE username = '$username'" );
                  $sth2->execute();
                  $output2 = $sth2->fetchAll();
              
                  $sth3 = $this->dbConn->prepare("SELECT * FROM payment_info WHERE username = '$username'" );
                  $sth3->execute();
                  $output3 = $sth3->fetchAll();

                  $sth4 = $this->dbConn->prepare("SELECT * FROM nanny_info WHERE username = '$username'" );
                  $sth4->execute();
                  $output4 = $sth4->fetchAll();
              
                  $sth5 = $this->dbConn->prepare("SELECT * FROM deposit_info WHERE username = '$username'" );
                  $sth5->execute();
                  $output5 = $sth5->fetchAll();
              
              $finaloutput= array_merge($output, $output2, $output3, $output4, $output5);
              return $this->response->withJson($finaloutput);
              });
    
    
    //get children by username
    $app->get('/children/{username}', function ($request, $response, $args)
              {
              $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT * FROM child_info WHERE username = '$username'");
              $sth->execute();
              $child_info = $sth->fetchAll();
              return $this->response->withJson($child_info);
              });
    
    
    //get automatic pay by username
    $app->get('/accounts/payment/{username}', function ($request, $response, $args)
              {
              $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT automatic FROM payment_info where username = '$username'");
              $sth->execute();
              $accounts = $sth->fetchAll();
              return $this->response->withJson($accounts);
              });

    
    //add account
    $app->post('/account/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $type = $input['type'];
               $username = $input ['username'];
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
               
               $parent = "parent";
               if($type == $parent){
                    $children = $input['children'];
                    foreach ($children as $key => $value) {
                        $name = $value["name"];
                        $gender = $value["gender"];
                        $age = $value["age"];
                        $likes = $value["likes"];
                        $allergies = $value["allergies"];
                        $specialReqs = $value["specialReqs"];
                        $medications = $value["medications"];
               
                        $sql3 = "INSERT INTO child_info (name, gender, age, likes, allergies, specialReqs, medications, username) VALUES ('$name', '$gender', '$age', '$likes', '$allergies', '$specialReqs', '$medications', '$username')";
                        $sth3 = $this->dbConn->prepare($sql3);
                        $sth3->execute();
                    }
               }
               else{
                   $zero = 0;
                    $yearsExp = $input['yearsExp'];
                    $cpr = $input['cpr'];
                    $can_cook = $input['can_cook'];
                    $can_drive = $input['can_drive'];
                    $pet_friendly = $input['pet_friendly'];
                    $minAge = $input['minAge'];
                    $maxAge = $input['minWage'];
                    $minWage = $input['minWage'];
                    $bio = $input['bio'];
                    $sql2 = "INSERT INTO nanny_info (yearsExp, minAge, maxAge, minWage, username, cpr, can_cook, can_drive, pet_friendly, bio, rating, jobs_completed, total_points) values ($yearsExp, $minAge, $maxAge, $minWage, '$username', '$cpr', '$can_cook', '$can_drive', '$pet_friendly', '$bio', 0, 0, 0)";
                   $sth2 = $this->dbConn->prepare($sql2);
               
               
               
                   $sth2->execute();
               
                    $references = $input['references'];
                    foreach ($references as $key => $value) {
                        $name2 = $value["name"];
                        $email = $value["email"];
                        $phone = $value["phone_number"];
               
                        $sql3 = "INSERT INTO nanny_references (name, email, phone_number, username) VALUES ('$name2', '$email', $phone, '$username')";
                        $sth3 = $this->dbConn->prepare($sql3);
                        $sth3->execute();
                    }
               }
               return $this->response->withJson($username);
        });
    
    
    
    
   $app->get('/account', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM accounts");
              $sth->execute();
              $accounts = $sth->fetchAll();
              return $this->response->withJson($accounts);
              });
    /*
    
    $app->put('/account/update/{username}', function ($request, $response) {
             $username = $request->getAttribute('username');
              $input = $request->getParsedBody();
              $sql = "update accounts set first_name = :first_name, last_name = :last_name, age= :age, gender = :gender, address = :address, city = :city, state = :state, zip= :zip, email= :email, phone =:phone where username = :'$username''";
              $sth = $this->dbConn->prepare($sql);
              $sth->bindParam("first_name", $input['first_name']);
              $sth->bindParam("last_name", $input['last_name']);
              $sth->bindParam("age", $input['age']);
              $sth->bindParam("gender", $input['gender']);
              $sth->bindParam("address", $input['address']);
              $sth->bindParam("city", $input['city']);
              $sth->bindParam("state", $input['state']);
              $sth->bindParam("zip", $input['zip']);
              $sth->bindParam("email", $input['email']);
              $sth->bindParam("phone", $input['phone']);
              $sth->execute();
              return $this->response->withJson($input);
              });*/

    
    
   
    $app->get('/nanny_info', function ($request, $response, $args)
              {$sth= $this->dbConn->prepare("SELECT * FROM nanny_info");
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
              });
    
    
    
    $app->get('/nanny_info/{username}', function ($request, $response, $args)
              {
               $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT * FROM nanny_info where username = '$username'");
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
              });
    
    
    
    //working
    $app->get('/search/{gender}/{minNannyAge}/{maxNannyAge}/{minChildAge}/{maxChildAge}/{experience}/{zip}', function ($request, $response, $args)
              {
              $gender = $request->getAttribute('gender');
              $minNannyAge = $request->getAttribute('minNannyAge');
              $maxNannyAge = $request->getAttribute('maxNannyAge');
              $minChildAge = $request->getAttribute('minChildAge');
              $maxChildAge = $request->getAttribute('maxChildAge');
              $experience = $request->getAttribute('experience');
              $zip = $request->getAttribute('zip');
              $sth= $this->dbConn->prepare("SELECT a.username, a.age, a.gender, a.zip, n.minAge, n.maxAge, n.yearsExp FROM nanny_info n join accounts a on n.username = a.username where a.age between $minNannyAge and $maxNannyAge AND n.minAge <= $minChildAge and n.maxAge >= $maxChildAge and a.gender='$gender' and n.yearsExp >= $experience and a.zip = $zip ");
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
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
   
    
    $app->post('/job/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $familyName = $input["familyName"];
               $description = $input["description"];
               $isComplete = "0";
               $isAccepted = "0";
               $sql = "INSERT INTO jobs (familyName, description, address, city, state, zip, duration, parentPhone, isAccepted, isComplete) VALUES ('$familyName', '$description', :address, :city, :state, :zip, :duration, :parentPhone, '$isAccepted', '$isComplete')";
               $sth = $this->dbConn->prepare($sql);
               $sth->bindParam("address", $input['address']);
               $sth->bindParam("city", $input['city']);
               $sth->bindParam("state", $input['state']);
               $sth->bindParam("zip", $input['zip']);
               $sth->bindParam("duration", $input['duration']);
               $sth->bindParam("parentPhone", $input['parentPhone']);
               $sth->execute();
               $sql2 = "select job_id from jobs where familyName = '$familyName' and description = '$description'";
               $sth2 = $this->dbConn->prepare($sql2);
                $sth2->execute();
               $jobid = $sth2->fetchAll();
               foreach ($jobid as $value) {
                    $id = $value["job_id"];
               }
               $completed = "0";
               $tasks = $input["tasks"];
               print_r($tasks);
              foreach ($tasks as $value) {
                    $name = $value["name"];
                    $time = $value["time"];
                    $day = $value["day"];
                    $location = $value["location"];
                    $description= $value["description"];
                    $sql3 = "insert into tasks (id, name, time, day, description, location, completed) values ($id, '$name', '$time', '$day', '$location', '$description', '$completed')";
                    $sth3 = $this->dbConn->prepare($sql3);
                    $sth3->execute();
               }
               return $this->response->withJson($id);//returning the id
              
               });
    
    
    
    
    
    //this add the job_id, nanny username and isAccepted into the job_requests table
    $app->put('/jobs/submitRequest', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "update jobs set nannyName = :nannyName where job_id = :job_id ";
               $sth = $this->dbConn->prepare($sql);
               $sth->bindParam("job_id", $input['job_id']);
               $sth->bindParam("nannyName", $input['nannyName']);
               $sth->execute();
               });
  
  
    
    //when a job is accepted, the nanny username and nanny phone number is added to the job
    //also all the requests for this job are deleted from the job_requests table (since the job has been filled and the requests aren't needed anymore)
    $app->put('/jobs/accept/{job_id}', function ($request, $response, $args) {
              $job_id = $request->getAttribute('job_id');
              $input = $request->getParsedBody();
              $accept = "1";
              $sql = "update jobs set isAccepted = $accept where job_id = $job_id ";
              $sth = $this->dbConn->prepare($sql);
              $sth->execute();
              
              $sql2 = "update jobs set nannyPhone = :nannyPhone where job_id = '$job_id'";
              $sth2 = $this->dbConn->prepare($sql2);
              $sth2->execute();
              $sth2->bindParam("nannyPhone", $input['nannyPhone']);
              return $this->response->withJson($job_id);
              });

    
    //if a nanny declines a job the request is deleted from the job_requests table
    $app->put('/jobs/decline/{job_id}', function ($request, $response, $args) {
              $job_id = $request->getAttribute('job_id');
              $input = $request->getParsedBody();
              $pending = "pending";
              $sql = "update jobs set nannyName= '$pending' where job_id = $job_id";
              $sth = $this->dbConn->prepare($sql);
              $sth->execute();
              return $this->response->withJson($job_id);
              });
    
    
    $app->put('/jobs/complete', function ($request, $response, $args) {
              $input = $request->getParsedBody();
              $complete = "1";
              $jobId = $input['job_id'];
              $sql = "update jobs set isComplete = $complete where job_id = :job_id";
              $sth = $this->dbConn->prepare($sql);
              $sth->bindParam("job_id", $input['job_id']);
              $sth->execute();
             // return $this->response->withJson($jobId);
              });
    
    
    $app->put('/jobs/ratings/{username}', function ($request, $response, $args) {
              $username = $request->getAttribute('username');
              $input = $request->getParsedBody();
              $rating = $input ['rating'];
              $sql = "update nanny_info set jobs_completed = jobs_completed +1 where username = '$username'";
              $sth = $this->dbConn->prepare($sql);
              $sth->bindParam("rating", $input['rating']);
              $sth->execute();
              
              $sql2 = "update nanny_info set total_points = total_points + $rating where username = '$username'";
              $sth2 = $this->dbConn->prepare($sql2);
              $sth2->execute();
              
              $sql3 = "update nanny_info set rating = nanny_info.total_points/ nanny_info.jobs_completed where username = '$username'";
              $sth3 = $this->dbConn->prepare($sql3);
              $sth3->execute();
              // return $this->response->withJson($jobId);
              });

    
  
    
    //Display jobs by parent username
    $app->get('/jobs/parent/{username}', function ($request, $response, $args)
              {
              $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT * FROM jobs where familyName = '$username' ");
              $sth->execute();
              $jobs = $sth->fetchAll();
              return $this->response->withJson($jobs);
              });
    
    //display jobs by nanny username
    $app->get('/jobs/nanny/{username}', function ($request, $response, $args)
              {
              $username = $request->getAttribute('username');
              $sth= $this->dbConn->prepare("SELECT * FROM jobs where nannyName = '$username'");
              $sth->execute();
              $jobs = $sth->fetchAll();
              return $this->response->withJson($jobs);
              });
    
    
    //display tasks for a job id
    $app->get('/tasks/{job_id}', function ($request, $response, $args)
              {
              $job_id = $request->getAttribute('job_id');
              $sth= $this->dbConn->prepare("SELECT * FROM tasks where id = $job_id");
              $sth->execute();
              $tasks = $sth->fetchAll();
              print_r($tasks);
              return $this->response->withJson($tasks);
              });
    
    //----------------------------------------------------------------------------

    

    
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
    
    
   $app->post('/login', function ($request, $response) {
               $input = $request->getParsedBody();
               $username = $input ['username'];
               $password = $input['password'];
               $sql = "SELECT type FROM accounts WHERE username='$username' AND password='$password' ";
               $sth = $this->dbConn->prepare($sql);
               $sth->execute();
               $type = $sth->fetchAll();
               foreach ($type as $value){
                    $t = $value['type'];
               }
               return $this->response->withJson($t);
               });
    
    
    $app->put('/jobs/update/{job_id}', function ($request, $response, $args) {
              $job_id = $request->getAttribute('job_id');
              $input = $request->getParsedBody();
              $complete = "1";
              echo $complete;
              $task= $input['task'];
              $name = $task['name'];
              echo $name;
              $day = $task['day'];
              echo $day;
              $sql = "update tasks set completed = '$complete' where name = '$name' and day = '$day' and id = $job_id";
              $sth = $this->dbConn->prepare($sql);
              $sth->execute();
              });
    
    
    
   
    
   
