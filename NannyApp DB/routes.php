<?php

use Slim\Http\Request;
use Slim\Http\Response;

//Display parents
$app->get('/parents', function ($request, $response, $args) 
{$sth= $this->db->prepare("SELECT * FROM parent_info");
$sth->execute();
$parent_info = $sth->fetchAll(); return $this->response->withJson($parent_info);
});

//Insert into parents table
$app->post('/parents/new', function ($request, $response) {
	$input = $request->getParsedBody();
	$sql = "INSERT INTO parent_info (account_type,username,password,first_name,last_name,age,gender,address,city,state,zip,email,phone_number) 
	VALUES (:account_type, :username, :password, :first_name, :last_name, :age, :gender, :address, :city, :state, :zip, :email, :phone_number)";
	$sth = $this->db->prepare($sql);
	$sth->bindParam("account_type", $input['account_type']);
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

//Display Children
$app->get('/children', function ($request, $response, $args) 
{$sth= $this->db->prepare("SELECT * FROM child_info");
$sth->execute();
$child_info = $sth->fetchAll(); return $this->response->withJson($child_info);
});

//Insert into Children Table
$app->post('/children/new', function ($request, $response) {
	$input = $request->getParsedBody();
	$sql = "INSERT INTO child_info (user_id,name,gender,age,likes,allergies,medications,special_requirements) 
	VALUES (:user_id, :name, :gender, :age, :likes, :allergies, :medications, :special_requirements) ";
	$sth = $this->db->prepare($sql);
	$sth->bindParam("user_id", $input['user_id']);
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


//Display Nanny Info
$app->get('/nannys', function ($request, $response, $args) 
{$sth= $this->db->prepare("SELECT * FROM nanny_info");
$sth->execute();
$nanny_info = $sth->fetchAll(); return $this->response->withJson($nanny_info);
});

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