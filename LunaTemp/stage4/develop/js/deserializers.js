var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointSpring' )
  var i609 = data
  i608.spring = i609[0]
  i608.damper = i609[1]
  i608.targetPosition = i609[2]
  return i608
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointMotor' )
  var i611 = data
  i610.m_TargetVelocity = i611[0]
  i610.m_Force = i611[1]
  i610.m_FreeSpin = i611[2]
  return i610
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointLimits' )
  var i613 = data
  i612.m_Min = i613[0]
  i612.m_Max = i613[1]
  i612.m_Bounciness = i613[2]
  i612.m_BounceMinVelocity = i613[3]
  i612.m_ContactDistance = i613[4]
  i612.minBounce = i613[5]
  i612.maxBounce = i613[6]
  return i612
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointDrive' )
  var i615 = data
  i614.m_PositionSpring = i615[0]
  i614.m_PositionDamper = i615[1]
  i614.m_MaximumForce = i615[2]
  i614.m_UseAcceleration = i615[3]
  return i614
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i617 = data
  i616.m_Spring = i617[0]
  i616.m_Damper = i617[1]
  return i616
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i619 = data
  i618.m_Limit = i619[0]
  i618.m_Bounciness = i619[1]
  i618.m_ContactDistance = i619[2]
  return i618
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i621 = data
  i620.m_ExtremumSlip = i621[0]
  i620.m_ExtremumValue = i621[1]
  i620.m_AsymptoteSlip = i621[2]
  i620.m_AsymptoteValue = i621[3]
  i620.m_Stiffness = i621[4]
  return i620
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i623 = data
  i622.m_LowerAngle = i623[0]
  i622.m_UpperAngle = i623[1]
  return i622
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i625 = data
  i624.m_MotorSpeed = i625[0]
  i624.m_MaximumMotorTorque = i625[1]
  return i624
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i627 = data
  i626.m_DampingRatio = i627[0]
  i626.m_Frequency = i627[1]
  i626.m_Angle = i627[2]
  return i626
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i629 = data
  i628.m_LowerTranslation = i629[0]
  i628.m_UpperTranslation = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i631 = data
  i630.position = new pc.Vec3( i631[0], i631[1], i631[2] )
  i630.scale = new pc.Vec3( i631[3], i631[4], i631[5] )
  i630.rotation = new pc.Quat(i631[6], i631[7], i631[8], i631[9])
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i633 = data
  i632.mass = i633[0]
  i632.drag = i633[1]
  i632.angularDrag = i633[2]
  i632.useGravity = !!i633[3]
  i632.isKinematic = !!i633[4]
  i632.constraints = i633[5]
  i632.maxAngularVelocity = i633[6]
  i632.collisionDetectionMode = i633[7]
  i632.interpolation = i633[8]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i635 = data
  i634.center = new pc.Vec3( i635[0], i635[1], i635[2] )
  i634.size = new pc.Vec3( i635[3], i635[4], i635[5] )
  i634.enabled = !!i635[6]
  i634.isTrigger = !!i635[7]
  request.r(i635[8], i635[9], 0, i634, 'material')
  return i634
}

Deserializers["Obstacle"] = function (request, data, root) {
  var i636 = root || request.c( 'Obstacle' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'rigidBody')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'sharedMesh')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'additionalVertexStreams')
  i640.enabled = !!i641[2]
  request.r(i641[3], i641[4], 0, i640, 'sharedMaterial')
  var i643 = i641[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.sharedMaterials = i642
  i640.receiveShadows = !!i641[6]
  i640.shadowCastingMode = i641[7]
  i640.sortingLayerID = i641[8]
  i640.sortingOrder = i641[9]
  i640.lightmapIndex = i641[10]
  i640.lightmapSceneIndex = i641[11]
  i640.lightmapScaleOffset = new pc.Vec4( i641[12], i641[13], i641[14], i641[15] )
  i640.lightProbeUsage = i641[16]
  i640.reflectionProbeUsage = i641[17]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i647 = data
  i646.name = i647[0]
  i646.tagId = i647[1]
  i646.enabled = !!i647[2]
  i646.isStatic = !!i647[3]
  i646.layer = i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i649 = data
  i648.name = i649[0]
  i648.halfPrecision = !!i649[1]
  i648.useSimplification = !!i649[2]
  i648.useUInt32IndexFormat = !!i649[3]
  i648.vertexCount = i649[4]
  i648.aabb = i649[5]
  var i651 = i649[6]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( !!i651[i + 0] );
  }
  i648.streams = i650
  i648.vertices = i649[7]
  var i653 = i649[8]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i653[i + 0]) );
  }
  i648.subMeshes = i652
  var i655 = i649[9]
  var i654 = []
  for(var i = 0; i < i655.length; i += 16) {
    i654.push( new pc.Mat4().setData(i655[i + 0], i655[i + 1], i655[i + 2], i655[i + 3],  i655[i + 4], i655[i + 5], i655[i + 6], i655[i + 7],  i655[i + 8], i655[i + 9], i655[i + 10], i655[i + 11],  i655[i + 12], i655[i + 13], i655[i + 14], i655[i + 15]) );
  }
  i648.bindposes = i654
  var i657 = i649[10]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i657[i + 0]) );
  }
  i648.blendShapes = i656
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i663 = data
  i662.triangles = i663[0]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i669 = data
  i668.name = i669[0]
  var i671 = i669[1]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i671[i + 0]) );
  }
  i668.frames = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i672 = root || new pc.UnityMaterial()
  var i673 = data
  i672.name = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'shader')
  i672.renderQueue = i673[3]
  i672.enableInstancing = !!i673[4]
  var i675 = i673[5]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i675[i + 0]) );
  }
  i672.floatParameters = i674
  var i677 = i673[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i677[i + 0]) );
  }
  i672.colorParameters = i676
  var i679 = i673[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i679[i + 0]) );
  }
  i672.vectorParameters = i678
  var i681 = i673[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i681[i + 0]) );
  }
  i672.textureParameters = i680
  var i683 = i673[9]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i683[i + 0]) );
  }
  i672.materialFlags = i682
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i691 = data
  i690.name = i691[0]
  i690.value = new pc.Color(i691[1], i691[2], i691[3], i691[4])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i695 = data
  i694.name = i695[0]
  i694.value = new pc.Vec4( i695[1], i695[2], i695[3], i695[4] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'value')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i703 = data
  i702.name = i703[0]
  i702.enabled = !!i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i705 = data
  i704.name = i705[0]
  i704.width = i705[1]
  i704.height = i705[2]
  i704.mipmapCount = i705[3]
  i704.anisoLevel = i705[4]
  i704.filterMode = i705[5]
  i704.hdr = !!i705[6]
  i704.format = i705[7]
  i704.wrapMode = i705[8]
  i704.alphaIsTransparency = !!i705[9]
  i704.alphaSource = i705[10]
  i704.graphicsFormat = i705[11]
  i704.sRGBTexture = !!i705[12]
  i704.desiredColorSpace = i705[13]
  i704.wrapU = i705[14]
  i704.wrapV = i705[15]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i707 = data
  i706.center = new pc.Vec3( i707[0], i707[1], i707[2] )
  i706.radius = i707[3]
  i706.enabled = !!i707[4]
  i706.isTrigger = !!i707[5]
  request.r(i707[6], i707[7], 0, i706, 'material')
  return i706
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i708 = root || request.c( 'PlayerController' )
  var i709 = data
  i708.moveSpeed = i709[0]
  i708.moveLeftKey = i709[1]
  i708.moveRightKey = i709[2]
  request.r(i709[3], i709[4], 0, i708, 'rigidBody')
  request.r(i709[5], i709[6], 0, i708, 'playerGfx')
  request.r(i709[7], i709[8], 0, i708, 'deathParticleEffect')
  request.r(i709[9], i709[10], 0, i708, 'inputHandlerRight')
  request.r(i709[11], i709[12], 0, i708, 'inputHandlerLeft')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i711 = data
  i710.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i711[0], i710.main)
  i710.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i711[1], i710.colorBySpeed)
  i710.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i711[2], i710.colorOverLifetime)
  i710.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i711[3], i710.emission)
  i710.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i711[4], i710.rotationBySpeed)
  i710.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i711[5], i710.rotationOverLifetime)
  i710.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i711[6], i710.shape)
  i710.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i711[7], i710.sizeBySpeed)
  i710.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i711[8], i710.sizeOverLifetime)
  i710.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i711[9], i710.textureSheetAnimation)
  i710.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i711[10], i710.velocityOverLifetime)
  i710.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i711[11], i710.noise)
  i710.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i711[12], i710.inheritVelocity)
  i710.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i711[13], i710.forceOverLifetime)
  i710.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i711[14], i710.limitVelocityOverLifetime)
  i710.useAutoRandomSeed = !!i711[15]
  i710.randomSeed = i711[16]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemMain()
  var i713 = data
  i712.duration = i713[0]
  i712.loop = !!i713[1]
  i712.prewarm = !!i713[2]
  i712.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.startDelay)
  i712.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[4], i712.startLifetime)
  i712.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[5], i712.startSpeed)
  i712.startSize3D = !!i713[6]
  i712.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[7], i712.startSizeX)
  i712.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[8], i712.startSizeY)
  i712.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[9], i712.startSizeZ)
  i712.startRotation3D = !!i713[10]
  i712.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[11], i712.startRotationX)
  i712.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[12], i712.startRotationY)
  i712.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[13], i712.startRotationZ)
  i712.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i713[14], i712.startColor)
  i712.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[15], i712.gravityModifier)
  i712.simulationSpace = i713[16]
  request.r(i713[17], i713[18], 0, i712, 'customSimulationSpace')
  i712.simulationSpeed = i713[19]
  i712.useUnscaledTime = !!i713[20]
  i712.scalingMode = i713[21]
  i712.playOnAwake = !!i713[22]
  i712.maxParticles = i713[23]
  i712.emitterVelocityMode = i713[24]
  i712.stopAction = i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i714 = root || new pc.MinMaxCurve()
  var i715 = data
  i714.mode = i715[0]
  i714.curveMin = new pc.AnimationCurve( { keys_flow: i715[1] } )
  i714.curveMax = new pc.AnimationCurve( { keys_flow: i715[2] } )
  i714.curveMultiplier = i715[3]
  i714.constantMin = i715[4]
  i714.constantMax = i715[5]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i716 = root || new pc.MinMaxGradient()
  var i717 = data
  i716.mode = i717[0]
  i716.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i717[1], i716.gradientMin)
  i716.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i717[2], i716.gradientMax)
  i716.colorMin = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.colorMax = new pc.Color(i717[7], i717[8], i717[9], i717[10])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i719 = data
  i718.mode = i719[0]
  var i721 = i719[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i721[i + 0]) );
  }
  i718.colorKeys = i720
  var i723 = i719[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i723[i + 0]) );
  }
  i718.alphaKeys = i722
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemColorBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i725[1], i724.color)
  i724.range = new pc.Vec2( i725[2], i725[3] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i729 = data
  i728.color = new pc.Color(i729[0], i729[1], i729[2], i729[3])
  i728.time = i729[4]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i733 = data
  i732.alpha = i733[0]
  i732.time = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemColorOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[1], i734.color)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemEmitter()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.rateOverTime)
  i736.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.rateOverDistance)
  var i739 = i737[3]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i739[i + 0]) );
  }
  i736.bursts = i738
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemBurst()
  var i743 = data
  i742.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[0], i742.count)
  i742.cycleCount = i743[1]
  i742.minCount = i743[2]
  i742.maxCount = i743[3]
  i742.repeatInterval = i743[4]
  i742.time = i743[5]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemRotationBySpeed()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  i744.range = new pc.Vec2( i745[5], i745[6] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemRotationOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemShape()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.shapeType = i749[1]
  i748.randomDirectionAmount = i749[2]
  i748.sphericalDirectionAmount = i749[3]
  i748.randomPositionAmount = i749[4]
  i748.alignToDirection = !!i749[5]
  i748.radius = i749[6]
  i748.radiusMode = i749[7]
  i748.radiusSpread = i749[8]
  i748.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[9], i748.radiusSpeed)
  i748.radiusThickness = i749[10]
  i748.angle = i749[11]
  i748.length = i749[12]
  i748.boxThickness = new pc.Vec3( i749[13], i749[14], i749[15] )
  i748.meshShapeType = i749[16]
  request.r(i749[17], i749[18], 0, i748, 'mesh')
  request.r(i749[19], i749[20], 0, i748, 'meshRenderer')
  request.r(i749[21], i749[22], 0, i748, 'skinnedMeshRenderer')
  i748.useMeshMaterialIndex = !!i749[23]
  i748.meshMaterialIndex = i749[24]
  i748.useMeshColors = !!i749[25]
  i748.normalOffset = i749[26]
  i748.arc = i749[27]
  i748.arcMode = i749[28]
  i748.arcSpread = i749[29]
  i748.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[30], i748.arcSpeed)
  i748.donutRadius = i749[31]
  i748.position = new pc.Vec3( i749[32], i749[33], i749[34] )
  i748.rotation = new pc.Vec3( i749[35], i749[36], i749[37] )
  i748.scale = new pc.Vec3( i749[38], i749[39], i749[40] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemSizeBySpeed()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  i750.range = new pc.Vec2( i751[5], i751[6] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemSizeOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.mode = i755[1]
  i754.animation = i755[2]
  i754.numTilesX = i755[3]
  i754.numTilesY = i755[4]
  i754.useRandomRow = !!i755[5]
  i754.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[6], i754.frameOverTime)
  i754.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[7], i754.startFrame)
  i754.cycleCount = i755[8]
  i754.rowIndex = i755[9]
  i754.flipU = i755[10]
  i754.flipV = i755[11]
  i754.spriteCount = i755[12]
  var i757 = i755[13]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sprites = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.z)
  i760.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.radial)
  i760.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[5], i760.speedModifier)
  i760.space = i761[6]
  i760.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.orbitalX)
  i760.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.orbitalY)
  i760.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.orbitalZ)
  i760.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[10], i760.orbitalOffsetX)
  i760.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.orbitalOffsetY)
  i760.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[12], i760.orbitalOffsetZ)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemNoise()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.separateAxes = !!i763[1]
  i762.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.strengthX)
  i762.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.strengthY)
  i762.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.strengthZ)
  i762.frequency = i763[5]
  i762.damping = !!i763[6]
  i762.octaveCount = i763[7]
  i762.octaveMultiplier = i763[8]
  i762.octaveScale = i763[9]
  i762.quality = i763[10]
  i762.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.scrollSpeed)
  i762.scrollSpeedMultiplier = i763[12]
  i762.remapEnabled = !!i763[13]
  i762.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[14], i762.remapX)
  i762.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[15], i762.remapY)
  i762.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[16], i762.remapZ)
  i762.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[17], i762.positionAmount)
  i762.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[18], i762.rotationAmount)
  i762.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[19], i762.sizeAmount)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemInheritVelocity()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.mode = i765[1]
  i764.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.curve)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemForceOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.space = i767[4]
  i766.randomized = !!i767[5]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.limit)
  i768.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.limitX)
  i768.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.limitY)
  i768.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.limitZ)
  i768.dampen = i769[5]
  i768.separateAxes = !!i769[6]
  i768.space = i769[7]
  i768.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[8], i768.drag)
  i768.multiplyDragByParticleSize = !!i769[9]
  i768.multiplyDragByParticleVelocity = !!i769[10]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'mesh')
  i770.meshCount = i771[2]
  i770.activeVertexStreamsCount = i771[3]
  i770.alignment = i771[4]
  i770.renderMode = i771[5]
  i770.sortMode = i771[6]
  i770.lengthScale = i771[7]
  i770.velocityScale = i771[8]
  i770.cameraVelocityScale = i771[9]
  i770.normalDirection = i771[10]
  i770.sortingFudge = i771[11]
  i770.minParticleSize = i771[12]
  i770.maxParticleSize = i771[13]
  i770.pivot = new pc.Vec3( i771[14], i771[15], i771[16] )
  request.r(i771[17], i771[18], 0, i770, 'trailMaterial')
  i770.applyActiveColorSpace = !!i771[19]
  i770.enabled = !!i771[20]
  request.r(i771[21], i771[22], 0, i770, 'sharedMaterial')
  var i773 = i771[23]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.sharedMaterials = i772
  i770.receiveShadows = !!i771[24]
  i770.shadowCastingMode = i771[25]
  i770.sortingLayerID = i771[26]
  i770.sortingOrder = i771[27]
  i770.lightmapIndex = i771[28]
  i770.lightmapSceneIndex = i771[29]
  i770.lightmapScaleOffset = new pc.Vec4( i771[30], i771[31], i771[32], i771[33] )
  i770.lightProbeUsage = i771[34]
  i770.reflectionProbeUsage = i771[35]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i775 = data
  i774.name = i775[0]
  i774.atlasId = i775[1]
  i774.mipmapCount = i775[2]
  i774.hdr = !!i775[3]
  i774.size = i775[4]
  i774.anisoLevel = i775[5]
  i774.filterMode = i775[6]
  var i777 = i775[7]
  var i776 = []
  for(var i = 0; i < i777.length; i += 4) {
    i776.push( UnityEngine.Rect.MinMaxRect(i777[i + 0], i777[i + 1], i777[i + 2], i777[i + 3]) );
  }
  i774.rects = i776
  i774.wrapU = i775[8]
  i774.wrapV = i775[9]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i781 = data
  i780.name = i781[0]
  i780.index = i781[1]
  i780.startup = !!i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i783 = data
  i782.aspect = i783[0]
  i782.orthographic = !!i783[1]
  i782.orthographicSize = i783[2]
  i782.backgroundColor = new pc.Color(i783[3], i783[4], i783[5], i783[6])
  i782.nearClipPlane = i783[7]
  i782.farClipPlane = i783[8]
  i782.fieldOfView = i783[9]
  i782.depth = i783[10]
  i782.clearFlags = i783[11]
  i782.cullingMask = i783[12]
  i782.rect = i783[13]
  request.r(i783[14], i783[15], 0, i782, 'targetTexture')
  i782.usePhysicalProperties = !!i783[16]
  i782.focalLength = i783[17]
  i782.sensorSize = new pc.Vec2( i783[18], i783[19] )
  i782.lensShift = new pc.Vec2( i783[20], i783[21] )
  i782.gateFit = i783[22]
  i782.commandBufferCount = i783[23]
  i782.cameraType = i783[24]
  i782.enabled = !!i783[25]
  return i782
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i785 = data
  i784.m_RenderShadows = !!i785[0]
  i784.m_RequiresDepthTextureOption = i785[1]
  i784.m_RequiresOpaqueTextureOption = i785[2]
  i784.m_CameraType = i785[3]
  var i787 = i785[4]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i784.m_Cameras = i786
  i784.m_RendererIndex = i785[5]
  i784.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i785[6] )
  request.r(i785[7], i785[8], 0, i784, 'm_VolumeTrigger')
  i784.m_VolumeFrameworkUpdateModeOption = i785[9]
  i784.m_RenderPostProcessing = !!i785[10]
  i784.m_Antialiasing = i785[11]
  i784.m_AntialiasingQuality = i785[12]
  i784.m_StopNaN = !!i785[13]
  i784.m_Dithering = !!i785[14]
  i784.m_ClearDepth = !!i785[15]
  i784.m_AllowXRRendering = !!i785[16]
  i784.m_AllowHDROutput = !!i785[17]
  i784.m_UseScreenCoordOverride = !!i785[18]
  i784.m_ScreenSizeOverride = new pc.Vec4( i785[19], i785[20], i785[21], i785[22] )
  i784.m_ScreenCoordScaleBias = new pc.Vec4( i785[23], i785[24], i785[25], i785[26] )
  i784.m_RequiresDepthTexture = !!i785[27]
  i784.m_RequiresColorTexture = !!i785[28]
  i784.m_Version = i785[29]
  i784.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i785[30], i784.m_TaaSettings)
  return i784
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i791 = data
  i790.m_Quality = i791[0]
  i790.m_FrameInfluence = i791[1]
  i790.m_JitterScale = i791[2]
  i790.m_MipBias = i791[3]
  i790.m_VarianceClampScale = i791[4]
  i790.m_ContrastAdaptiveSharpening = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i793 = data
  i792.type = i793[0]
  i792.color = new pc.Color(i793[1], i793[2], i793[3], i793[4])
  i792.cullingMask = i793[5]
  i792.intensity = i793[6]
  i792.range = i793[7]
  i792.spotAngle = i793[8]
  i792.shadows = i793[9]
  i792.shadowNormalBias = i793[10]
  i792.shadowBias = i793[11]
  i792.shadowStrength = i793[12]
  i792.shadowResolution = i793[13]
  i792.lightmapBakeType = i793[14]
  i792.renderMode = i793[15]
  request.r(i793[16], i793[17], 0, i792, 'cookie')
  i792.cookieSize = i793[18]
  i792.shadowNearPlane = i793[19]
  i792.enabled = !!i793[20]
  return i792
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i795 = data
  i794.m_Version = i795[0]
  i794.m_UsePipelineSettings = !!i795[1]
  i794.m_AdditionalLightsShadowResolutionTier = i795[2]
  i794.m_LightLayerMask = i795[3]
  i794.m_RenderingLayers = i795[4]
  i794.m_CustomShadowLayers = !!i795[5]
  i794.m_ShadowLayerMask = i795[6]
  i794.m_ShadowRenderingLayers = i795[7]
  i794.m_LightCookieSize = new pc.Vec2( i795[8], i795[9] )
  i794.m_LightCookieOffset = new pc.Vec2( i795[10], i795[11] )
  i794.m_SoftShadowQuality = i795[12]
  return i794
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i797 = data
  i796.priority = i797[0]
  i796.blendDistance = i797[1]
  i796.weight = i797[2]
  request.r(i797[3], i797[4], 0, i796, 'sharedProfile')
  i796.m_IsGlobal = !!i797[5]
  return i796
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'm_FirstSelected')
  i798.m_sendNavigationEvents = !!i799[2]
  i798.m_DragThreshold = i799[3]
  return i798
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i801 = data
  i800.m_MoveRepeatDelay = i801[0]
  i800.m_MoveRepeatRate = i801[1]
  request.r(i801[2], i801[3], 0, i800, 'm_XRTrackingOrigin')
  request.r(i801[4], i801[5], 0, i800, 'm_ActionsAsset')
  request.r(i801[6], i801[7], 0, i800, 'm_PointAction')
  request.r(i801[8], i801[9], 0, i800, 'm_MoveAction')
  request.r(i801[10], i801[11], 0, i800, 'm_SubmitAction')
  request.r(i801[12], i801[13], 0, i800, 'm_CancelAction')
  request.r(i801[14], i801[15], 0, i800, 'm_LeftClickAction')
  request.r(i801[16], i801[17], 0, i800, 'm_MiddleClickAction')
  request.r(i801[18], i801[19], 0, i800, 'm_RightClickAction')
  request.r(i801[20], i801[21], 0, i800, 'm_ScrollWheelAction')
  request.r(i801[22], i801[23], 0, i800, 'm_TrackedDevicePositionAction')
  request.r(i801[24], i801[25], 0, i800, 'm_TrackedDeviceOrientationAction')
  i800.m_DeselectOnBackgroundClick = !!i801[26]
  i800.m_PointerBehavior = i801[27]
  i800.m_CursorLockBehavior = i801[28]
  i800.m_ScrollDeltaPerTick = i801[29]
  i800.m_SendPointerHoverToParent = !!i801[30]
  return i800
}

Deserializers["InputHandler"] = function (request, data, root) {
  var i802 = root || request.c( 'InputHandler' )
  var i803 = data
  i802.detectionMode = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'debugText')
  i802.isPressed = !!i803[3]
  i802.isHovered = !!i803[4]
  return i802
}

Deserializers["GameManager"] = function (request, data, root) {
  var i804 = root || request.c( 'GameManager' )
  var i805 = data
  i804.startSpeed = i805[0]
  i804.speedIncreaseRate = i805[1]
  i804.maxSpeed = i805[2]
  return i804
}

Deserializers["ObstacleManager"] = function (request, data, root) {
  var i806 = root || request.c( 'ObstacleManager' )
  var i807 = data
  i806.obstacleMoveSpeed = i807[0]
  i806.obstacleSpawnRate = i807[1]
  i806.obstacleSpawnRange = i807[2]
  i806.obstacleSpawnPosition = new pc.Vec3( i807[3], i807[4], i807[5] )
  i806.obstacleDespawnPosition = new pc.Vec3( i807[6], i807[7], i807[8] )
  request.r(i807[9], i807[10], 0, i806, 'obstaclePrefab')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i809 = data
  i808.pivot = new pc.Vec2( i809[0], i809[1] )
  i808.anchorMin = new pc.Vec2( i809[2], i809[3] )
  i808.anchorMax = new pc.Vec2( i809[4], i809[5] )
  i808.sizeDelta = new pc.Vec2( i809[6], i809[7] )
  i808.anchoredPosition3D = new pc.Vec3( i809[8], i809[9], i809[10] )
  i808.rotation = new pc.Quat(i809[11], i809[12], i809[13], i809[14])
  i808.scale = new pc.Vec3( i809[15], i809[16], i809[17] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i811 = data
  i810.planeDistance = i811[0]
  i810.referencePixelsPerUnit = i811[1]
  i810.isFallbackOverlay = !!i811[2]
  i810.renderMode = i811[3]
  i810.renderOrder = i811[4]
  i810.sortingLayerName = i811[5]
  i810.sortingOrder = i811[6]
  i810.scaleFactor = i811[7]
  request.r(i811[8], i811[9], 0, i810, 'worldCamera')
  i810.overrideSorting = !!i811[10]
  i810.pixelPerfect = !!i811[11]
  i810.targetDisplay = i811[12]
  i810.overridePixelPerfect = !!i811[13]
  i810.enabled = !!i811[14]
  return i810
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i813 = data
  i812.m_UiScaleMode = i813[0]
  i812.m_ReferencePixelsPerUnit = i813[1]
  i812.m_ScaleFactor = i813[2]
  i812.m_ReferenceResolution = new pc.Vec2( i813[3], i813[4] )
  i812.m_ScreenMatchMode = i813[5]
  i812.m_MatchWidthOrHeight = i813[6]
  i812.m_PhysicalUnit = i813[7]
  i812.m_FallbackScreenDPI = i813[8]
  i812.m_DefaultSpriteDPI = i813[9]
  i812.m_DynamicPixelsPerUnit = i813[10]
  i812.m_PresetInfoIsWorld = !!i813[11]
  return i812
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i815 = data
  i814.m_IgnoreReversedGraphics = !!i815[0]
  i814.m_BlockingObjects = i815[1]
  i814.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i815[2] )
  return i814
}

Deserializers["UIManager"] = function (request, data, root) {
  var i816 = root || request.c( 'UIManager' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'scoreText')
  request.r(i817[2], i817[3], 0, i816, 'gameManager')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i819 = data
  i818.cullTransparentMesh = !!i819[0]
  return i818
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i821 = data
  i820.m_hasFontAssetChanged = !!i821[0]
  request.r(i821[1], i821[2], 0, i820, 'm_baseMaterial')
  i820.m_maskOffset = new pc.Vec4( i821[3], i821[4], i821[5], i821[6] )
  i820.m_text = i821[7]
  i820.m_isRightToLeft = !!i821[8]
  request.r(i821[9], i821[10], 0, i820, 'm_fontAsset')
  request.r(i821[11], i821[12], 0, i820, 'm_sharedMaterial')
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.m_fontSharedMaterials = i822
  request.r(i821[14], i821[15], 0, i820, 'm_fontMaterial')
  var i825 = i821[16]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i820.m_fontMaterials = i824
  i820.m_fontColor32 = UnityEngine.Color32.ConstructColor(i821[17], i821[18], i821[19], i821[20])
  i820.m_fontColor = new pc.Color(i821[21], i821[22], i821[23], i821[24])
  i820.m_enableVertexGradient = !!i821[25]
  i820.m_colorMode = i821[26]
  i820.m_fontColorGradient = request.d('TMPro.VertexGradient', i821[27], i820.m_fontColorGradient)
  request.r(i821[28], i821[29], 0, i820, 'm_fontColorGradientPreset')
  request.r(i821[30], i821[31], 0, i820, 'm_spriteAsset')
  i820.m_tintAllSprites = !!i821[32]
  request.r(i821[33], i821[34], 0, i820, 'm_StyleSheet')
  i820.m_TextStyleHashCode = i821[35]
  i820.m_overrideHtmlColors = !!i821[36]
  i820.m_faceColor = UnityEngine.Color32.ConstructColor(i821[37], i821[38], i821[39], i821[40])
  i820.m_fontSize = i821[41]
  i820.m_fontSizeBase = i821[42]
  i820.m_fontWeight = i821[43]
  i820.m_enableAutoSizing = !!i821[44]
  i820.m_fontSizeMin = i821[45]
  i820.m_fontSizeMax = i821[46]
  i820.m_fontStyle = i821[47]
  i820.m_HorizontalAlignment = i821[48]
  i820.m_VerticalAlignment = i821[49]
  i820.m_textAlignment = i821[50]
  i820.m_characterSpacing = i821[51]
  i820.m_characterHorizontalScale = i821[52]
  i820.m_wordSpacing = i821[53]
  i820.m_lineSpacing = i821[54]
  i820.m_lineSpacingMax = i821[55]
  i820.m_paragraphSpacing = i821[56]
  i820.m_charWidthMaxAdj = i821[57]
  i820.m_TextWrappingMode = i821[58]
  i820.m_wordWrappingRatios = i821[59]
  i820.m_overflowMode = i821[60]
  request.r(i821[61], i821[62], 0, i820, 'm_linkedTextComponent')
  request.r(i821[63], i821[64], 0, i820, 'parentLinkedComponent')
  i820.m_enableKerning = !!i821[65]
  var i827 = i821[66]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(i827[i + 0]);
  }
  i820.m_ActiveFontFeatures = i826
  i820.m_enableExtraPadding = !!i821[67]
  i820.checkPaddingRequired = !!i821[68]
  i820.m_isRichText = !!i821[69]
  i820.m_parseCtrlCharacters = !!i821[70]
  i820.m_isOrthographic = !!i821[71]
  i820.m_isCullingEnabled = !!i821[72]
  i820.m_horizontalMapping = i821[73]
  i820.m_verticalMapping = i821[74]
  i820.m_uvLineOffset = i821[75]
  i820.m_geometrySortingOrder = i821[76]
  i820.m_IsTextObjectScaleStatic = !!i821[77]
  i820.m_VertexBufferAutoSizeReduction = !!i821[78]
  i820.m_useMaxVisibleDescender = !!i821[79]
  i820.m_pageToDisplay = i821[80]
  i820.m_margin = new pc.Vec4( i821[81], i821[82], i821[83], i821[84] )
  i820.m_isUsingLegacyAnimationComponent = !!i821[85]
  i820.m_isVolumetricText = !!i821[86]
  request.r(i821[87], i821[88], 0, i820, 'm_Material')
  i820.m_EmojiFallbackSupport = !!i821[89]
  i820.m_Maskable = !!i821[90]
  i820.m_Color = new pc.Color(i821[91], i821[92], i821[93], i821[94])
  i820.m_RaycastTarget = !!i821[95]
  i820.m_RaycastPadding = new pc.Vec4( i821[96], i821[97], i821[98], i821[99] )
  return i820
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.VertexGradient' )
  var i829 = data
  i828.topLeft = new pc.Color(i829[0], i829[1], i829[2], i829[3])
  i828.topRight = new pc.Color(i829[4], i829[5], i829[6], i829[7])
  i828.bottomLeft = new pc.Color(i829[8], i829[9], i829[10], i829[11])
  i828.bottomRight = new pc.Color(i829[12], i829[13], i829[14], i829[15])
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i833 = data
  i832.ambientIntensity = i833[0]
  i832.reflectionIntensity = i833[1]
  i832.ambientMode = i833[2]
  i832.ambientLight = new pc.Color(i833[3], i833[4], i833[5], i833[6])
  i832.ambientSkyColor = new pc.Color(i833[7], i833[8], i833[9], i833[10])
  i832.ambientGroundColor = new pc.Color(i833[11], i833[12], i833[13], i833[14])
  i832.ambientEquatorColor = new pc.Color(i833[15], i833[16], i833[17], i833[18])
  i832.fogColor = new pc.Color(i833[19], i833[20], i833[21], i833[22])
  i832.fogEndDistance = i833[23]
  i832.fogStartDistance = i833[24]
  i832.fogDensity = i833[25]
  i832.fog = !!i833[26]
  request.r(i833[27], i833[28], 0, i832, 'skybox')
  i832.fogMode = i833[29]
  var i835 = i833[30]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i835[i + 0]) );
  }
  i832.lightmaps = i834
  i832.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i833[31], i832.lightProbes)
  i832.lightmapsMode = i833[32]
  i832.mixedBakeMode = i833[33]
  i832.environmentLightingMode = i833[34]
  i832.ambientProbe = new pc.SphericalHarmonicsL2(i833[35])
  i832.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i833[36])
  i832.useReferenceAmbientProbe = !!i833[37]
  request.r(i833[38], i833[39], 0, i832, 'customReflection')
  request.r(i833[40], i833[41], 0, i832, 'defaultReflection')
  i832.defaultReflectionMode = i833[42]
  i832.defaultReflectionResolution = i833[43]
  i832.sunLightObjectId = i833[44]
  i832.pixelLightCount = i833[45]
  i832.defaultReflectionHDR = !!i833[46]
  i832.hasLightDataAsset = !!i833[47]
  i832.hasManualGenerate = !!i833[48]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'lightmapColor')
  request.r(i839[2], i839[3], 0, i838, 'lightmapDirection')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i840 = root || new UnityEngine.LightProbes()
  var i841 = data
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i849 = data
  i848.AdditionalLightsPerObjectLimit = i849[0]
  i848.AdditionalLightsRenderingMode = i849[1]
  i848.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i849[2], i848.LightRenderingMode)
  i848.ColorGradingLutSize = i849[3]
  i848.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i849[4], i848.ColorGradingMode)
  i848.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i849[5], i848.MainLightRenderingMode)
  i848.MainLightRenderingModeValue = i849[6]
  i848.SupportsMainLightShadows = !!i849[7]
  i848.MixedLightingSupported = !!i849[8]
  i848.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i849[9], i848.MsaaQuality)
  i848.MSAA = i849[10]
  i848.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i849[11], i848.OpaqueDownsampling)
  i848.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i849[12], i848.MainLightShadowmapResolution)
  i848.MainLightShadowmapResolutionValue = i849[13]
  i848.SupportsSoftShadows = !!i849[14]
  i848.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i849[15], i848.SoftShadowQuality)
  i848.SoftShadowQualityValue = i849[16]
  i848.ShadowDistance = i849[17]
  i848.ShadowCascadeCount = i849[18]
  i848.Cascade2Split = i849[19]
  i848.Cascade3Split = new pc.Vec2( i849[20], i849[21] )
  i848.Cascade4Split = new pc.Vec3( i849[22], i849[23], i849[24] )
  i848.CascadeBorder = i849[25]
  i848.ShadowDepthBias = i849[26]
  i848.ShadowNormalBias = i849[27]
  i848.RenderScale = i849[28]
  i848.RequireDepthTexture = !!i849[29]
  i848.RequireOpaqueTexture = !!i849[30]
  i848.SupportsHDR = !!i849[31]
  i848.SupportsTerrainHoles = !!i849[32]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i851 = data
  i850.Disabled = i851[0]
  i850.PerVertex = i851[1]
  i850.PerPixel = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i853 = data
  i852.LowDynamicRange = i853[0]
  i852.HighDynamicRange = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i855 = data
  i854.Disabled = i855[0]
  i854._2x = i855[1]
  i854._4x = i855[2]
  i854._8x = i855[3]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i857 = data
  i856.None = i857[0]
  i856._2xBilinear = i857[1]
  i856._4xBox = i857[2]
  i856._4xBilinear = i857[3]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i859 = data
  i858._256 = i859[0]
  i858._512 = i859[1]
  i858._1024 = i859[2]
  i858._2048 = i859[3]
  i858._4096 = i859[4]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i861 = data
  i860.UsePipelineSettings = i861[0]
  i860.Low = i861[1]
  i860.Medium = i861[2]
  i860.High = i861[3]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i863 = data
  var i865 = i863[0]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i865[i + 0]));
  }
  i862.ShaderCompilationErrors = i864
  i862.name = i863[1]
  i862.guid = i863[2]
  var i867 = i863[3]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i862.shaderDefinedKeywords = i866
  var i869 = i863[4]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i869[i + 0]) );
  }
  i862.passes = i868
  var i871 = i863[5]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i871[i + 0]) );
  }
  i862.usePasses = i870
  var i873 = i863[6]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i873[i + 0]) );
  }
  i862.defaultParameterValues = i872
  request.r(i863[7], i863[8], 0, i862, 'unityFallbackShader')
  i862.readDepth = !!i863[9]
  i862.hasDepthOnlyPass = !!i863[10]
  i862.isCreatedByShaderGraph = !!i863[11]
  i862.disableBatching = !!i863[12]
  i862.compiled = !!i863[13]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i877 = data
  i876.shaderName = i877[0]
  i876.errorMessage = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i882 = root || new pc.UnityShaderPass()
  var i883 = data
  i882.id = i883[0]
  i882.subShaderIndex = i883[1]
  i882.name = i883[2]
  i882.passType = i883[3]
  i882.grabPassTextureName = i883[4]
  i882.usePass = !!i883[5]
  i882.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[6], i882.zTest)
  i882.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[7], i882.zWrite)
  i882.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[8], i882.culling)
  i882.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[9], i882.blending)
  i882.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[10], i882.alphaBlending)
  i882.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[11], i882.colorWriteMask)
  i882.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[12], i882.offsetUnits)
  i882.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[13], i882.offsetFactor)
  i882.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[14], i882.stencilRef)
  i882.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[15], i882.stencilReadMask)
  i882.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[16], i882.stencilWriteMask)
  i882.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[17], i882.stencilOp)
  i882.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[18], i882.stencilOpFront)
  i882.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[19], i882.stencilOpBack)
  var i885 = i883[20]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i885[i + 0]) );
  }
  i882.tags = i884
  var i887 = i883[21]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.passDefinedKeywords = i886
  var i889 = i883[22]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i889[i + 0]) );
  }
  i882.passDefinedKeywordGroups = i888
  var i891 = i883[23]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i891[i + 0]) );
  }
  i882.variants = i890
  var i893 = i883[24]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i893[i + 0]) );
  }
  i882.excludedVariants = i892
  i882.hasDepthReader = !!i883[25]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i895 = data
  i894.val = i895[0]
  i894.name = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i897 = data
  i896.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[0], i896.src)
  i896.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[1], i896.dst)
  i896.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[2], i896.op)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i899 = data
  i898.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[0], i898.pass)
  i898.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[1], i898.fail)
  i898.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[2], i898.zFail)
  i898.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[3], i898.comp)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i903 = data
  i902.name = i903[0]
  i902.value = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.keywords = i908
  i906.hasDiscard = !!i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i913 = data
  i912.passId = i913[0]
  i912.subShaderIndex = i913[1]
  var i915 = i913[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.keywords = i914
  i912.vertexProgram = i913[3]
  i912.fragmentProgram = i913[4]
  i912.exportedForWebGl2 = !!i913[5]
  i912.readDepth = !!i913[6]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'shader')
  i918.pass = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i923 = data
  i922.name = i923[0]
  i922.type = i923[1]
  i922.value = new pc.Vec4( i923[2], i923[3], i923[4], i923[5] )
  i922.textureValue = i923[6]
  i922.shaderPropertyFlag = i923[7]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i925 = data
  i924.name = i925[0]
  i924.ascent = i925[1]
  i924.originalLineHeight = i925[2]
  i924.fontSize = i925[3]
  var i927 = i925[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i927[i + 0]) );
  }
  i924.characterInfo = i926
  request.r(i925[5], i925[6], 0, i924, 'texture')
  i924.originalFontSize = i925[7]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i931 = data
  i930.index = i931[0]
  i930.advance = i931[1]
  i930.bearing = i931[2]
  i930.glyphWidth = i931[3]
  i930.glyphHeight = i931[4]
  i930.minX = i931[5]
  i930.maxX = i931[6]
  i930.minY = i931[7]
  i930.maxY = i931[8]
  i930.uvBottomLeftX = i931[9]
  i930.uvBottomLeftY = i931[10]
  i930.uvBottomRightX = i931[11]
  i930.uvBottomRightY = i931[12]
  i930.uvTopLeftX = i931[13]
  i930.uvTopLeftY = i931[14]
  i930.uvTopRightX = i931[15]
  i930.uvTopRightY = i931[16]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i933 = data
  i932.name = i933[0]
  i932.bytes64 = i933[1]
  i932.data = i933[2]
  return i932
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i934.components = i936
  return i934
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i941 = data
  i940.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i941[0], i940.mode)
  i940.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i941[1], i940.neutralHDRRangeReductionMode)
  i940.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i941[2], i940.acesPreset)
  i940.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i941[3], i940.hueShiftAmount)
  i940.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i941[4], i940.detectPaperWhite)
  i940.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i941[5], i940.paperWhite)
  i940.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i941[6], i940.detectBrightnessLimits)
  i940.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i941[7], i940.minNits)
  i940.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i941[8], i940.maxNits)
  i940.active = !!i941[9]
  return i940
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i943 = data
  i942.m_Value = i943[0]
  i942.m_OverrideState = !!i943[1]
  return i942
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i945 = data
  i944.m_Value = i945[0]
  i944.m_OverrideState = !!i945[1]
  return i944
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i947 = data
  i946.m_Value = i947[0]
  i946.m_OverrideState = !!i947[1]
  return i946
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i949 = data
  i948.m_Value = i949[0]
  i948.m_OverrideState = !!i949[1]
  return i948
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i951 = data
  i950.m_Value = !!i951[0]
  i950.m_OverrideState = !!i951[1]
  return i950
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i953 = data
  i952.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i953[0], i952.skipIterations)
  i952.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i953[1], i952.threshold)
  i952.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i953[2], i952.intensity)
  i952.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i953[3], i952.scatter)
  i952.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i953[4], i952.clamp)
  i952.tint = request.d('UnityEngine.Rendering.ColorParameter', i953[5], i952.tint)
  i952.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i953[6], i952.highQualityFiltering)
  i952.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i953[7], i952.downscale)
  i952.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i953[8], i952.maxIterations)
  i952.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i953[9], i952.dirtTexture)
  i952.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i953[10], i952.dirtIntensity)
  i952.active = !!i953[11]
  return i952
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i955 = data
  i954.m_Value = i955[0]
  i954.m_OverrideState = !!i955[1]
  return i954
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i957 = data
  i956.m_Value = i957[0]
  i956.m_OverrideState = !!i957[1]
  return i956
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i959 = data
  i958.m_Value = new pc.Color(i959[0], i959[1], i959[2], i959[3])
  i958.m_OverrideState = !!i959[4]
  return i958
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i961 = data
  i960.m_Value = i961[0]
  i960.m_OverrideState = !!i961[1]
  return i960
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i963 = data
  i962.dimension = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'm_Value')
  i962.m_OverrideState = !!i963[3]
  return i962
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i965 = data
  i964.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i965[0], i964.mode)
  i964.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i965[1], i964.quality)
  i964.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i965[2], i964.intensity)
  i964.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i965[3], i964.clamp)
  i964.active = !!i965[4]
  return i964
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i967 = data
  i966.m_Value = i967[0]
  i966.m_OverrideState = !!i967[1]
  return i966
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i969 = data
  i968.m_Value = i969[0]
  i968.m_OverrideState = !!i969[1]
  return i968
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i971 = data
  i970.color = request.d('UnityEngine.Rendering.ColorParameter', i971[0], i970.color)
  i970.center = request.d('UnityEngine.Rendering.Vector2Parameter', i971[1], i970.center)
  i970.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i971[2], i970.intensity)
  i970.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i971[3], i970.smoothness)
  i970.rounded = request.d('UnityEngine.Rendering.BoolParameter', i971[4], i970.rounded)
  i970.active = !!i971[5]
  return i970
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i973 = data
  i972.m_Value = new pc.Vec2( i973[0], i973[1] )
  i972.m_OverrideState = !!i973[2]
  return i972
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('UnityEngine.InputSystem.InputActionMap', i977[i + 0]) );
  }
  i974.m_ActionMaps = i976
  var i979 = i975[1]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('UnityEngine.InputSystem.InputControlScheme', i979[i + 0]) );
  }
  i974.m_ControlSchemes = i978
  i974.m_IsProjectWide = !!i975[2]
  return i974
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i983 = data
  i982.m_Name = i983[0]
  i982.m_Id = i983[1]
  request.r(i983[2], i983[3], 0, i982, 'm_Asset')
  var i985 = i983[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('UnityEngine.InputSystem.InputAction', i985[i + 0]) );
  }
  i982.m_Actions = i984
  var i987 = i983[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('UnityEngine.InputSystem.InputBinding', i987[i + 0]) );
  }
  i982.m_Bindings = i986
  return i982
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i991 = data
  i990.m_Name = i991[0]
  i990.m_Type = i991[1]
  i990.m_ExpectedControlType = i991[2]
  i990.m_Id = i991[3]
  i990.m_Processors = i991[4]
  i990.m_Interactions = i991[5]
  var i993 = i991[6]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('UnityEngine.InputSystem.InputBinding', i993[i + 0]) );
  }
  i990.m_SingletonActionBindings = i992
  i990.m_Flags = i991[7]
  return i990
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i997 = data
  i996.m_Name = i997[0]
  i996.m_Id = i997[1]
  i996.m_Path = i997[2]
  i996.m_Interactions = i997[3]
  i996.m_Processors = i997[4]
  i996.m_Groups = i997[5]
  i996.m_Action = i997[6]
  i996.m_Flags = i997[7]
  return i996
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1001 = data
  i1000.m_Name = i1001[0]
  i1000.m_BindingGroup = i1001[1]
  var i1003 = i1001[2]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1003[i + 0]) );
  }
  i1000.m_DeviceRequirements = i1002
  return i1000
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1007 = data
  i1006.m_ControlPath = i1007[0]
  i1006.m_Flags = i1007[1]
  return i1006
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_Asset')
  i1008.m_ActionId = i1009[2]
  return i1008
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1011 = data
  i1010.normalStyle = i1011[0]
  i1010.normalSpacingOffset = i1011[1]
  i1010.boldStyle = i1011[2]
  i1010.boldSpacing = i1011[3]
  i1010.italicStyle = i1011[4]
  i1010.tabSize = i1011[5]
  request.r(i1011[6], i1011[7], 0, i1010, 'atlas')
  i1010.m_SourceFontFileGUID = i1011[8]
  i1010.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1011[9], i1010.m_CreationSettings)
  request.r(i1011[10], i1011[11], 0, i1010, 'm_SourceFontFile')
  i1010.m_SourceFontFilePath = i1011[12]
  i1010.m_AtlasPopulationMode = i1011[13]
  i1010.InternalDynamicOS = !!i1011[14]
  var i1013 = i1011[15]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('UnityEngine.TextCore.Glyph', i1013[i + 0]));
  }
  i1010.m_GlyphTable = i1012
  var i1015 = i1011[16]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('TMPro.TMP_Character', i1015[i + 0]));
  }
  i1010.m_CharacterTable = i1014
  var i1017 = i1011[17]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1010.m_AtlasTextures = i1016
  i1010.m_AtlasTextureIndex = i1011[18]
  i1010.m_IsMultiAtlasTexturesEnabled = !!i1011[19]
  i1010.m_GetFontFeatures = !!i1011[20]
  i1010.m_ClearDynamicDataOnBuild = !!i1011[21]
  i1010.m_AtlasWidth = i1011[22]
  i1010.m_AtlasHeight = i1011[23]
  i1010.m_AtlasPadding = i1011[24]
  i1010.m_AtlasRenderMode = i1011[25]
  var i1019 = i1011[26]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('UnityEngine.TextCore.GlyphRect', i1019[i + 0]));
  }
  i1010.m_UsedGlyphRects = i1018
  var i1021 = i1011[27]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('UnityEngine.TextCore.GlyphRect', i1021[i + 0]));
  }
  i1010.m_FreeGlyphRects = i1020
  i1010.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1011[28], i1010.m_FontFeatureTable)
  i1010.m_ShouldReimportFontFeatures = !!i1011[29]
  var i1023 = i1011[30]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1010.m_FallbackFontAssetTable = i1022
  var i1025 = i1011[31]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('TMPro.TMP_FontWeightPair', i1025[i + 0]) );
  }
  i1010.m_FontWeightTable = i1024
  var i1027 = i1011[32]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('TMPro.TMP_FontWeightPair', i1027[i + 0]) );
  }
  i1010.fontWeights = i1026
  i1010.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1011[33], i1010.m_fontInfo)
  var i1029 = i1011[34]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Glyph', i1029[i + 0]));
  }
  i1010.m_glyphInfoList = i1028
  i1010.m_KerningTable = request.d('TMPro.KerningTable', i1011[35], i1010.m_KerningTable)
  var i1031 = i1011[36]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 1, i1030, '')
  }
  i1010.fallbackFontAssets = i1030
  i1010.m_Version = i1011[37]
  i1010.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1011[38], i1010.m_FaceInfo)
  request.r(i1011[39], i1011[40], 0, i1010, 'm_Material')
  return i1010
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1033 = data
  i1032.sourceFontFileName = i1033[0]
  i1032.sourceFontFileGUID = i1033[1]
  i1032.faceIndex = i1033[2]
  i1032.pointSizeSamplingMode = i1033[3]
  i1032.pointSize = i1033[4]
  i1032.padding = i1033[5]
  i1032.paddingMode = i1033[6]
  i1032.packingMode = i1033[7]
  i1032.atlasWidth = i1033[8]
  i1032.atlasHeight = i1033[9]
  i1032.characterSetSelectionMode = i1033[10]
  i1032.characterSequence = i1033[11]
  i1032.referencedFontAssetGUID = i1033[12]
  i1032.referencedTextAssetGUID = i1033[13]
  i1032.fontStyle = i1033[14]
  i1032.fontStyleModifier = i1033[15]
  i1032.renderMode = i1033[16]
  i1032.includeFontFeatures = !!i1033[17]
  return i1032
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1037 = data
  i1036.m_Index = i1037[0]
  i1036.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1037[1], i1036.m_Metrics)
  i1036.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1037[2], i1036.m_GlyphRect)
  i1036.m_Scale = i1037[3]
  i1036.m_AtlasIndex = i1037[4]
  i1036.m_ClassDefinitionType = i1037[5]
  return i1036
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1039 = data
  i1038.m_Width = i1039[0]
  i1038.m_Height = i1039[1]
  i1038.m_HorizontalBearingX = i1039[2]
  i1038.m_HorizontalBearingY = i1039[3]
  i1038.m_HorizontalAdvance = i1039[4]
  return i1038
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1041 = data
  i1040.m_X = i1041[0]
  i1040.m_Y = i1041[1]
  i1040.m_Width = i1041[2]
  i1040.m_Height = i1041[3]
  return i1040
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_Character' )
  var i1045 = data
  i1044.m_ElementType = i1045[0]
  i1044.m_Unicode = i1045[1]
  i1044.m_GlyphIndex = i1045[2]
  i1044.m_Scale = i1045[3]
  return i1044
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.MultipleSubstitutionRecord', i1053[i + 0]));
  }
  i1050.m_MultipleSubstitutionRecords = i1052
  var i1055 = i1051[1]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.LigatureSubstitutionRecord', i1055[i + 0]));
  }
  i1050.m_LigatureSubstitutionRecords = i1054
  var i1057 = i1051[2]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1057[i + 0]));
  }
  i1050.m_GlyphPairAdjustmentRecords = i1056
  var i1059 = i1051[3]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1059[i + 0]));
  }
  i1050.m_MarkToBaseAdjustmentRecords = i1058
  var i1061 = i1051[4]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1061[i + 0]));
  }
  i1050.m_MarkToMarkAdjustmentRecords = i1060
  return i1050
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1065 = data
  i1064.m_TargetGlyphID = i1065[0]
  i1064.m_SubstituteGlyphIDs = i1065[1]
  return i1064
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1069 = data
  i1068.m_ComponentGlyphIDs = i1069[0]
  i1068.m_LigatureGlyphID = i1069[1]
  return i1068
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1073 = data
  i1072.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1073[0], i1072.m_FirstAdjustmentRecord)
  i1072.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1073[1], i1072.m_SecondAdjustmentRecord)
  i1072.m_FeatureLookupFlags = i1073[2]
  return i1072
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1075 = data
  i1074.m_GlyphIndex = i1075[0]
  i1074.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1075[1], i1074.m_GlyphValueRecord)
  return i1074
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1077 = data
  i1076.m_XPlacement = i1077[0]
  i1076.m_YPlacement = i1077[1]
  i1076.m_XAdvance = i1077[2]
  i1076.m_YAdvance = i1077[3]
  return i1076
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1081 = data
  i1080.m_BaseGlyphID = i1081[0]
  i1080.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1081[1], i1080.m_BaseGlyphAnchorPoint)
  i1080.m_MarkGlyphID = i1081[2]
  i1080.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1081[3], i1080.m_MarkPositionAdjustment)
  return i1080
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1085 = data
  i1084.m_BaseMarkGlyphID = i1085[0]
  i1084.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1085[1], i1084.m_BaseMarkGlyphAnchorPoint)
  i1084.m_CombiningMarkGlyphID = i1085[2]
  i1084.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1085[3], i1084.m_CombiningMarkPositionAdjustment)
  return i1084
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'regularTypeface')
  request.r(i1091[2], i1091[3], 0, i1090, 'italicTypeface')
  return i1090
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1093 = data
  i1092.Name = i1093[0]
  i1092.PointSize = i1093[1]
  i1092.Scale = i1093[2]
  i1092.CharacterCount = i1093[3]
  i1092.LineHeight = i1093[4]
  i1092.Baseline = i1093[5]
  i1092.Ascender = i1093[6]
  i1092.CapHeight = i1093[7]
  i1092.Descender = i1093[8]
  i1092.CenterLine = i1093[9]
  i1092.SuperscriptOffset = i1093[10]
  i1092.SubscriptOffset = i1093[11]
  i1092.SubSize = i1093[12]
  i1092.Underline = i1093[13]
  i1092.UnderlineThickness = i1093[14]
  i1092.strikethrough = i1093[15]
  i1092.strikethroughThickness = i1093[16]
  i1092.TabWidth = i1093[17]
  i1092.Padding = i1093[18]
  i1092.AtlasWidth = i1093[19]
  i1092.AtlasHeight = i1093[20]
  return i1092
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1097 = data
  i1096.id = i1097[0]
  i1096.x = i1097[1]
  i1096.y = i1097[2]
  i1096.width = i1097[3]
  i1096.height = i1097[4]
  i1096.xOffset = i1097[5]
  i1096.yOffset = i1097[6]
  i1096.xAdvance = i1097[7]
  i1096.scale = i1097[8]
  return i1096
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.KerningTable' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('TMPro.KerningPair', i1101[i + 0]));
  }
  i1098.kerningPairs = i1100
  return i1098
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.KerningPair' )
  var i1105 = data
  i1104.xOffset = i1105[0]
  i1104.m_FirstGlyph = i1105[1]
  i1104.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1105[2], i1104.m_FirstGlyphAdjustments)
  i1104.m_SecondGlyph = i1105[3]
  i1104.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1105[4], i1104.m_SecondGlyphAdjustments)
  i1104.m_IgnoreSpacingAdjustments = !!i1105[5]
  return i1104
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1107 = data
  i1106.m_FaceIndex = i1107[0]
  i1106.m_FamilyName = i1107[1]
  i1106.m_StyleName = i1107[2]
  i1106.m_PointSize = i1107[3]
  i1106.m_Scale = i1107[4]
  i1106.m_UnitsPerEM = i1107[5]
  i1106.m_LineHeight = i1107[6]
  i1106.m_AscentLine = i1107[7]
  i1106.m_CapLine = i1107[8]
  i1106.m_MeanLine = i1107[9]
  i1106.m_Baseline = i1107[10]
  i1106.m_DescentLine = i1107[11]
  i1106.m_SuperscriptOffset = i1107[12]
  i1106.m_SuperscriptSize = i1107[13]
  i1106.m_SubscriptOffset = i1107[14]
  i1106.m_SubscriptSize = i1107[15]
  i1106.m_UnderlineOffset = i1107[16]
  i1106.m_UnderlineThickness = i1107[17]
  i1106.m_StrikethroughOffset = i1107[18]
  i1106.m_StrikethroughThickness = i1107[19]
  i1106.m_TabWidth = i1107[20]
  return i1106
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_Settings' )
  var i1109 = data
  i1108.assetVersion = i1109[0]
  i1108.m_TextWrappingMode = i1109[1]
  i1108.m_enableKerning = !!i1109[2]
  var i1111 = i1109[3]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(i1111[i + 0]);
  }
  i1108.m_ActiveFontFeatures = i1110
  i1108.m_enableExtraPadding = !!i1109[4]
  i1108.m_enableTintAllSprites = !!i1109[5]
  i1108.m_enableParseEscapeCharacters = !!i1109[6]
  i1108.m_EnableRaycastTarget = !!i1109[7]
  i1108.m_GetFontFeaturesAtRuntime = !!i1109[8]
  i1108.m_missingGlyphCharacter = i1109[9]
  i1108.m_ClearDynamicDataOnBuild = !!i1109[10]
  i1108.m_warningsDisabled = !!i1109[11]
  request.r(i1109[12], i1109[13], 0, i1108, 'm_defaultFontAsset')
  i1108.m_defaultFontAssetPath = i1109[14]
  i1108.m_defaultFontSize = i1109[15]
  i1108.m_defaultAutoSizeMinRatio = i1109[16]
  i1108.m_defaultAutoSizeMaxRatio = i1109[17]
  i1108.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1109[18], i1109[19] )
  i1108.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1109[20], i1109[21] )
  i1108.m_autoSizeTextContainer = !!i1109[22]
  i1108.m_IsTextObjectScaleStatic = !!i1109[23]
  var i1113 = i1109[24]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1108.m_fallbackFontAssets = i1112
  i1108.m_matchMaterialPreset = !!i1109[25]
  i1108.m_HideSubTextObjects = !!i1109[26]
  request.r(i1109[27], i1109[28], 0, i1108, 'm_defaultSpriteAsset')
  i1108.m_defaultSpriteAssetPath = i1109[29]
  i1108.m_enableEmojiSupport = !!i1109[30]
  i1108.m_MissingCharacterSpriteUnicode = i1109[31]
  var i1115 = i1109[32]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 1, i1114, '')
  }
  i1108.m_EmojiFallbackTextAssets = i1114
  i1108.m_defaultColorGradientPresetsPath = i1109[33]
  request.r(i1109[34], i1109[35], 0, i1108, 'm_defaultStyleSheet')
  i1108.m_StyleSheetsResourcePath = i1109[36]
  request.r(i1109[37], i1109[38], 0, i1108, 'm_leadingCharacters')
  request.r(i1109[39], i1109[40], 0, i1108, 'm_followingCharacters')
  i1108.m_UseModernHangulLineBreakingRules = !!i1109[41]
  return i1108
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'spriteSheet')
  var i1121 = i1119[2]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_Sprite', i1121[i + 0]));
  }
  i1118.spriteInfoList = i1120
  var i1123 = i1119[3]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1118.fallbackSpriteAssets = i1122
  var i1125 = i1119[4]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_SpriteCharacter', i1125[i + 0]));
  }
  i1118.m_SpriteCharacterTable = i1124
  var i1127 = i1119[5]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_SpriteGlyph', i1127[i + 0]));
  }
  i1118.m_GlyphTable = i1126
  i1118.m_Version = i1119[6]
  i1118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1119[7], i1118.m_FaceInfo)
  request.r(i1119[8], i1119[9], 0, i1118, 'm_Material')
  return i1118
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.hashCode = i1131[1]
  i1130.unicode = i1131[2]
  i1130.pivot = new pc.Vec2( i1131[3], i1131[4] )
  request.r(i1131[5], i1131[6], 0, i1130, 'sprite')
  i1130.id = i1131[7]
  i1130.x = i1131[8]
  i1130.y = i1131[9]
  i1130.width = i1131[10]
  i1130.height = i1131[11]
  i1130.xOffset = i1131[12]
  i1130.yOffset = i1131[13]
  i1130.xAdvance = i1131[14]
  i1130.scale = i1131[15]
  return i1130
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1137 = data
  i1136.m_Name = i1137[0]
  i1136.m_ElementType = i1137[1]
  i1136.m_Unicode = i1137[2]
  i1136.m_GlyphIndex = i1137[3]
  i1136.m_Scale = i1137[4]
  return i1136
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'sprite')
  i1140.m_Index = i1141[2]
  i1140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1141[3], i1140.m_Metrics)
  i1140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1141[4], i1140.m_GlyphRect)
  i1140.m_Scale = i1141[5]
  i1140.m_AtlasIndex = i1141[6]
  i1140.m_ClassDefinitionType = i1141[7]
  return i1140
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Style', i1145[i + 0]));
  }
  i1142.m_StyleList = i1144
  return i1142
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Style' )
  var i1149 = data
  i1148.m_Name = i1149[0]
  i1148.m_HashCode = i1149[1]
  i1148.m_OpeningDefinition = i1149[2]
  i1148.m_ClosingDefinition = i1149[3]
  i1148.m_OpeningTagArray = i1149[4]
  i1148.m_ClosingTagArray = i1149[5]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1153[i + 0]) );
  }
  i1150.files = i1152
  i1150.componentToPrefabIds = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1157 = data
  i1156.path = i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'unityObject')
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1161[i + 0]) );
  }
  i1158.scriptsExecutionOrder = i1160
  var i1163 = i1159[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1163[i + 0]) );
  }
  i1158.sortingLayers = i1162
  var i1165 = i1159[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1165[i + 0]) );
  }
  i1158.cullingLayers = i1164
  i1158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1159[3], i1158.timeSettings)
  i1158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1159[4], i1158.physicsSettings)
  i1158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1159[5], i1158.physics2DSettings)
  i1158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1159[6], i1158.qualitySettings)
  i1158.enableRealtimeShadows = !!i1159[7]
  i1158.enableAutoInstancing = !!i1159[8]
  i1158.enableStaticBatching = !!i1159[9]
  i1158.enableDynamicBatching = !!i1159[10]
  i1158.lightmapEncodingQuality = i1159[11]
  i1158.desiredColorSpace = i1159[12]
  var i1167 = i1159[13]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1158.allTags = i1166
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.value = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  i1174.value = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1181 = data
  i1180.fixedDeltaTime = i1181[0]
  i1180.maximumDeltaTime = i1181[1]
  i1180.timeScale = i1181[2]
  i1180.maximumParticleTimestep = i1181[3]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1183 = data
  i1182.gravity = new pc.Vec3( i1183[0], i1183[1], i1183[2] )
  i1182.defaultSolverIterations = i1183[3]
  i1182.bounceThreshold = i1183[4]
  i1182.autoSyncTransforms = !!i1183[5]
  i1182.autoSimulation = !!i1183[6]
  var i1185 = i1183[7]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1185[i + 0]) );
  }
  i1182.collisionMatrix = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1189 = data
  i1188.enabled = !!i1189[0]
  i1188.layerId = i1189[1]
  i1188.otherLayerId = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'material')
  i1190.gravity = new pc.Vec2( i1191[2], i1191[3] )
  i1190.positionIterations = i1191[4]
  i1190.velocityIterations = i1191[5]
  i1190.velocityThreshold = i1191[6]
  i1190.maxLinearCorrection = i1191[7]
  i1190.maxAngularCorrection = i1191[8]
  i1190.maxTranslationSpeed = i1191[9]
  i1190.maxRotationSpeed = i1191[10]
  i1190.baumgarteScale = i1191[11]
  i1190.baumgarteTOIScale = i1191[12]
  i1190.timeToSleep = i1191[13]
  i1190.linearSleepTolerance = i1191[14]
  i1190.angularSleepTolerance = i1191[15]
  i1190.defaultContactOffset = i1191[16]
  i1190.autoSimulation = !!i1191[17]
  i1190.queriesHitTriggers = !!i1191[18]
  i1190.queriesStartInColliders = !!i1191[19]
  i1190.callbacksOnDisable = !!i1191[20]
  i1190.reuseCollisionCallbacks = !!i1191[21]
  i1190.autoSyncTransforms = !!i1191[22]
  var i1193 = i1191[23]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1193[i + 0]) );
  }
  i1190.collisionMatrix = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.layerId = i1197[1]
  i1196.otherLayerId = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1201[i + 0]) );
  }
  i1198.qualityLevels = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.names = i1202
  i1198.shadows = i1199[2]
  i1198.anisotropicFiltering = i1199[3]
  i1198.antiAliasing = i1199[4]
  i1198.lodBias = i1199[5]
  i1198.shadowCascades = i1199[6]
  i1198.shadowDistance = i1199[7]
  i1198.shadowmaskMode = i1199[8]
  i1198.shadowProjection = i1199[9]
  i1198.shadowResolution = i1199[10]
  i1198.softParticles = !!i1199[11]
  i1198.softVegetation = !!i1199[12]
  i1198.activeColorSpace = i1199[13]
  i1198.desiredColorSpace = i1199[14]
  i1198.masterTextureLimit = i1199[15]
  i1198.maxQueuedFrames = i1199[16]
  i1198.particleRaycastBudget = i1199[17]
  i1198.pixelLightCount = i1199[18]
  i1198.realtimeReflectionProbes = !!i1199[19]
  i1198.shadowCascade2Split = i1199[20]
  i1198.shadowCascade4Split = new pc.Vec3( i1199[21], i1199[22], i1199[23] )
  i1198.streamingMipmapsActive = !!i1199[24]
  i1198.vSyncCount = i1199[25]
  i1198.asyncUploadBufferSize = i1199[26]
  i1198.asyncUploadTimeSlice = i1199[27]
  i1198.billboardsFaceCameraPosition = !!i1199[28]
  i1198.shadowNearPlaneOffset = i1199[29]
  i1198.streamingMipmapsMemoryBudget = i1199[30]
  i1198.maximumLODLevel = i1199[31]
  i1198.streamingMipmapsAddAllCameras = !!i1199[32]
  i1198.streamingMipmapsMaxLevelReduction = i1199[33]
  i1198.streamingMipmapsRenderersPerFrame = i1199[34]
  i1198.resolutionScalingFixedDPIFactor = i1199[35]
  i1198.streamingMipmapsMaxFileIORequests = i1199[36]
  i1198.currentQualityLevel = i1199[37]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1209 = data
  i1208.weight = i1209[0]
  i1208.vertices = i1209[1]
  i1208.normals = i1209[2]
  i1208.tangents = i1209[3]
  return i1208
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1211 = data
  i1210.m_XCoordinate = i1211[0]
  i1210.m_YCoordinate = i1211[1]
  return i1210
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1213 = data
  i1212.m_XPositionAdjustment = i1213[0]
  i1212.m_YPositionAdjustment = i1213[1]
  return i1212
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1215 = data
  i1214.xPlacement = i1215[0]
  i1214.yPlacement = i1215[1]
  i1214.xAdvance = i1215[2]
  i1214.yAdvance = i1215[3]
  return i1214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[15],"58":[1],"59":[1],"60":[1],"61":[1],"62":[1],"63":[1],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[15],"79":[7],"80":[81],"82":[81],"31":[30],"83":[84],"85":[15],"86":[87],"24":[23],"88":[31],"89":[30],"90":[15],"17":[15],"19":[18],"91":[30],"92":[7,30],"35":[30,36],"93":[30],"94":[36,30],"95":[7],"96":[36,30],"97":[30],"98":[99],"100":[99],"101":[99],"102":[30],"103":[30],"33":[31],"104":[36,30],"105":[30],"32":[31],"106":[30],"107":[30],"108":[30],"109":[30],"110":[30],"111":[30],"112":[30],"113":[30],"114":[30],"115":[36,30],"116":[30],"117":[30],"118":[30],"119":[30],"120":[36,30],"121":[30],"122":[23],"123":[23],"124":[23],"125":[23],"126":[15],"127":[15]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Obstacle","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.SphereCollider","PlayerController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","InputHandler","GameManager","ObstacleManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.64f1";

Deserializers.productName = "Playworks";

Deserializers.lunaInitializationTime = "01/08/2026 07:30:04";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "35850";

Deserializers.projectId = "31b110baf2f4eac4c92f6480c3a3a55b";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.17.0\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1676";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3802";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "05f8d22a-3698-4aa9-94b2-9a5819ba93ea";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["SingularityGroup","HotReload","PlayerEntrypoint","InitOnAppLoad"],["SingularityGroup","HotReload","CodePatcher","OnSceneLoad"],["SingularityGroup","HotReload","CodePatcher","WarnOnSceneLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["SingularityGroup","HotReload","CodePatcher","InitializeUnityEvents"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

