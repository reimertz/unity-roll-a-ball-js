#pragma strict

        
private var offset : Vector3;
        var player : GameObject;

function Start () {
  offset = transform.position;

}

function LateUpdate () {
  transform.position = player.transform.position + offset;
}