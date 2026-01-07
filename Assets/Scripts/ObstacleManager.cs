using System.Collections.Generic;
using UnityEngine;

public class ObstacleManager : MonoBehaviour
{
    public static ObstacleManager Instance { get; private set; }
    
    [Header("Obstacle Settings")]
    [SerializeField] private float obstacleMoveSpeed = 100f;
    [SerializeField] private float obstacleSpawnRate = 2f;
    [SerializeField] private float obstacleSpawnRange = 8f;
    [SerializeField] private Vector3 obstacleSpawnPosition = new Vector3(0, 10, 0);
    [SerializeField] private Vector3 obstacleDespawnPosition = new Vector3(0, -10, 0);
    [SerializeField] private Obstacle obstaclePrefab;

    private float _obstacleSpawnTimer;

    private void Awake()
    {
        if (Instance && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    private void Update()
    {
        if (GameManager.Instance && GameManager.Instance.CurrentState == GameState.Playing)
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
        float spawnX = Random.Range(-obstacleSpawnRange / 2, obstacleSpawnRange / 2);
        Vector3 spawnPosition = new Vector3(spawnX, obstacleSpawnPosition.y, 0);
        Obstacle newObstacle = Instantiate(obstaclePrefab, spawnPosition, Quaternion.identity);
        newObstacle.Initialize(obstacleMoveSpeed, obstacleDespawnPosition.y);
    }

    private void OnDrawGizmos()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(obstacleSpawnPosition, new Vector3(obstacleSpawnRange, 1, 1));
        Gizmos.color = Color.green;
        Gizmos.DrawWireCube(obstacleDespawnPosition, new Vector3(obstacleSpawnRange, 1, 1));
    }
}