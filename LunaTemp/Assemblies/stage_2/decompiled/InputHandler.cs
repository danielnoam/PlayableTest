using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;

public class InputHandler : MonoBehaviour, IPointerDownHandler, IEventSystemHandler, IPointerUpHandler, IPointerEnterHandler, IPointerExitHandler
{
	public enum InputDetectionMode
	{
		UI,
		Collider,
		Manual
	}

	[Header("Detection Mode")]
	[SerializeField]
	private InputDetectionMode detectionMode = InputDetectionMode.UI;

	[SerializeField]
	private TextMeshProUGUI debugText;

	[Header("Input State")]
	[SerializeField]
	private bool isPressed;

	[SerializeField]
	private bool isHovered;

	private Camera _mainCamera;

	private Collider2D _inputCollider2D;

	private Collider _inputCollider3D;

	public bool IsPressed => isPressed;

	public bool IsHovered => isHovered;

	private void Awake()
	{
		if (detectionMode == InputDetectionMode.Manual)
		{
			_mainCamera = Camera.main;
			_inputCollider2D = GetComponent<Collider2D>();
			_inputCollider3D = GetComponent<Collider>();
		}
	}

	private void Update()
	{
		if (detectionMode == InputDetectionMode.Manual)
		{
			HandleManualInput();
		}
		if ((bool)debugText)
		{
			debugText.text = $"Hovered: {isHovered}, Pressed: {isPressed}";
		}
	}

	private void HandleManualInput()
	{
		Vector3 inputPosition = Input.mousePosition;
		Vector3 worldPos = _mainCamera.ScreenToWorldPoint(inputPosition);
		if ((bool)_inputCollider2D)
		{
			isHovered = _inputCollider2D.OverlapPoint(worldPos);
		}
		else if ((bool)_inputCollider3D)
		{
			Ray ray = _mainCamera.ScreenPointToRay(inputPosition);
			isHovered = _inputCollider3D.Raycast(ray, out var _, float.PositiveInfinity);
		}
		isPressed = Input.GetMouseButton(0) && isHovered;
	}

	private void OnMouseEnter()
	{
		if (detectionMode == InputDetectionMode.Collider)
		{
			isHovered = true;
		}
	}

	private void OnMouseExit()
	{
		if (detectionMode == InputDetectionMode.Collider)
		{
			isHovered = false;
		}
	}

	private void OnMouseDown()
	{
		if (detectionMode == InputDetectionMode.Collider)
		{
			isPressed = true;
		}
	}

	private void OnMouseUp()
	{
		if (detectionMode == InputDetectionMode.Collider)
		{
			isPressed = false;
		}
	}

	public void OnPointerDown(PointerEventData eventData)
	{
		if (detectionMode == InputDetectionMode.UI)
		{
			isPressed = true;
		}
	}

	public void OnPointerUp(PointerEventData eventData)
	{
		if (detectionMode == InputDetectionMode.UI)
		{
			isPressed = false;
		}
	}

	public void OnPointerEnter(PointerEventData eventData)
	{
		if (detectionMode == InputDetectionMode.UI)
		{
			isHovered = true;
		}
	}

	public void OnPointerExit(PointerEventData eventData)
	{
		if (detectionMode == InputDetectionMode.UI)
		{
			isHovered = false;
		}
	}
}
