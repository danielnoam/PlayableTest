if ( TRACE ) { TRACE( JSON.parse( '["GameManager#init","GameManager#Awake","GameManager#Start","GameManager#Update","GameManager#UpdateScore","GameManager#UpdateSpeed","GameManager#TogglePause","GameManager#Pause","GameManager#Resume","GameManager#GameOver","GameManager#RestartGame","InputHandler#IsPressed#get","InputHandler#IsHovered#get","InputHandler#OnMouseEnter","InputHandler#OnMouseExit","InputHandler#OnMouseDown","InputHandler#OnMouseUp","InputHandler#OnPointerDown","InputHandler#OnPointerUp","InputHandler#OnPointerEnter","InputHandler#OnPointerExit","Obstacle#RigidBody#get","Obstacle#Initialize","Obstacle#FixedUpdate","Obstacle#HandleMovement","Obstacle#CheckDespawn","Obstacle#OnCollisionEnter","ObstacleManager#init","ObstacleManager#Awake","ObstacleManager#Update","ObstacleManager#HandleObstacleSpawning","ObstacleManager#SpawnObstacle","ObstacleManager#OnDrawGizmos","PlayerController#init","PlayerController#Awake","PlayerController#FixedUpdate","PlayerController#HandleMovement","PlayerController#OnCollisionEnter","UIManager#Update","UIManager#UpdateScoreUI"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            },
            events: {
                OnGameOver: null,
                OnGamePaused: null,
                OnGameResumed: null
            }
        },
        fields: {
            startSpeed: 0,
            speedIncreaseRate: 0,
            maxSpeed: 0,
            CurrentScore: 0,
            CurrentSpeed: 0,
            CurrentState: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.startSpeed = 5.0;
                this.speedIncreaseRate = 0.1;
                this.maxSpeed = 20.0;
                this.CurrentState = GameState.Playing;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    GameManager.Instance = this;
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.CurrentSpeed = this.startSpeed;
                this.CurrentScore = 0.0;
                this.CurrentState = GameState.Playing;
                UnityEngine.Time.timeScale = 1.0;
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.R)) {
                    this.RestartGame();
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Escape) && this.CurrentState !== GameState.Dead) {
                    this.TogglePause();
                }
                if (this.CurrentState === GameState.Playing) {
                    this.UpdateScore();
                    this.UpdateSpeed();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.UpdateScore start.*/
            UpdateScore: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateScore", this ); }

                this.CurrentScore += UnityEngine.Time.deltaTime;
            },
            /*GameManager.UpdateScore end.*/

            /*GameManager.UpdateSpeed start.*/
            UpdateSpeed: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateSpeed", this ); }

                this.CurrentSpeed += this.speedIncreaseRate * UnityEngine.Time.deltaTime;
                this.CurrentSpeed = UnityEngine.Mathf.Min(this.CurrentSpeed, this.maxSpeed);
            },
            /*GameManager.UpdateSpeed end.*/

            /*GameManager.TogglePause start.*/
            TogglePause: function () {
if ( TRACE ) { TRACE( "GameManager#TogglePause", this ); }

                if (this.CurrentState === GameState.Playing) {
                    this.Pause();
                } else if (this.CurrentState === GameState.Paused) {
                    this.Resume();
                }
            },
            /*GameManager.TogglePause end.*/

            /*GameManager.Pause start.*/
            Pause: function () {
if ( TRACE ) { TRACE( "GameManager#Pause", this ); }

                this.CurrentState = GameState.Paused;
                UnityEngine.Time.timeScale = 0.0;
                !Bridge.staticEquals(GameManager.OnGamePaused, null) ? GameManager.OnGamePaused() : null;
            },
            /*GameManager.Pause end.*/

            /*GameManager.Resume start.*/
            Resume: function () {
if ( TRACE ) { TRACE( "GameManager#Resume", this ); }

                this.CurrentState = GameState.Playing;
                UnityEngine.Time.timeScale = 1.0;
                !Bridge.staticEquals(GameManager.OnGameResumed, null) ? GameManager.OnGameResumed() : null;
            },
            /*GameManager.Resume end.*/

            /*GameManager.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "GameManager#GameOver", this ); }

                if (this.CurrentState !== GameState.Dead) {
                    this.CurrentState = GameState.Dead;
                    UnityEngine.Time.timeScale = 0.0;
                    !Bridge.staticEquals(GameManager.OnGameOver, null) ? GameManager.OnGameOver() : null;
                }
            },
            /*GameManager.GameOver end.*/

            /*GameManager.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "GameManager#RestartGame", this ); }

                UnityEngine.Time.timeScale = 1.0;
                UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().index);
            },
            /*GameManager.RestartGame end.*/


        }
    });
    /*GameManager end.*/

    /*GameState start.*/
    Bridge.define("GameState", {
        $kind: 6,
        statics: {
            fields: {
                Playing: 0,
                Paused: 1,
                Dead: 2
            }
        }
    });
    /*GameState end.*/

    /*InputHandler start.*/
    Bridge.define("InputHandler", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IPointerUpHandler,UnityEngine.EventSystems.IPointerEnterHandler,UnityEngine.EventSystems.IPointerExitHandler],
        fields: {
            isPressed: false,
            isHovered: false
        },
        props: {
            IsPressed: {
                get: function () {
if ( TRACE ) { TRACE( "InputHandler#IsPressed#get", this ); }

                    return this.isPressed;
                }
            },
            IsHovered: {
                get: function () {
if ( TRACE ) { TRACE( "InputHandler#IsHovered#get", this ); }

                    return this.isHovered;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp",
            "OnPointerEnter", "UnityEngine$EventSystems$IPointerEnterHandler$OnPointerEnter",
            "OnPointerExit", "UnityEngine$EventSystems$IPointerExitHandler$OnPointerExit"
        ],
        methods: {
            /*InputHandler.OnMouseEnter start.*/
            OnMouseEnter: function () {
if ( TRACE ) { TRACE( "InputHandler#OnMouseEnter", this ); }

                this.isHovered = true;
            },
            /*InputHandler.OnMouseEnter end.*/

            /*InputHandler.OnMouseExit start.*/
            OnMouseExit: function () {
if ( TRACE ) { TRACE( "InputHandler#OnMouseExit", this ); }

                this.isHovered = false;
            },
            /*InputHandler.OnMouseExit end.*/

            /*InputHandler.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "InputHandler#OnMouseDown", this ); }

                this.isPressed = true;
            },
            /*InputHandler.OnMouseDown end.*/

            /*InputHandler.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "InputHandler#OnMouseUp", this ); }

                this.isPressed = false;
            },
            /*InputHandler.OnMouseUp end.*/

            /*InputHandler.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "InputHandler#OnPointerDown", this ); }

                this.isPressed = true;
            },
            /*InputHandler.OnPointerDown end.*/

            /*InputHandler.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "InputHandler#OnPointerUp", this ); }

                this.isPressed = false;
            },
            /*InputHandler.OnPointerUp end.*/

            /*InputHandler.OnPointerEnter start.*/
            OnPointerEnter: function (eventData) {
if ( TRACE ) { TRACE( "InputHandler#OnPointerEnter", this ); }

                this.isHovered = true;
            },
            /*InputHandler.OnPointerEnter end.*/

            /*InputHandler.OnPointerExit start.*/
            OnPointerExit: function (eventData) {
if ( TRACE ) { TRACE( "InputHandler#OnPointerExit", this ); }

                this.isHovered = false;
            },
            /*InputHandler.OnPointerExit end.*/


        }
    });
    /*InputHandler end.*/

    /*Obstacle start.*/
    Bridge.define("Obstacle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rigidBody: null,
            _moveSpeed: 0,
            _despawnY: 0
        },
        props: {
            RigidBody: {
                get: function () {
if ( TRACE ) { TRACE( "Obstacle#RigidBody#get", this ); }

                    return this.rigidBody;
                }
            }
        },
        methods: {
            /*Obstacle.Initialize start.*/
            Initialize: function (moveSpeed, despawnY) {
if ( TRACE ) { TRACE( "Obstacle#Initialize", this ); }

                this._moveSpeed = moveSpeed;
                this._despawnY = despawnY;
            },
            /*Obstacle.Initialize end.*/

            /*Obstacle.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "Obstacle#FixedUpdate", this ); }

                this.HandleMovement();
                this.CheckDespawn();
            },
            /*Obstacle.FixedUpdate end.*/

            /*Obstacle.HandleMovement start.*/
            HandleMovement: function () {
if ( TRACE ) { TRACE( "Obstacle#HandleMovement", this ); }

                this.rigidBody.MovePosition(this.rigidBody.position.$clone().add( pc.Vec3.DOWN.clone().clone().scale( (this._moveSpeed * UnityEngine.Time.fixedDeltaTime) ) ));
            },
            /*Obstacle.HandleMovement end.*/

            /*Obstacle.CheckDespawn start.*/
            CheckDespawn: function () {
if ( TRACE ) { TRACE( "Obstacle#CheckDespawn", this ); }

                if (this.rigidBody.position.y <= this._despawnY) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*Obstacle.CheckDespawn end.*/

            /*Obstacle.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "Obstacle#OnCollisionEnter", this ); }

                var $t;
                var _discard1 = { };
                if (collision.gameObject.TryGetComponent$1(PlayerController, _discard1)) {
                    UnityEngine.MonoBehaviour.op_Inequality(($t = GameManager.Instance), null) ? $t.GameOver() : null;
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*Obstacle.OnCollisionEnter end.*/


        }
    });
    /*Obstacle end.*/

    /*ObstacleManager start.*/
    Bridge.define("ObstacleManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            obstacleMoveSpeed: 0,
            obstacleSpawnRate: 0,
            obstacleSpawnRange: 0,
            obstacleSpawnPosition: null,
            obstacleDespawnPosition: null,
            obstaclePrefab: null,
            _obstacleSpawnTimer: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ObstacleManager#init", this ); }

                this.obstacleSpawnPosition = new UnityEngine.Vector3();
                this.obstacleDespawnPosition = new UnityEngine.Vector3();
                this.obstacleMoveSpeed = 100.0;
                this.obstacleSpawnRate = 2.0;
                this.obstacleSpawnRange = 8.0;
                this.obstacleSpawnPosition = new pc.Vec3( 0.0, 10.0, 0.0 );
                this.obstacleDespawnPosition = new pc.Vec3( 0.0, -10.0, 0.0 );
            }
        },
        methods: {
            /*ObstacleManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ObstacleManager#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(ObstacleManager.Instance) && UnityEngine.MonoBehaviour.op_Inequality(ObstacleManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    ObstacleManager.Instance = this;
                }
            },
            /*ObstacleManager.Awake end.*/

            /*ObstacleManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ObstacleManager#Update", this ); }

                if (UnityEngine.Object.op_Implicit(GameManager.Instance) && GameManager.Instance.CurrentState === GameState.Playing) {
                    this.HandleObstacleSpawning();
                }
            },
            /*ObstacleManager.Update end.*/

            /*ObstacleManager.HandleObstacleSpawning start.*/
            HandleObstacleSpawning: function () {
if ( TRACE ) { TRACE( "ObstacleManager#HandleObstacleSpawning", this ); }

                this._obstacleSpawnTimer += UnityEngine.Time.deltaTime;
                if (this._obstacleSpawnTimer >= this.obstacleSpawnRate) {
                    this.SpawnObstacle();
                    this._obstacleSpawnTimer = 0.0;
                }
            },
            /*ObstacleManager.HandleObstacleSpawning end.*/

            /*ObstacleManager.SpawnObstacle start.*/
            SpawnObstacle: function () {
if ( TRACE ) { TRACE( "ObstacleManager#SpawnObstacle", this ); }

                var spawnX = UnityEngine.Random.Range$1((0.0 - this.obstacleSpawnRange) / 2.0, this.obstacleSpawnRange / 2.0);
                var spawnPosition = new pc.Vec3( spawnX, this.obstacleSpawnPosition.y, 0.0 );
                var newObstacle = UnityEngine.Object.Instantiate$2(Obstacle, this.obstaclePrefab, spawnPosition, pc.Quat.IDENTITY.clone());
                newObstacle.Initialize(this.obstacleMoveSpeed, this.obstacleDespawnPosition.y);
            },
            /*ObstacleManager.SpawnObstacle end.*/

            /*ObstacleManager.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
if ( TRACE ) { TRACE( "ObstacleManager#OnDrawGizmos", this ); }

                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 0, 0, 1 );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireCube', null );
                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 0, 1, 0, 1 );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireCube', null );
            },
            /*ObstacleManager.OnDrawGizmos end.*/


        }
    });
    /*ObstacleManager end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            moveSpeed: 0,
            moveLeftKey: 0,
            moveRightKey: 0,
            rigidBody: null,
            playerGfx: null,
            inputHandlerRight: null,
            inputHandlerLeft: null,
            _horizontalInput: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.moveSpeed = 200.0;
                this.moveLeftKey = UnityEngine.KeyCode.A;
                this.moveRightKey = UnityEngine.KeyCode.D;
            }
        },
        methods: {
            /*PlayerController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(PlayerController.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(PlayerController.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    PlayerController.Instance = this;
                }
            },
            /*PlayerController.Awake end.*/

            /*PlayerController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerController#FixedUpdate", this ); }

                if (UnityEngine.Object.op_Implicit(GameManager.Instance) && GameManager.Instance.CurrentState === GameState.Playing) {
                    this.HandleMovement();
                }
            },
            /*PlayerController.FixedUpdate end.*/

            /*PlayerController.HandleMovement start.*/
            HandleMovement: function () {
if ( TRACE ) { TRACE( "PlayerController#HandleMovement", this ); }

                if (UnityEngine.Input.GetKey(this.moveLeftKey) || this.inputHandlerLeft.IsPressed) {
                    this._horizontalInput = -1.0;
                } else if (UnityEngine.Input.GetKey(this.moveRightKey) || this.inputHandlerRight.IsPressed) {
                    this._horizontalInput = 1.0;
                } else {
                    this._horizontalInput = 0.0;
                }
                var movement = new pc.Vec3( this._horizontalInput * this.moveSpeed * UnityEngine.Time.fixedDeltaTime, 0.0, 0.0 );
                this.rigidBody.linearVelocity = movement.$clone();
            },
            /*PlayerController.HandleMovement end.*/

            /*PlayerController.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "PlayerController#OnCollisionEnter", this ); }

                var $t;
                var _discard1 = { };
                if (collision.gameObject.TryGetComponent$1(Obstacle, _discard1)) {
                    UnityEngine.MonoBehaviour.op_Inequality(($t = GameManager.Instance), null) ? $t.GameOver() : null;
                }
            },
            /*PlayerController.OnCollisionEnter end.*/


        }
    });
    /*PlayerController end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scoreText: null,
            gameManager: null
        },
        methods: {
            /*UIManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UIManager#Update", this ); }

                this.UpdateScoreUI();
            },
            /*UIManager.Update end.*/

            /*UIManager.UpdateScoreUI start.*/
            UpdateScoreUI: function () {
if ( TRACE ) { TRACE( "UIManager#UpdateScoreUI", this ); }

                this.scoreText.text = "Score: " + Math.floor(this.gameManager.CurrentScore);
            },
            /*UIManager.UpdateScoreUI end.*/


        }
    });
    /*UIManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.EventSystems","UnityEngine","TMPro"];

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":2,"n":"Pause","t":8,"sn":"Pause","rt":$n[0].Void},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void},{"a":2,"n":"Resume","t":8,"sn":"Resume","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TogglePause","t":8,"sn":"TogglePause","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateScore","t":8,"sn":"UpdateScore","rt":$n[0].Void},{"a":1,"n":"UpdateSpeed","t":8,"sn":"UpdateSpeed","rt":$n[0].Void},{"a":2,"n":"CurrentScore","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CurrentScore","t":8,"rt":$n[0].Single,"fg":"CurrentScore","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_CurrentScore","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"CurrentScore"},"fn":"CurrentScore"},{"a":2,"n":"CurrentSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CurrentSpeed","t":8,"rt":$n[0].Single,"fg":"CurrentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_CurrentSpeed","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"CurrentSpeed"},"fn":"CurrentSpeed"},{"a":2,"n":"CurrentState","t":16,"rt":GameState,"g":{"a":2,"n":"get_CurrentState","t":8,"rt":GameState,"fg":"CurrentState","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},"s":{"a":1,"n":"set_CurrentState","t":8,"p":[GameState],"rt":$n[0].Void,"fs":"CurrentState"},"fn":"CurrentState"},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"__Property__Initializer__CurrentState","t":4,"rt":GameState,"sn":"__Property__Initializer__CurrentState","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Max speed", 3, "Game Controls", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxSpeed","t":4,"rt":$n[0].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Speed increase rate", 2, "Game Controls", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedIncreaseRate","t":4,"rt":$n[0].Single,"sn":"speedIncreaseRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Speed Settings"),new UnityEngine.LunaPlaygroundFieldAttribute("Start speed", 1, "Game Controls", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startSpeed","t":4,"rt":$n[0].Single,"sn":"startSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnGameOver","is":true,"t":2,"ad":{"a":2,"n":"add_OnGameOver","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameOver","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameOver","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameOver","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnGamePaused","is":true,"t":2,"ad":{"a":2,"n":"add_OnGamePaused","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGamePaused","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGamePaused","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGamePaused","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnGameResumed","is":true,"t":2,"ad":{"a":2,"n":"add_OnGameResumed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameResumed","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameResumed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameResumed","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<CurrentScore>k__BackingField","t":4,"rt":$n[0].Single,"sn":"CurrentScore","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<CurrentSpeed>k__BackingField","t":4,"rt":$n[0].Single,"sn":"CurrentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<CurrentState>k__BackingField","t":4,"rt":GameState,"sn":"CurrentState","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"}]}; }, $n);
    /*GameManager end.*/

    /*GameState start.*/
    $m("GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dead","is":true,"t":4,"rt":GameState,"sn":"Dead","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Paused","is":true,"t":4,"rt":GameState,"sn":"Paused","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Playing","is":true,"t":4,"rt":GameState,"sn":"Playing","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameState end.*/

    /*InputHandler start.*/
    $m("InputHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseEnter","t":8,"sn":"OnMouseEnter","rt":$n[0].Void},{"a":1,"n":"OnMouseExit","t":8,"sn":"OnMouseExit","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[1].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[1].PointerEventData]},{"a":2,"n":"OnPointerEnter","t":8,"pi":[{"n":"eventData","pt":$n[1].PointerEventData,"ps":0}],"sn":"OnPointerEnter","rt":$n[0].Void,"p":[$n[1].PointerEventData]},{"a":2,"n":"OnPointerExit","t":8,"pi":[{"n":"eventData","pt":$n[1].PointerEventData,"ps":0}],"sn":"OnPointerExit","rt":$n[0].Void,"p":[$n[1].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[1].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[1].PointerEventData]},{"a":2,"n":"IsHovered","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsHovered","t":8,"rt":$n[0].Boolean,"fg":"IsHovered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsHovered"},{"a":2,"n":"IsPressed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsPressed","t":8,"rt":$n[0].Boolean,"fg":"IsPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPressed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isHovered","t":4,"rt":$n[0].Boolean,"sn":"isHovered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Input"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isPressed","t":4,"rt":$n[0].Boolean,"sn":"isPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*InputHandler end.*/

    /*Obstacle start.*/
    $m("Obstacle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckDespawn","t":8,"sn":"CheckDespawn","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HandleMovement","t":8,"sn":"HandleMovement","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"moveSpeed","pt":$n[0].Single,"ps":0},{"n":"despawnY","pt":$n[0].Single,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[2].Collision]},{"a":2,"n":"RigidBody","t":16,"rt":$n[2].Rigidbody,"g":{"a":2,"n":"get_RigidBody","t":8,"rt":$n[2].Rigidbody,"fg":"RigidBody"},"fn":"RigidBody"},{"a":1,"n":"_despawnY","t":4,"rt":$n[0].Single,"sn":"_despawnY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rigidBody","t":4,"rt":$n[2].Rigidbody,"sn":"rigidBody"}]}; }, $n);
    /*Obstacle end.*/

    /*ObstacleManager start.*/
    $m("ObstacleManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleObstacleSpawning","t":8,"sn":"HandleObstacleSpawning","rt":$n[0].Void},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[0].Void},{"a":1,"n":"SpawnObstacle","t":8,"sn":"SpawnObstacle","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":ObstacleManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":ObstacleManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ObstacleManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_obstacleSpawnTimer","t":4,"rt":$n[0].Single,"sn":"_obstacleSpawnTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleDespawnPosition","t":4,"rt":$n[2].Vector3,"sn":"obstacleDespawnPosition"},{"at":[new UnityEngine.HeaderAttribute("Obstacle Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMoveSpeed","t":4,"rt":$n[0].Single,"sn":"obstacleMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstaclePrefab","t":4,"rt":Obstacle,"sn":"obstaclePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleSpawnPosition","t":4,"rt":$n[2].Vector3,"sn":"obstacleSpawnPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleSpawnRange","t":4,"rt":$n[0].Single,"sn":"obstacleSpawnRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleSpawnRate","t":4,"rt":$n[0].Single,"sn":"obstacleSpawnRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ObstacleManager,"sn":"Instance"}]}; }, $n);
    /*ObstacleManager end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HandleMovement","t":8,"sn":"HandleMovement","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[2].Collision]},{"a":2,"n":"Instance","is":true,"t":16,"rt":PlayerController,"g":{"a":2,"n":"get_Instance","t":8,"rt":PlayerController,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[PlayerController],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_horizontalInput","t":4,"rt":$n[0].Single,"sn":"_horizontalInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inputHandlerLeft","t":4,"rt":InputHandler,"sn":"inputHandlerLeft"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inputHandlerRight","t":4,"rt":InputHandler,"sn":"inputHandlerRight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveLeftKey","t":4,"rt":$n[2].KeyCode,"sn":"moveLeftKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveRightKey","t":4,"rt":$n[2].KeyCode,"sn":"moveRightKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"at":[new UnityEngine.HeaderAttribute("Movement Settings"),new UnityEngine.LunaPlaygroundFieldAttribute("Speed of the player", 1, "Player Controls", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerGfx","t":4,"rt":$n[2].Transform,"sn":"playerGfx"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rigidBody","t":4,"rt":$n[2].Rigidbody,"sn":"rigidBody"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":PlayerController,"sn":"Instance"}]}; }, $n);
    /*PlayerController end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateScoreUI","t":8,"sn":"UpdateScoreUI","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameManager","t":4,"rt":GameManager,"sn":"gameManager"},{"at":[new UnityEngine.HeaderAttribute("UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"scoreText"}]}; }, $n);
    /*UIManager end.*/

    }});
