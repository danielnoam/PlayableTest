using UnityEngine;

public class ObstacleManager : MonoBehaviour
{
	[Header("Obstacle Settings")]
	[SerializeField]
	private float obstacleMoveSpeed = 100f;

	[SerializeField]
	private float obstacleSpawnRate = 2f;

	[SerializeField]
	private float obstacleSpawnRange = 8f;

	[SerializeField]
	private Vector3 obstacleSpawnPosition = new Vector3(0f, 10f, 0f);

	[SerializeField]
	private Vector3 obstacleDespawnPosition = new Vector3(0f, -10f, 0f);

	[SerializeField]
	private Obstacle obstaclePrefab;

	private float _obstacleSpawnTimer;

	public static ObstacleManager Instance { get; private set; }

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

	private void Update()
	{
		if ((bool)GameManager.Instance && GameManager.Instance.CurrentState == GameState.Playing)
		{
			HandleObstacleSpawning();
		}
	}

	private void HandleObstacleSpawning()
	{
		_obstacleSpawnTimer += Time.deltaTime;
		if (_obstacleSpawnTimer >= obstacleSpawnRate)
		{
			SpawnObstacle();
			_obstacleSpawnTimer = 0f;
		}
	}

	private void SpawnObstacle()
	{
		float spawnX = Random.Range((0f - obstacleSpawnRange) / 2f, obstacleSpawnRange / 2f);
		Vector3 spawnPosition = new Vector3(spawnX, obstacleSpawnPosition.y, 0f);
		Obstacle newObstacle = Object.Instantiate(obstaclePrefab, spawnPosition, Quaternion.identity);
		newObstacle.Initialize(obstacleMoveSpeed, obstacleDespawnPosition.y);
	}

	private void OnDrawGizmos()
	{
		Gizmos.color = Color.red;
		Gizmos.DrawWireCube(obstacleSpawnPosition, new Vector3(obstacleSpawnRange, 1f, 1f));
		Gizmos.color = Color.green;
		Gizmos.DrawWireCube(obstacleDespawnPosition, new Vector3(obstacleSpawnRange, 1f, 1f));
	}
}
