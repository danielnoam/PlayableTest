using UnityEngine;

public class Obstacle : MonoBehaviour
{
	[SerializeField]
	private Rigidbody rigidBody;

	private float _moveSpeed;

	private float _despawnY;

	public Rigidbody RigidBody => rigidBody;

	public void Initialize(float moveSpeed, float despawnY)
	{
		_moveSpeed = moveSpeed;
		_despawnY = despawnY;
	}

	private void FixedUpdate()
	{
		HandleMovement();
		CheckDespawn();
	}

	private void HandleMovement()
	{
		rigidBody.MovePosition(rigidBody.position + Vector3.down * (_moveSpeed * Time.fixedDeltaTime));
	}

	private void CheckDespawn()
	{
		if (rigidBody.position.y <= _despawnY)
		{
			Object.Destroy(base.gameObject);
		}
	}

	private void OnCollisionEnter(Collision collision)
	{
		if (collision.gameObject.TryGetComponent<PlayerController>(out var _))
		{
			GameManager.Instance?.GameOver();
			Object.Destroy(base.gameObject);
		}
	}
}
