using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public static PlayerController Instance { get; private set; }
    
    
    [Header("Movement Settings")]
    [LunaPlaygroundField("Speed of the player", 1, "Player Controls")]
    [SerializeField] private float moveSpeed = 200f;
    [SerializeField] private KeyCode moveLeftKey = KeyCode.A;
    [SerializeField] private KeyCode moveRightKey = KeyCode.D;
    
    [Header("References")]
    [SerializeField] private Rigidbody rigidBody;
    [SerializeField] private Transform playerGfx;
    [SerializeField] private InputHandler inputHandlerRight;
    [SerializeField] private InputHandler inputHandlerLeft;



    private float _horizontalInput;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    private void FixedUpdate()
    {
        if (GameManager.Instance && GameManager.Instance.CurrentState == GameState.Playing)
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

        Vector3 movement = new Vector3(_horizontalInput * moveSpeed * Time.fixedDeltaTime, 0, 0);
        rigidBody.linearVelocity = movement;
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.TryGetComponent(out Obstacle obstacle))
        {
            GameManager.Instance?.GameOver();
        }
    }
}