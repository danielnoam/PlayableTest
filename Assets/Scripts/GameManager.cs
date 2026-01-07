using UnityEngine;
using System;


public enum GameState
{
    Playing,
    Paused,
    Dead
}


public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    
    public static event Action OnGameOver;
    public static event Action OnGamePaused;
    public static event Action OnGameResumed;
    
    [Header("Speed Settings")]
    [LunaPlaygroundField("Start speed", 1, "Game Controls")]
    [SerializeField] private float startSpeed = 5f;
    [LunaPlaygroundField("Speed increase rate", 2, "Game Controls")]
    [SerializeField] private float speedIncreaseRate = 0.1f;
    [LunaPlaygroundField("Max speed", 3, "Game Controls")]
    [SerializeField] private float maxSpeed = 20f;

    public float CurrentScore { get; private set; }
    public float CurrentSpeed { get; private set; }

    public GameState CurrentState { get; private set; } = GameState.Playing;


    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    private void Start()
    {
        CurrentSpeed = startSpeed;
        CurrentScore = 0f;
        CurrentState = GameState.Playing;
        Time.timeScale = 1f;
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            RestartGame();
        }
        
        
        if (Input.GetKeyDown(KeyCode.Escape) && CurrentState != GameState.Dead)
        {
            TogglePause();
        }

        if (CurrentState == GameState.Playing)
        {
            UpdateScore();
            UpdateSpeed();
        }
    }

    private void UpdateScore()
    {
        CurrentScore += Time.deltaTime;
    }

    private void UpdateSpeed()
    {
        CurrentSpeed += speedIncreaseRate * Time.deltaTime;
        CurrentSpeed = Mathf.Min(CurrentSpeed, maxSpeed);
    }

    public void TogglePause()
    {
        if (CurrentState == GameState.Playing)
        {
            Pause();
        }
        else if (CurrentState == GameState.Paused)
        {
            Resume();
        }
    }

    public void Pause()
    {
        CurrentState = GameState.Paused;
        Time.timeScale = 0f;
        OnGamePaused?.Invoke();
    }

    public void Resume()
    {
        CurrentState = GameState.Playing;
        Time.timeScale = 1f;
        OnGameResumed?.Invoke();
    }

    public void GameOver()
    {
        if (CurrentState == GameState.Dead) return;
        
        CurrentState = GameState.Dead;
        Time.timeScale = 0f;
        OnGameOver?.Invoke();
    }


    public void RestartGame()
    {
        Time.timeScale = 1f;
        UnityEngine.SceneManagement.SceneManager.LoadScene(
            UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex
        );
    }
}

