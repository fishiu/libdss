<?php
error_reporting(0);

class execute {
    private $PHP_PATH = null; // PHP解释器的路径
    private $PHP_PRODUCER_PATH = null; // PHP解释器的路径

    /**
     * execute constructor.
     */
    public function __construct()
    {
        $config = parse_ini_file("../config.ini");
        $this->PHP_PATH = $config['phpExecutePath'];
        $this->PHP_PRODUCER_PATH = $config['phpProducerContainerPath'];
    }

    public function doExecute($url) {
        $command = $this->PHP_PATH . ' ' . $this->PHP_PRODUCER_PATH . $url;
        // /Applications/MAMP/bin/php/php7.4.1/bin/php /Applications/MAMP/htdocs/new_libdss/php/pl_1.1.1.php
		shell_exec($command);
		// return $command;
	}
}