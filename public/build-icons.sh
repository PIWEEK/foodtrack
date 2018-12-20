#!/bin/bash
#
# Creamos la versión en PNG del icono.
#
inkscape -z icon.svg -e icon-512.png

# Creamos la carpeta android (si no existe)
mkdir -p android

#
# Convertimos el icono de 512x512 que acabamos de
# generar en todos los necesarios para Android.
#
convert icon-512.png -resize x36 ./android/icon-36-ldpi.png
convert icon-512.png -resize x48 ./android/icon-48-mdpi.png
convert icon-512.png -resize x72 ./android/icon-72-hdpi.png
convert icon-512.png -resize x96 ./android/icon-96-xhdpi.png
cp ./android/*.png ../cordova/res/icon/android/

#
# Creamos el favicon
#
#convert icon-512.png -resize x16 -gravity center -crop 16x16+0+0 -flatten -colors 256 output-16x16.ico
#convert icon-512.png -resize x32 -gravity center -crop 32x32+0+0 -flatten -colors 256 output-32x32.ico
#convert output-16x16.ico output-32x32.ico favicon.ico
#rm output-16x16.ico
#rm output-32x32.ico
convert icon-512.png -define icon:auto-resize=64,48,32,16 favicon.ico

#
# Creamos los iconos de Apple Touch para web
#
#convert icon-512.png -resize x152 ./apple-touch-icon-152x152.png
#convert icon-512.png -resize x120 ./apple-touch-icon-120x120.png
#convert icon-512.png -resize x76 ./apple-touch-icon-76x76.png
#convert icon-512.png -resize x60 ./apple-touch-icon-60x60.png


