var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSpring' )
  var i553 = data
  i552.spring = i553[0]
  i552.damper = i553[1]
  i552.targetPosition = i553[2]
  return i552
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointMotor' )
  var i555 = data
  i554.m_TargetVelocity = i555[0]
  i554.m_Force = i555[1]
  i554.m_FreeSpin = i555[2]
  return i554
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointLimits' )
  var i557 = data
  i556.m_Min = i557[0]
  i556.m_Max = i557[1]
  i556.m_Bounciness = i557[2]
  i556.m_BounceMinVelocity = i557[3]
  i556.m_ContactDistance = i557[4]
  i556.minBounce = i557[5]
  i556.maxBounce = i557[6]
  return i556
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointDrive' )
  var i559 = data
  i558.m_PositionSpring = i559[0]
  i558.m_PositionDamper = i559[1]
  i558.m_MaximumForce = i559[2]
  i558.m_UseAcceleration = i559[3]
  return i558
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i561 = data
  i560.m_Spring = i561[0]
  i560.m_Damper = i561[1]
  return i560
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i563 = data
  i562.m_Limit = i563[0]
  i562.m_Bounciness = i563[1]
  i562.m_ContactDistance = i563[2]
  return i562
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i565 = data
  i564.m_ExtremumSlip = i565[0]
  i564.m_ExtremumValue = i565[1]
  i564.m_AsymptoteSlip = i565[2]
  i564.m_AsymptoteValue = i565[3]
  i564.m_Stiffness = i565[4]
  return i564
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i567 = data
  i566.m_LowerAngle = i567[0]
  i566.m_UpperAngle = i567[1]
  return i566
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i569 = data
  i568.m_MotorSpeed = i569[0]
  i568.m_MaximumMotorTorque = i569[1]
  return i568
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i571 = data
  i570.m_DampingRatio = i571[0]
  i570.m_Frequency = i571[1]
  i570.m_Angle = i571[2]
  return i570
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i573 = data
  i572.m_LowerTranslation = i573[0]
  i572.m_UpperTranslation = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i575 = data
  i574.position = new pc.Vec3( i575[0], i575[1], i575[2] )
  i574.scale = new pc.Vec3( i575[3], i575[4], i575[5] )
  i574.rotation = new pc.Quat(i575[6], i575[7], i575[8], i575[9])
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i577 = data
  i576.mass = i577[0]
  i576.drag = i577[1]
  i576.angularDrag = i577[2]
  i576.useGravity = !!i577[3]
  i576.isKinematic = !!i577[4]
  i576.constraints = i577[5]
  i576.maxAngularVelocity = i577[6]
  i576.collisionDetectionMode = i577[7]
  i576.interpolation = i577[8]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i579 = data
  i578.center = new pc.Vec3( i579[0], i579[1], i579[2] )
  i578.size = new pc.Vec3( i579[3], i579[4], i579[5] )
  i578.enabled = !!i579[6]
  i578.isTrigger = !!i579[7]
  request.r(i579[8], i579[9], 0, i578, 'material')
  return i578
}

Deserializers["Obstacle"] = function (request, data, root) {
  var i580 = root || request.c( 'Obstacle' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'rigidBody')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'sharedMesh')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'additionalVertexStreams')
  i584.enabled = !!i585[2]
  request.r(i585[3], i585[4], 0, i584, 'sharedMaterial')
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sharedMaterials = i586
  i584.receiveShadows = !!i585[6]
  i584.shadowCastingMode = i585[7]
  i584.sortingLayerID = i585[8]
  i584.sortingOrder = i585[9]
  i584.lightmapIndex = i585[10]
  i584.lightmapSceneIndex = i585[11]
  i584.lightmapScaleOffset = new pc.Vec4( i585[12], i585[13], i585[14], i585[15] )
  i584.lightProbeUsage = i585[16]
  i584.reflectionProbeUsage = i585[17]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i591 = data
  i590.name = i591[0]
  i590.tagId = i591[1]
  i590.enabled = !!i591[2]
  i590.isStatic = !!i591[3]
  i590.layer = i591[4]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i593 = data
  i592.name = i593[0]
  i592.halfPrecision = !!i593[1]
  i592.useSimplification = !!i593[2]
  i592.useUInt32IndexFormat = !!i593[3]
  i592.vertexCount = i593[4]
  i592.aabb = i593[5]
  var i595 = i593[6]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( !!i595[i + 0] );
  }
  i592.streams = i594
  i592.vertices = i593[7]
  var i597 = i593[8]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i597[i + 0]) );
  }
  i592.subMeshes = i596
  var i599 = i593[9]
  var i598 = []
  for(var i = 0; i < i599.length; i += 16) {
    i598.push( new pc.Mat4().setData(i599[i + 0], i599[i + 1], i599[i + 2], i599[i + 3],  i599[i + 4], i599[i + 5], i599[i + 6], i599[i + 7],  i599[i + 8], i599[i + 9], i599[i + 10], i599[i + 11],  i599[i + 12], i599[i + 13], i599[i + 14], i599[i + 15]) );
  }
  i592.bindposes = i598
  var i601 = i593[10]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i601[i + 0]) );
  }
  i592.blendShapes = i600
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i607 = data
  i606.triangles = i607[0]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i613 = data
  i612.name = i613[0]
  var i615 = i613[1]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i615[i + 0]) );
  }
  i612.frames = i614
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i616 = root || new pc.UnityMaterial()
  var i617 = data
  i616.name = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'shader')
  i616.renderQueue = i617[3]
  i616.enableInstancing = !!i617[4]
  var i619 = i617[5]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i619[i + 0]) );
  }
  i616.floatParameters = i618
  var i621 = i617[6]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i621[i + 0]) );
  }
  i616.colorParameters = i620
  var i623 = i617[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i623[i + 0]) );
  }
  i616.vectorParameters = i622
  var i625 = i617[8]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i625[i + 0]) );
  }
  i616.textureParameters = i624
  var i627 = i617[9]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i627[i + 0]) );
  }
  i616.materialFlags = i626
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i631 = data
  i630.name = i631[0]
  i630.value = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = new pc.Color(i635[1], i635[2], i635[3], i635[4])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Vec4( i639[1], i639[2], i639[3], i639[4] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'value')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i647 = data
  i646.name = i647[0]
  i646.enabled = !!i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i649 = data
  i648.name = i649[0]
  i648.width = i649[1]
  i648.height = i649[2]
  i648.mipmapCount = i649[3]
  i648.anisoLevel = i649[4]
  i648.filterMode = i649[5]
  i648.hdr = !!i649[6]
  i648.format = i649[7]
  i648.wrapMode = i649[8]
  i648.alphaIsTransparency = !!i649[9]
  i648.alphaSource = i649[10]
  i648.graphicsFormat = i649[11]
  i648.sRGBTexture = !!i649[12]
  i648.desiredColorSpace = i649[13]
  i648.wrapU = i649[14]
  i648.wrapV = i649[15]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i651 = data
  i650.center = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.radius = i651[3]
  i650.enabled = !!i651[4]
  i650.isTrigger = !!i651[5]
  request.r(i651[6], i651[7], 0, i650, 'material')
  return i650
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i652 = root || request.c( 'PlayerController' )
  var i653 = data
  i652.moveSpeed = i653[0]
  i652.moveLeftKey = i653[1]
  i652.moveRightKey = i653[2]
  request.r(i653[3], i653[4], 0, i652, 'rigidBody')
  request.r(i653[5], i653[6], 0, i652, 'playerGfx')
  request.r(i653[7], i653[8], 0, i652, 'inputHandlerRight')
  request.r(i653[9], i653[10], 0, i652, 'inputHandlerLeft')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i655 = data
  var i657 = i655[0]
  var i656 = []
  for(var i = 0; i < i657.length; i += 3) {
    i656.push( new pc.Vec3( i657[i + 0], i657[i + 1], i657[i + 2] ) );
  }
  i654.positions = i656
  i654.positionCount = i655[1]
  i654.time = i655[2]
  i654.startWidth = i655[3]
  i654.endWidth = i655[4]
  i654.widthMultiplier = i655[5]
  i654.autodestruct = !!i655[6]
  i654.emitting = !!i655[7]
  i654.numCornerVertices = i655[8]
  i654.numCapVertices = i655[9]
  i654.minVertexDistance = i655[10]
  i654.colorGradient = i655[11] ? new pc.ColorGradient(i655[11][0], i655[11][1], i655[11][2]) : null
  i654.startColor = new pc.Color(i655[12], i655[13], i655[14], i655[15])
  i654.endColor = new pc.Color(i655[16], i655[17], i655[18], i655[19])
  i654.generateLightingData = !!i655[20]
  i654.textureMode = i655[21]
  i654.alignment = i655[22]
  i654.widthCurve = new pc.AnimationCurve( { keys_flow: i655[23] } )
  i654.enabled = !!i655[24]
  request.r(i655[25], i655[26], 0, i654, 'sharedMaterial')
  var i659 = i655[27]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i654.sharedMaterials = i658
  i654.receiveShadows = !!i655[28]
  i654.shadowCastingMode = i655[29]
  i654.sortingLayerID = i655[30]
  i654.sortingOrder = i655[31]
  i654.lightmapIndex = i655[32]
  i654.lightmapSceneIndex = i655[33]
  i654.lightmapScaleOffset = new pc.Vec4( i655[34], i655[35], i655[36], i655[37] )
  i654.lightProbeUsage = i655[38]
  i654.reflectionProbeUsage = i655[39]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i663 = data
  i662.name = i663[0]
  i662.atlasId = i663[1]
  i662.mipmapCount = i663[2]
  i662.hdr = !!i663[3]
  i662.size = i663[4]
  i662.anisoLevel = i663[5]
  i662.filterMode = i663[6]
  var i665 = i663[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 4) {
    i664.push( UnityEngine.Rect.MinMaxRect(i665[i + 0], i665[i + 1], i665[i + 2], i665[i + 3]) );
  }
  i662.rects = i664
  i662.wrapU = i663[8]
  i662.wrapV = i663[9]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i669 = data
  i668.name = i669[0]
  i668.index = i669[1]
  i668.startup = !!i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i671 = data
  i670.aspect = i671[0]
  i670.orthographic = !!i671[1]
  i670.orthographicSize = i671[2]
  i670.backgroundColor = new pc.Color(i671[3], i671[4], i671[5], i671[6])
  i670.nearClipPlane = i671[7]
  i670.farClipPlane = i671[8]
  i670.fieldOfView = i671[9]
  i670.depth = i671[10]
  i670.clearFlags = i671[11]
  i670.cullingMask = i671[12]
  i670.rect = i671[13]
  request.r(i671[14], i671[15], 0, i670, 'targetTexture')
  i670.usePhysicalProperties = !!i671[16]
  i670.focalLength = i671[17]
  i670.sensorSize = new pc.Vec2( i671[18], i671[19] )
  i670.lensShift = new pc.Vec2( i671[20], i671[21] )
  i670.gateFit = i671[22]
  i670.commandBufferCount = i671[23]
  i670.cameraType = i671[24]
  i670.enabled = !!i671[25]
  return i670
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i673 = data
  i672.m_RenderShadows = !!i673[0]
  i672.m_RequiresDepthTextureOption = i673[1]
  i672.m_RequiresOpaqueTextureOption = i673[2]
  i672.m_CameraType = i673[3]
  var i675 = i673[4]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 1, i674, '')
  }
  i672.m_Cameras = i674
  i672.m_RendererIndex = i673[5]
  i672.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i673[6] )
  request.r(i673[7], i673[8], 0, i672, 'm_VolumeTrigger')
  i672.m_VolumeFrameworkUpdateModeOption = i673[9]
  i672.m_RenderPostProcessing = !!i673[10]
  i672.m_Antialiasing = i673[11]
  i672.m_AntialiasingQuality = i673[12]
  i672.m_StopNaN = !!i673[13]
  i672.m_Dithering = !!i673[14]
  i672.m_ClearDepth = !!i673[15]
  i672.m_AllowXRRendering = !!i673[16]
  i672.m_AllowHDROutput = !!i673[17]
  i672.m_UseScreenCoordOverride = !!i673[18]
  i672.m_ScreenSizeOverride = new pc.Vec4( i673[19], i673[20], i673[21], i673[22] )
  i672.m_ScreenCoordScaleBias = new pc.Vec4( i673[23], i673[24], i673[25], i673[26] )
  i672.m_RequiresDepthTexture = !!i673[27]
  i672.m_RequiresColorTexture = !!i673[28]
  i672.m_Version = i673[29]
  i672.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i673[30], i672.m_TaaSettings)
  return i672
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i679 = data
  i678.m_Quality = i679[0]
  i678.m_FrameInfluence = i679[1]
  i678.m_JitterScale = i679[2]
  i678.m_MipBias = i679[3]
  i678.m_VarianceClampScale = i679[4]
  i678.m_ContrastAdaptiveSharpening = i679[5]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i681 = data
  i680.type = i681[0]
  i680.color = new pc.Color(i681[1], i681[2], i681[3], i681[4])
  i680.cullingMask = i681[5]
  i680.intensity = i681[6]
  i680.range = i681[7]
  i680.spotAngle = i681[8]
  i680.shadows = i681[9]
  i680.shadowNormalBias = i681[10]
  i680.shadowBias = i681[11]
  i680.shadowStrength = i681[12]
  i680.shadowResolution = i681[13]
  i680.lightmapBakeType = i681[14]
  i680.renderMode = i681[15]
  request.r(i681[16], i681[17], 0, i680, 'cookie')
  i680.cookieSize = i681[18]
  i680.shadowNearPlane = i681[19]
  i680.enabled = !!i681[20]
  return i680
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i683 = data
  i682.m_Version = i683[0]
  i682.m_UsePipelineSettings = !!i683[1]
  i682.m_AdditionalLightsShadowResolutionTier = i683[2]
  i682.m_LightLayerMask = i683[3]
  i682.m_RenderingLayers = i683[4]
  i682.m_CustomShadowLayers = !!i683[5]
  i682.m_ShadowLayerMask = i683[6]
  i682.m_ShadowRenderingLayers = i683[7]
  i682.m_LightCookieSize = new pc.Vec2( i683[8], i683[9] )
  i682.m_LightCookieOffset = new pc.Vec2( i683[10], i683[11] )
  i682.m_SoftShadowQuality = i683[12]
  return i682
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i685 = data
  i684.priority = i685[0]
  i684.blendDistance = i685[1]
  i684.weight = i685[2]
  request.r(i685[3], i685[4], 0, i684, 'sharedProfile')
  i684.m_IsGlobal = !!i685[5]
  return i684
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_FirstSelected')
  i686.m_sendNavigationEvents = !!i687[2]
  i686.m_DragThreshold = i687[3]
  return i686
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i689 = data
  i688.m_MoveRepeatDelay = i689[0]
  i688.m_MoveRepeatRate = i689[1]
  request.r(i689[2], i689[3], 0, i688, 'm_XRTrackingOrigin')
  request.r(i689[4], i689[5], 0, i688, 'm_ActionsAsset')
  request.r(i689[6], i689[7], 0, i688, 'm_PointAction')
  request.r(i689[8], i689[9], 0, i688, 'm_MoveAction')
  request.r(i689[10], i689[11], 0, i688, 'm_SubmitAction')
  request.r(i689[12], i689[13], 0, i688, 'm_CancelAction')
  request.r(i689[14], i689[15], 0, i688, 'm_LeftClickAction')
  request.r(i689[16], i689[17], 0, i688, 'm_MiddleClickAction')
  request.r(i689[18], i689[19], 0, i688, 'm_RightClickAction')
  request.r(i689[20], i689[21], 0, i688, 'm_ScrollWheelAction')
  request.r(i689[22], i689[23], 0, i688, 'm_TrackedDevicePositionAction')
  request.r(i689[24], i689[25], 0, i688, 'm_TrackedDeviceOrientationAction')
  i688.m_DeselectOnBackgroundClick = !!i689[26]
  i688.m_PointerBehavior = i689[27]
  i688.m_CursorLockBehavior = i689[28]
  i688.m_ScrollDeltaPerTick = i689[29]
  i688.m_SendPointerHoverToParent = !!i689[30]
  return i688
}

Deserializers["GameManager"] = function (request, data, root) {
  var i690 = root || request.c( 'GameManager' )
  var i691 = data
  i690.startSpeed = i691[0]
  i690.speedIncreaseRate = i691[1]
  i690.maxSpeed = i691[2]
  return i690
}

Deserializers["ObstacleManager"] = function (request, data, root) {
  var i692 = root || request.c( 'ObstacleManager' )
  var i693 = data
  i692.obstacleMoveSpeed = i693[0]
  i692.obstacleSpawnRate = i693[1]
  i692.obstacleSpawnRange = i693[2]
  i692.obstacleSpawnPosition = new pc.Vec3( i693[3], i693[4], i693[5] )
  i692.obstacleDespawnPosition = new pc.Vec3( i693[6], i693[7], i693[8] )
  request.r(i693[9], i693[10], 0, i692, 'obstaclePrefab')
  return i692
}

Deserializers["InputHandler"] = function (request, data, root) {
  var i694 = root || request.c( 'InputHandler' )
  var i695 = data
  i694.isPressed = !!i695[0]
  i694.isHovered = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i697 = data
  i696.usedByComposite = !!i697[0]
  i696.autoTiling = !!i697[1]
  i696.size = new pc.Vec2( i697[2], i697[3] )
  i696.edgeRadius = i697[4]
  i696.enabled = !!i697[5]
  i696.isTrigger = !!i697[6]
  i696.usedByEffector = !!i697[7]
  i696.density = i697[8]
  i696.offset = new pc.Vec2( i697[9], i697[10] )
  request.r(i697[11], i697[12], 0, i696, 'material')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i699 = data
  i698.pivot = new pc.Vec2( i699[0], i699[1] )
  i698.anchorMin = new pc.Vec2( i699[2], i699[3] )
  i698.anchorMax = new pc.Vec2( i699[4], i699[5] )
  i698.sizeDelta = new pc.Vec2( i699[6], i699[7] )
  i698.anchoredPosition3D = new pc.Vec3( i699[8], i699[9], i699[10] )
  i698.rotation = new pc.Quat(i699[11], i699[12], i699[13], i699[14])
  i698.scale = new pc.Vec3( i699[15], i699[16], i699[17] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i701 = data
  i700.planeDistance = i701[0]
  i700.referencePixelsPerUnit = i701[1]
  i700.isFallbackOverlay = !!i701[2]
  i700.renderMode = i701[3]
  i700.renderOrder = i701[4]
  i700.sortingLayerName = i701[5]
  i700.sortingOrder = i701[6]
  i700.scaleFactor = i701[7]
  request.r(i701[8], i701[9], 0, i700, 'worldCamera')
  i700.overrideSorting = !!i701[10]
  i700.pixelPerfect = !!i701[11]
  i700.targetDisplay = i701[12]
  i700.overridePixelPerfect = !!i701[13]
  i700.enabled = !!i701[14]
  return i700
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i703 = data
  i702.m_UiScaleMode = i703[0]
  i702.m_ReferencePixelsPerUnit = i703[1]
  i702.m_ScaleFactor = i703[2]
  i702.m_ReferenceResolution = new pc.Vec2( i703[3], i703[4] )
  i702.m_ScreenMatchMode = i703[5]
  i702.m_MatchWidthOrHeight = i703[6]
  i702.m_PhysicalUnit = i703[7]
  i702.m_FallbackScreenDPI = i703[8]
  i702.m_DefaultSpriteDPI = i703[9]
  i702.m_DynamicPixelsPerUnit = i703[10]
  i702.m_PresetInfoIsWorld = !!i703[11]
  return i702
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i705 = data
  i704.m_IgnoreReversedGraphics = !!i705[0]
  i704.m_BlockingObjects = i705[1]
  i704.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i705[2] )
  return i704
}

Deserializers["UIManager"] = function (request, data, root) {
  var i706 = root || request.c( 'UIManager' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'scoreText')
  request.r(i707[2], i707[3], 0, i706, 'gameManager')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i709 = data
  i708.cullTransparentMesh = !!i709[0]
  return i708
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i711 = data
  i710.m_hasFontAssetChanged = !!i711[0]
  request.r(i711[1], i711[2], 0, i710, 'm_baseMaterial')
  i710.m_maskOffset = new pc.Vec4( i711[3], i711[4], i711[5], i711[6] )
  i710.m_text = i711[7]
  i710.m_isRightToLeft = !!i711[8]
  request.r(i711[9], i711[10], 0, i710, 'm_fontAsset')
  request.r(i711[11], i711[12], 0, i710, 'm_sharedMaterial')
  var i713 = i711[13]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.m_fontSharedMaterials = i712
  request.r(i711[14], i711[15], 0, i710, 'm_fontMaterial')
  var i715 = i711[16]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i710.m_fontMaterials = i714
  i710.m_fontColor32 = UnityEngine.Color32.ConstructColor(i711[17], i711[18], i711[19], i711[20])
  i710.m_fontColor = new pc.Color(i711[21], i711[22], i711[23], i711[24])
  i710.m_enableVertexGradient = !!i711[25]
  i710.m_colorMode = i711[26]
  i710.m_fontColorGradient = request.d('TMPro.VertexGradient', i711[27], i710.m_fontColorGradient)
  request.r(i711[28], i711[29], 0, i710, 'm_fontColorGradientPreset')
  request.r(i711[30], i711[31], 0, i710, 'm_spriteAsset')
  i710.m_tintAllSprites = !!i711[32]
  request.r(i711[33], i711[34], 0, i710, 'm_StyleSheet')
  i710.m_TextStyleHashCode = i711[35]
  i710.m_overrideHtmlColors = !!i711[36]
  i710.m_faceColor = UnityEngine.Color32.ConstructColor(i711[37], i711[38], i711[39], i711[40])
  i710.m_fontSize = i711[41]
  i710.m_fontSizeBase = i711[42]
  i710.m_fontWeight = i711[43]
  i710.m_enableAutoSizing = !!i711[44]
  i710.m_fontSizeMin = i711[45]
  i710.m_fontSizeMax = i711[46]
  i710.m_fontStyle = i711[47]
  i710.m_HorizontalAlignment = i711[48]
  i710.m_VerticalAlignment = i711[49]
  i710.m_textAlignment = i711[50]
  i710.m_characterSpacing = i711[51]
  i710.m_characterHorizontalScale = i711[52]
  i710.m_wordSpacing = i711[53]
  i710.m_lineSpacing = i711[54]
  i710.m_lineSpacingMax = i711[55]
  i710.m_paragraphSpacing = i711[56]
  i710.m_charWidthMaxAdj = i711[57]
  i710.m_TextWrappingMode = i711[58]
  i710.m_wordWrappingRatios = i711[59]
  i710.m_overflowMode = i711[60]
  request.r(i711[61], i711[62], 0, i710, 'm_linkedTextComponent')
  request.r(i711[63], i711[64], 0, i710, 'parentLinkedComponent')
  i710.m_enableKerning = !!i711[65]
  var i717 = i711[66]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(i717[i + 0]);
  }
  i710.m_ActiveFontFeatures = i716
  i710.m_enableExtraPadding = !!i711[67]
  i710.checkPaddingRequired = !!i711[68]
  i710.m_isRichText = !!i711[69]
  i710.m_parseCtrlCharacters = !!i711[70]
  i710.m_isOrthographic = !!i711[71]
  i710.m_isCullingEnabled = !!i711[72]
  i710.m_horizontalMapping = i711[73]
  i710.m_verticalMapping = i711[74]
  i710.m_uvLineOffset = i711[75]
  i710.m_geometrySortingOrder = i711[76]
  i710.m_IsTextObjectScaleStatic = !!i711[77]
  i710.m_VertexBufferAutoSizeReduction = !!i711[78]
  i710.m_useMaxVisibleDescender = !!i711[79]
  i710.m_pageToDisplay = i711[80]
  i710.m_margin = new pc.Vec4( i711[81], i711[82], i711[83], i711[84] )
  i710.m_isUsingLegacyAnimationComponent = !!i711[85]
  i710.m_isVolumetricText = !!i711[86]
  request.r(i711[87], i711[88], 0, i710, 'm_Material')
  i710.m_EmojiFallbackSupport = !!i711[89]
  i710.m_Maskable = !!i711[90]
  i710.m_Color = new pc.Color(i711[91], i711[92], i711[93], i711[94])
  i710.m_RaycastTarget = !!i711[95]
  i710.m_RaycastPadding = new pc.Vec4( i711[96], i711[97], i711[98], i711[99] )
  return i710
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.VertexGradient' )
  var i719 = data
  i718.topLeft = new pc.Color(i719[0], i719[1], i719[2], i719[3])
  i718.topRight = new pc.Color(i719[4], i719[5], i719[6], i719[7])
  i718.bottomLeft = new pc.Color(i719[8], i719[9], i719[10], i719[11])
  i718.bottomRight = new pc.Color(i719[12], i719[13], i719[14], i719[15])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i723 = data
  i722.ambientIntensity = i723[0]
  i722.reflectionIntensity = i723[1]
  i722.ambientMode = i723[2]
  i722.ambientLight = new pc.Color(i723[3], i723[4], i723[5], i723[6])
  i722.ambientSkyColor = new pc.Color(i723[7], i723[8], i723[9], i723[10])
  i722.ambientGroundColor = new pc.Color(i723[11], i723[12], i723[13], i723[14])
  i722.ambientEquatorColor = new pc.Color(i723[15], i723[16], i723[17], i723[18])
  i722.fogColor = new pc.Color(i723[19], i723[20], i723[21], i723[22])
  i722.fogEndDistance = i723[23]
  i722.fogStartDistance = i723[24]
  i722.fogDensity = i723[25]
  i722.fog = !!i723[26]
  request.r(i723[27], i723[28], 0, i722, 'skybox')
  i722.fogMode = i723[29]
  var i725 = i723[30]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i725[i + 0]) );
  }
  i722.lightmaps = i724
  i722.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i723[31], i722.lightProbes)
  i722.lightmapsMode = i723[32]
  i722.mixedBakeMode = i723[33]
  i722.environmentLightingMode = i723[34]
  i722.ambientProbe = new pc.SphericalHarmonicsL2(i723[35])
  i722.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i723[36])
  i722.useReferenceAmbientProbe = !!i723[37]
  request.r(i723[38], i723[39], 0, i722, 'customReflection')
  request.r(i723[40], i723[41], 0, i722, 'defaultReflection')
  i722.defaultReflectionMode = i723[42]
  i722.defaultReflectionResolution = i723[43]
  i722.sunLightObjectId = i723[44]
  i722.pixelLightCount = i723[45]
  i722.defaultReflectionHDR = !!i723[46]
  i722.hasLightDataAsset = !!i723[47]
  i722.hasManualGenerate = !!i723[48]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'lightmapColor')
  request.r(i729[2], i729[3], 0, i728, 'lightmapDirection')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i730 = root || new UnityEngine.LightProbes()
  var i731 = data
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i737 = data
  i736.AdditionalLightsPerObjectLimit = i737[0]
  i736.AdditionalLightsRenderingMode = i737[1]
  i736.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i737[2], i736.LightRenderingMode)
  i736.ColorGradingLutSize = i737[3]
  i736.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i737[4], i736.ColorGradingMode)
  i736.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i737[5], i736.MainLightRenderingMode)
  i736.MainLightRenderingModeValue = i737[6]
  i736.SupportsMainLightShadows = !!i737[7]
  i736.MixedLightingSupported = !!i737[8]
  i736.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i737[9], i736.MsaaQuality)
  i736.MSAA = i737[10]
  i736.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i737[11], i736.OpaqueDownsampling)
  i736.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i737[12], i736.MainLightShadowmapResolution)
  i736.MainLightShadowmapResolutionValue = i737[13]
  i736.SupportsSoftShadows = !!i737[14]
  i736.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i737[15], i736.SoftShadowQuality)
  i736.SoftShadowQualityValue = i737[16]
  i736.ShadowDistance = i737[17]
  i736.ShadowCascadeCount = i737[18]
  i736.Cascade2Split = i737[19]
  i736.Cascade3Split = new pc.Vec2( i737[20], i737[21] )
  i736.Cascade4Split = new pc.Vec3( i737[22], i737[23], i737[24] )
  i736.CascadeBorder = i737[25]
  i736.ShadowDepthBias = i737[26]
  i736.ShadowNormalBias = i737[27]
  i736.RenderScale = i737[28]
  i736.RequireDepthTexture = !!i737[29]
  i736.RequireOpaqueTexture = !!i737[30]
  i736.SupportsHDR = !!i737[31]
  i736.SupportsTerrainHoles = !!i737[32]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i739 = data
  i738.Disabled = i739[0]
  i738.PerVertex = i739[1]
  i738.PerPixel = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i741 = data
  i740.LowDynamicRange = i741[0]
  i740.HighDynamicRange = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i743 = data
  i742.Disabled = i743[0]
  i742._2x = i743[1]
  i742._4x = i743[2]
  i742._8x = i743[3]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i745 = data
  i744.None = i745[0]
  i744._2xBilinear = i745[1]
  i744._4xBox = i745[2]
  i744._4xBilinear = i745[3]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i747 = data
  i746._256 = i747[0]
  i746._512 = i747[1]
  i746._1024 = i747[2]
  i746._2048 = i747[3]
  i746._4096 = i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i749 = data
  i748.UsePipelineSettings = i749[0]
  i748.Low = i749[1]
  i748.Medium = i749[2]
  i748.High = i749[3]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i751 = data
  var i753 = i751[0]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i753[i + 0]));
  }
  i750.ShaderCompilationErrors = i752
  i750.name = i751[1]
  i750.guid = i751[2]
  var i755 = i751[3]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i750.shaderDefinedKeywords = i754
  var i757 = i751[4]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i757[i + 0]) );
  }
  i750.passes = i756
  var i759 = i751[5]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i759[i + 0]) );
  }
  i750.usePasses = i758
  var i761 = i751[6]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i761[i + 0]) );
  }
  i750.defaultParameterValues = i760
  request.r(i751[7], i751[8], 0, i750, 'unityFallbackShader')
  i750.readDepth = !!i751[9]
  i750.hasDepthOnlyPass = !!i751[10]
  i750.isCreatedByShaderGraph = !!i751[11]
  i750.disableBatching = !!i751[12]
  i750.compiled = !!i751[13]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i765 = data
  i764.shaderName = i765[0]
  i764.errorMessage = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i770 = root || new pc.UnityShaderPass()
  var i771 = data
  i770.id = i771[0]
  i770.subShaderIndex = i771[1]
  i770.name = i771[2]
  i770.passType = i771[3]
  i770.grabPassTextureName = i771[4]
  i770.usePass = !!i771[5]
  i770.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[6], i770.zTest)
  i770.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[7], i770.zWrite)
  i770.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[8], i770.culling)
  i770.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i771[9], i770.blending)
  i770.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i771[10], i770.alphaBlending)
  i770.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[11], i770.colorWriteMask)
  i770.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[12], i770.offsetUnits)
  i770.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[13], i770.offsetFactor)
  i770.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[14], i770.stencilRef)
  i770.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[15], i770.stencilReadMask)
  i770.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[16], i770.stencilWriteMask)
  i770.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i771[17], i770.stencilOp)
  i770.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i771[18], i770.stencilOpFront)
  i770.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i771[19], i770.stencilOpBack)
  var i773 = i771[20]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i773[i + 0]) );
  }
  i770.tags = i772
  var i775 = i771[21]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i770.passDefinedKeywords = i774
  var i777 = i771[22]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i777[i + 0]) );
  }
  i770.passDefinedKeywordGroups = i776
  var i779 = i771[23]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i779[i + 0]) );
  }
  i770.variants = i778
  var i781 = i771[24]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i781[i + 0]) );
  }
  i770.excludedVariants = i780
  i770.hasDepthReader = !!i771[25]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i783 = data
  i782.val = i783[0]
  i782.name = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i785 = data
  i784.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[0], i784.src)
  i784.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[1], i784.dst)
  i784.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i785[2], i784.op)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i787 = data
  i786.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[0], i786.pass)
  i786.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[1], i786.fail)
  i786.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[2], i786.zFail)
  i786.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[3], i786.comp)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i791 = data
  i790.name = i791[0]
  i790.value = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i795 = data
  var i797 = i795[0]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i794.keywords = i796
  i794.hasDiscard = !!i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i801 = data
  i800.passId = i801[0]
  i800.subShaderIndex = i801[1]
  var i803 = i801[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.keywords = i802
  i800.vertexProgram = i801[3]
  i800.fragmentProgram = i801[4]
  i800.exportedForWebGl2 = !!i801[5]
  i800.readDepth = !!i801[6]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'shader')
  i806.pass = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i811 = data
  i810.name = i811[0]
  i810.type = i811[1]
  i810.value = new pc.Vec4( i811[2], i811[3], i811[4], i811[5] )
  i810.textureValue = i811[6]
  i810.shaderPropertyFlag = i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i813 = data
  i812.name = i813[0]
  i812.ascent = i813[1]
  i812.originalLineHeight = i813[2]
  i812.fontSize = i813[3]
  var i815 = i813[4]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i815[i + 0]) );
  }
  i812.characterInfo = i814
  request.r(i813[5], i813[6], 0, i812, 'texture')
  i812.originalFontSize = i813[7]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i819 = data
  i818.index = i819[0]
  i818.advance = i819[1]
  i818.bearing = i819[2]
  i818.glyphWidth = i819[3]
  i818.glyphHeight = i819[4]
  i818.minX = i819[5]
  i818.maxX = i819[6]
  i818.minY = i819[7]
  i818.maxY = i819[8]
  i818.uvBottomLeftX = i819[9]
  i818.uvBottomLeftY = i819[10]
  i818.uvBottomRightX = i819[11]
  i818.uvBottomRightY = i819[12]
  i818.uvTopLeftX = i819[13]
  i818.uvTopLeftY = i819[14]
  i818.uvTopRightX = i819[15]
  i818.uvTopRightY = i819[16]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i821 = data
  i820.name = i821[0]
  i820.bytes64 = i821[1]
  i820.data = i821[2]
  return i820
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 1, i824, '')
  }
  i822.components = i824
  return i822
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i829 = data
  i828.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i829[0], i828.mode)
  i828.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i829[1], i828.neutralHDRRangeReductionMode)
  i828.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i829[2], i828.acesPreset)
  i828.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i829[3], i828.hueShiftAmount)
  i828.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i829[4], i828.detectPaperWhite)
  i828.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i829[5], i828.paperWhite)
  i828.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i829[6], i828.detectBrightnessLimits)
  i828.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i829[7], i828.minNits)
  i828.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i829[8], i828.maxNits)
  i828.active = !!i829[9]
  return i828
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i831 = data
  i830.m_Value = i831[0]
  i830.m_OverrideState = !!i831[1]
  return i830
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i833 = data
  i832.m_Value = i833[0]
  i832.m_OverrideState = !!i833[1]
  return i832
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i835 = data
  i834.m_Value = i835[0]
  i834.m_OverrideState = !!i835[1]
  return i834
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i837 = data
  i836.m_Value = i837[0]
  i836.m_OverrideState = !!i837[1]
  return i836
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i839 = data
  i838.m_Value = !!i839[0]
  i838.m_OverrideState = !!i839[1]
  return i838
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i841 = data
  i840.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i841[0], i840.skipIterations)
  i840.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i841[1], i840.threshold)
  i840.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i841[2], i840.intensity)
  i840.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i841[3], i840.scatter)
  i840.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i841[4], i840.clamp)
  i840.tint = request.d('UnityEngine.Rendering.ColorParameter', i841[5], i840.tint)
  i840.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i841[6], i840.highQualityFiltering)
  i840.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i841[7], i840.downscale)
  i840.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i841[8], i840.maxIterations)
  i840.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i841[9], i840.dirtTexture)
  i840.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i841[10], i840.dirtIntensity)
  i840.active = !!i841[11]
  return i840
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i843 = data
  i842.m_Value = i843[0]
  i842.m_OverrideState = !!i843[1]
  return i842
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i845 = data
  i844.m_Value = i845[0]
  i844.m_OverrideState = !!i845[1]
  return i844
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i847 = data
  i846.m_Value = new pc.Color(i847[0], i847[1], i847[2], i847[3])
  i846.m_OverrideState = !!i847[4]
  return i846
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i849 = data
  i848.m_Value = i849[0]
  i848.m_OverrideState = !!i849[1]
  return i848
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i851 = data
  i850.dimension = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'm_Value')
  i850.m_OverrideState = !!i851[3]
  return i850
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i853 = data
  i852.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i853[0], i852.mode)
  i852.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i853[1], i852.quality)
  i852.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i853[2], i852.intensity)
  i852.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i853[3], i852.clamp)
  i852.active = !!i853[4]
  return i852
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i855 = data
  i854.m_Value = i855[0]
  i854.m_OverrideState = !!i855[1]
  return i854
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i857 = data
  i856.m_Value = i857[0]
  i856.m_OverrideState = !!i857[1]
  return i856
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i859 = data
  i858.color = request.d('UnityEngine.Rendering.ColorParameter', i859[0], i858.color)
  i858.center = request.d('UnityEngine.Rendering.Vector2Parameter', i859[1], i858.center)
  i858.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i859[2], i858.intensity)
  i858.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i859[3], i858.smoothness)
  i858.rounded = request.d('UnityEngine.Rendering.BoolParameter', i859[4], i858.rounded)
  i858.active = !!i859[5]
  return i858
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i861 = data
  i860.m_Value = new pc.Vec2( i861[0], i861[1] )
  i860.m_OverrideState = !!i861[2]
  return i860
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('UnityEngine.InputSystem.InputActionMap', i865[i + 0]) );
  }
  i862.m_ActionMaps = i864
  var i867 = i863[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('UnityEngine.InputSystem.InputControlScheme', i867[i + 0]) );
  }
  i862.m_ControlSchemes = i866
  i862.m_IsProjectWide = !!i863[2]
  return i862
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i871 = data
  i870.m_Name = i871[0]
  i870.m_Id = i871[1]
  request.r(i871[2], i871[3], 0, i870, 'm_Asset')
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('UnityEngine.InputSystem.InputAction', i873[i + 0]) );
  }
  i870.m_Actions = i872
  var i875 = i871[5]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('UnityEngine.InputSystem.InputBinding', i875[i + 0]) );
  }
  i870.m_Bindings = i874
  return i870
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i879 = data
  i878.m_Name = i879[0]
  i878.m_Type = i879[1]
  i878.m_ExpectedControlType = i879[2]
  i878.m_Id = i879[3]
  i878.m_Processors = i879[4]
  i878.m_Interactions = i879[5]
  var i881 = i879[6]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('UnityEngine.InputSystem.InputBinding', i881[i + 0]) );
  }
  i878.m_SingletonActionBindings = i880
  i878.m_Flags = i879[7]
  return i878
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_Id = i885[1]
  i884.m_Path = i885[2]
  i884.m_Interactions = i885[3]
  i884.m_Processors = i885[4]
  i884.m_Groups = i885[5]
  i884.m_Action = i885[6]
  i884.m_Flags = i885[7]
  return i884
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i889 = data
  i888.m_Name = i889[0]
  i888.m_BindingGroup = i889[1]
  var i891 = i889[2]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i891[i + 0]) );
  }
  i888.m_DeviceRequirements = i890
  return i888
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i895 = data
  i894.m_ControlPath = i895[0]
  i894.m_Flags = i895[1]
  return i894
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'm_Asset')
  i896.m_ActionId = i897[2]
  return i896
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i899 = data
  i898.normalStyle = i899[0]
  i898.normalSpacingOffset = i899[1]
  i898.boldStyle = i899[2]
  i898.boldSpacing = i899[3]
  i898.italicStyle = i899[4]
  i898.tabSize = i899[5]
  request.r(i899[6], i899[7], 0, i898, 'atlas')
  i898.m_SourceFontFileGUID = i899[8]
  i898.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i899[9], i898.m_CreationSettings)
  request.r(i899[10], i899[11], 0, i898, 'm_SourceFontFile')
  i898.m_SourceFontFilePath = i899[12]
  i898.m_AtlasPopulationMode = i899[13]
  i898.InternalDynamicOS = !!i899[14]
  var i901 = i899[15]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('UnityEngine.TextCore.Glyph', i901[i + 0]));
  }
  i898.m_GlyphTable = i900
  var i903 = i899[16]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_Character', i903[i + 0]));
  }
  i898.m_CharacterTable = i902
  var i905 = i899[17]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i898.m_AtlasTextures = i904
  i898.m_AtlasTextureIndex = i899[18]
  i898.m_IsMultiAtlasTexturesEnabled = !!i899[19]
  i898.m_GetFontFeatures = !!i899[20]
  i898.m_ClearDynamicDataOnBuild = !!i899[21]
  i898.m_AtlasWidth = i899[22]
  i898.m_AtlasHeight = i899[23]
  i898.m_AtlasPadding = i899[24]
  i898.m_AtlasRenderMode = i899[25]
  var i907 = i899[26]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('UnityEngine.TextCore.GlyphRect', i907[i + 0]));
  }
  i898.m_UsedGlyphRects = i906
  var i909 = i899[27]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('UnityEngine.TextCore.GlyphRect', i909[i + 0]));
  }
  i898.m_FreeGlyphRects = i908
  i898.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i899[28], i898.m_FontFeatureTable)
  i898.m_ShouldReimportFontFeatures = !!i899[29]
  var i911 = i899[30]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i898.m_FallbackFontAssetTable = i910
  var i913 = i899[31]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('TMPro.TMP_FontWeightPair', i913[i + 0]) );
  }
  i898.m_FontWeightTable = i912
  var i915 = i899[32]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('TMPro.TMP_FontWeightPair', i915[i + 0]) );
  }
  i898.fontWeights = i914
  i898.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i899[33], i898.m_fontInfo)
  var i917 = i899[34]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.TMP_Glyph', i917[i + 0]));
  }
  i898.m_glyphInfoList = i916
  i898.m_KerningTable = request.d('TMPro.KerningTable', i899[35], i898.m_KerningTable)
  var i919 = i899[36]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i898.fallbackFontAssets = i918
  i898.m_Version = i899[37]
  i898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i899[38], i898.m_FaceInfo)
  request.r(i899[39], i899[40], 0, i898, 'm_Material')
  return i898
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i921 = data
  i920.sourceFontFileName = i921[0]
  i920.sourceFontFileGUID = i921[1]
  i920.faceIndex = i921[2]
  i920.pointSizeSamplingMode = i921[3]
  i920.pointSize = i921[4]
  i920.padding = i921[5]
  i920.paddingMode = i921[6]
  i920.packingMode = i921[7]
  i920.atlasWidth = i921[8]
  i920.atlasHeight = i921[9]
  i920.characterSetSelectionMode = i921[10]
  i920.characterSequence = i921[11]
  i920.referencedFontAssetGUID = i921[12]
  i920.referencedTextAssetGUID = i921[13]
  i920.fontStyle = i921[14]
  i920.fontStyleModifier = i921[15]
  i920.renderMode = i921[16]
  i920.includeFontFeatures = !!i921[17]
  return i920
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i925 = data
  i924.m_Index = i925[0]
  i924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i925[1], i924.m_Metrics)
  i924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i925[2], i924.m_GlyphRect)
  i924.m_Scale = i925[3]
  i924.m_AtlasIndex = i925[4]
  i924.m_ClassDefinitionType = i925[5]
  return i924
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i927 = data
  i926.m_Width = i927[0]
  i926.m_Height = i927[1]
  i926.m_HorizontalBearingX = i927[2]
  i926.m_HorizontalBearingY = i927[3]
  i926.m_HorizontalAdvance = i927[4]
  return i926
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i929 = data
  i928.m_X = i929[0]
  i928.m_Y = i929[1]
  i928.m_Width = i929[2]
  i928.m_Height = i929[3]
  return i928
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_Character' )
  var i933 = data
  i932.m_ElementType = i933[0]
  i932.m_Unicode = i933[1]
  i932.m_GlyphIndex = i933[2]
  i932.m_Scale = i933[3]
  return i932
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.MultipleSubstitutionRecord', i941[i + 0]));
  }
  i938.m_MultipleSubstitutionRecords = i940
  var i943 = i939[1]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.LigatureSubstitutionRecord', i943[i + 0]));
  }
  i938.m_LigatureSubstitutionRecords = i942
  var i945 = i939[2]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i945[i + 0]));
  }
  i938.m_GlyphPairAdjustmentRecords = i944
  var i947 = i939[3]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i947[i + 0]));
  }
  i938.m_MarkToBaseAdjustmentRecords = i946
  var i949 = i939[4]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i949[i + 0]));
  }
  i938.m_MarkToMarkAdjustmentRecords = i948
  return i938
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i953 = data
  i952.m_TargetGlyphID = i953[0]
  i952.m_SubstituteGlyphIDs = i953[1]
  return i952
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i957 = data
  i956.m_ComponentGlyphIDs = i957[0]
  i956.m_LigatureGlyphID = i957[1]
  return i956
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i961 = data
  i960.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i961[0], i960.m_FirstAdjustmentRecord)
  i960.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i961[1], i960.m_SecondAdjustmentRecord)
  i960.m_FeatureLookupFlags = i961[2]
  return i960
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i963 = data
  i962.m_GlyphIndex = i963[0]
  i962.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i963[1], i962.m_GlyphValueRecord)
  return i962
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i965 = data
  i964.m_XPlacement = i965[0]
  i964.m_YPlacement = i965[1]
  i964.m_XAdvance = i965[2]
  i964.m_YAdvance = i965[3]
  return i964
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i969 = data
  i968.m_BaseGlyphID = i969[0]
  i968.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i969[1], i968.m_BaseGlyphAnchorPoint)
  i968.m_MarkGlyphID = i969[2]
  i968.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i969[3], i968.m_MarkPositionAdjustment)
  return i968
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i973 = data
  i972.m_BaseMarkGlyphID = i973[0]
  i972.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i973[1], i972.m_BaseMarkGlyphAnchorPoint)
  i972.m_CombiningMarkGlyphID = i973[2]
  i972.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i973[3], i972.m_CombiningMarkPositionAdjustment)
  return i972
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'regularTypeface')
  request.r(i979[2], i979[3], 0, i978, 'italicTypeface')
  return i978
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i981 = data
  i980.Name = i981[0]
  i980.PointSize = i981[1]
  i980.Scale = i981[2]
  i980.CharacterCount = i981[3]
  i980.LineHeight = i981[4]
  i980.Baseline = i981[5]
  i980.Ascender = i981[6]
  i980.CapHeight = i981[7]
  i980.Descender = i981[8]
  i980.CenterLine = i981[9]
  i980.SuperscriptOffset = i981[10]
  i980.SubscriptOffset = i981[11]
  i980.SubSize = i981[12]
  i980.Underline = i981[13]
  i980.UnderlineThickness = i981[14]
  i980.strikethrough = i981[15]
  i980.strikethroughThickness = i981[16]
  i980.TabWidth = i981[17]
  i980.Padding = i981[18]
  i980.AtlasWidth = i981[19]
  i980.AtlasHeight = i981[20]
  return i980
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_Glyph' )
  var i985 = data
  i984.id = i985[0]
  i984.x = i985[1]
  i984.y = i985[2]
  i984.width = i985[3]
  i984.height = i985[4]
  i984.xOffset = i985[5]
  i984.yOffset = i985[6]
  i984.xAdvance = i985[7]
  i984.scale = i985[8]
  return i984
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.KerningTable' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.KerningPair', i989[i + 0]));
  }
  i986.kerningPairs = i988
  return i986
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.KerningPair' )
  var i993 = data
  i992.xOffset = i993[0]
  i992.m_FirstGlyph = i993[1]
  i992.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i993[2], i992.m_FirstGlyphAdjustments)
  i992.m_SecondGlyph = i993[3]
  i992.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i993[4], i992.m_SecondGlyphAdjustments)
  i992.m_IgnoreSpacingAdjustments = !!i993[5]
  return i992
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i995 = data
  i994.m_FaceIndex = i995[0]
  i994.m_FamilyName = i995[1]
  i994.m_StyleName = i995[2]
  i994.m_PointSize = i995[3]
  i994.m_Scale = i995[4]
  i994.m_UnitsPerEM = i995[5]
  i994.m_LineHeight = i995[6]
  i994.m_AscentLine = i995[7]
  i994.m_CapLine = i995[8]
  i994.m_MeanLine = i995[9]
  i994.m_Baseline = i995[10]
  i994.m_DescentLine = i995[11]
  i994.m_SuperscriptOffset = i995[12]
  i994.m_SuperscriptSize = i995[13]
  i994.m_SubscriptOffset = i995[14]
  i994.m_SubscriptSize = i995[15]
  i994.m_UnderlineOffset = i995[16]
  i994.m_UnderlineThickness = i995[17]
  i994.m_StrikethroughOffset = i995[18]
  i994.m_StrikethroughThickness = i995[19]
  i994.m_TabWidth = i995[20]
  return i994
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_Settings' )
  var i997 = data
  i996.assetVersion = i997[0]
  i996.m_TextWrappingMode = i997[1]
  i996.m_enableKerning = !!i997[2]
  var i999 = i997[3]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(i999[i + 0]);
  }
  i996.m_ActiveFontFeatures = i998
  i996.m_enableExtraPadding = !!i997[4]
  i996.m_enableTintAllSprites = !!i997[5]
  i996.m_enableParseEscapeCharacters = !!i997[6]
  i996.m_EnableRaycastTarget = !!i997[7]
  i996.m_GetFontFeaturesAtRuntime = !!i997[8]
  i996.m_missingGlyphCharacter = i997[9]
  i996.m_ClearDynamicDataOnBuild = !!i997[10]
  i996.m_warningsDisabled = !!i997[11]
  request.r(i997[12], i997[13], 0, i996, 'm_defaultFontAsset')
  i996.m_defaultFontAssetPath = i997[14]
  i996.m_defaultFontSize = i997[15]
  i996.m_defaultAutoSizeMinRatio = i997[16]
  i996.m_defaultAutoSizeMaxRatio = i997[17]
  i996.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i997[18], i997[19] )
  i996.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i997[20], i997[21] )
  i996.m_autoSizeTextContainer = !!i997[22]
  i996.m_IsTextObjectScaleStatic = !!i997[23]
  var i1001 = i997[24]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i996.m_fallbackFontAssets = i1000
  i996.m_matchMaterialPreset = !!i997[25]
  i996.m_HideSubTextObjects = !!i997[26]
  request.r(i997[27], i997[28], 0, i996, 'm_defaultSpriteAsset')
  i996.m_defaultSpriteAssetPath = i997[29]
  i996.m_enableEmojiSupport = !!i997[30]
  i996.m_MissingCharacterSpriteUnicode = i997[31]
  var i1003 = i997[32]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i996.m_EmojiFallbackTextAssets = i1002
  i996.m_defaultColorGradientPresetsPath = i997[33]
  request.r(i997[34], i997[35], 0, i996, 'm_defaultStyleSheet')
  i996.m_StyleSheetsResourcePath = i997[36]
  request.r(i997[37], i997[38], 0, i996, 'm_leadingCharacters')
  request.r(i997[39], i997[40], 0, i996, 'm_followingCharacters')
  i996.m_UseModernHangulLineBreakingRules = !!i997[41]
  return i996
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'spriteSheet')
  var i1009 = i1007[2]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_Sprite', i1009[i + 0]));
  }
  i1006.spriteInfoList = i1008
  var i1011 = i1007[3]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1006.fallbackSpriteAssets = i1010
  var i1013 = i1007[4]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_SpriteCharacter', i1013[i + 0]));
  }
  i1006.m_SpriteCharacterTable = i1012
  var i1015 = i1007[5]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('TMPro.TMP_SpriteGlyph', i1015[i + 0]));
  }
  i1006.m_GlyphTable = i1014
  i1006.m_Version = i1007[6]
  i1006.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1007[7], i1006.m_FaceInfo)
  request.r(i1007[8], i1007[9], 0, i1006, 'm_Material')
  return i1006
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.hashCode = i1019[1]
  i1018.unicode = i1019[2]
  i1018.pivot = new pc.Vec2( i1019[3], i1019[4] )
  request.r(i1019[5], i1019[6], 0, i1018, 'sprite')
  i1018.id = i1019[7]
  i1018.x = i1019[8]
  i1018.y = i1019[9]
  i1018.width = i1019[10]
  i1018.height = i1019[11]
  i1018.xOffset = i1019[12]
  i1018.yOffset = i1019[13]
  i1018.xAdvance = i1019[14]
  i1018.scale = i1019[15]
  return i1018
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1025 = data
  i1024.m_Name = i1025[0]
  i1024.m_ElementType = i1025[1]
  i1024.m_Unicode = i1025[2]
  i1024.m_GlyphIndex = i1025[3]
  i1024.m_Scale = i1025[4]
  return i1024
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'sprite')
  i1028.m_Index = i1029[2]
  i1028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1029[3], i1028.m_Metrics)
  i1028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1029[4], i1028.m_GlyphRect)
  i1028.m_Scale = i1029[5]
  i1028.m_AtlasIndex = i1029[6]
  i1028.m_ClassDefinitionType = i1029[7]
  return i1028
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.TMP_Style', i1033[i + 0]));
  }
  i1030.m_StyleList = i1032
  return i1030
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_Style' )
  var i1037 = data
  i1036.m_Name = i1037[0]
  i1036.m_HashCode = i1037[1]
  i1036.m_OpeningDefinition = i1037[2]
  i1036.m_ClosingDefinition = i1037[3]
  i1036.m_OpeningTagArray = i1037[4]
  i1036.m_ClosingTagArray = i1037[5]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1041[i + 0]) );
  }
  i1038.files = i1040
  i1038.componentToPrefabIds = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1045 = data
  i1044.path = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'unityObject')
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1049[i + 0]) );
  }
  i1046.scriptsExecutionOrder = i1048
  var i1051 = i1047[1]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1051[i + 0]) );
  }
  i1046.sortingLayers = i1050
  var i1053 = i1047[2]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1053[i + 0]) );
  }
  i1046.cullingLayers = i1052
  i1046.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1047[3], i1046.timeSettings)
  i1046.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1047[4], i1046.physicsSettings)
  i1046.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1047[5], i1046.physics2DSettings)
  i1046.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1047[6], i1046.qualitySettings)
  i1046.enableRealtimeShadows = !!i1047[7]
  i1046.enableAutoInstancing = !!i1047[8]
  i1046.enableStaticBatching = !!i1047[9]
  i1046.enableDynamicBatching = !!i1047[10]
  i1046.lightmapEncodingQuality = i1047[11]
  i1046.desiredColorSpace = i1047[12]
  var i1055 = i1047[13]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1046.allTags = i1054
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.value = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  i1062.value = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1067 = data
  i1066.id = i1067[0]
  i1066.name = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1069 = data
  i1068.fixedDeltaTime = i1069[0]
  i1068.maximumDeltaTime = i1069[1]
  i1068.timeScale = i1069[2]
  i1068.maximumParticleTimestep = i1069[3]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1071 = data
  i1070.gravity = new pc.Vec3( i1071[0], i1071[1], i1071[2] )
  i1070.defaultSolverIterations = i1071[3]
  i1070.bounceThreshold = i1071[4]
  i1070.autoSyncTransforms = !!i1071[5]
  i1070.autoSimulation = !!i1071[6]
  var i1073 = i1071[7]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1073[i + 0]) );
  }
  i1070.collisionMatrix = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1077 = data
  i1076.enabled = !!i1077[0]
  i1076.layerId = i1077[1]
  i1076.otherLayerId = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'material')
  i1078.gravity = new pc.Vec2( i1079[2], i1079[3] )
  i1078.positionIterations = i1079[4]
  i1078.velocityIterations = i1079[5]
  i1078.velocityThreshold = i1079[6]
  i1078.maxLinearCorrection = i1079[7]
  i1078.maxAngularCorrection = i1079[8]
  i1078.maxTranslationSpeed = i1079[9]
  i1078.maxRotationSpeed = i1079[10]
  i1078.baumgarteScale = i1079[11]
  i1078.baumgarteTOIScale = i1079[12]
  i1078.timeToSleep = i1079[13]
  i1078.linearSleepTolerance = i1079[14]
  i1078.angularSleepTolerance = i1079[15]
  i1078.defaultContactOffset = i1079[16]
  i1078.autoSimulation = !!i1079[17]
  i1078.queriesHitTriggers = !!i1079[18]
  i1078.queriesStartInColliders = !!i1079[19]
  i1078.callbacksOnDisable = !!i1079[20]
  i1078.reuseCollisionCallbacks = !!i1079[21]
  i1078.autoSyncTransforms = !!i1079[22]
  var i1081 = i1079[23]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1081[i + 0]) );
  }
  i1078.collisionMatrix = i1080
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1085 = data
  i1084.enabled = !!i1085[0]
  i1084.layerId = i1085[1]
  i1084.otherLayerId = i1085[2]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1089[i + 0]) );
  }
  i1086.qualityLevels = i1088
  var i1091 = i1087[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.names = i1090
  i1086.shadows = i1087[2]
  i1086.anisotropicFiltering = i1087[3]
  i1086.antiAliasing = i1087[4]
  i1086.lodBias = i1087[5]
  i1086.shadowCascades = i1087[6]
  i1086.shadowDistance = i1087[7]
  i1086.shadowmaskMode = i1087[8]
  i1086.shadowProjection = i1087[9]
  i1086.shadowResolution = i1087[10]
  i1086.softParticles = !!i1087[11]
  i1086.softVegetation = !!i1087[12]
  i1086.activeColorSpace = i1087[13]
  i1086.desiredColorSpace = i1087[14]
  i1086.masterTextureLimit = i1087[15]
  i1086.maxQueuedFrames = i1087[16]
  i1086.particleRaycastBudget = i1087[17]
  i1086.pixelLightCount = i1087[18]
  i1086.realtimeReflectionProbes = !!i1087[19]
  i1086.shadowCascade2Split = i1087[20]
  i1086.shadowCascade4Split = new pc.Vec3( i1087[21], i1087[22], i1087[23] )
  i1086.streamingMipmapsActive = !!i1087[24]
  i1086.vSyncCount = i1087[25]
  i1086.asyncUploadBufferSize = i1087[26]
  i1086.asyncUploadTimeSlice = i1087[27]
  i1086.billboardsFaceCameraPosition = !!i1087[28]
  i1086.shadowNearPlaneOffset = i1087[29]
  i1086.streamingMipmapsMemoryBudget = i1087[30]
  i1086.maximumLODLevel = i1087[31]
  i1086.streamingMipmapsAddAllCameras = !!i1087[32]
  i1086.streamingMipmapsMaxLevelReduction = i1087[33]
  i1086.streamingMipmapsRenderersPerFrame = i1087[34]
  i1086.resolutionScalingFixedDPIFactor = i1087[35]
  i1086.streamingMipmapsMaxFileIORequests = i1087[36]
  i1086.currentQualityLevel = i1087[37]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1097 = data
  i1096.weight = i1097[0]
  i1096.vertices = i1097[1]
  i1096.normals = i1097[2]
  i1096.tangents = i1097[3]
  return i1096
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1099 = data
  i1098.m_XCoordinate = i1099[0]
  i1098.m_YCoordinate = i1099[1]
  return i1098
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1101 = data
  i1100.m_XPositionAdjustment = i1101[0]
  i1100.m_YPositionAdjustment = i1101[1]
  return i1100
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1103 = data
  i1102.xPlacement = i1103[0]
  i1102.yPlacement = i1103[1]
  i1102.xAdvance = i1103[2]
  i1102.yAdvance = i1103[3]
  return i1102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[14],"58":[1],"59":[1],"60":[1],"61":[1],"62":[1],"63":[1],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[14],"79":[7],"80":[81],"82":[81],"31":[30],"83":[84],"85":[14],"86":[87],"23":[22],"88":[31],"89":[30],"90":[14],"16":[14],"18":[17],"91":[30],"92":[7,30],"35":[30,36],"93":[30],"94":[36,30],"95":[7],"96":[36,30],"97":[30],"98":[99],"100":[99],"101":[99],"102":[30],"103":[30],"33":[31],"104":[36,30],"105":[30],"32":[31],"106":[30],"107":[30],"108":[30],"109":[30],"110":[30],"111":[30],"112":[30],"113":[30],"114":[30],"115":[36,30],"116":[30],"117":[30],"118":[30],"119":[30],"120":[36,30],"121":[30],"122":[22],"123":[22],"124":[22],"125":[22],"126":[14],"127":[14]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Obstacle","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.SphereCollider","PlayerController","UnityEngine.TrailRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameManager","ObstacleManager","InputHandler","UnityEngine.BoxCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.64f1";

Deserializers.productName = "Playworks";

Deserializers.lunaInitializationTime = "01/07/2026 19:02:05";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1680";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3829";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "55e218f1-0bea-441b-a232-a73e375fc0a8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["SingularityGroup","HotReload","PlayerEntrypoint","InitOnAppLoad"],["SingularityGroup","HotReload","CodePatcher","OnSceneLoad"],["SingularityGroup","HotReload","CodePatcher","WarnOnSceneLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["SingularityGroup","HotReload","CodePatcher","InitializeUnityEvents"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

