using TMPro;
using UnityEngine;

public class UIManager : MonoBehaviour
{

    [Header("UI")]
    [SerializeField] private TextMeshProUGUI scoreText;
    [SerializeField] private GameManager gameManager;
    
    
    
    private void Update()
    {
        UpdateScoreUI();
    }
    
    private void UpdateScoreUI()
    {
        scoreText.text = "Score: " + Mathf.FloorToInt(gameManager.CurrentScore);
    }
}
