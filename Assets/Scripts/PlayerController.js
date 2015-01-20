#pragma strict

var speed : float;
var countText : GUIText;
var winText : GUIText;

private var count : int;


function restartGame() {
  speed = 0;
  count = 0;
  countText.text = "Count: 0";
  winText.text = "0";
  Application.LoadLevel(0);
}

function updateCountText() {
  countText.text = "Count:" + count.ToString();
  if(count >= 8) {
    winText.text = "You win!";
    
    yield WaitForSeconds (5);
    restartGame();
  }
}

function Start () {
  count = 0;
  updateCountText(); 
}

function Update () {

}

function FixedUpdate () {
  var moveHorizontal = Input.GetAxis("Horizontal");
  var moveVertical =  Input.GetAxis("Vertical");
  var movement = new Vector3(moveHorizontal, 0, moveVertical);

  rigidbody.AddForce (movement * speed * Time.deltaTime);
}

function OnTriggerEnter (other : Collider) {
  if(other.gameObject.tag == 'PickUp'){
    count += 1;
    other.gameObject.SetActive(false);

    updateCountText();
  }



}