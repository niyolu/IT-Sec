<?php

class simpleCMS {

  var $host;
  var $username;
  var $password;
  var $table;
  var $sql_handle;

  public function display_public() {

    $q = "SELECT * FROM testDB ORDER BY created DESC LIMIT 3";
    $r = mysqli_query($this->sql_handle, $q);
    $entry_display = "";
    $i=0;
    if ( $r !== false && mysqli_num_rows($r) > 0 ) {
      while ( $a = mysqli_fetch_assoc($r) ) {
        $title = stripslashes($a['title']);
	$bodytext = stripslashes($a['bodytext']);
	$i++;
        $entry_display.="
	
    <div class=\"post\">
    	<h2>
    		Post $i: ".htmlentities($title)."
    	</h2>
	    <p>
	      ".htmlentities($bodytext)."
	    </p>
	</div>";
      }
    } else {

      $entry_display = "

    <h2> This Page Is Under Construction </h2>
    <p>
      No entries have been made on this page. 
      Please check back soon, or click the
      link below to add an entry!
    </p>
";
    }
  
    $entry_display .= "

    <p class=\"admin_link\">
      <a href=\"".$_SERVER['PHP_SELF']."?admin=1\">Add a New Entry</a>
    </p>
	";
  
 
    return $entry_display;
  }

  public function display_admin() {
    return "
    <form action=\"".$_SERVER['PHP_SELF']."\" method=\"post\">
    
      <label for=\"title\">Title:</label><br />
      <input name=\"title\" id=\"title\" type=\"text\" maxlength=\"150\" />
      <div class=\"clear\"></div>
     
      <label for=\"bodytext\">Body Text:</label><br />
      <textarea name=\"bodytext\" id=\"bodytext\"></textarea>
      <div class=\"clear\"></div>
      
      <input type=\"submit\" value=\"Create This Entry!\" />
    </form>
    
    <br />
    
    <a href=\"display.php\">Back to Home</a>
";
  }

  public function write($p) {
    if ( $_POST['title'] )
      $title = mysqli_real_escape_string($this->sql_handle, $_POST['title']);
    if ( $_POST['bodytext'])
      $bodytext = mysqli_real_escape_string($this->sql_handle, $_POST['bodytext']);
    if ( $title && $bodytext ) {
      $created = time();
      $sql = "INSERT INTO testDB VALUES('$title','$bodytext','$created')";
      return mysqli_query( $this->sql_handle,$sql);
    } else {
      return false;
    }
  }

  public function connect() {
    $this->sql_handle = mysqli_connect($this->host,$this->username,$this->password) or die("Could not connect. " . mysqli_error($this->sql_handle));
    mysqli_select_db($this->sql_handle, $this->table) or die("Could not select database. " . mysqli_error($this->sql_handle));

    return $this->buildDB();
  }

  private function buildDB() {
    $sql = "MySQL_QUERY
CREATE TABLE IF NOT EXISTS testDB (
title		VARCHAR(150),
bodytext	TEXT,
created		VARCHAR(100)
)
";

    return mysqli_query($this->sql_handle,$sql);
  }

}

?>
