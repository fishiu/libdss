<?php
error_reporting(0);

class execute {
    private $PHP_PATH = null; // PHP解释器的路径

    /**
     * execute constructor.
     */
    public function __construct()
    {
        $config = parse_ini_file("../config.ini");
        $this->PHP_PATH = $config['phpExecutePath'];
    }

    public function doExecute($url) {
		shell_exec($this->PHP_PATH . ' /php/' . $url);
	}
}