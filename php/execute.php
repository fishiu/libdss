<?php
error_reporting(0);

class execute
{
    private $PHP_PATH = '/Applications/MAMP/bin/php/php7.4.1/bin/php';
//    private $PHP_PATH = '/www/server/php/56/bin/php';
    public function doExecute($url)
    {
//        shell_exec('cd php; '.$this->PHP_PATH.' php\'.$url);
        shell_exec($this->PHP_PATH.' /php/'.$url);
    }
}