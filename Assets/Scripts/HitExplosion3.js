#pragma strict

var limitVel : float = 4.0f;
var vanishFx : GameObject;
var oldValue : float = 0.0f;

function OnCollisionStay(collisionInfo : Collision)
{
	var diff: float = Mathf.Abs(oldValue - collisionInfo.relativeVelocity.magnitude);
    if ( diff > limitVel ) {
    	if ( vanishFx ) {
			Instantiate(vanishFx, this.transform.position, this.transform.rotation);
		}
		Destroy(this.gameObject);
	}
	oldValue = collisionInfo.relativeVelocity.magnitude;
}

