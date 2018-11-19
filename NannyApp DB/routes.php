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

//---------------------------------------------------------------------------
//POST ROUTES



 //insert to login(works)
    $app->post('/login/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO login_info (account_type, username, password ) VALUES (:account_type, :username, :password)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("account_type", $input['account_type']);
               $sth->bindParam("username", $input['username']);
               $sth->bindParam("password", $input['password']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
    //Insert into parents table(works)
    $app->post('/parents/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO parent_info (username,password,first_name,last_name,age,gender,address,city,state,zip,email,phone_number)
               VALUES (:username, :password, :first_name, :last_name, :age, :gender, :address, :city, :state, :zip, :email, :phone_number)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("username", $input['username']);
               $sth->bindParam("password", $input['password']);
               $sth->bindParam("first_name", $input['first_name']);
               $sth->bindParam("last_name", $input['last_name']);
               $sth->bindParam("age", $input['age']);
               $sth->bindParam("gender", $input['gender']);
               $sth->bindParam("address", $input['address']);
               $sth->bindParam("city", $input['city']);
               $sth->bindParam("state", $input['state']);
               $sth->bindParam("zip", $input['zip']);
               $sth->bindParam("email", $input['email']);
               $sth->bindParam("phone_number", $input['phone_number']);
               $sth->execute();
               return $this->response->withJson($input);
               });

    
    //Insert into Children Table(Works)
    $app->post('/children/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO child_info (parent_username,name,gender,age,likes,allergies,medications,special_requirements)
               VALUES (:parent_username, :name, :gender, :age, :likes, :allergies, :medications, :special_requirements) ";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("parent_username", $input['parent_username']);
               $sth->bindParam("name", $input['name']);
               $sth->bindParam("gender", $input['gender']);
               $sth->bindParam("age", $input['age']);
               $sth->bindParam("likes", $input['likes']);
               $sth->bindParam("allergies", $input['allergies']);
               $sth->bindParam("medications", $input['medications']);
               $sth->bindParam("special_requirements", $input['special_requirements']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
	//Insert new Nanny(Works)
    $app->post('/nannys/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO nanny_info (username,password,first_name,last_name,age,gender,address,city,state,zip,email,phone_number)
               VALUES (:username, :password, :first_name, :last_name, :age, :gender, :address, :city, :state, :zip, :email, :phone_number)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("username", $input['username']);
               $sth->bindParam("password", $input['password']);
               $sth->bindParam("first_name", $input['first_name']);
               $sth->bindParam("last_name", $input['last_name']);
               $sth->bindParam("age", $input['age']);
               $sth->bindParam("gender", $input['gender']);
               $sth->bindParam("address", $input['address']);
               $sth->bindParam("city", $input['city']);
               $sth->bindParam("state", $input['state']);
               $sth->bindParam("zip", $input['zip']);
               $sth->bindParam("email", $input['email']);
               $sth->bindParam("phone_number", $input['phone_number']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
    //Insert new references(works)
    $app->post('/references/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO nanny_references (nanny_username, name, phone_number, email)
               VALUES (:nanny_username, :name, :phone_number, :email)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("nanny_username", $input['nanny_username']);
               $sth->bindParam("name", $input['name']);
               $sth->bindParam("phone_number", $input['phone_number']);
               $sth->bindParam("email", $input['email']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
	//Insert new skills(works)
    $app->post('/skills/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO skills (nanny_username, cpr, can_cook, can_drive, pet_friendly) VALUES (:nanny_username, :cpr, :can_cook, :can_drive, :pet_friendly)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("nanny_username", $input['nanny_username']);
               $sth->bindParam("cpr", $input['cpr']);
               $sth->bindParam("can_cook", $input['can_cook']);
               $sth->bindParam("can_drive", $input['can_drive']);
               $sth->bindParam("pet_friendly", $input['pet_friendly']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
    
    //Insert new job(works)
    $app->post('/jobs/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO jobs (parent_username, nanny_username, parent_phone, nanny_phone, address, city, state, zip, is_accepted, is_complete)
               VALUES (:parent_username, :nanny_username, :parent_phone, :nanny_phone, :address, :city, :state, :zip, :is_accepted, :is_complete)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("parent_username", $input['parent_username']);
               $sth->bindParam("nanny_username", $input['nanny_username']);
               $sth->bindParam("parent_phone", $input['parent_phone']);
               $sth->bindParam("nanny_phone", $input['nanny_phone']);
               $sth->bindParam("address", $input['address']);
               $sth->bindParam("city", $input['city']);
               $sth->bindParam("state", $input['state']);
               $sth->bindParam("zip", $input['zip']);
               $sth->bindParam("is_accepted", $input['is_accepted']);
               $sth->bindParam("is_complete", $input['is_complete']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
	//Insert new task(Works)
    $app->post('/tasks/new', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "INSERT INTO tasks (job_id, task_name, task_time, task_day, description, location, completed)
               VALUES (:job_id, :task_name, :task_time, :task_day, :description, :location, :completed)";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("job_id", $input['job_id']);
               $sth->bindParam("task_name", $input['task_name']);
               $sth->bindParam("task_time", $input['task_time']);
               $sth->bindParam("task_day", $input['task_day']);
               $sth->bindParam("description", $input['description']);
               $sth->bindParam("location", $input['location']);
               $sth->bindParam("completed", $input['completed']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
    
   //----------------------------------------------------------------
   //GET ROUTES
	
    
    //check
    //Display login
    $app->get('/login', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM login_info");
              $sth->execute();
              $parent_info = $sth->fetchAll(); return $this->response->withJson($parent_info);
              });
    
    //check
    //Display parents
    $app->get('/parents', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM parent_info");
              $sth->execute();
              $parent_info = $sth->fetchAll(); return $this->response->withJson($parent_info);
              });
    
    
    //Display Children
    $app->get('/children', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM child_info");
              $sth->execute();
              $child_info = $sth->fetchAll(); return $this->response->withJson($child_info);
              });
    
    //check
    //Display Nanny Info
    $app->get('/nannys', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM nanny_info");
              $sth->execute();
              $nanny_info = $sth->fetchAll(); 
			  return $this->response->withJson($nanny_info);
              });
    
    //check
    //Display References
    $app->get('/references', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM nanny_references");
              $sth->execute();
              $nanny_references = $sth->fetchAll(); return $this->response->withJson($nanny_references);
              });
    
    //Display Skills
    $app->get('/skills', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM skills");
              $sth->execute();
              $skills = $sth->fetchAll(); return $this->response->withJson($skills);
              });
    
    //Display jobs
    $app->get('/jobs', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM jobs");
              $sth->execute();
              $skills = $sth->fetchAll(); return $this->response->withJson($skills);
              });
    
    //Display tasks
    $app->get('/tasks', function ($request, $response, $args)
              {$sth= $this->db->prepare("SELECT * FROM tasks");
              $sth->execute();
              $skills = $sth->fetchAll(); return $this->response->withJson($skills);
              });
    
	//Show all children associated with a parent
	$app->get('/accounts/children/[{username}]', function ($request, $response, $args) 
		{$sth = $this->db->prepare("Select * From child_info where parent_username=:username");
		 $sth->bindParam("username", $args['username']);
		 $sth->execute();
		 $user = $sth->fetchObject();
		 return $this->response->withJson($user);
		 });
		 
	//Show if user has autopay enabled
	$app->get('/accounts/payments/[{username}]', function ($request, $response, $args) 
		{$sth = $this->db->prepare("select automatic from payment_info where payment_info.username = :username");
		 $sth->bindParam("username", $args['username']);
		 $sth->execute();
		 $user = $sth->fetchObject();
		 return $this->response->withJson($user);
		 });
	
	//Display parents with specific username and display all their info
	$app->get('/accounts/parents/[{username}]', function ($request, $response, $args) 
		{$sth = $this->db->prepare("Select * From parent_info Join child_info on parent_info.username = child_info.parent_username 
		Join payment_info on child_info.parent_username = payment_info.username where parent_info.username=:username;");
		 $sth->bindParam("username", $args['username']);
		 $sth->execute();
		 $user = $sth->fetchObject();
		 return $this->response->withJson($user);
		 });
		 
	//Display nannys with specific username and display all their info
	$app->get('/accounts/nannys/[{username}]', function ($request, $response, $args) 
		{$sth = $this->db->prepare("Select * From nanny_info Join skills on nanny_info.username = skills.nanny_username Join nanny_references on 
		skills.nanny_username = nanny_references.nanny_username where nanny_info.username=:username");
		 $sth->bindParam("username", $args['username']);
		 $sth->execute();
		 $user = $sth->fetchObject();
		 return $this->response->withJson($user);
		 });
	
	
	//display nannys in certain zipcode
    $app->get('/nannys/{zip}', function ($request, $response, $args){
              $zip = $request->getAttribute('zip');
              $sth = $this->db->prepare("SELECT * FROM nanny_info WHERE zip = $zip" );
              $sth->execute();  
              $zip = $sth->fetchAll();
              return $this->response->withJson($zip);
              });
    
    //display nannys of a certain age
    $app->get('/nannys/age_range/{lower}/{upper}', function ($request, $response, $args){
              $lower = $request->getAttribute('lower');
              $upper = $request->getAttribute('upper');
              $sth = $this->db->prepare("SELECT * FROM nanny_info WHERE age between $lower AND $upper" );
              $sth->execute();
              $nanny_info = $sth->fetchAll();
              return $this->response->withJson($nanny_info);
              });
	
    
	//---------------------------------------
	//PUT ROUTES
	
	
    //updates parent_info
    $app->put('/parents/update', function ($request, $response) {
              $input = $request->getParsedBody();
              $sql = "update parent_info set first_name = :first_name, last_name = :last_name, age= :age, gender = :gender, address = :address, city = :city, state = :state, zip= :zip, email= :email, phone_number =:phone_number where username = :username";
              $sth = $this->db->prepare($sql);
              $sth->bindParam("username", $input['username']);
              $sth->bindParam("first_name", $input['first_name']);
              $sth->bindParam("last_name", $input['last_name']);
              $sth->bindParam("age", $input['age']);
              $sth->bindParam("gender", $input['gender']);
              $sth->bindParam("address", $input['address']);
              $sth->bindParam("city", $input['city']);
              $sth->bindParam("state", $input['state']);
              $sth->bindParam("zip", $input['zip']);
              $sth->bindParam("email", $input['email']);
              $sth->bindParam("phone_number", $input['phone_number']);
              $sth->execute();
              return $this->response->withJson($input);
              });
    
    //updates nanny_info
    $app->put('/nannys/update', function ($request, $response) {
              $input = $request->getParsedBody();
              $sql = "update nanny_info set first_name = :first_name, last_name = :last_name, age= :age, gender = :gender, address = :address, city = :city, state = :state, zip= :zip, email= :email, phone_number =:phone_number where username = :username";
              $sth = $this->db->prepare($sql);
              $sth->bindParam("username", $input['username']);
              $sth->bindParam("first_name", $input['first_name']);
              $sth->bindParam("last_name", $input['last_name']);
              $sth->bindParam("age", $input['age']);
              $sth->bindParam("gender", $input['gender']);
              $sth->bindParam("address", $input['address']);
              $sth->bindParam("city", $input['city']);
              $sth->bindParam("state", $input['state']);
              $sth->bindParam("zip", $input['zip']);
              $sth->bindParam("email", $input['email']);
              $sth->bindParam("phone_number", $input['phone_number']);
              $sth->execute();
              return $this->response->withJson($input);
              });
    
    
    //updates child_info
    $app->put('/children/update', function ($request, $response) {
              $input = $request->getParsedBody();
              $sql = "update child_info set name = :name, age= :age, gender = :gender, likes = :likes, allergies = :allergies, medications = :medications, special_requirements = :special_requirements where parent_username = :parent_username";
              $sth = $this->db->prepare($sql);
              $sth->bindParam("parent_username", $input['parent_username']);
              $sth->bindParam("name", $input['name']);
              $sth->bindParam("gender", $input['gender']);
              $sth->bindParam("age", $input['age']);
              $sth->bindParam("likes", $input['likes']);
              $sth->bindParam("allergies", $input['allergies']);
              $sth->bindParam("medications", $input['medications']);
              $sth->bindParam("special_requirements", $input['special_requirements']);
              $sth->execute();
              return $this->response->withJson($input);
              });
    
    
    //changes password (definitely need a better method for this)
    $app->put('/login/change_password', function ($request, $response) {
               $input = $request->getParsedBody();
               $sql = "update login_info set password = :password where username = :username ";
               $sth = $this->db->prepare($sql);
               $sth->bindParam("username", $input['username']);
               $sth->bindParam("password", $input['password']);
               $sth->execute();
               return $this->response->withJson($input);
               });
    
   
    //deletes from parent_info
    $app->delete('/parents/delete', function ($request, $response) {
                 $input = $request->getParsedBody();
                  $sql = "DELETE FROM parent_info WHERE username = :username";
                 $sth = $this->db->prepare($sql);
                 $sth->bindParam("username", $input['username']);
                 $sth->execute();
                 return $this->response->withJson($input);
                 });
    
    //deletes from nanny_info
    $app->delete('/nannys/delete', function ($request, $response) {
                 $input = $request->getParsedBody();
                 $sql = "DELETE FROM nanny_info WHERE username = :username";
                 $sth = $this->db->prepare($sql);
                 $sth->bindParam("username", $input['username']);
                 $sth->execute();
                 return $this->response->withJson($input);
                 });
    
    //deletes from children_info
    $app->delete('/children/delete', function ($request, $response) {
                 $input = $request->getParsedBody();
                 $sql = "DELETE FROM child_info WHERE parent_username = :parent_username";
                 $sth = $this->db->prepare($sql);
                 $sth->bindParam("parent_username", $input['parent_username']);
                 $sth->execute();
                 return $this->response->withJson($input);
                 });
    
    //deletes from login_info
    $app->delete('/login/delete', function ($request, $response) {
                 $input = $request->getParsedBody();
                 $sql = "DELETE FROM login_info WHERE username = :username";
                 $sth = $this->db->prepare($sql);
                 $sth->bindParam("username", $input['username']);
                 $sth->execute();
                 return $this->response->withJson($input);
                 });
				 
	//deletes from nanny_references
    $app->delete('/references/delete', function ($request, $response) {
                 $input = $request->getParsedBody();
                 $sql = "DELETE FROM nanny_references WHERE username = :username";
                 $sth = $this->db->prepare($sql);
                 $sth->bindParam("username", $input['username']);
                 $sth->execute();
                 return $this->response->withJson($input);
                 });
				 
	//deletes from skills
    $app->delete('/skills/delete', function ($request, $response) {
                 $input = $request->getParsedBody();
                 $sql = "DELETE FROM skills WHERE username = :username";
                 $sth = $this->db->prepare($sql);
                 $sth->bindParam("username", $input['username']);
                 $sth->execute();
                 return $this->response->withJson($input);
                 });
				 