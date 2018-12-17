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
```

## Desarrollo

### Compilar para desarrollo
```
npm run serve
```

### Compilar para desarrollo directamente en el móvil
```
npm run cordova-serve-android
```

### Compilar y minificar para producción
```
npm run build
```

### Ejecutar tus tests
```
npm run test
```

### Ejecutar el linter
```
npm run lint
```

### Ejecutar tus tests unitarios
```
npm run test:unit
```

### Personalizar configuración
Ver [Referencia de configuración](https://cli.vuejs.org/config/).
