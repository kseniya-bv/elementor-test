<?php
 header("Access-Control-Allow-Origin: *");

abstract class Response {
    public $text;
    public function __construct($title, $text) {
      $this->text = $text;
      $this->title = $title;
    }
    abstract public function intro() : string;
  }
  
  // Child classes
  class Text extends Response {
    public function intro() : string {
        $arr = array ('title'=> $this->title, 'text' => $this->text);
        return json_encode($arr);
    }
  }

  $text = new text("What is Lorem Ipsum?", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing");
  echo $text->intro();
?>