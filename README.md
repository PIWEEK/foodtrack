# FoodTrack

## Instalar y configurar Cordova

### Requisitos

1. \[Java JDK\](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. \[SDK Command Line Tools\](https://developer.android.com/studio/#downloads)
3. \[SDK Platform Tools\](https://developer.android.com/studio/releases/platform-tools)
4. \[Gradle\](https://gradle.org/install/#manually)

Crea una carpeta `Android` en tu home:

```sh
mkdir ~/Android
```

Descomprime todos los archivos descargados en esta carpeta.

Añadir a `.zshrc`:

```sh
export JAVA_HOME="$HOME/Android/jdk1.8.0_191"
export ANDROID_HOME="$HOME/Android"
export PATH="$JAVA_HOME/bin":$PATH
export PATH="$ANDROID_HOME/tools":$PATH
export PATH="$ANDROID_HOME/tools/bin":$PATH
export PATH="$ANDROID_HOME/platform-tools":$PATH
export PATH="$ANDROID_HOME/gradle-5.0/bin":$PATH
```

Una vez que tengas todo esto instalado comprueba que tienes disponibles los comandos `java -v`
, `gradle -v`, `sdkmanager` y `avdmanager`.

Ahora que ya tienes disponibles la JDK y la SDK de Android funcionando, lo siguiente es instalar algunas dependencias necesarias.

```sh
sdkmanager --install 'build-tools;28.0.3'
sdkmanager --install 'system-images;android-28;google_apis;x86_64'
sdkmanager --install emulator
avdmanager create avd --force --name default --abi google_apis/x86_64 --package 'system-images;android-28;google_apis;x86_64' --device 'Nexus 6P'
```

### Instalación

Una vez tengas todo lo anterior instalado, ya podemos instalar `cordova` utilizando `npm`. Tenemos que tener en cuenta que si usamos `nvm` e instalamos `cordova` de forma global, éste sólo estará disponible siempre que estemos usando la misma versión de `node` con la que lo instalamos.

```sh
nvm install 11.4.0
npm i -g cordova
npm i -g @vue/cli
```

Con `cordova` y `@vue/cli` ya instalados y disponibles de forma global podemos crear nuestro proyecto de `cordova` usando:

```sh
cordova create <proyecto> <org.namespace.proyecto>
```

Sin embargo si queremos utilizar `vue` lo más sencillo es optar:

```sh
vue create <proyecto>
vue add cordova
```

Si todo ha salido bien deberíamos tener una carpeta con el nombre `proyecto`. Y podremos ver la aplicación en funcionamiento si ejecutamos:

```sh
cordova run --emulator
```

> IMPORTANTE: En Ubuntu puede que el emulador no funcione correctamente si KVM no está instalado y tiene habilitada la aceleración por hardware.
#### KVM

Si te aparece el siguiente error al ejecutar `cordova run` `--``emulator`:

```sh
emulator: ERROR: x86_64 emulation currently requires hardware acceleration!
Please ensure KVM is properly installed and usable.
CPU acceleration status: This user doesn't have permissions to use KVM (/dev/kvm)
```

Necesitarás verificar si `kvm` está correctamente instalado, para ello ejecuta:

```sh
kvm-ok
```

Si el mensaje de salida es:

```sh
INFO: /dev/kvm exists
KVM acceleration can be used
```

Pero no funciona, entonces necesitarás dar permisos a `/dev/kvm`.

> Es habitual que si se cierra el emulador de forma forzosa se tenga que volver a asociar el usuario. Todavía no tengo muy claro el porqué.

```sh
sudo adduser <user> kvm
sudo chown <user>:<group> -R /dev/kvm
```

Si el mensaje de salida es:

```sh
INFO: Your CPU does not support KVM extensions
KVM acceleration can NOT be used
```

Entonces tendrás que instalar `kvm` usando la siguiente línea:

```sh
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
```

### Emulador

Si consigues ver esta pantalla entonces es que tienes todo correctamente instalado:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A2C8383B154B461607467A0D3A3591A4CB3C40D8EA762A626E36FA2324907600_1544794602546_Captura+de+pantalla+de+2018-12-14+14-36-01.png)

### Guía de resoluciones de móvil

| Nombre    | Resolución |
| --------- | ---------- |
| QVGA      | 320x240    |
| WQVGA:400 | 400x240    |
| WQVGA     | 432x240    |
| HVGA      | 480x320    |
| WVGA:800  | 800x480    |
| WVGA:854  | 854x400    |
| QHD       | 960x540    |
|           | 1024x600   |
|           | 1024x768   |
| HD        | 1280x720   |
|           | 1280x768   |
| WXGA      | 1280x800   |
|           | 1536x1152  |
| FHD       | 1920x1080  |
|           | 1920x1152  |
|           | 2048x1536  |
| WQXGA     | 2560x1600  |
|           | 2560x1536  |


## Instalación

```
npm install
cd cordova
mkdir www
cordova prepare
```

Si recibes un mensaje como el siguiente, normalmente es que te falta la carpeta `www` dentro de la carpeta `cordova`.
```sh
Current working directory is not a Cordova-based project
```

## Desarrollo

### Problemas

Si te da un error al arrancar `npm run cordova-serve-android` parecido a este:

```
/home/aitor/Proyectos/kaleidos/foodtrack/cordova/platforms/android/app/src/main/AndroidManifest.xml:17:9-21:25 Error:
	Missing one of the key attributes 'action#name,category#name' on element intent-filter at AndroidManifest.xml:17:9-21:25
/home/aitor/Proyectos/kaleidos/foodtrack/cordova/platforms/android/app/src/main/AndroidManifest.xml:18:13-65 Error:
	Missing 'name' key attribute on element action at AndroidManifest.xml:18:13-65
/home/aitor/Proyectos/kaleidos/foodtrack/cordova/platforms/android/app/src/main/AndroidManifest.xml:20:13-64 Error:
	Missing 'name' key attribute on element category at AndroidManifest.xml:20:13-64
/home/aitor/Proyectos/kaleidos/foodtrack/cordova/platforms/android/app/src/main/AndroidManifest.xml Error:
	Validation failed, exiting
```

Es tan sencillo como entrar en `cordova/config.xml` y borrar el siguiente trozo:

```xml
<config-file parent="/manifest/application" target="AndroidManifest.xml">
  <intent-filter>
    <action android:name="android.nfc.action.NDEF_DISCOVERED" />
    <category android:name="android.intent.category.DEFAULT" />
    <data android:mimeType="text/foodtrack" />
  </intent-filter>
</config-file>
```

> Esto es lo que se encarga de llamar a nuestra aplicación cuándo el móvil lea una etiqueta NFC con el MIME type 'text/foodtrack' pero todavía no he encontrado la forma de solucionarlo.

### Compilar para desarrollo
```sh
npm run serve
```

### Compilar para desarrollo directamente en el móvil
```sh
npm run cordova-serve-android
```

### Compilar y minificar para producción
```sh
npm run build
```

### Ejecutar tus tests
```sh
npm run test
```

### Ejecutar el linter
```sh
npm run lint
```

### Ejecutar tus tests unitarios
```sh
npm run test:unit
```

### Personalizar configuración
Ver [Referencia de configuración](https://cli.vuejs.org/config/).

## Producción

### Generar un .apk autofirmado

Para generar un `.apk` autofirmado tan sólo tenemos que ejecutar los siguientes comandos:

```sh
npm run cordova-build-android
```

Esto nos generará un archivo en `cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`, este `.apk` necesita ser firmado para poder ser instalado, así que lo siguiente será ejecutar `jarsigner`:

```sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore foodtrack.keystore cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk foodtrack
```

> La contraseña es `testeando`

Si necesitases generar tus propios certificados, puedes hacerlo usando `keytool`:

```sh
keytool -genkey -v -keystore foodtrack.keystore -alias foodtrack -keyalg RSA -keysize 2048 -validity 10000
```

- keystore: indica el nombre del archivo `.keystore` que vamos a generar.
- alias: alias de la keystore.
- keyalg: algoritmo usado para generar la key.
- keysize: tamaño de la key.
- validity: validez en días.

### Instalar un .apk usando adb

Para instalar nuestro recién firmado `.apk` tan sólo debemos conectar el móvil con `adb` (bien a través de TCP o bien a través de USB) y ejecutar:

```sh
adb install cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
```
