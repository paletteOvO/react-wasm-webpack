build:
  wasm-pack build --target=web wasm-module
  npx webpack

dev:
  npx react-scripts start dev

clean:
  rm public/*
  cp index.html public/index.html

server:
  npx http-server
