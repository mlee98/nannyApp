<?php

use Slim\Http\Request;
use Slim\Http\Response;

 //Routes

//original
//$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
//   
//   
//   //  Sample log message
//	
//	
//	//original
//    $this->logger->info("Slim-Skeleton '/' route");
//
//   //  Render index view
//	//original
//    return $this->renderer->render($response, 'index.phtml', $args);
//
////original
//});





//$app->group('/api', function () use ($app) {
//	$app->get('/hello', function ($request, $response, $args) { 
//	return "Hello World";
//	}); 
//});
//
//
    
/*
$app->get('/dbtest', function ($request, $response, $args) { 
	$sth = $this->dbConn->prepare(
		"SELECT * FROM employees" );
	$sth->execute();
	$users = $sth->fetchAll();
	return $this->response->withJson($users);
});


//get
$app->get('/customer/{customerNumber}', function ($request, $response, $args) { 
	$customerNumber = $request->getAttribute('customerNumber');
	$sth = $this->dbConn->prepare(
		"SELECT * FROM customers WHERE customerNumber = $customerNumber" );
	$sth->execute();
	$users = $sth->fetchAll();
	return $this->response->withJson($users);
});


//delete
$app->delete('/customer/deleteNumber/{customerNumber}', function ($request, $response, $args) {
$customerNumber = $request->getAttribute('customerNumber');
$sth = $this->dbConn->prepare(
		"DELETE FROM customers WHERE customerNumber = $customerNumber" );
$sth->execute();
	$users = $sth->fetchAll();
	return $this->response->withJson($users);
});


//post
$app->post('/customer/add', function($request, $response){
$input = $request->getParsedBody();
$sql = "INSERT INTO customers (customerNumber, customerName, contactLastName,  contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) VALUES (:customerNumber, :customerName, :contactLastName, : contactFirstName, :phone, :addressLine1, :addressLine2, :city, :state, :postalCode, :country, :salesRepEmployeeNumber, :creditLimit)";
$sth = $this->dbConn->prepare($sql);
$sth ->bindParam("customerNumber",  $input['customerNumber']);
$sth ->bindParam("customerName",  $input['customerName']);
$sth ->bindParam("contactLastName",  $input['contactLastName']);
$sth ->bindParam("contactFirstName",  $input['contactFirstName']);
$sth ->bindParam("phone",  $input['phone']);
$sth ->bindParam("addressLine1",  $input['addressLine1']);
$sth ->bindParam("addressLine2",  $input['addressLine2']);
$sth ->bindParam("city",  $input['city']);
$sth ->bindParam("state",  $input['state']);
$sth ->bindParam("postalCode",  $input['postalCode']);
$sth ->bindParam("country",  $input['country']);
$sth ->bindParam("salesRepEmployeeNumber",  $input['salesRepEmployeeNumber']);
$sth ->bindParam("creditLimit",  $input['creditLimit']);

$sth->execute();
return $this->response->withJson($input);		
	
});
 
 
 



//put
$app->put('/customer/creditLimit', function ($request, $response) {
$input = $request->getParsedBody();
$sql = "update customers set creditLimit = :creditLimit where customerNumber = :customerNumber";
$sth = $this->dbConn->prepare($sql);
$sth->bindParam("customerNumber", $input['customerNumber']);
$sth->bindParam("creditLimit", $input['creditLimit']);
$sth->execute();
return $this->response->withJson($input);
});
*/
    

//add user
$app->post('/login/add', function($request, $response){
$input = $request->getParsedBody();
$sql = "INSERT INTO
           login_info (username, password, account_type, user_id)
           VALUES (:username, :password, :account_type, :user_id)";
$sth = $this->dbConn->prepare($sql);
$sth ->bindParam("username",  $input['username']);
$sth ->bindParam("password",  $input['password']);
$sth ->bindParam("account_type",  $input['account_type']);
//?
$sth ->bindParam("user_id",  $input['user_id']);
$sth->execute();
return $this->response->withJson($input);
});
    

//add parent
$app->post('/parent/add', function($request, $response){
$input = $request->getParsedBody();
$sql = "INSERT INTO
        parent_info (user_id, name, address, phone_number, email)
        VALUES (:user_id, :name, :address, :phone_number, :email)";
$sth = $this->dbConn->prepare($sql);
$sth ->bindParam("user_id",  $input['user_id']);
$sth ->bindParam("name",  $input['name']);
$sth ->bindParam("address",  $input['address']);
$sth ->bindParam("phone_number",  $input['phone_number']);
$sth ->bindParam("email",  $input['email']);
$sth->execute();
return $this->response->withJson($input);
});
    
//add babysitter
$app->post('/babysitter/add', function($request, $response){
$input = $request->getParsedBody();
$sql = "INSERT INTO
        parent_info (user_id, name, address, phone_number, babysitter_bio, email, years_of_experience, age, gender)
        VALUES (:user_id, :name, :address, :phone_number, :babysitter_bio, :email, :years_of_experience, :age, :gender)";
$sth = $this->dbConn->prepare($sql);
$sth ->bindParam("user_id",  $input['user_id']);
$sth ->bindParam("name",  $input['name']);
$sth ->bindParam("address",  $input['address']);
$sth ->bindParam("phone_number",  $input['phone_number']);
$sth ->bindParam("babysitter_bio",  $input['babysitter_bio']);
$sth ->bindParam("email",  $input['email']);
$sth ->bindParam("years_of_experience",  $input['years_of_experience']);
$sth ->bindParam("age",  $input['age']);
$sth ->bindParam("gender",  $input['gender']);
$sth->execute();
return $this->response->withJson($input);
});
    
//get parent
$app->get('/parent/{user_id}', function ($request, $response, $args) {
$customerNumber = $request->getAttribute('customerNumber');
$sth = $this->dbConn->prepare(
        "SELECT * FROM parent_info WHERE user_id = $user_id" );
$sth->execute();
$users = $sth->fetchAll();
return $this->response->withJson($users);
});
    
//get babysitter
$app->get('/babysitter/{user_id}', function ($request, $response, $args) {
$customerNumber = $request->getAttribute('customerNumber');
$sth = $this->dbConn->prepare(
        "SELECT * FROM babysitter_info WHERE user_id = $user_id" );
$sth->execute();
$users = $sth->fetchAll();
return $this->response->withJson($users);
});
    
//get children based on user_id
$app->get('/children/{user_id}', function ($request, $response, $args) {
$customerNumber = $request->getAttribute('customerNumber');
$sth = $this->dbConn->prepare(
        "SELECT * FROM children_info WHERE user_id = $user_id" );
$sth->execute();
$users = $sth->fetchAll();
return $this->response->withJson($users);
});
    
    

    

    
    


//copy paste query into here
