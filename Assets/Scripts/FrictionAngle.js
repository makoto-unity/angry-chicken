#pragma strict

var slowPace : float = 0.5f;

function FixedUpdate()
{
	if ( rigidbody.angularVelocity.magnitude > 0.01f ) {
		rigidbody.AddRelativeTorque(Vector3(0,0,-rigidbody.angularVelocity.z*slowPace));
	}
}