using System;
using Luna.Unity;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
	[Header("Speed Settings")]
	[LunaPlaygroundField("Start speed", 1, "Game Controls", false, null)]
	[SerializeField]
	private float startSpeed = 5f;

	[LunaPlaygroundField("Speed increase rate", 2, "Game Controls", false, null)]
	[SerializeField]
	private float speedIncreaseRate = 0.1f;

	[LunaPlaygroundField("Max speed", 3, "Game Controls", false, null)]
	[SerializeField]
	private float maxSpeed = 20f;

	public static GameManager Instance { get; private set; }

	public float CurrentScore { get; private set; }

	public float CurrentSpeed { get; private set; }

	public GameState CurrentState { get; private set; } = GameState.Playing;


	public static event Action OnGameStarted;

	public static event Action OnGameOver;

	public static event Action OnGamePaused;

	public static event Action OnGameResumed;

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	private void OnEnable()
	{
		LifeCycle.OnPause += Pause;
		LifeCycle.OnResume += Resume;
	}

	private void OnDisable()
	{
		LifeCycle.OnPause -= Pause;
		LifeCycle.OnResume -= Resume;
	}

	private void Start()
	{
		StartGame();
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

	public void StartGame()
	{
		CurrentSpeed = startSpeed;
		CurrentScore = 0f;
		CurrentState = GameState.Playing;
		Time.timeScale = 1f;
		GameManager.OnGameStarted?.Invoke();
		LifeCycle.GameStarted();
	}

	public void Pause()
	{
		CurrentState = GameState.Paused;
		Time.timeScale = 0f;
		GameManager.OnGamePaused?.Invoke();
	}

	public void Resume()
	{
		CurrentState = GameState.Playing;
		Time.timeScale = 1f;
		GameManager.OnGameResumed?.Invoke();
	}

	public void GameOver()
	{
		if (CurrentState != GameState.Dead)
		{
			CurrentState = GameState.Dead;
			Time.timeScale = 1f;
			GameManager.OnGameOver?.Invoke();
			LifeCycle.GameEnded();
		}
	}

	public void RestartGame()
	{
		Time.timeScale = 1f;
		SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
	}
}
