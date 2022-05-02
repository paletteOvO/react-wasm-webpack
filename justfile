build:
  wasm-pack build --target=web wasm-pack-template
  npx webpack

dev:
  npx react-scripts start dev

server:
  npx http-server
