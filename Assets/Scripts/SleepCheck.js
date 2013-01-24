#pragma strict

function Start () {

}

var isAllSleep : boolean = true;

function Update () {
	isAllSleep = false;
	var rigidbodys : Rigidbody[] = FindObjectsOfType(Rigidbody) as Rigidbody[];
    for (var rb : Rigidbody in rigidbodys) {
        if ( rb.IsSleeping() == false ) return;
    }
    isAllSleep = true;
}