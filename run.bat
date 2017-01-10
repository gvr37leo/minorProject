@echo off

pushd client
start watchify router.js --debug -o bundle.js
popd

pushd server
start node server.js
popd