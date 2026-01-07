using System;
using UnityEngine;
using UnityEngine.EventSystems;

public class InputHandler : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerEnterHandler, IPointerExitHandler
{

    [Header("Input")]
    [SerializeField] private bool isPressed;
    [SerializeField] private bool isHovered;
    
    public bool IsPressed => isPressed;
    public bool IsHovered => isHovered;


    private void OnMouseEnter()
    {
        isHovered = true;
    }

    private void OnMouseExit()
    {
        isHovered = false;
    }

    private void OnMouseDown()
    {
        isPressed = true;
    }
    
    private void OnMouseUp()
    {
        isPressed = false;
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        isPressed = true;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        isPressed = false;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        isHovered = true;
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        isHovered = false;
    }
}
