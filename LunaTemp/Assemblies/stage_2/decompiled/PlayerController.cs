using UnityEngine;

public class PlayerController : MonoBehaviour
{
	[Header("Movement Settings")]
	[LunaPlaygroundField("Speed of the player", 1, "Player Controls", false, null)]
	[SerializeField]
	private float moveSpeed = 200f;

	[SerializeField]
	private KeyCode moveLeftKey = KeyCode.A;

	[SerializeField]
	private KeyCode moveRightKey = KeyCode.D;

	[Header("References")]
	[SerializeField]
	private Rigidbody rigidBody;

	[SerializeField]
	private Transform playerGfx;

	[SerializeField]
	private ParticleSystem deathParticleEffect;

	[SerializeField]
	private InputHandler inputHandlerRight;

	[SerializeField]
	private InputHandler inputHandlerLeft;

	private float _horizontalInput;

	public static PlayerController Instance { get; private set; }

	private void Awake()
	{
		if ((bool)Instance && Instance != this)
		{
			Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	private void Start()
	{
		GameManager.OnGameStarted += OnGameStarted;
	}

	private void OnDisable()
	{
		GameManager.OnGameStarted -= OnGameStarted;
	}

	private void OnGameStarted()
	{
		playerGfx.gameObject.SetActive(true);
	}

	private void FixedUpdate()
	{
		if ((bool)GameManager.Instance && GameManager.Instance.CurrentState == GameState.Playing)
		{
			HandleMovement();
		}
	}

	private void HandleMovement()
	{
		if (Input.GetKey(moveLeftKey) || inputHandlerLeft.IsPressed)
		{
			_horizontalInput = -1f;
		}
		else if (Input.GetKey(moveRightKey) || inputHandlerRight.IsPressed)
		{
			_horizontalInput = 1f;
		}
		else
		{
			_horizontalInput = 0f;
		}
		Vector3 movement = new Vector3(_horizontalInput * moveSpeed * Time.fixedDeltaTime, 0f, 0f);
		rigidBody.linearVelocity = movement;
	}

	private void OnCollisionEnter(Collision collision)
	{
		if (collision.gameObject.TryGetComponent<Obstacle>(out var _))
		{
			deathParticleEffect.Play();
			playerGfx.gameObject.SetActive(false);
			GameManager.Instance?.GameOver();
		}
	}
}
