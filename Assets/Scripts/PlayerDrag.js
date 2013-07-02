#pragma strict

function Start () {
	startPos = transform.position;
	this.rigidbody.useGravity = false;
}

private var startPos : Vector3;

function OnMouseDown()
{
	startPos = transform.position;
}

function OnMouseDrag() 
{
	var hit : RaycastHit;
    if(Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit)) {
        transform.position = new Vector3( hit.point.x, hit.point.y, 0.0f );
    }
    this.rigidbody.useGravity = false;
    
    var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    if ( lineRenderer ) {
    	lineRenderer.SetPosition(0, this.transform.position);
	lineRenderer.SetPosition(1, startPos);
    }
}

public var addPower : float = 8.0f;

function OnMouseUp()
{
	var dir : Vector3 = startPos - this.transform.position;
	dir *= addPower;
	this.rigidbody.useGravity = true;
	this.rigidbody.AddForce(dir,ForceMode.Impulse);
}
