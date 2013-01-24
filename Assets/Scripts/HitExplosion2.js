#pragma strict

var limitVel : float = 4.0f;
var oldValue : float = 0.0f;

function OnCollisionStay(collisionInfo : Collision)
{
	var diff: float = Mathf.Abs(oldValue - collisionInfo.relativeVelocity.magnitude);
    if ( diff > limitVel ) {
		Destroy(this.gameObject);
	}
	oldValue = collisionInfo.relativeVelocity.magnitude;
}

