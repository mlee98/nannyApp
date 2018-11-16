<?php
// DIC configuration


//original
$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};



//$container['dbConn'] = function ($c) {
//	$db = new PDO('mysql:host=127.0.0.1:8889;dbname=test;charset=utf8mb4', 'root', 'root');
//	return $db;
//};
    
    

/*$container['dbConn'] = function ($c) {
	$db = new PDO('mysql:host=127.0.0.1:8889;dbname=classicmodels;charset=utf8mb4', 'root', 'root');
	return $db;
};*/
    
    $container['dbConn'] = function ($c) {
        $db = new PDO('mysql:host=127.0.0.1:8889;dbname=nannyApplication;charset=utf8mb4', 'root', 'root');
        return $db;
    };




//change dbname to classicmodels



