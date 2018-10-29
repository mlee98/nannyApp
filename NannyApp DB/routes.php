<?php

use Slim\Http\Request;
use Slim\Http\Response;

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
$app->get('/parents', function ($request, $response, $args) 
{$sth= $this->db->prepare("SELECT * FROM skills");
$sth->execute();
$skills = $sth->fetchAll(); return $this->response->withJson($skills);
});