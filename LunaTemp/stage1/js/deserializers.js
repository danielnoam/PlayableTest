var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.JointSpring' )
  var i1853 = data
  i1852.spring = i1853[0]
  i1852.damper = i1853[1]
  i1852.targetPosition = i1853[2]
  return i1852
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointMotor' )
  var i1855 = data
  i1854.m_TargetVelocity = i1855[0]
  i1854.m_Force = i1855[1]
  i1854.m_FreeSpin = i1855[2]
  return i1854
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.JointLimits' )
  var i1857 = data
  i1856.m_Min = i1857[0]
  i1856.m_Max = i1857[1]
  i1856.m_Bounciness = i1857[2]
  i1856.m_BounceMinVelocity = i1857[3]
  i1856.m_ContactDistance = i1857[4]
  i1856.minBounce = i1857[5]
  i1856.maxBounce = i1857[6]
  return i1856
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.JointDrive' )
  var i1859 = data
  i1858.m_PositionSpring = i1859[0]
  i1858.m_PositionDamper = i1859[1]
  i1858.m_MaximumForce = i1859[2]
  i1858.m_UseAcceleration = i1859[3]
  return i1858
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1861 = data
  i1860.m_Spring = i1861[0]
  i1860.m_Damper = i1861[1]
  return i1860
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1863 = data
  i1862.m_Limit = i1863[0]
  i1862.m_Bounciness = i1863[1]
  i1862.m_ContactDistance = i1863[2]
  return i1862
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1865 = data
  i1864.m_ExtremumSlip = i1865[0]
  i1864.m_ExtremumValue = i1865[1]
  i1864.m_AsymptoteSlip = i1865[2]
  i1864.m_AsymptoteValue = i1865[3]
  i1864.m_Stiffness = i1865[4]
  return i1864
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1867 = data
  i1866.m_LowerAngle = i1867[0]
  i1866.m_UpperAngle = i1867[1]
  return i1866
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1869 = data
  i1868.m_MotorSpeed = i1869[0]
  i1868.m_MaximumMotorTorque = i1869[1]
  return i1868
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1871 = data
  i1870.m_DampingRatio = i1871[0]
  i1870.m_Frequency = i1871[1]
  i1870.m_Angle = i1871[2]
  return i1870
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1873 = data
  i1872.m_LowerTranslation = i1873[0]
  i1872.m_UpperTranslation = i1873[1]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1875 = data
  i1874.position = new pc.Vec3( i1875[0], i1875[1], i1875[2] )
  i1874.scale = new pc.Vec3( i1875[3], i1875[4], i1875[5] )
  i1874.rotation = new pc.Quat(i1875[6], i1875[7], i1875[8], i1875[9])
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1877 = data
  i1876.mass = i1877[0]
  i1876.drag = i1877[1]
  i1876.angularDrag = i1877[2]
  i1876.useGravity = !!i1877[3]
  i1876.isKinematic = !!i1877[4]
  i1876.constraints = i1877[5]
  i1876.maxAngularVelocity = i1877[6]
  i1876.collisionDetectionMode = i1877[7]
  i1876.interpolation = i1877[8]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1879 = data
  i1878.center = new pc.Vec3( i1879[0], i1879[1], i1879[2] )
  i1878.size = new pc.Vec3( i1879[3], i1879[4], i1879[5] )
  i1878.enabled = !!i1879[6]
  i1878.isTrigger = !!i1879[7]
  request.r(i1879[8], i1879[9], 0, i1878, 'material')
  return i1878
}

Deserializers["Obstacle"] = function (request, data, root) {
  var i1880 = root || request.c( 'Obstacle' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'rigidBody')
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'sharedMesh')
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'additionalVertexStreams')
  i1884.enabled = !!i1885[2]
  request.r(i1885[3], i1885[4], 0, i1884, 'sharedMaterial')
  var i1887 = i1885[5]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.sharedMaterials = i1886
  i1884.receiveShadows = !!i1885[6]
  i1884.shadowCastingMode = i1885[7]
  i1884.sortingLayerID = i1885[8]
  i1884.sortingOrder = i1885[9]
  i1884.lightmapIndex = i1885[10]
  i1884.lightmapSceneIndex = i1885[11]
  i1884.lightmapScaleOffset = new pc.Vec4( i1885[12], i1885[13], i1885[14], i1885[15] )
  i1884.lightProbeUsage = i1885[16]
  i1884.reflectionProbeUsage = i1885[17]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.tagId = i1891[1]
  i1890.enabled = !!i1891[2]
  i1890.isStatic = !!i1891[3]
  i1890.layer = i1891[4]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.halfPrecision = !!i1893[1]
  i1892.useSimplification = !!i1893[2]
  i1892.useUInt32IndexFormat = !!i1893[3]
  i1892.vertexCount = i1893[4]
  i1892.aabb = i1893[5]
  var i1895 = i1893[6]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( !!i1895[i + 0] );
  }
  i1892.streams = i1894
  i1892.vertices = i1893[7]
  var i1897 = i1893[8]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1897[i + 0]) );
  }
  i1892.subMeshes = i1896
  var i1899 = i1893[9]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 16) {
    i1898.push( new pc.Mat4().setData(i1899[i + 0], i1899[i + 1], i1899[i + 2], i1899[i + 3],  i1899[i + 4], i1899[i + 5], i1899[i + 6], i1899[i + 7],  i1899[i + 8], i1899[i + 9], i1899[i + 10], i1899[i + 11],  i1899[i + 12], i1899[i + 13], i1899[i + 14], i1899[i + 15]) );
  }
  i1892.bindposes = i1898
  var i1901 = i1893[10]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1901[i + 0]) );
  }
  i1892.blendShapes = i1900
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1907 = data
  i1906.triangles = i1907[0]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1913 = data
  i1912.name = i1913[0]
  var i1915 = i1913[1]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1915[i + 0]) );
  }
  i1912.frames = i1914
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1916 = root || new pc.UnityMaterial()
  var i1917 = data
  i1916.name = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'shader')
  i1916.renderQueue = i1917[3]
  i1916.enableInstancing = !!i1917[4]
  var i1919 = i1917[5]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1919[i + 0]) );
  }
  i1916.floatParameters = i1918
  var i1921 = i1917[6]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1921[i + 0]) );
  }
  i1916.colorParameters = i1920
  var i1923 = i1917[7]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1923[i + 0]) );
  }
  i1916.vectorParameters = i1922
  var i1925 = i1917[8]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1925[i + 0]) );
  }
  i1916.textureParameters = i1924
  var i1927 = i1917[9]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1927[i + 0]) );
  }
  i1916.materialFlags = i1926
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1935 = data
  i1934.name = i1935[0]
  i1934.value = new pc.Color(i1935[1], i1935[2], i1935[3], i1935[4])
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1939 = data
  i1938.name = i1939[0]
  i1938.value = new pc.Vec4( i1939[1], i1939[2], i1939[3], i1939[4] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1943 = data
  i1942.name = i1943[0]
  request.r(i1943[1], i1943[2], 0, i1942, 'value')
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.enabled = !!i1947[1]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1949 = data
  i1948.name = i1949[0]
  i1948.width = i1949[1]
  i1948.height = i1949[2]
  i1948.mipmapCount = i1949[3]
  i1948.anisoLevel = i1949[4]
  i1948.filterMode = i1949[5]
  i1948.hdr = !!i1949[6]
  i1948.format = i1949[7]
  i1948.wrapMode = i1949[8]
  i1948.alphaIsTransparency = !!i1949[9]
  i1948.alphaSource = i1949[10]
  i1948.graphicsFormat = i1949[11]
  i1948.sRGBTexture = !!i1949[12]
  i1948.desiredColorSpace = i1949[13]
  i1948.wrapU = i1949[14]
  i1948.wrapV = i1949[15]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1951 = data
  i1950.center = new pc.Vec3( i1951[0], i1951[1], i1951[2] )
  i1950.radius = i1951[3]
  i1950.enabled = !!i1951[4]
  i1950.isTrigger = !!i1951[5]
  request.r(i1951[6], i1951[7], 0, i1950, 'material')
  return i1950
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1952 = root || request.c( 'PlayerController' )
  var i1953 = data
  i1952.moveSpeed = i1953[0]
  i1952.moveLeftKey = i1953[1]
  i1952.moveRightKey = i1953[2]
  request.r(i1953[3], i1953[4], 0, i1952, 'rigidBody')
  request.r(i1953[5], i1953[6], 0, i1952, 'playerGfx')
  request.r(i1953[7], i1953[8], 0, i1952, 'deathParticleEffect')
  request.r(i1953[9], i1953[10], 0, i1952, 'inputHandlerRight')
  request.r(i1953[11], i1953[12], 0, i1952, 'inputHandlerLeft')
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1955 = data
  i1954.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1955[0], i1954.main)
  i1954.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1955[1], i1954.colorBySpeed)
  i1954.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1955[2], i1954.colorOverLifetime)
  i1954.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1955[3], i1954.emission)
  i1954.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1955[4], i1954.rotationBySpeed)
  i1954.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1955[5], i1954.rotationOverLifetime)
  i1954.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1955[6], i1954.shape)
  i1954.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1955[7], i1954.sizeBySpeed)
  i1954.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1955[8], i1954.sizeOverLifetime)
  i1954.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1955[9], i1954.textureSheetAnimation)
  i1954.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1955[10], i1954.velocityOverLifetime)
  i1954.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1955[11], i1954.noise)
  i1954.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1955[12], i1954.inheritVelocity)
  i1954.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1955[13], i1954.forceOverLifetime)
  i1954.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1955[14], i1954.limitVelocityOverLifetime)
  i1954.useAutoRandomSeed = !!i1955[15]
  i1954.randomSeed = i1955[16]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemMain()
  var i1957 = data
  i1956.duration = i1957[0]
  i1956.loop = !!i1957[1]
  i1956.prewarm = !!i1957[2]
  i1956.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.startDelay)
  i1956.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[4], i1956.startLifetime)
  i1956.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[5], i1956.startSpeed)
  i1956.startSize3D = !!i1957[6]
  i1956.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[7], i1956.startSizeX)
  i1956.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[8], i1956.startSizeY)
  i1956.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[9], i1956.startSizeZ)
  i1956.startRotation3D = !!i1957[10]
  i1956.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[11], i1956.startRotationX)
  i1956.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[12], i1956.startRotationY)
  i1956.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[13], i1956.startRotationZ)
  i1956.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1957[14], i1956.startColor)
  i1956.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[15], i1956.gravityModifier)
  i1956.simulationSpace = i1957[16]
  request.r(i1957[17], i1957[18], 0, i1956, 'customSimulationSpace')
  i1956.simulationSpeed = i1957[19]
  i1956.useUnscaledTime = !!i1957[20]
  i1956.scalingMode = i1957[21]
  i1956.playOnAwake = !!i1957[22]
  i1956.maxParticles = i1957[23]
  i1956.emitterVelocityMode = i1957[24]
  i1956.stopAction = i1957[25]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1958 = root || new pc.MinMaxCurve()
  var i1959 = data
  i1958.mode = i1959[0]
  i1958.curveMin = new pc.AnimationCurve( { keys_flow: i1959[1] } )
  i1958.curveMax = new pc.AnimationCurve( { keys_flow: i1959[2] } )
  i1958.curveMultiplier = i1959[3]
  i1958.constantMin = i1959[4]
  i1958.constantMax = i1959[5]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1960 = root || new pc.MinMaxGradient()
  var i1961 = data
  i1960.mode = i1961[0]
  i1960.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1961[1], i1960.gradientMin)
  i1960.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1961[2], i1960.gradientMax)
  i1960.colorMin = new pc.Color(i1961[3], i1961[4], i1961[5], i1961[6])
  i1960.colorMax = new pc.Color(i1961[7], i1961[8], i1961[9], i1961[10])
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1963 = data
  i1962.mode = i1963[0]
  var i1965 = i1963[1]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1965[i + 0]) );
  }
  i1962.colorKeys = i1964
  var i1967 = i1963[2]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1967[i + 0]) );
  }
  i1962.alphaKeys = i1966
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1968 = root || new pc.ParticleSystemColorBySpeed()
  var i1969 = data
  i1968.enabled = !!i1969[0]
  i1968.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1969[1], i1968.color)
  i1968.range = new pc.Vec2( i1969[2], i1969[3] )
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1973 = data
  i1972.color = new pc.Color(i1973[0], i1973[1], i1973[2], i1973[3])
  i1972.time = i1973[4]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1977 = data
  i1976.alpha = i1977[0]
  i1976.time = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1978 = root || new pc.ParticleSystemColorOverLifetime()
  var i1979 = data
  i1978.enabled = !!i1979[0]
  i1978.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1979[1], i1978.color)
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1980 = root || new pc.ParticleSystemEmitter()
  var i1981 = data
  i1980.enabled = !!i1981[0]
  i1980.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[1], i1980.rateOverTime)
  i1980.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[2], i1980.rateOverDistance)
  var i1983 = i1981[3]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1983[i + 0]) );
  }
  i1980.bursts = i1982
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1986 = root || new pc.ParticleSystemBurst()
  var i1987 = data
  i1986.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1987[0], i1986.count)
  i1986.cycleCount = i1987[1]
  i1986.minCount = i1987[2]
  i1986.maxCount = i1987[3]
  i1986.repeatInterval = i1987[4]
  i1986.time = i1987[5]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1988 = root || new pc.ParticleSystemRotationBySpeed()
  var i1989 = data
  i1988.enabled = !!i1989[0]
  i1988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[1], i1988.x)
  i1988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[2], i1988.y)
  i1988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[3], i1988.z)
  i1988.separateAxes = !!i1989[4]
  i1988.range = new pc.Vec2( i1989[5], i1989[6] )
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1990 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1991 = data
  i1990.enabled = !!i1991[0]
  i1990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1991[1], i1990.x)
  i1990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1991[2], i1990.y)
  i1990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1991[3], i1990.z)
  i1990.separateAxes = !!i1991[4]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1992 = root || new pc.ParticleSystemShape()
  var i1993 = data
  i1992.enabled = !!i1993[0]
  i1992.shapeType = i1993[1]
  i1992.randomDirectionAmount = i1993[2]
  i1992.sphericalDirectionAmount = i1993[3]
  i1992.randomPositionAmount = i1993[4]
  i1992.alignToDirection = !!i1993[5]
  i1992.radius = i1993[6]
  i1992.radiusMode = i1993[7]
  i1992.radiusSpread = i1993[8]
  i1992.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1993[9], i1992.radiusSpeed)
  i1992.radiusThickness = i1993[10]
  i1992.angle = i1993[11]
  i1992.length = i1993[12]
  i1992.boxThickness = new pc.Vec3( i1993[13], i1993[14], i1993[15] )
  i1992.meshShapeType = i1993[16]
  request.r(i1993[17], i1993[18], 0, i1992, 'mesh')
  request.r(i1993[19], i1993[20], 0, i1992, 'meshRenderer')
  request.r(i1993[21], i1993[22], 0, i1992, 'skinnedMeshRenderer')
  i1992.useMeshMaterialIndex = !!i1993[23]
  i1992.meshMaterialIndex = i1993[24]
  i1992.useMeshColors = !!i1993[25]
  i1992.normalOffset = i1993[26]
  i1992.arc = i1993[27]
  i1992.arcMode = i1993[28]
  i1992.arcSpread = i1993[29]
  i1992.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1993[30], i1992.arcSpeed)
  i1992.donutRadius = i1993[31]
  i1992.position = new pc.Vec3( i1993[32], i1993[33], i1993[34] )
  i1992.rotation = new pc.Vec3( i1993[35], i1993[36], i1993[37] )
  i1992.scale = new pc.Vec3( i1993[38], i1993[39], i1993[40] )
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1994 = root || new pc.ParticleSystemSizeBySpeed()
  var i1995 = data
  i1994.enabled = !!i1995[0]
  i1994.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1995[1], i1994.x)
  i1994.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1995[2], i1994.y)
  i1994.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1995[3], i1994.z)
  i1994.separateAxes = !!i1995[4]
  i1994.range = new pc.Vec2( i1995[5], i1995[6] )
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1996 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1997 = data
  i1996.enabled = !!i1997[0]
  i1996.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1997[1], i1996.x)
  i1996.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1997[2], i1996.y)
  i1996.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1997[3], i1996.z)
  i1996.separateAxes = !!i1997[4]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1998 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1999 = data
  i1998.enabled = !!i1999[0]
  i1998.mode = i1999[1]
  i1998.animation = i1999[2]
  i1998.numTilesX = i1999[3]
  i1998.numTilesY = i1999[4]
  i1998.useRandomRow = !!i1999[5]
  i1998.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[6], i1998.frameOverTime)
  i1998.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[7], i1998.startFrame)
  i1998.cycleCount = i1999[8]
  i1998.rowIndex = i1999[9]
  i1998.flipU = i1999[10]
  i1998.flipV = i1999[11]
  i1998.spriteCount = i1999[12]
  var i2001 = i1999[13]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1998.sprites = i2000
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2004 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2005 = data
  i2004.enabled = !!i2005[0]
  i2004.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[1], i2004.x)
  i2004.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[2], i2004.y)
  i2004.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[3], i2004.z)
  i2004.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[4], i2004.radial)
  i2004.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[5], i2004.speedModifier)
  i2004.space = i2005[6]
  i2004.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[7], i2004.orbitalX)
  i2004.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[8], i2004.orbitalY)
  i2004.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[9], i2004.orbitalZ)
  i2004.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[10], i2004.orbitalOffsetX)
  i2004.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[11], i2004.orbitalOffsetY)
  i2004.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[12], i2004.orbitalOffsetZ)
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2006 = root || new pc.ParticleSystemNoise()
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.separateAxes = !!i2007[1]
  i2006.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[2], i2006.strengthX)
  i2006.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[3], i2006.strengthY)
  i2006.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[4], i2006.strengthZ)
  i2006.frequency = i2007[5]
  i2006.damping = !!i2007[6]
  i2006.octaveCount = i2007[7]
  i2006.octaveMultiplier = i2007[8]
  i2006.octaveScale = i2007[9]
  i2006.quality = i2007[10]
  i2006.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[11], i2006.scrollSpeed)
  i2006.scrollSpeedMultiplier = i2007[12]
  i2006.remapEnabled = !!i2007[13]
  i2006.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[14], i2006.remapX)
  i2006.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[15], i2006.remapY)
  i2006.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[16], i2006.remapZ)
  i2006.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[17], i2006.positionAmount)
  i2006.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[18], i2006.rotationAmount)
  i2006.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[19], i2006.sizeAmount)
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2008 = root || new pc.ParticleSystemInheritVelocity()
  var i2009 = data
  i2008.enabled = !!i2009[0]
  i2008.mode = i2009[1]
  i2008.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[2], i2008.curve)
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2010 = root || new pc.ParticleSystemForceOverLifetime()
  var i2011 = data
  i2010.enabled = !!i2011[0]
  i2010.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[1], i2010.x)
  i2010.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[2], i2010.y)
  i2010.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[3], i2010.z)
  i2010.space = i2011[4]
  i2010.randomized = !!i2011[5]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2012 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2013 = data
  i2012.enabled = !!i2013[0]
  i2012.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[1], i2012.limit)
  i2012.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[2], i2012.limitX)
  i2012.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[3], i2012.limitY)
  i2012.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[4], i2012.limitZ)
  i2012.dampen = i2013[5]
  i2012.separateAxes = !!i2013[6]
  i2012.space = i2013[7]
  i2012.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[8], i2012.drag)
  i2012.multiplyDragByParticleSize = !!i2013[9]
  i2012.multiplyDragByParticleVelocity = !!i2013[10]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'mesh')
  i2014.meshCount = i2015[2]
  i2014.activeVertexStreamsCount = i2015[3]
  i2014.alignment = i2015[4]
  i2014.renderMode = i2015[5]
  i2014.sortMode = i2015[6]
  i2014.lengthScale = i2015[7]
  i2014.velocityScale = i2015[8]
  i2014.cameraVelocityScale = i2015[9]
  i2014.normalDirection = i2015[10]
  i2014.sortingFudge = i2015[11]
  i2014.minParticleSize = i2015[12]
  i2014.maxParticleSize = i2015[13]
  i2014.pivot = new pc.Vec3( i2015[14], i2015[15], i2015[16] )
  request.r(i2015[17], i2015[18], 0, i2014, 'trailMaterial')
  i2014.applyActiveColorSpace = !!i2015[19]
  i2014.enabled = !!i2015[20]
  request.r(i2015[21], i2015[22], 0, i2014, 'sharedMaterial')
  var i2017 = i2015[23]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 2) {
  request.r(i2017[i + 0], i2017[i + 1], 2, i2016, '')
  }
  i2014.sharedMaterials = i2016
  i2014.receiveShadows = !!i2015[24]
  i2014.shadowCastingMode = i2015[25]
  i2014.sortingLayerID = i2015[26]
  i2014.sortingOrder = i2015[27]
  i2014.lightmapIndex = i2015[28]
  i2014.lightmapSceneIndex = i2015[29]
  i2014.lightmapScaleOffset = new pc.Vec4( i2015[30], i2015[31], i2015[32], i2015[33] )
  i2014.lightProbeUsage = i2015[34]
  i2014.reflectionProbeUsage = i2015[35]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.atlasId = i2019[1]
  i2018.mipmapCount = i2019[2]
  i2018.hdr = !!i2019[3]
  i2018.size = i2019[4]
  i2018.anisoLevel = i2019[5]
  i2018.filterMode = i2019[6]
  var i2021 = i2019[7]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 4) {
    i2020.push( UnityEngine.Rect.MinMaxRect(i2021[i + 0], i2021[i + 1], i2021[i + 2], i2021[i + 3]) );
  }
  i2018.rects = i2020
  i2018.wrapU = i2019[8]
  i2018.wrapV = i2019[9]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2025 = data
  i2024.name = i2025[0]
  i2024.index = i2025[1]
  i2024.startup = !!i2025[2]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2027 = data
  i2026.aspect = i2027[0]
  i2026.orthographic = !!i2027[1]
  i2026.orthographicSize = i2027[2]
  i2026.backgroundColor = new pc.Color(i2027[3], i2027[4], i2027[5], i2027[6])
  i2026.nearClipPlane = i2027[7]
  i2026.farClipPlane = i2027[8]
  i2026.fieldOfView = i2027[9]
  i2026.depth = i2027[10]
  i2026.clearFlags = i2027[11]
  i2026.cullingMask = i2027[12]
  i2026.rect = i2027[13]
  request.r(i2027[14], i2027[15], 0, i2026, 'targetTexture')
  i2026.usePhysicalProperties = !!i2027[16]
  i2026.focalLength = i2027[17]
  i2026.sensorSize = new pc.Vec2( i2027[18], i2027[19] )
  i2026.lensShift = new pc.Vec2( i2027[20], i2027[21] )
  i2026.gateFit = i2027[22]
  i2026.commandBufferCount = i2027[23]
  i2026.cameraType = i2027[24]
  i2026.enabled = !!i2027[25]
  return i2026
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2029 = data
  i2028.m_RenderShadows = !!i2029[0]
  i2028.m_RequiresDepthTextureOption = i2029[1]
  i2028.m_RequiresOpaqueTextureOption = i2029[2]
  i2028.m_CameraType = i2029[3]
  var i2031 = i2029[4]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 1, i2030, '')
  }
  i2028.m_Cameras = i2030
  i2028.m_RendererIndex = i2029[5]
  i2028.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2029[6] )
  request.r(i2029[7], i2029[8], 0, i2028, 'm_VolumeTrigger')
  i2028.m_VolumeFrameworkUpdateModeOption = i2029[9]
  i2028.m_RenderPostProcessing = !!i2029[10]
  i2028.m_Antialiasing = i2029[11]
  i2028.m_AntialiasingQuality = i2029[12]
  i2028.m_StopNaN = !!i2029[13]
  i2028.m_Dithering = !!i2029[14]
  i2028.m_ClearDepth = !!i2029[15]
  i2028.m_AllowXRRendering = !!i2029[16]
  i2028.m_AllowHDROutput = !!i2029[17]
  i2028.m_UseScreenCoordOverride = !!i2029[18]
  i2028.m_ScreenSizeOverride = new pc.Vec4( i2029[19], i2029[20], i2029[21], i2029[22] )
  i2028.m_ScreenCoordScaleBias = new pc.Vec4( i2029[23], i2029[24], i2029[25], i2029[26] )
  i2028.m_RequiresDepthTexture = !!i2029[27]
  i2028.m_RequiresColorTexture = !!i2029[28]
  i2028.m_Version = i2029[29]
  i2028.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2029[30], i2028.m_TaaSettings)
  return i2028
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2035 = data
  i2034.m_Quality = i2035[0]
  i2034.m_FrameInfluence = i2035[1]
  i2034.m_JitterScale = i2035[2]
  i2034.m_MipBias = i2035[3]
  i2034.m_VarianceClampScale = i2035[4]
  i2034.m_ContrastAdaptiveSharpening = i2035[5]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2037 = data
  i2036.type = i2037[0]
  i2036.color = new pc.Color(i2037[1], i2037[2], i2037[3], i2037[4])
  i2036.cullingMask = i2037[5]
  i2036.intensity = i2037[6]
  i2036.range = i2037[7]
  i2036.spotAngle = i2037[8]
  i2036.shadows = i2037[9]
  i2036.shadowNormalBias = i2037[10]
  i2036.shadowBias = i2037[11]
  i2036.shadowStrength = i2037[12]
  i2036.shadowResolution = i2037[13]
  i2036.lightmapBakeType = i2037[14]
  i2036.renderMode = i2037[15]
  request.r(i2037[16], i2037[17], 0, i2036, 'cookie')
  i2036.cookieSize = i2037[18]
  i2036.shadowNearPlane = i2037[19]
  i2036.enabled = !!i2037[20]
  return i2036
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2039 = data
  i2038.m_Version = i2039[0]
  i2038.m_UsePipelineSettings = !!i2039[1]
  i2038.m_AdditionalLightsShadowResolutionTier = i2039[2]
  i2038.m_LightLayerMask = i2039[3]
  i2038.m_RenderingLayers = i2039[4]
  i2038.m_CustomShadowLayers = !!i2039[5]
  i2038.m_ShadowLayerMask = i2039[6]
  i2038.m_ShadowRenderingLayers = i2039[7]
  i2038.m_LightCookieSize = new pc.Vec2( i2039[8], i2039[9] )
  i2038.m_LightCookieOffset = new pc.Vec2( i2039[10], i2039[11] )
  i2038.m_SoftShadowQuality = i2039[12]
  return i2038
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2041 = data
  i2040.priority = i2041[0]
  i2040.blendDistance = i2041[1]
  i2040.weight = i2041[2]
  request.r(i2041[3], i2041[4], 0, i2040, 'sharedProfile')
  i2040.m_IsGlobal = !!i2041[5]
  return i2040
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2043 = data
  request.r(i2043[0], i2043[1], 0, i2042, 'm_FirstSelected')
  i2042.m_sendNavigationEvents = !!i2043[2]
  i2042.m_DragThreshold = i2043[3]
  return i2042
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i2045 = data
  i2044.m_MoveRepeatDelay = i2045[0]
  i2044.m_MoveRepeatRate = i2045[1]
  request.r(i2045[2], i2045[3], 0, i2044, 'm_XRTrackingOrigin')
  request.r(i2045[4], i2045[5], 0, i2044, 'm_ActionsAsset')
  request.r(i2045[6], i2045[7], 0, i2044, 'm_PointAction')
  request.r(i2045[8], i2045[9], 0, i2044, 'm_MoveAction')
  request.r(i2045[10], i2045[11], 0, i2044, 'm_SubmitAction')
  request.r(i2045[12], i2045[13], 0, i2044, 'm_CancelAction')
  request.r(i2045[14], i2045[15], 0, i2044, 'm_LeftClickAction')
  request.r(i2045[16], i2045[17], 0, i2044, 'm_MiddleClickAction')
  request.r(i2045[18], i2045[19], 0, i2044, 'm_RightClickAction')
  request.r(i2045[20], i2045[21], 0, i2044, 'm_ScrollWheelAction')
  request.r(i2045[22], i2045[23], 0, i2044, 'm_TrackedDevicePositionAction')
  request.r(i2045[24], i2045[25], 0, i2044, 'm_TrackedDeviceOrientationAction')
  i2044.m_DeselectOnBackgroundClick = !!i2045[26]
  i2044.m_PointerBehavior = i2045[27]
  i2044.m_CursorLockBehavior = i2045[28]
  i2044.m_ScrollDeltaPerTick = i2045[29]
  i2044.m_SendPointerHoverToParent = !!i2045[30]
  return i2044
}

Deserializers["InputHandler"] = function (request, data, root) {
  var i2046 = root || request.c( 'InputHandler' )
  var i2047 = data
  i2046.detectionMode = i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'debugText')
  i2046.isPressed = !!i2047[3]
  i2046.isHovered = !!i2047[4]
  return i2046
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2048 = root || request.c( 'GameManager' )
  var i2049 = data
  i2048.startSpeed = i2049[0]
  i2048.speedIncreaseRate = i2049[1]
  i2048.maxSpeed = i2049[2]
  return i2048
}

Deserializers["ObstacleManager"] = function (request, data, root) {
  var i2050 = root || request.c( 'ObstacleManager' )
  var i2051 = data
  i2050.obstacleMoveSpeed = i2051[0]
  i2050.obstacleSpawnRate = i2051[1]
  i2050.obstacleSpawnRange = i2051[2]
  i2050.obstacleSpawnPosition = new pc.Vec3( i2051[3], i2051[4], i2051[5] )
  i2050.obstacleDespawnPosition = new pc.Vec3( i2051[6], i2051[7], i2051[8] )
  request.r(i2051[9], i2051[10], 0, i2050, 'obstaclePrefab')
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2053 = data
  i2052.pivot = new pc.Vec2( i2053[0], i2053[1] )
  i2052.anchorMin = new pc.Vec2( i2053[2], i2053[3] )
  i2052.anchorMax = new pc.Vec2( i2053[4], i2053[5] )
  i2052.sizeDelta = new pc.Vec2( i2053[6], i2053[7] )
  i2052.anchoredPosition3D = new pc.Vec3( i2053[8], i2053[9], i2053[10] )
  i2052.rotation = new pc.Quat(i2053[11], i2053[12], i2053[13], i2053[14])
  i2052.scale = new pc.Vec3( i2053[15], i2053[16], i2053[17] )
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2055 = data
  i2054.planeDistance = i2055[0]
  i2054.referencePixelsPerUnit = i2055[1]
  i2054.isFallbackOverlay = !!i2055[2]
  i2054.renderMode = i2055[3]
  i2054.renderOrder = i2055[4]
  i2054.sortingLayerName = i2055[5]
  i2054.sortingOrder = i2055[6]
  i2054.scaleFactor = i2055[7]
  request.r(i2055[8], i2055[9], 0, i2054, 'worldCamera')
  i2054.overrideSorting = !!i2055[10]
  i2054.pixelPerfect = !!i2055[11]
  i2054.targetDisplay = i2055[12]
  i2054.overridePixelPerfect = !!i2055[13]
  i2054.enabled = !!i2055[14]
  return i2054
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2057 = data
  i2056.m_UiScaleMode = i2057[0]
  i2056.m_ReferencePixelsPerUnit = i2057[1]
  i2056.m_ScaleFactor = i2057[2]
  i2056.m_ReferenceResolution = new pc.Vec2( i2057[3], i2057[4] )
  i2056.m_ScreenMatchMode = i2057[5]
  i2056.m_MatchWidthOrHeight = i2057[6]
  i2056.m_PhysicalUnit = i2057[7]
  i2056.m_FallbackScreenDPI = i2057[8]
  i2056.m_DefaultSpriteDPI = i2057[9]
  i2056.m_DynamicPixelsPerUnit = i2057[10]
  i2056.m_PresetInfoIsWorld = !!i2057[11]
  return i2056
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2059 = data
  i2058.m_IgnoreReversedGraphics = !!i2059[0]
  i2058.m_BlockingObjects = i2059[1]
  i2058.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2059[2] )
  return i2058
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2060 = root || request.c( 'UIManager' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'scoreText')
  request.r(i2061[2], i2061[3], 0, i2060, 'gameManager')
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2063 = data
  i2062.cullTransparentMesh = !!i2063[0]
  return i2062
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.UI.Image' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'm_Sprite')
  i2064.m_Type = i2065[2]
  i2064.m_PreserveAspect = !!i2065[3]
  i2064.m_FillCenter = !!i2065[4]
  i2064.m_FillMethod = i2065[5]
  i2064.m_FillAmount = i2065[6]
  i2064.m_FillClockwise = !!i2065[7]
  i2064.m_FillOrigin = i2065[8]
  i2064.m_UseSpriteMesh = !!i2065[9]
  i2064.m_PixelsPerUnitMultiplier = i2065[10]
  request.r(i2065[11], i2065[12], 0, i2064, 'm_Material')
  i2064.m_Maskable = !!i2065[13]
  i2064.m_Color = new pc.Color(i2065[14], i2065[15], i2065[16], i2065[17])
  i2064.m_RaycastTarget = !!i2065[18]
  i2064.m_RaycastPadding = new pc.Vec4( i2065[19], i2065[20], i2065[21], i2065[22] )
  return i2064
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2067 = data
  i2066.m_StartCorner = i2067[0]
  i2066.m_StartAxis = i2067[1]
  i2066.m_CellSize = new pc.Vec2( i2067[2], i2067[3] )
  i2066.m_Spacing = new pc.Vec2( i2067[4], i2067[5] )
  i2066.m_Constraint = i2067[6]
  i2066.m_ConstraintCount = i2067[7]
  i2066.m_Padding = UnityEngine.RectOffset.FromPaddings(i2067[8], i2067[9], i2067[10], i2067[11])
  i2066.m_ChildAlignment = i2067[12]
  return i2066
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.UI.Button' )
  var i2069 = data
  i2068.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2069[0], i2068.m_OnClick)
  i2068.m_Navigation = request.d('UnityEngine.UI.Navigation', i2069[1], i2068.m_Navigation)
  i2068.m_Transition = i2069[2]
  i2068.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2069[3], i2068.m_Colors)
  i2068.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2069[4], i2068.m_SpriteState)
  i2068.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2069[5], i2068.m_AnimationTriggers)
  i2068.m_Interactable = !!i2069[6]
  request.r(i2069[7], i2069[8], 0, i2068, 'm_TargetGraphic')
  return i2068
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2071 = data
  i2070.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2071[0], i2070.m_PersistentCalls)
  return i2070
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2073 = data
  var i2075 = i2073[0]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.add(request.d('UnityEngine.Events.PersistentCall', i2075[i + 0]));
  }
  i2072.m_Calls = i2074
  return i2072
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'm_Target')
  i2078.m_TargetAssemblyTypeName = i2079[2]
  i2078.m_MethodName = i2079[3]
  i2078.m_Mode = i2079[4]
  i2078.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2079[5], i2078.m_Arguments)
  i2078.m_CallState = i2079[6]
  return i2078
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2081 = data
  i2080.m_Mode = i2081[0]
  i2080.m_WrapAround = !!i2081[1]
  request.r(i2081[2], i2081[3], 0, i2080, 'm_SelectOnUp')
  request.r(i2081[4], i2081[5], 0, i2080, 'm_SelectOnDown')
  request.r(i2081[6], i2081[7], 0, i2080, 'm_SelectOnLeft')
  request.r(i2081[8], i2081[9], 0, i2080, 'm_SelectOnRight')
  return i2080
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2083 = data
  i2082.m_NormalColor = new pc.Color(i2083[0], i2083[1], i2083[2], i2083[3])
  i2082.m_HighlightedColor = new pc.Color(i2083[4], i2083[5], i2083[6], i2083[7])
  i2082.m_PressedColor = new pc.Color(i2083[8], i2083[9], i2083[10], i2083[11])
  i2082.m_SelectedColor = new pc.Color(i2083[12], i2083[13], i2083[14], i2083[15])
  i2082.m_DisabledColor = new pc.Color(i2083[16], i2083[17], i2083[18], i2083[19])
  i2082.m_ColorMultiplier = i2083[20]
  i2082.m_FadeDuration = i2083[21]
  return i2082
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'm_HighlightedSprite')
  request.r(i2085[2], i2085[3], 0, i2084, 'm_PressedSprite')
  request.r(i2085[4], i2085[5], 0, i2084, 'm_SelectedSprite')
  request.r(i2085[6], i2085[7], 0, i2084, 'm_DisabledSprite')
  return i2084
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2087 = data
  i2086.m_NormalTrigger = i2087[0]
  i2086.m_HighlightedTrigger = i2087[1]
  i2086.m_PressedTrigger = i2087[2]
  i2086.m_SelectedTrigger = i2087[3]
  i2086.m_DisabledTrigger = i2087[4]
  return i2086
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2088 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2089 = data
  i2088.m_hasFontAssetChanged = !!i2089[0]
  request.r(i2089[1], i2089[2], 0, i2088, 'm_baseMaterial')
  i2088.m_maskOffset = new pc.Vec4( i2089[3], i2089[4], i2089[5], i2089[6] )
  i2088.m_text = i2089[7]
  i2088.m_isRightToLeft = !!i2089[8]
  request.r(i2089[9], i2089[10], 0, i2088, 'm_fontAsset')
  request.r(i2089[11], i2089[12], 0, i2088, 'm_sharedMaterial')
  var i2091 = i2089[13]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 2) {
  request.r(i2091[i + 0], i2091[i + 1], 2, i2090, '')
  }
  i2088.m_fontSharedMaterials = i2090
  request.r(i2089[14], i2089[15], 0, i2088, 'm_fontMaterial')
  var i2093 = i2089[16]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 2) {
  request.r(i2093[i + 0], i2093[i + 1], 2, i2092, '')
  }
  i2088.m_fontMaterials = i2092
  i2088.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2089[17], i2089[18], i2089[19], i2089[20])
  i2088.m_fontColor = new pc.Color(i2089[21], i2089[22], i2089[23], i2089[24])
  i2088.m_enableVertexGradient = !!i2089[25]
  i2088.m_colorMode = i2089[26]
  i2088.m_fontColorGradient = request.d('TMPro.VertexGradient', i2089[27], i2088.m_fontColorGradient)
  request.r(i2089[28], i2089[29], 0, i2088, 'm_fontColorGradientPreset')
  request.r(i2089[30], i2089[31], 0, i2088, 'm_spriteAsset')
  i2088.m_tintAllSprites = !!i2089[32]
  request.r(i2089[33], i2089[34], 0, i2088, 'm_StyleSheet')
  i2088.m_TextStyleHashCode = i2089[35]
  i2088.m_overrideHtmlColors = !!i2089[36]
  i2088.m_faceColor = UnityEngine.Color32.ConstructColor(i2089[37], i2089[38], i2089[39], i2089[40])
  i2088.m_fontSize = i2089[41]
  i2088.m_fontSizeBase = i2089[42]
  i2088.m_fontWeight = i2089[43]
  i2088.m_enableAutoSizing = !!i2089[44]
  i2088.m_fontSizeMin = i2089[45]
  i2088.m_fontSizeMax = i2089[46]
  i2088.m_fontStyle = i2089[47]
  i2088.m_HorizontalAlignment = i2089[48]
  i2088.m_VerticalAlignment = i2089[49]
  i2088.m_textAlignment = i2089[50]
  i2088.m_characterSpacing = i2089[51]
  i2088.m_characterHorizontalScale = i2089[52]
  i2088.m_wordSpacing = i2089[53]
  i2088.m_lineSpacing = i2089[54]
  i2088.m_lineSpacingMax = i2089[55]
  i2088.m_paragraphSpacing = i2089[56]
  i2088.m_charWidthMaxAdj = i2089[57]
  i2088.m_TextWrappingMode = i2089[58]
  i2088.m_wordWrappingRatios = i2089[59]
  i2088.m_overflowMode = i2089[60]
  request.r(i2089[61], i2089[62], 0, i2088, 'm_linkedTextComponent')
  request.r(i2089[63], i2089[64], 0, i2088, 'parentLinkedComponent')
  i2088.m_enableKerning = !!i2089[65]
  var i2095 = i2089[66]
  var i2094 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.add(i2095[i + 0]);
  }
  i2088.m_ActiveFontFeatures = i2094
  i2088.m_enableExtraPadding = !!i2089[67]
  i2088.checkPaddingRequired = !!i2089[68]
  i2088.m_isRichText = !!i2089[69]
  i2088.m_parseCtrlCharacters = !!i2089[70]
  i2088.m_isOrthographic = !!i2089[71]
  i2088.m_isCullingEnabled = !!i2089[72]
  i2088.m_horizontalMapping = i2089[73]
  i2088.m_verticalMapping = i2089[74]
  i2088.m_uvLineOffset = i2089[75]
  i2088.m_geometrySortingOrder = i2089[76]
  i2088.m_IsTextObjectScaleStatic = !!i2089[77]
  i2088.m_VertexBufferAutoSizeReduction = !!i2089[78]
  i2088.m_useMaxVisibleDescender = !!i2089[79]
  i2088.m_pageToDisplay = i2089[80]
  i2088.m_margin = new pc.Vec4( i2089[81], i2089[82], i2089[83], i2089[84] )
  i2088.m_isUsingLegacyAnimationComponent = !!i2089[85]
  i2088.m_isVolumetricText = !!i2089[86]
  request.r(i2089[87], i2089[88], 0, i2088, 'm_Material')
  i2088.m_EmojiFallbackSupport = !!i2089[89]
  i2088.m_Maskable = !!i2089[90]
  i2088.m_Color = new pc.Color(i2089[91], i2089[92], i2089[93], i2089[94])
  i2088.m_RaycastTarget = !!i2089[95]
  i2088.m_RaycastPadding = new pc.Vec4( i2089[96], i2089[97], i2089[98], i2089[99] )
  return i2088
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2096 = root || request.c( 'TMPro.VertexGradient' )
  var i2097 = data
  i2096.topLeft = new pc.Color(i2097[0], i2097[1], i2097[2], i2097[3])
  i2096.topRight = new pc.Color(i2097[4], i2097[5], i2097[6], i2097[7])
  i2096.bottomLeft = new pc.Color(i2097[8], i2097[9], i2097[10], i2097[11])
  i2096.bottomRight = new pc.Color(i2097[12], i2097[13], i2097[14], i2097[15])
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2101 = data
  i2100.ambientIntensity = i2101[0]
  i2100.reflectionIntensity = i2101[1]
  i2100.ambientMode = i2101[2]
  i2100.ambientLight = new pc.Color(i2101[3], i2101[4], i2101[5], i2101[6])
  i2100.ambientSkyColor = new pc.Color(i2101[7], i2101[8], i2101[9], i2101[10])
  i2100.ambientGroundColor = new pc.Color(i2101[11], i2101[12], i2101[13], i2101[14])
  i2100.ambientEquatorColor = new pc.Color(i2101[15], i2101[16], i2101[17], i2101[18])
  i2100.fogColor = new pc.Color(i2101[19], i2101[20], i2101[21], i2101[22])
  i2100.fogEndDistance = i2101[23]
  i2100.fogStartDistance = i2101[24]
  i2100.fogDensity = i2101[25]
  i2100.fog = !!i2101[26]
  request.r(i2101[27], i2101[28], 0, i2100, 'skybox')
  i2100.fogMode = i2101[29]
  var i2103 = i2101[30]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2103[i + 0]) );
  }
  i2100.lightmaps = i2102
  i2100.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2101[31], i2100.lightProbes)
  i2100.lightmapsMode = i2101[32]
  i2100.mixedBakeMode = i2101[33]
  i2100.environmentLightingMode = i2101[34]
  i2100.ambientProbe = new pc.SphericalHarmonicsL2(i2101[35])
  i2100.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2101[36])
  i2100.useReferenceAmbientProbe = !!i2101[37]
  request.r(i2101[38], i2101[39], 0, i2100, 'customReflection')
  request.r(i2101[40], i2101[41], 0, i2100, 'defaultReflection')
  i2100.defaultReflectionMode = i2101[42]
  i2100.defaultReflectionResolution = i2101[43]
  i2100.sunLightObjectId = i2101[44]
  i2100.pixelLightCount = i2101[45]
  i2100.defaultReflectionHDR = !!i2101[46]
  i2100.hasLightDataAsset = !!i2101[47]
  i2100.hasManualGenerate = !!i2101[48]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'lightmapColor')
  request.r(i2107[2], i2107[3], 0, i2106, 'lightmapDirection')
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2108 = root || new UnityEngine.LightProbes()
  var i2109 = data
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2117 = data
  i2116.AdditionalLightsPerObjectLimit = i2117[0]
  i2116.AdditionalLightsRenderingMode = i2117[1]
  i2116.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2117[2], i2116.LightRenderingMode)
  i2116.ColorGradingLutSize = i2117[3]
  i2116.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2117[4], i2116.ColorGradingMode)
  i2116.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2117[5], i2116.MainLightRenderingMode)
  i2116.MainLightRenderingModeValue = i2117[6]
  i2116.SupportsMainLightShadows = !!i2117[7]
  i2116.MixedLightingSupported = !!i2117[8]
  i2116.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2117[9], i2116.MsaaQuality)
  i2116.MSAA = i2117[10]
  i2116.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2117[11], i2116.OpaqueDownsampling)
  i2116.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2117[12], i2116.MainLightShadowmapResolution)
  i2116.MainLightShadowmapResolutionValue = i2117[13]
  i2116.SupportsSoftShadows = !!i2117[14]
  i2116.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2117[15], i2116.SoftShadowQuality)
  i2116.SoftShadowQualityValue = i2117[16]
  i2116.ShadowDistance = i2117[17]
  i2116.ShadowCascadeCount = i2117[18]
  i2116.Cascade2Split = i2117[19]
  i2116.Cascade3Split = new pc.Vec2( i2117[20], i2117[21] )
  i2116.Cascade4Split = new pc.Vec3( i2117[22], i2117[23], i2117[24] )
  i2116.CascadeBorder = i2117[25]
  i2116.ShadowDepthBias = i2117[26]
  i2116.ShadowNormalBias = i2117[27]
  i2116.RenderScale = i2117[28]
  i2116.RequireDepthTexture = !!i2117[29]
  i2116.RequireOpaqueTexture = !!i2117[30]
  i2116.SupportsHDR = !!i2117[31]
  i2116.SupportsTerrainHoles = !!i2117[32]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2119 = data
  i2118.Disabled = i2119[0]
  i2118.PerVertex = i2119[1]
  i2118.PerPixel = i2119[2]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2121 = data
  i2120.LowDynamicRange = i2121[0]
  i2120.HighDynamicRange = i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2123 = data
  i2122.Disabled = i2123[0]
  i2122._2x = i2123[1]
  i2122._4x = i2123[2]
  i2122._8x = i2123[3]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2125 = data
  i2124.None = i2125[0]
  i2124._2xBilinear = i2125[1]
  i2124._4xBox = i2125[2]
  i2124._4xBilinear = i2125[3]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2127 = data
  i2126._256 = i2127[0]
  i2126._512 = i2127[1]
  i2126._1024 = i2127[2]
  i2126._2048 = i2127[3]
  i2126._4096 = i2127[4]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2129 = data
  i2128.UsePipelineSettings = i2129[0]
  i2128.Low = i2129[1]
  i2128.Medium = i2129[2]
  i2128.High = i2129[3]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2133[i + 0]));
  }
  i2130.ShaderCompilationErrors = i2132
  i2130.name = i2131[1]
  i2130.guid = i2131[2]
  var i2135 = i2131[3]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( i2135[i + 0] );
  }
  i2130.shaderDefinedKeywords = i2134
  var i2137 = i2131[4]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2137[i + 0]) );
  }
  i2130.passes = i2136
  var i2139 = i2131[5]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2139[i + 0]) );
  }
  i2130.usePasses = i2138
  var i2141 = i2131[6]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2141[i + 0]) );
  }
  i2130.defaultParameterValues = i2140
  request.r(i2131[7], i2131[8], 0, i2130, 'unityFallbackShader')
  i2130.readDepth = !!i2131[9]
  i2130.hasDepthOnlyPass = !!i2131[10]
  i2130.isCreatedByShaderGraph = !!i2131[11]
  i2130.disableBatching = !!i2131[12]
  i2130.compiled = !!i2131[13]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2145 = data
  i2144.shaderName = i2145[0]
  i2144.errorMessage = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2150 = root || new pc.UnityShaderPass()
  var i2151 = data
  i2150.id = i2151[0]
  i2150.subShaderIndex = i2151[1]
  i2150.name = i2151[2]
  i2150.passType = i2151[3]
  i2150.grabPassTextureName = i2151[4]
  i2150.usePass = !!i2151[5]
  i2150.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[6], i2150.zTest)
  i2150.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[7], i2150.zWrite)
  i2150.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[8], i2150.culling)
  i2150.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2151[9], i2150.blending)
  i2150.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2151[10], i2150.alphaBlending)
  i2150.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[11], i2150.colorWriteMask)
  i2150.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[12], i2150.offsetUnits)
  i2150.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[13], i2150.offsetFactor)
  i2150.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[14], i2150.stencilRef)
  i2150.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[15], i2150.stencilReadMask)
  i2150.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[16], i2150.stencilWriteMask)
  i2150.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2151[17], i2150.stencilOp)
  i2150.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2151[18], i2150.stencilOpFront)
  i2150.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2151[19], i2150.stencilOpBack)
  var i2153 = i2151[20]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2153[i + 0]) );
  }
  i2150.tags = i2152
  var i2155 = i2151[21]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( i2155[i + 0] );
  }
  i2150.passDefinedKeywords = i2154
  var i2157 = i2151[22]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2157[i + 0]) );
  }
  i2150.passDefinedKeywordGroups = i2156
  var i2159 = i2151[23]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2159[i + 0]) );
  }
  i2150.variants = i2158
  var i2161 = i2151[24]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2161[i + 0]) );
  }
  i2150.excludedVariants = i2160
  i2150.hasDepthReader = !!i2151[25]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2163 = data
  i2162.val = i2163[0]
  i2162.name = i2163[1]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2165 = data
  i2164.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[0], i2164.src)
  i2164.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[1], i2164.dst)
  i2164.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[2], i2164.op)
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2167 = data
  i2166.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[0], i2166.pass)
  i2166.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[1], i2166.fail)
  i2166.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[2], i2166.zFail)
  i2166.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[3], i2166.comp)
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.value = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2175 = data
  var i2177 = i2175[0]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( i2177[i + 0] );
  }
  i2174.keywords = i2176
  i2174.hasDiscard = !!i2175[1]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2181 = data
  i2180.passId = i2181[0]
  i2180.subShaderIndex = i2181[1]
  var i2183 = i2181[2]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( i2183[i + 0] );
  }
  i2180.keywords = i2182
  i2180.vertexProgram = i2181[3]
  i2180.fragmentProgram = i2181[4]
  i2180.exportedForWebGl2 = !!i2181[5]
  i2180.readDepth = !!i2181[6]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'shader')
  i2186.pass = i2187[2]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.type = i2191[1]
  i2190.value = new pc.Vec4( i2191[2], i2191[3], i2191[4], i2191[5] )
  i2190.textureValue = i2191[6]
  i2190.shaderPropertyFlag = i2191[7]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2193 = data
  i2192.name = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'texture')
  i2192.aabb = i2193[3]
  i2192.vertices = i2193[4]
  i2192.triangles = i2193[5]
  i2192.textureRect = UnityEngine.Rect.MinMaxRect(i2193[6], i2193[7], i2193[8], i2193[9])
  i2192.packedRect = UnityEngine.Rect.MinMaxRect(i2193[10], i2193[11], i2193[12], i2193[13])
  i2192.border = new pc.Vec4( i2193[14], i2193[15], i2193[16], i2193[17] )
  i2192.transparency = i2193[18]
  i2192.bounds = i2193[19]
  i2192.pixelsPerUnit = i2193[20]
  i2192.textureWidth = i2193[21]
  i2192.textureHeight = i2193[22]
  i2192.nativeSize = new pc.Vec2( i2193[23], i2193[24] )
  i2192.pivot = new pc.Vec2( i2193[25], i2193[26] )
  i2192.textureRectOffset = new pc.Vec2( i2193[27], i2193[28] )
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.ascent = i2195[1]
  i2194.originalLineHeight = i2195[2]
  i2194.fontSize = i2195[3]
  var i2197 = i2195[4]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2197[i + 0]) );
  }
  i2194.characterInfo = i2196
  request.r(i2195[5], i2195[6], 0, i2194, 'texture')
  i2194.originalFontSize = i2195[7]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2201 = data
  i2200.index = i2201[0]
  i2200.advance = i2201[1]
  i2200.bearing = i2201[2]
  i2200.glyphWidth = i2201[3]
  i2200.glyphHeight = i2201[4]
  i2200.minX = i2201[5]
  i2200.maxX = i2201[6]
  i2200.minY = i2201[7]
  i2200.maxY = i2201[8]
  i2200.uvBottomLeftX = i2201[9]
  i2200.uvBottomLeftY = i2201[10]
  i2200.uvBottomRightX = i2201[11]
  i2200.uvBottomRightY = i2201[12]
  i2200.uvTopLeftX = i2201[13]
  i2200.uvTopLeftY = i2201[14]
  i2200.uvTopRightX = i2201[15]
  i2200.uvTopRightY = i2201[16]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.bytes64 = i2203[1]
  i2202.data = i2203[2]
  return i2202
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2205 = data
  var i2207 = i2205[0]
  var i2206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 1, i2206, '')
  }
  i2204.components = i2206
  return i2204
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2211 = data
  i2210.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2211[0], i2210.mode)
  i2210.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2211[1], i2210.neutralHDRRangeReductionMode)
  i2210.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2211[2], i2210.acesPreset)
  i2210.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2211[3], i2210.hueShiftAmount)
  i2210.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2211[4], i2210.detectPaperWhite)
  i2210.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2211[5], i2210.paperWhite)
  i2210.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2211[6], i2210.detectBrightnessLimits)
  i2210.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2211[7], i2210.minNits)
  i2210.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2211[8], i2210.maxNits)
  i2210.active = !!i2211[9]
  return i2210
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2213 = data
  i2212.m_Value = i2213[0]
  i2212.m_OverrideState = !!i2213[1]
  return i2212
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2215 = data
  i2214.m_Value = i2215[0]
  i2214.m_OverrideState = !!i2215[1]
  return i2214
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2217 = data
  i2216.m_Value = i2217[0]
  i2216.m_OverrideState = !!i2217[1]
  return i2216
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2219 = data
  i2218.m_Value = i2219[0]
  i2218.m_OverrideState = !!i2219[1]
  return i2218
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2221 = data
  i2220.m_Value = !!i2221[0]
  i2220.m_OverrideState = !!i2221[1]
  return i2220
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2223 = data
  i2222.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2223[0], i2222.skipIterations)
  i2222.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2223[1], i2222.threshold)
  i2222.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2223[2], i2222.intensity)
  i2222.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2223[3], i2222.scatter)
  i2222.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2223[4], i2222.clamp)
  i2222.tint = request.d('UnityEngine.Rendering.ColorParameter', i2223[5], i2222.tint)
  i2222.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2223[6], i2222.highQualityFiltering)
  i2222.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2223[7], i2222.downscale)
  i2222.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2223[8], i2222.maxIterations)
  i2222.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2223[9], i2222.dirtTexture)
  i2222.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2223[10], i2222.dirtIntensity)
  i2222.active = !!i2223[11]
  return i2222
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2225 = data
  i2224.m_Value = i2225[0]
  i2224.m_OverrideState = !!i2225[1]
  return i2224
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2227 = data
  i2226.m_Value = i2227[0]
  i2226.m_OverrideState = !!i2227[1]
  return i2226
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2229 = data
  i2228.m_Value = new pc.Color(i2229[0], i2229[1], i2229[2], i2229[3])
  i2228.m_OverrideState = !!i2229[4]
  return i2228
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2231 = data
  i2230.m_Value = i2231[0]
  i2230.m_OverrideState = !!i2231[1]
  return i2230
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2233 = data
  i2232.dimension = i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'm_Value')
  i2232.m_OverrideState = !!i2233[3]
  return i2232
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i2235 = data
  i2234.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i2235[0], i2234.mode)
  i2234.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i2235[1], i2234.quality)
  i2234.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2235[2], i2234.intensity)
  i2234.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2235[3], i2234.clamp)
  i2234.active = !!i2235[4]
  return i2234
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i2237 = data
  i2236.m_Value = i2237[0]
  i2236.m_OverrideState = !!i2237[1]
  return i2236
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i2239 = data
  i2238.m_Value = i2239[0]
  i2238.m_OverrideState = !!i2239[1]
  return i2238
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2241 = data
  i2240.color = request.d('UnityEngine.Rendering.ColorParameter', i2241[0], i2240.color)
  i2240.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2241[1], i2240.center)
  i2240.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2241[2], i2240.intensity)
  i2240.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2241[3], i2240.smoothness)
  i2240.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2241[4], i2240.rounded)
  i2240.active = !!i2241[5]
  return i2240
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2243 = data
  i2242.m_Value = new pc.Vec2( i2243[0], i2243[1] )
  i2242.m_OverrideState = !!i2243[2]
  return i2242
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i2245 = data
  var i2247 = i2245[0]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('UnityEngine.InputSystem.InputActionMap', i2247[i + 0]) );
  }
  i2244.m_ActionMaps = i2246
  var i2249 = i2245[1]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('UnityEngine.InputSystem.InputControlScheme', i2249[i + 0]) );
  }
  i2244.m_ControlSchemes = i2248
  i2244.m_IsProjectWide = !!i2245[2]
  return i2244
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i2253 = data
  i2252.m_Name = i2253[0]
  i2252.m_Id = i2253[1]
  request.r(i2253[2], i2253[3], 0, i2252, 'm_Asset')
  var i2255 = i2253[4]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('UnityEngine.InputSystem.InputAction', i2255[i + 0]) );
  }
  i2252.m_Actions = i2254
  var i2257 = i2253[5]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('UnityEngine.InputSystem.InputBinding', i2257[i + 0]) );
  }
  i2252.m_Bindings = i2256
  return i2252
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i2261 = data
  i2260.m_Name = i2261[0]
  i2260.m_Type = i2261[1]
  i2260.m_ExpectedControlType = i2261[2]
  i2260.m_Id = i2261[3]
  i2260.m_Processors = i2261[4]
  i2260.m_Interactions = i2261[5]
  var i2263 = i2261[6]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('UnityEngine.InputSystem.InputBinding', i2263[i + 0]) );
  }
  i2260.m_SingletonActionBindings = i2262
  i2260.m_Flags = i2261[7]
  return i2260
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i2267 = data
  i2266.m_Name = i2267[0]
  i2266.m_Id = i2267[1]
  i2266.m_Path = i2267[2]
  i2266.m_Interactions = i2267[3]
  i2266.m_Processors = i2267[4]
  i2266.m_Groups = i2267[5]
  i2266.m_Action = i2267[6]
  i2266.m_Flags = i2267[7]
  return i2266
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i2271 = data
  i2270.m_Name = i2271[0]
  i2270.m_BindingGroup = i2271[1]
  var i2273 = i2271[2]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i2273[i + 0]) );
  }
  i2270.m_DeviceRequirements = i2272
  return i2270
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i2277 = data
  i2276.m_ControlPath = i2277[0]
  i2276.m_Flags = i2277[1]
  return i2276
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'm_Asset')
  i2278.m_ActionId = i2279[2]
  return i2278
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2280 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2281 = data
  i2280.normalStyle = i2281[0]
  i2280.normalSpacingOffset = i2281[1]
  i2280.boldStyle = i2281[2]
  i2280.boldSpacing = i2281[3]
  i2280.italicStyle = i2281[4]
  i2280.tabSize = i2281[5]
  request.r(i2281[6], i2281[7], 0, i2280, 'atlas')
  i2280.m_SourceFontFileGUID = i2281[8]
  i2280.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2281[9], i2280.m_CreationSettings)
  request.r(i2281[10], i2281[11], 0, i2280, 'm_SourceFontFile')
  i2280.m_SourceFontFilePath = i2281[12]
  i2280.m_AtlasPopulationMode = i2281[13]
  i2280.InternalDynamicOS = !!i2281[14]
  var i2283 = i2281[15]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('UnityEngine.TextCore.Glyph', i2283[i + 0]));
  }
  i2280.m_GlyphTable = i2282
  var i2285 = i2281[16]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.add(request.d('TMPro.TMP_Character', i2285[i + 0]));
  }
  i2280.m_CharacterTable = i2284
  var i2287 = i2281[17]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2280.m_AtlasTextures = i2286
  i2280.m_AtlasTextureIndex = i2281[18]
  i2280.m_IsMultiAtlasTexturesEnabled = !!i2281[19]
  i2280.m_GetFontFeatures = !!i2281[20]
  i2280.m_ClearDynamicDataOnBuild = !!i2281[21]
  i2280.m_AtlasWidth = i2281[22]
  i2280.m_AtlasHeight = i2281[23]
  i2280.m_AtlasPadding = i2281[24]
  i2280.m_AtlasRenderMode = i2281[25]
  var i2289 = i2281[26]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(request.d('UnityEngine.TextCore.GlyphRect', i2289[i + 0]));
  }
  i2280.m_UsedGlyphRects = i2288
  var i2291 = i2281[27]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(request.d('UnityEngine.TextCore.GlyphRect', i2291[i + 0]));
  }
  i2280.m_FreeGlyphRects = i2290
  i2280.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2281[28], i2280.m_FontFeatureTable)
  i2280.m_ShouldReimportFontFeatures = !!i2281[29]
  var i2293 = i2281[30]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 1, i2292, '')
  }
  i2280.m_FallbackFontAssetTable = i2292
  var i2295 = i2281[31]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('TMPro.TMP_FontWeightPair', i2295[i + 0]) );
  }
  i2280.m_FontWeightTable = i2294
  var i2297 = i2281[32]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('TMPro.TMP_FontWeightPair', i2297[i + 0]) );
  }
  i2280.fontWeights = i2296
  i2280.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2281[33], i2280.m_fontInfo)
  var i2299 = i2281[34]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.add(request.d('TMPro.TMP_Glyph', i2299[i + 0]));
  }
  i2280.m_glyphInfoList = i2298
  i2280.m_KerningTable = request.d('TMPro.KerningTable', i2281[35], i2280.m_KerningTable)
  var i2301 = i2281[36]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 1, i2300, '')
  }
  i2280.fallbackFontAssets = i2300
  i2280.m_Version = i2281[37]
  i2280.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2281[38], i2280.m_FaceInfo)
  request.r(i2281[39], i2281[40], 0, i2280, 'm_Material')
  return i2280
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2302 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2303 = data
  i2302.sourceFontFileName = i2303[0]
  i2302.sourceFontFileGUID = i2303[1]
  i2302.faceIndex = i2303[2]
  i2302.pointSizeSamplingMode = i2303[3]
  i2302.pointSize = i2303[4]
  i2302.padding = i2303[5]
  i2302.paddingMode = i2303[6]
  i2302.packingMode = i2303[7]
  i2302.atlasWidth = i2303[8]
  i2302.atlasHeight = i2303[9]
  i2302.characterSetSelectionMode = i2303[10]
  i2302.characterSequence = i2303[11]
  i2302.referencedFontAssetGUID = i2303[12]
  i2302.referencedTextAssetGUID = i2303[13]
  i2302.fontStyle = i2303[14]
  i2302.fontStyleModifier = i2303[15]
  i2302.renderMode = i2303[16]
  i2302.includeFontFeatures = !!i2303[17]
  return i2302
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2307 = data
  i2306.m_Index = i2307[0]
  i2306.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2307[1], i2306.m_Metrics)
  i2306.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2307[2], i2306.m_GlyphRect)
  i2306.m_Scale = i2307[3]
  i2306.m_AtlasIndex = i2307[4]
  i2306.m_ClassDefinitionType = i2307[5]
  return i2306
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2309 = data
  i2308.m_Width = i2309[0]
  i2308.m_Height = i2309[1]
  i2308.m_HorizontalBearingX = i2309[2]
  i2308.m_HorizontalBearingY = i2309[3]
  i2308.m_HorizontalAdvance = i2309[4]
  return i2308
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2311 = data
  i2310.m_X = i2311[0]
  i2310.m_Y = i2311[1]
  i2310.m_Width = i2311[2]
  i2310.m_Height = i2311[3]
  return i2310
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2314 = root || request.c( 'TMPro.TMP_Character' )
  var i2315 = data
  i2314.m_ElementType = i2315[0]
  i2314.m_Unicode = i2315[1]
  i2314.m_GlyphIndex = i2315[2]
  i2314.m_Scale = i2315[3]
  return i2314
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2320 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.add(request.d('TMPro.MultipleSubstitutionRecord', i2323[i + 0]));
  }
  i2320.m_MultipleSubstitutionRecords = i2322
  var i2325 = i2321[1]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(request.d('TMPro.LigatureSubstitutionRecord', i2325[i + 0]));
  }
  i2320.m_LigatureSubstitutionRecords = i2324
  var i2327 = i2321[2]
  var i2326 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2327[i + 0]));
  }
  i2320.m_GlyphPairAdjustmentRecords = i2326
  var i2329 = i2321[3]
  var i2328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2329[i + 0]));
  }
  i2320.m_MarkToBaseAdjustmentRecords = i2328
  var i2331 = i2321[4]
  var i2330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2331[i + 0]));
  }
  i2320.m_MarkToMarkAdjustmentRecords = i2330
  return i2320
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2335 = data
  i2334.m_TargetGlyphID = i2335[0]
  i2334.m_SubstituteGlyphIDs = i2335[1]
  return i2334
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2338 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2339 = data
  i2338.m_ComponentGlyphIDs = i2339[0]
  i2338.m_LigatureGlyphID = i2339[1]
  return i2338
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2343 = data
  i2342.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2343[0], i2342.m_FirstAdjustmentRecord)
  i2342.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2343[1], i2342.m_SecondAdjustmentRecord)
  i2342.m_FeatureLookupFlags = i2343[2]
  return i2342
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2345 = data
  i2344.m_GlyphIndex = i2345[0]
  i2344.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2345[1], i2344.m_GlyphValueRecord)
  return i2344
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2347 = data
  i2346.m_XPlacement = i2347[0]
  i2346.m_YPlacement = i2347[1]
  i2346.m_XAdvance = i2347[2]
  i2346.m_YAdvance = i2347[3]
  return i2346
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2350 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2351 = data
  i2350.m_BaseGlyphID = i2351[0]
  i2350.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2351[1], i2350.m_BaseGlyphAnchorPoint)
  i2350.m_MarkGlyphID = i2351[2]
  i2350.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2351[3], i2350.m_MarkPositionAdjustment)
  return i2350
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2354 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2355 = data
  i2354.m_BaseMarkGlyphID = i2355[0]
  i2354.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2355[1], i2354.m_BaseMarkGlyphAnchorPoint)
  i2354.m_CombiningMarkGlyphID = i2355[2]
  i2354.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2355[3], i2354.m_CombiningMarkPositionAdjustment)
  return i2354
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2360 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'regularTypeface')
  request.r(i2361[2], i2361[3], 0, i2360, 'italicTypeface')
  return i2360
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2362 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2363 = data
  i2362.Name = i2363[0]
  i2362.PointSize = i2363[1]
  i2362.Scale = i2363[2]
  i2362.CharacterCount = i2363[3]
  i2362.LineHeight = i2363[4]
  i2362.Baseline = i2363[5]
  i2362.Ascender = i2363[6]
  i2362.CapHeight = i2363[7]
  i2362.Descender = i2363[8]
  i2362.CenterLine = i2363[9]
  i2362.SuperscriptOffset = i2363[10]
  i2362.SubscriptOffset = i2363[11]
  i2362.SubSize = i2363[12]
  i2362.Underline = i2363[13]
  i2362.UnderlineThickness = i2363[14]
  i2362.strikethrough = i2363[15]
  i2362.strikethroughThickness = i2363[16]
  i2362.TabWidth = i2363[17]
  i2362.Padding = i2363[18]
  i2362.AtlasWidth = i2363[19]
  i2362.AtlasHeight = i2363[20]
  return i2362
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2367 = data
  i2366.id = i2367[0]
  i2366.x = i2367[1]
  i2366.y = i2367[2]
  i2366.width = i2367[3]
  i2366.height = i2367[4]
  i2366.xOffset = i2367[5]
  i2366.yOffset = i2367[6]
  i2366.xAdvance = i2367[7]
  i2366.scale = i2367[8]
  return i2366
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2368 = root || request.c( 'TMPro.KerningTable' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.add(request.d('TMPro.KerningPair', i2371[i + 0]));
  }
  i2368.kerningPairs = i2370
  return i2368
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.KerningPair' )
  var i2375 = data
  i2374.xOffset = i2375[0]
  i2374.m_FirstGlyph = i2375[1]
  i2374.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2375[2], i2374.m_FirstGlyphAdjustments)
  i2374.m_SecondGlyph = i2375[3]
  i2374.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2375[4], i2374.m_SecondGlyphAdjustments)
  i2374.m_IgnoreSpacingAdjustments = !!i2375[5]
  return i2374
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2377 = data
  i2376.m_FaceIndex = i2377[0]
  i2376.m_FamilyName = i2377[1]
  i2376.m_StyleName = i2377[2]
  i2376.m_PointSize = i2377[3]
  i2376.m_Scale = i2377[4]
  i2376.m_UnitsPerEM = i2377[5]
  i2376.m_LineHeight = i2377[6]
  i2376.m_AscentLine = i2377[7]
  i2376.m_CapLine = i2377[8]
  i2376.m_MeanLine = i2377[9]
  i2376.m_Baseline = i2377[10]
  i2376.m_DescentLine = i2377[11]
  i2376.m_SuperscriptOffset = i2377[12]
  i2376.m_SuperscriptSize = i2377[13]
  i2376.m_SubscriptOffset = i2377[14]
  i2376.m_SubscriptSize = i2377[15]
  i2376.m_UnderlineOffset = i2377[16]
  i2376.m_UnderlineThickness = i2377[17]
  i2376.m_StrikethroughOffset = i2377[18]
  i2376.m_StrikethroughThickness = i2377[19]
  i2376.m_TabWidth = i2377[20]
  return i2376
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2378 = root || request.c( 'TMPro.TMP_Settings' )
  var i2379 = data
  i2378.assetVersion = i2379[0]
  i2378.m_TextWrappingMode = i2379[1]
  i2378.m_enableKerning = !!i2379[2]
  var i2381 = i2379[3]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.add(i2381[i + 0]);
  }
  i2378.m_ActiveFontFeatures = i2380
  i2378.m_enableExtraPadding = !!i2379[4]
  i2378.m_enableTintAllSprites = !!i2379[5]
  i2378.m_enableParseEscapeCharacters = !!i2379[6]
  i2378.m_EnableRaycastTarget = !!i2379[7]
  i2378.m_GetFontFeaturesAtRuntime = !!i2379[8]
  i2378.m_missingGlyphCharacter = i2379[9]
  i2378.m_ClearDynamicDataOnBuild = !!i2379[10]
  i2378.m_warningsDisabled = !!i2379[11]
  request.r(i2379[12], i2379[13], 0, i2378, 'm_defaultFontAsset')
  i2378.m_defaultFontAssetPath = i2379[14]
  i2378.m_defaultFontSize = i2379[15]
  i2378.m_defaultAutoSizeMinRatio = i2379[16]
  i2378.m_defaultAutoSizeMaxRatio = i2379[17]
  i2378.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2379[18], i2379[19] )
  i2378.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2379[20], i2379[21] )
  i2378.m_autoSizeTextContainer = !!i2379[22]
  i2378.m_IsTextObjectScaleStatic = !!i2379[23]
  var i2383 = i2379[24]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 1, i2382, '')
  }
  i2378.m_fallbackFontAssets = i2382
  i2378.m_matchMaterialPreset = !!i2379[25]
  i2378.m_HideSubTextObjects = !!i2379[26]
  request.r(i2379[27], i2379[28], 0, i2378, 'm_defaultSpriteAsset')
  i2378.m_defaultSpriteAssetPath = i2379[29]
  i2378.m_enableEmojiSupport = !!i2379[30]
  i2378.m_MissingCharacterSpriteUnicode = i2379[31]
  var i2385 = i2379[32]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 1, i2384, '')
  }
  i2378.m_EmojiFallbackTextAssets = i2384
  i2378.m_defaultColorGradientPresetsPath = i2379[33]
  request.r(i2379[34], i2379[35], 0, i2378, 'm_defaultStyleSheet')
  i2378.m_StyleSheetsResourcePath = i2379[36]
  request.r(i2379[37], i2379[38], 0, i2378, 'm_leadingCharacters')
  request.r(i2379[39], i2379[40], 0, i2378, 'm_followingCharacters')
  i2378.m_UseModernHangulLineBreakingRules = !!i2379[41]
  return i2378
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2388 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'spriteSheet')
  var i2391 = i2389[2]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('TMPro.TMP_Sprite', i2391[i + 0]));
  }
  i2388.spriteInfoList = i2390
  var i2393 = i2389[3]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 1, i2392, '')
  }
  i2388.fallbackSpriteAssets = i2392
  var i2395 = i2389[4]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.add(request.d('TMPro.TMP_SpriteCharacter', i2395[i + 0]));
  }
  i2388.m_SpriteCharacterTable = i2394
  var i2397 = i2389[5]
  var i2396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.add(request.d('TMPro.TMP_SpriteGlyph', i2397[i + 0]));
  }
  i2388.m_GlyphTable = i2396
  i2388.m_Version = i2389[6]
  i2388.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2389[7], i2388.m_FaceInfo)
  request.r(i2389[8], i2389[9], 0, i2388, 'm_Material')
  return i2388
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2400 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2401 = data
  i2400.name = i2401[0]
  i2400.hashCode = i2401[1]
  i2400.unicode = i2401[2]
  i2400.pivot = new pc.Vec2( i2401[3], i2401[4] )
  request.r(i2401[5], i2401[6], 0, i2400, 'sprite')
  i2400.id = i2401[7]
  i2400.x = i2401[8]
  i2400.y = i2401[9]
  i2400.width = i2401[10]
  i2400.height = i2401[11]
  i2400.xOffset = i2401[12]
  i2400.yOffset = i2401[13]
  i2400.xAdvance = i2401[14]
  i2400.scale = i2401[15]
  return i2400
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2407 = data
  i2406.m_Name = i2407[0]
  i2406.m_ElementType = i2407[1]
  i2406.m_Unicode = i2407[2]
  i2406.m_GlyphIndex = i2407[3]
  i2406.m_Scale = i2407[4]
  return i2406
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'sprite')
  i2410.m_Index = i2411[2]
  i2410.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2411[3], i2410.m_Metrics)
  i2410.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2411[4], i2410.m_GlyphRect)
  i2410.m_Scale = i2411[5]
  i2410.m_AtlasIndex = i2411[6]
  i2410.m_ClassDefinitionType = i2411[7]
  return i2410
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2412 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2413 = data
  var i2415 = i2413[0]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(request.d('TMPro.TMP_Style', i2415[i + 0]));
  }
  i2412.m_StyleList = i2414
  return i2412
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2418 = root || request.c( 'TMPro.TMP_Style' )
  var i2419 = data
  i2418.m_Name = i2419[0]
  i2418.m_HashCode = i2419[1]
  i2418.m_OpeningDefinition = i2419[2]
  i2418.m_ClosingDefinition = i2419[3]
  i2418.m_OpeningTagArray = i2419[4]
  i2418.m_ClosingTagArray = i2419[5]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2421 = data
  var i2423 = i2421[0]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2423[i + 0]) );
  }
  i2420.files = i2422
  i2420.componentToPrefabIds = i2421[1]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2427 = data
  i2426.path = i2427[0]
  request.r(i2427[1], i2427[2], 0, i2426, 'unityObject')
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2429 = data
  var i2431 = i2429[0]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2431[i + 0]) );
  }
  i2428.scriptsExecutionOrder = i2430
  var i2433 = i2429[1]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2433[i + 0]) );
  }
  i2428.sortingLayers = i2432
  var i2435 = i2429[2]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2435[i + 0]) );
  }
  i2428.cullingLayers = i2434
  i2428.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2429[3], i2428.timeSettings)
  i2428.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2429[4], i2428.physicsSettings)
  i2428.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2429[5], i2428.physics2DSettings)
  i2428.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2429[6], i2428.qualitySettings)
  i2428.enableRealtimeShadows = !!i2429[7]
  i2428.enableAutoInstancing = !!i2429[8]
  i2428.enableStaticBatching = !!i2429[9]
  i2428.enableDynamicBatching = !!i2429[10]
  i2428.lightmapEncodingQuality = i2429[11]
  i2428.desiredColorSpace = i2429[12]
  var i2437 = i2429[13]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( i2437[i + 0] );
  }
  i2428.allTags = i2436
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2441 = data
  i2440.name = i2441[0]
  i2440.value = i2441[1]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2445 = data
  i2444.id = i2445[0]
  i2444.name = i2445[1]
  i2444.value = i2445[2]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2449 = data
  i2448.id = i2449[0]
  i2448.name = i2449[1]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2451 = data
  i2450.fixedDeltaTime = i2451[0]
  i2450.maximumDeltaTime = i2451[1]
  i2450.timeScale = i2451[2]
  i2450.maximumParticleTimestep = i2451[3]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2453 = data
  i2452.gravity = new pc.Vec3( i2453[0], i2453[1], i2453[2] )
  i2452.defaultSolverIterations = i2453[3]
  i2452.bounceThreshold = i2453[4]
  i2452.autoSyncTransforms = !!i2453[5]
  i2452.autoSimulation = !!i2453[6]
  var i2455 = i2453[7]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2455[i + 0]) );
  }
  i2452.collisionMatrix = i2454
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2459 = data
  i2458.enabled = !!i2459[0]
  i2458.layerId = i2459[1]
  i2458.otherLayerId = i2459[2]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'material')
  i2460.gravity = new pc.Vec2( i2461[2], i2461[3] )
  i2460.positionIterations = i2461[4]
  i2460.velocityIterations = i2461[5]
  i2460.velocityThreshold = i2461[6]
  i2460.maxLinearCorrection = i2461[7]
  i2460.maxAngularCorrection = i2461[8]
  i2460.maxTranslationSpeed = i2461[9]
  i2460.maxRotationSpeed = i2461[10]
  i2460.baumgarteScale = i2461[11]
  i2460.baumgarteTOIScale = i2461[12]
  i2460.timeToSleep = i2461[13]
  i2460.linearSleepTolerance = i2461[14]
  i2460.angularSleepTolerance = i2461[15]
  i2460.defaultContactOffset = i2461[16]
  i2460.autoSimulation = !!i2461[17]
  i2460.queriesHitTriggers = !!i2461[18]
  i2460.queriesStartInColliders = !!i2461[19]
  i2460.callbacksOnDisable = !!i2461[20]
  i2460.reuseCollisionCallbacks = !!i2461[21]
  i2460.autoSyncTransforms = !!i2461[22]
  var i2463 = i2461[23]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2463[i + 0]) );
  }
  i2460.collisionMatrix = i2462
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2467 = data
  i2466.enabled = !!i2467[0]
  i2466.layerId = i2467[1]
  i2466.otherLayerId = i2467[2]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2469 = data
  var i2471 = i2469[0]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2471[i + 0]) );
  }
  i2468.qualityLevels = i2470
  var i2473 = i2469[1]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( i2473[i + 0] );
  }
  i2468.names = i2472
  i2468.shadows = i2469[2]
  i2468.anisotropicFiltering = i2469[3]
  i2468.antiAliasing = i2469[4]
  i2468.lodBias = i2469[5]
  i2468.shadowCascades = i2469[6]
  i2468.shadowDistance = i2469[7]
  i2468.shadowmaskMode = i2469[8]
  i2468.shadowProjection = i2469[9]
  i2468.shadowResolution = i2469[10]
  i2468.softParticles = !!i2469[11]
  i2468.softVegetation = !!i2469[12]
  i2468.activeColorSpace = i2469[13]
  i2468.desiredColorSpace = i2469[14]
  i2468.masterTextureLimit = i2469[15]
  i2468.maxQueuedFrames = i2469[16]
  i2468.particleRaycastBudget = i2469[17]
  i2468.pixelLightCount = i2469[18]
  i2468.realtimeReflectionProbes = !!i2469[19]
  i2468.shadowCascade2Split = i2469[20]
  i2468.shadowCascade4Split = new pc.Vec3( i2469[21], i2469[22], i2469[23] )
  i2468.streamingMipmapsActive = !!i2469[24]
  i2468.vSyncCount = i2469[25]
  i2468.asyncUploadBufferSize = i2469[26]
  i2468.asyncUploadTimeSlice = i2469[27]
  i2468.billboardsFaceCameraPosition = !!i2469[28]
  i2468.shadowNearPlaneOffset = i2469[29]
  i2468.streamingMipmapsMemoryBudget = i2469[30]
  i2468.maximumLODLevel = i2469[31]
  i2468.streamingMipmapsAddAllCameras = !!i2469[32]
  i2468.streamingMipmapsMaxLevelReduction = i2469[33]
  i2468.streamingMipmapsRenderersPerFrame = i2469[34]
  i2468.resolutionScalingFixedDPIFactor = i2469[35]
  i2468.streamingMipmapsMaxFileIORequests = i2469[36]
  i2468.currentQualityLevel = i2469[37]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2479 = data
  i2478.weight = i2479[0]
  i2478.vertices = i2479[1]
  i2478.normals = i2479[2]
  i2478.tangents = i2479[3]
  return i2478
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'm_ObjectArgument')
  i2480.m_ObjectArgumentAssemblyTypeName = i2481[2]
  i2480.m_IntArgument = i2481[3]
  i2480.m_FloatArgument = i2481[4]
  i2480.m_StringArgument = i2481[5]
  i2480.m_BoolArgument = !!i2481[6]
  return i2480
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2483 = data
  i2482.m_XCoordinate = i2483[0]
  i2482.m_YCoordinate = i2483[1]
  return i2482
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2485 = data
  i2484.m_XPositionAdjustment = i2485[0]
  i2484.m_YPositionAdjustment = i2485[1]
  return i2484
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2486 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2487 = data
  i2486.xPlacement = i2487[0]
  i2486.yPlacement = i2487[1]
  i2486.xAdvance = i2487[2]
  i2486.yAdvance = i2487[3]
  return i2486
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"enabled":20},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[15],"62":[1],"63":[1],"64":[1],"65":[1],"66":[1],"67":[1],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[15],"83":[7],"84":[85],"86":[85],"31":[30],"87":[88],"89":[15],"90":[91],"24":[23],"92":[31],"93":[30],"94":[15],"17":[15],"19":[18],"95":[30],"96":[7,30],"35":[30,36],"97":[30],"98":[36,30],"99":[7],"100":[36,30],"101":[30],"102":[103],"104":[103],"105":[103],"106":[30],"107":[30],"33":[31],"37":[36,30],"108":[30],"32":[31],"109":[30],"39":[30],"110":[30],"111":[30],"112":[30],"113":[30],"114":[30],"115":[30],"116":[30],"117":[36,30],"118":[30],"119":[30],"120":[30],"121":[30],"122":[36,30],"123":[30],"124":[23],"125":[23],"126":[23],"127":[23],"128":[15],"129":[15]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Obstacle","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.SphereCollider","PlayerController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","InputHandler","GameManager","ObstacleManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Button","TMPro.TMP_FontAsset","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.64f1";

Deserializers.productName = "Playworks";

Deserializers.lunaInitializationTime = "01/07/2026 19:02:05";

Deserializers.lunaDaysRunning = "4.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1656";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3896";

Deserializers.runtimeAnalysisExcludedModules = "reflection, mecanim-wasm";

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

Deserializers.buildID = "f439ed3f-9d8c-4bca-b937-7203a37edc97";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["SingularityGroup","HotReload","PlayerEntrypoint","InitOnAppLoad"],["SingularityGroup","HotReload","CodePatcher","OnSceneLoad"],["SingularityGroup","HotReload","CodePatcher","WarnOnSceneLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["SingularityGroup","HotReload","CodePatcher","InitializeUnityEvents"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

