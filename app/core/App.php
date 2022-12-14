<?php
    //kelas App ini digunakan untuk routing atau memilih fungsi atau controller 
    class App {
        protected $controller = 'Home';
        protected $method = 'index';
        protected $params = [];

        public function __construct() {
            $url = $this->parseURL();

            // ini controller
            if ($url == NULL) {
                $url = [$this->controller];
            }
            if (file_exists('../app/controllers/' . $url[0] . '.php')) {
                $this->controller = $url[0];
                // var_dump($url);
                unset($url[0]);
            }

            require_once '../app/controllers/' . $this->controller .'.php';
            $this->controller = new $this->controller;

            // method 
            if (isset($url[1]))  {
                if(method_exists($this->controller, $url[1])) {
                    $this->method = $url[1];
                    unset($url[1]);
                }
            }

            // params
            if (!empty($url)) {
                $this->params = array_values($url);
            }

            // jalankan controller & method, serta kirimkan params
            call_user_func_array([$this->controller, $this->method], $this->params);

        }

        public function parseURL() {
            if (isset($_GET['url'])) {
                $url = rtrim($_GET['url'],'/'); // hapus tanda slash (/)
                $url = filter_var($url, FILTER_SANITIZE_URL);   //url bersih dari karakter aneh
                $url = explode('/', $url);  //pecah url dengan slash (/) --> slash hilang dari elemen array
                return $url;
            }
        }
    }