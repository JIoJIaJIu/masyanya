#!/bin/bash
echo "Сборка проекта. Можешь пока пойти выпить чаю"
npm install

./node_modules/bem/bin/bem make -m clean
./node_modules/bem/bin/bem make

node compile.js

mkdir archive
cp -f index.bemjson.js ./appache/js
mv index.bemjson.js ./archive/
cp ./desktop.bundles/index/index.bemhtml.js ./archive
cp -f ./desktop.bundles/index/index.bemhtml.js ./appache/js
cp ./desktop.bundles/index/_index.css ./archive/index.css
cp -f ./desktop.bundles/index/_index.css ./appache/css/index.css
cp -r ./images ./archive
cp -rf ./images ./appache/


cd archive
zip -r archive.zip *
mv archive.zip ../
cd ../

rm -r archive

echo "Сборка прошла успешно всё куль, всем чмоки в этом чате"
