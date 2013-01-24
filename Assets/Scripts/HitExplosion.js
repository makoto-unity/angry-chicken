#pragma strict

function OnCollisionStay(collisionInfo : Collision)
{
	Destroy(this.gameObject);
}

