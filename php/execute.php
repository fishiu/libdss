<?php
error_reporting(0);

class execute {
	private $PHP_PATH = 'yourPhpPath'; // PHP解释器的路径
	public function doExecute($url) {
		shell_exec($this->PHP_PATH . ' /php/' . $url);
	}
}